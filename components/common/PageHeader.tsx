import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Breadcrumbs from "./Breadcrumbs";

type Props = {
  bg: string;
  title: string;
  description: string;
  paths: {
    name: string;
    path: string;
  }[];
};

const PageHeader = ({ bg, title, description, paths }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-center gap-6"
    >
      {/* breadcrumbs */}
      <Breadcrumbs paths={paths} />
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-xl text-[#121212]">{description}</p>
    </div>
  );
};

export default PageHeader;
