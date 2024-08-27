"use client";
import Link from "next/link";
import React from "react";
import Input from "./Input";
import { Button } from "../common";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  email: string;
  name: string;
  password: string;
  // confirmPassword: string;
  accept?: boolean;
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
  accept: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    // console.log(data);
    // to do register logic
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
        <Input
          placeholder="Your name"
          id="name"
          register={register}
          err={!!errors.name}
          errMes={errors.name?.message}
        />
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
        {errors.accept && (
          <p className="text-red-500 text-xs mt-2 sm:text-base">
            You must accept the terms
          </p>
        )}
        <Button className="w-full mt-6">Sign in</Button>
      </form>
    </>
  );
};

export default RegisterForm;
