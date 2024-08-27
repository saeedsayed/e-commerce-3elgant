import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  href: string;
  children: React.ReactNode;
};

const ArrowLink = ({ href, children }: Props) => {
  return (
    <Link
      href={href}
      className="text-sub-text inline-flex items-center gap-2 border-b-2 [&:hover_.arrow]:translate-x-1 [&:hover]:text-blue-500"
    >
      {children} <FaArrowRight className="arrow transition-all" />
    </Link>
  );
};

export default ArrowLink;
