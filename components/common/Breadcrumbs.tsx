import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

type Props = {
    paths: {
        name: string;
        path: string;
      }[]
}

const Breadcrumbs = ({ paths }: Props) => {
  return (
    <nav>
    <ul className="flex flex-wrap items-center gap-1.5 py-4 break-words text-sm sm:gap-2.5 text-sub-text text-start">
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
  )
}

export default Breadcrumbs