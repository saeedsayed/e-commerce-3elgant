"use client";
import Link from "next/link";
import React, { useState } from "react";
import Input from "./Input";
import { Button, Spinner } from "../common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createAccount from "@/lib/createAccounte";
import bcrypt from 'bcryptjs'
import { login } from "@/lib/actions";
import { registerFormSchema } from "@/utils/schemes";

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  accept?: boolean;
};

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('')
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    document.body.style.cursor = 'wait'
    setError('')
    try {
      const { email, firstName, lastName, userName, password } = data
      const hashPassword = await bcrypt.hash(password, 10)
      const error: any = await createAccount(userName, firstName, lastName, email, '', hashPassword)
      if (error) throw new Error(error)
      await login(email, password)
      window.location.reload()
    } catch (err: any) {
      setError(err.message.replace('Error: ', ''))
    } finally {
      document.body.style.cursor = 'default'
      setLoading(false)
    }
  };
  return (
    <>
      <h1 className="text-4xl font-semibold mb-6">sign up</h1>
      <p className="text-sub-text mb-8">
        Already have an account?
        <Link href="/login" className="text-badge font-bold">
          {' '}Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Your Email address"
          id="email"
          register={register}
          err={!!errors.email}
          errMes={errors.email?.message}
        />
        {/* first and last name */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Your first name"
            id="firstName"
            register={register}
            err={!!errors.firstName}
            errMes={errors.firstName?.message}
          />
          <Input
            placeholder="Your last name"
            id="lastName"
            register={register}
            err={!!errors.lastName}
            errMes={errors.lastName?.message}
          />
        </div>
        {/* user name */}
        <Input
          placeholder="user name"
          id="userName"
          register={register}
          err={!!errors.userName}
          errMes={errors.userName?.message}
        />
        {/* password and confirm password */}
        <Input
          type="password"
          placeholder="Password"
          id="password"
          register={register}
          err={!!errors.password}
          errMes={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="confirm password"
          id="confirmPassword"
          register={register}
          err={!!errors.confirmPassword}
          errMes={errors.confirmPassword?.message}
        />
        {/* accept terms and conditions */}
        <label
          htmlFor="accept"
          className="text-sub-text text-xs sm:text-base flex items-center gap-3 cursor-pointer line-clamp-1"
        >
          <input
            type="checkbox"
            id="accept"
            className={`w-6 h-6`}
            {...register("accept")}
          />
          <span>
            I agree with{" "}
            <span className="text-black font-bold">Privacy Policy</span> and{" "}
            <span className="text-black font-bold">Terms of Use</span>
          </span>
        </label>
        {/* errors for accept */}
        {errors.accept && (
          <p className="text-red-500 text-xs mt-2 sm:text-base">
            {errors?.accept?.message}
          </p>
        )}
        {/* errors for registration */}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {/* sign up button */}
        <Button className="w-full mt-6 flex items-center justify-center gap-2">Sign up {loading ? <Spinner size="5" /> : ''}</Button>
      </form>
    </>
  );
};

export default RegisterForm;
