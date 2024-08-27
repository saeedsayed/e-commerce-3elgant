import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

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
      <nav>
        <ul className="flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5 text-sub-text">
          {paths.map((path, index) => (
            <li className="inline-flex items-center gap-1.5" key={path.name}>
              <Link
                className="transition-colors hover:text-text"
                href={path.path}
              >
                {path.name}
              </Link>
              {index !== paths.length - 1 && <IoIosArrowForward />}
            </li>
          ))}
        </ul>
      </nav>
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-xl text-[#121212]">{description}</p>
    </div>
  );
};

export default PageHeader;
