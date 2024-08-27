"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  type?: string;
  placeholder: string;
  id: string;
  register: any;
  err?: boolean;
  errMes?: string;
};

const Input = ({
  type = "text",
  placeholder,
  id,
  register,
  err,
  errMes,
  ...rest
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {err && <label className="text-sm block py-2 text-red-500">{errMes}</label>}
    <div className="relative">
      <input
        type={type === "password" ? (isShow ? "text" : "password") : type}
        className={`w-full border-b bg-transparent pb-3 focus:outline-none mb-8 ${
          !!err && "border-red-500"
        }`}
        placeholder={placeholder}
        id={id}
        {...register(id)}
        {...rest}
        />
      {type == "password" && (
        <button
        onClick={(_) => setIsShow((p) => !p)}
        type="button"
        className="absolute right-3 top-1 p-2"
        >
          {isShow ? <FiEye /> : <FiEyeOff />}
        </button>
      )}
    </div>
      </>
  );
};

export default Input;
