'use client'
import React from 'react'
import { profileFormSchema } from '@/utils/schemes'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from '@/components/common';
import toast from 'react-hot-toast';
import { putApi } from '@/lib/putApi';
import { useSession } from 'next-auth/react';
import { Session } from '@auth/core/types';


type Props = {
    user: Session['user']
}

const AccountDetailsForm = ({ user }: Props) => {
    const { update } = useSession()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(profileFormSchema),
        defaultValues: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            userName: user?.userName
        }
    })
    // handle submit change
    const onSubmit = async (data: {
        firstName: string;
        lastName: string;
        userName: string;
    }) => {
        if (data.firstName.trim() === user?.firstName &&
            data.lastName.trim() === user?.lastName &&
            data.userName.trim() === user?.userName) {
            toast.error("Nothing to update")
            return
        }
        const toastId = toast.loading("Updating...")
        // api call
        const [err, res] = await putApi(`accounts/${user?.id}`, {
            data
        })

        if (err) {
            toast.remove(toastId)
            toast.error("Something went wrong")
            return
        }
        // update session
        await update({ ...user })
        toast.remove(toastId)
        toast.success("Updated successfully")
    }
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                    <Input
                        label="First Name"
                        id="firstName"
                        required
                        register={register}
                        err={!!errors.firstName}
                        errMes={errors?.firstName?.message as string}
                    />
                    <Input
                        label="Last Name"
                        id="lastName"
                        required
                        register={register}
                        err={!!errors.lastName}
                        errMes={errors?.lastName?.message as string}
                    />
                    <div>
                        <Input label="Display Name"
                            id="userName"
                            required
                            register={register}
                            err={!!errors.userName}
                            errMes={errors?.userName?.message as string}
                        />
                        <p className="font-inter font-normal text-sm text-sub-text mt-3 italic">
                            This will be how your name will be displayed in the account
                            section and in reviews
                        </p>
                    </div>
                    <Input label="Email" id="email" required disabled value={user?.email}/>
                </div>
                <h3 className="mt-10 mb-6 font-inter font-semibold text-xl">
                    Password
                </h3>
                <div className="flex flex-col gap-6">
                    <Input label="Old Password" id="oldPassword" type="password" disabled />
                    <Input label="Password" id="password" type="password" disabled />
                    <Input
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        disabled />
                </div>
                <Button className="px-10 py-3 mt-6">Save changes</Button>
            </form>
        </>
    )
}

export default AccountDetailsForm