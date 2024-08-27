import React from "react";
import { Button, Input } from "@/components/common";
import PagesTitle from "@/components/profilePageComponents/PagesTitle";
import { auth } from "@/auth";

const AccountDetails = async () => {
  const session = await auth();
  return (
    <div>
      <PagesTitle>Account Details</PagesTitle>
      <form action="">
        <div className="flex flex-col gap-6">
          <Input
            label="First Name"
            id="firstName"
            required
            // value={session?.user?.firstName as string}
          />
          <Input label="Last Name" id="lastName" required />
          <div>
            <Input label="Display Name" id="displayName" required />
            <p className="font-inter font-normal text-sm text-sub-text mt-3 italic">
              This will be how your name will be displayed in the account
              section and in reviews
            </p>
          </div>
          <Input label="Email" id="email" required />
        </div>
        <h3 className="mt-10 mb-6 font-inter font-semibold text-xl">
          Password
        </h3>
        <div className="flex flex-col gap-6">
          <Input label="Old Password" id="oldPassword" type="password" />
          <Input label="Password" id="password" type="password" />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
          />
        </div>
        <Button className="px-10 py-3 mt-6">Save changes</Button>
      </form>
    </div>
  );
};

export default AccountDetails;
