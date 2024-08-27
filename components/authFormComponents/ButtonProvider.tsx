import { signIn } from "@/auth";
import React from "react";
import { Button } from "../common";
import { BsGoogle } from "react-icons/bs";

type Props = {
  provider: "google";
};

const ButtonProvider = ({ provider }: Props) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button
        type="submit"
        className="flex items-center gap-4 w-full justify-center"
      >
        <BsGoogle /> continuo with {provider}
      </Button>
    </form>
  );
};

export default ButtonProvider;
