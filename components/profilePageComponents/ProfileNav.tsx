"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoCameraOutline } from "react-icons/io5";
import { PROFILE_LINKS } from "@/constants/index";
import Image from "next/image";
import { Button } from "../common";
import { signOut, useSession } from "next-auth/react";
import type { User } from "next-auth";

type Props = {
  user: User;
};


const ProfileNav = ({user}: Props) => {
  const currentPath = usePathname();
  const router = useRouter();
  return (
    <div className="bg-primary px-4 py-10 h-fit">
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-2 w-20 h-20">
          <Image
            src={user?.image as string}
            alt="user avatar"
            fill
            className="rounded-full"
          />
          <button>
            <IoCameraOutline className="absolute top-14 left-12 w-8 h-8 p-1 rounded-full bg-black text-white border-2" />
          </button>
        </div>
        <h2 className="text-xl font-semibold">{user?.name}</h2>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex flex-col gap-3 w-56">
          {PROFILE_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`${
                  currentPath === link.path
                    ? "text-text border-b border-b-black"
                    : "text-sub-text"
                } py-2 block`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Button
              className="text-sub-text py-2 w-full"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
      {/* small devices nav */}
      <select
        className="sm:hidden border-2 border-sub-text  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
      w-full p-2 "
        onChange={(e) => router.push(e.target.value)}
        value={currentPath}
      >
        {PROFILE_LINKS.map((link) => (
          <option key={link.name} value={link.path}>
            {link.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileNav;
