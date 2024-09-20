"use client"
import React, { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface IInputProps {
  label?: string;
  id: string;
  type?: string;
  register?: any;
  err?: boolean;
  errMes?: string | undefined;
  required?: boolean;
}

const Input = ({ label, id, type, register, err, errMes, required, ...rest }: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="relative flex-1 [&:has(:disabled)]:opacity-40">
      {
        label && <label
          className="inline-block font-bold text-sm mb-2 first-letter:capitalize text-sub-text"
          htmlFor={id}
        >
          {label} {required && "*"} <span className="text-[#df1b41] font-bold">{errMes}</span>
        </label>
      }
      <div className="relative">
        {!!register ? <input
          className={`border border-[#CBCBCB] relative focus:border-sub-text  bg-section-bg border-secondary focus:outline-none
            text-primary-text rounded-md  py-2 px-4 w-full ${!!err && "!border-[#df1b41]"
            }`}
          placeholder={label}
          id={id}
          type={isShow ? "text" : type}
          {...register(id)}
          {...rest}
        /> : <input
          className={`border border-[#CBCBCB] relative focus:border-sub-text  bg-section-bg border-secondary focus:outline-none
          text-primary-text rounded-md  py-2 px-4 w-full ${!!err && "!border-[#df1b41]"
            }`}
          placeholder={label}
          id={id}
          type={isShow ? "text" : type}
          {...rest}
        />}

        {type == "password" && (
          <button
            onClick={(_) => setIsShow((p) => !p)}
            type="button"
            className={`absolute right-3 top-1/2 p-2 -translate-y-1/2`}
          >
            {isShow ? <FiEye /> : <FiEyeOff />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input