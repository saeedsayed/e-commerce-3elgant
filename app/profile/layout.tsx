import { auth } from "@/auth";
import { ProfileNav } from "@/components/profilePageComponents";
import type { Metadata } from "next";
// import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Profile",
};

const Profile = async ({ children }: Props) => {
  const session = await auth();
  // if (!session?.user) {
  //   redirect("/login");
  // }
  return (
    <div className="container sm:px-0 px-8">
      <h2 className="text-[40px] font-medium sm:text-[54px] text-center mb-10 sm:mb-20">
        My Account
      </h2>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 pb-20">
        <ProfileNav user={session?.user} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Profile;
