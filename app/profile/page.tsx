import React from "react";
import { PagesTitle } from "@/components/profilePageComponents";
import { auth } from "@/auth";
import { AccountDetailsForm } from "@/components/profilePageComponents";
import { Session } from "@auth/core/types";

const AccountDetails = async () => {
  const session: Session = await auth() as Session;
  return (
    <div>
      <PagesTitle>Account Details</PagesTitle>
      <AccountDetailsForm user={session?.user} />
    </div>
  );
};

export default AccountDetails;
