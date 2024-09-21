"use client";
import Link from "next/link";
import React, { useState } from "react";
import Input from "./Input";
import { Button, Spinner } from "../common";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/lib/actions";
import { loginFormSchema } from "@/utils/schemes";

type formFields = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const [isLOggingIn, setLoggingIn] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const onSubmit = async (data: formFields) => {
    setLoggingIn(true)
    setError("")
    try {
      const { email, password } = data
      const res = await login(email, password);
      if (res === "success") {
        window.location.reload()
      }
      if (res === "Invalid credentials") {
        throw new Error("password or email is incorrect")
      }
    } catch (err: any) {
      setError(err.message.replace('Error: ', '') as string)
    } finally {
      setLoggingIn(false)
    }
  };

  return (
    <>
      <h1 className="text-4xl font-semibold mb-6">sign in</h1>
      <p className="text-sub-text mb-8">
        Don't have an account yet?
        <Link href="/register" className="text-badge">
          {' '}Register
        </Link>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Your Email address"
          id="email"
          err={!!errors.email}
          errMes={errors.email?.message}
          register={register}
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          err={!!errors.password}
          errMes={errors.password?.message}
          register={register}
        />
        <div className="flex justify-between">
          <label
            htmlFor="rememberMe"
            className="text-sub-text flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              id="rememberMe"
              {...register("rememberMe")}
              className="w-6 h-6"
            />
            Remember me
          </label>
          <p className="font-bold cursor-not-allowed">Forgot Password?</p>
        </div>
        {error && <p className="text-red-500 mt-2 select-none">{error}</p>}
        <Button className="w-full mt-6 flex items-center justify-center gap-2">Sign in {isLOggingIn ? <Spinner size="5" /> : ''}</Button>
      </form>
      {/* <ButtonProvider provider="google" /> */}
    </>
  );
};

export default LoginForm;
