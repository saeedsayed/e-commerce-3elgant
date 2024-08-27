"use client";
import Link from "next/link";
import React from "react";
import Input from "./Input";
import { Button } from "../common";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import ButtonProvider from "./ButtonProvider";

type formFields = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  rememberMe: Yup.boolean(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: formFields) => {
    console.log(data);
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
          <p className="font-bold">Forgot Password?</p>
        </div>
        <Button className="w-full mt-6">Sign in</Button>
      </form>
      {/* <ButtonProvider provider="google" /> */}
    </>
  );
};

export default LoginForm;
