'use client'
import React, { useEffect, useState } from 'react'
import { IoCameraOutline } from 'react-icons/io5'
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { FileUploader } from 'react-drag-drop-files';
import { postApi } from '@/lib/postApi';
import { putApi } from '@/lib/putApi';
import Image from 'next/image';
import { BiCheck, BiPlus } from 'react-icons/bi';
import { CgClose, CgCloseO } from 'react-icons/cg';


type Props = {
    user: any
}

const ChangeAvatarButton = ({ user }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [newAvatar, setNewAvatar] = useState<File | null>(null)
    const [error, setError] = useState<{ sizeError: string | null, typeError: string | null }>({
        sizeError: null,
        typeError: null
    })
    const { update } = useSession()
    // 
    const handleChangeAvatar = async () => {
        const toastId = toast.loading("Uploading...", { duration: 300000 })
        document.body.style.cursor = 'wait'
        try {
            const data = new FormData()
            data.append('files', newAvatar as File)
            const [err, res] = await postApi('upload', data, [], 'formData')
            await putApi(`accounts/${user.id}`, {
                data: {
                    avatar: res.url
                }
            })
            await update({ ...user })
            toast.success("Avatar Updated")
            window.location.reload()
        } catch (err) {
            toast.error('something wont roang')
        } finally {
            toast.remove(toastId)
            document.body.style.cursor = 'auto'
        }
    }
    useEffect(() => {
        if (error.sizeError || error.typeError) {
            toast.error(error.sizeError || error.typeError)
        }
    }, [error])
    return (
        <>
            {newAvatar && (<Image src={URL.createObjectURL(newAvatar)} fill className='rounded-full' alt="" />)}
            {
                !newAvatar ?
                    // open modal button
                    <button onClick={() => { setIsOpen(true) }} className='
                    absolute top-14 left-12 w-8 h-8 p-1 rounded-full bg-black text-white border-2 flex justify-center items-center'>
                        <IoCameraOutline className="" />
                    </button> :
                    // action buttons
                    <>
                        <button onClick={handleChangeAvatar} className='absolute top-14 -right-6 w-8 h-8 p-1 rounded-full bg-green-600 text-white border-2 flex justify-center items-center'>
                            <BiCheck />
                        </button>
                        <button onClick={_ => setNewAvatar(null)} className='absolute top-14 -left-6 w-8 h-8 p-1 rounded-full bg-red-600 text-white border-2 flex justify-center items-center'>
                            <CgClose />
                        </button>
                    </>
            }
            {/* change avatar modal */}
            {isOpen && (<div onClick={() => setIsOpen(false)} className='
                fixed z-40 w-full h-full flex items-center justify-center inset-0 bg-gray-400 bg-opacity-50 backdrop-blur-sm'>
                {/* modal content */}
                <div onClick={(e) => e.stopPropagation()} className='relative bg-white rounded-md p-6 overflow-hidden'>
                    <h1 className='text-2xl font-bold mb-4 -mx-6 -mt-6 px-6 py-3 bg-primary'>Upload new avatar</h1>
                    <button className='absolute top-4 right-4'><CgCloseO className='w-6 h-6' onClick={() => setIsOpen(false)} /></button>
                    <FileUploader
                        class="h-52 w-full border-red-600"
                        handleChange={(e: File) => { setNewAvatar(e); setIsOpen(false) }}
                        onSizeError={(error: any) => setError({ ...error, sizeError: error })}
                        onTypeError={(error: any) => setError({ ...error, typeError: error })}
                        multiple={false}
                        maxSize={1}
                        name="files"
                        types={["JPG", "PNG", "WEBP", "JPEG"]}>
                        <div
                            className="bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300
                            hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md">
                            <div className="cursor-pointer flex flex-col items-center space-y-2">
                                <BiPlus className='w-16 h-16 text-gray-400' />
                                <span className="text-gray-600">Drag and drop your files here</span>
                                <span className="text-gray-500 text-sm">(or click to select)</span>
                                <span className="text-gray-500 text-sm">PNG, JPG, WEBP, JPEG up to 1MB</span>
                            </div>
                        </div>
                    </FileUploader>
                </div>
            </div>)}

        </>
    )
}

export default ChangeAvatarButton