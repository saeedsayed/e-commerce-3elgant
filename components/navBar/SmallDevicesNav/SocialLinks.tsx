import React from 'react'
// icons
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <div className='flex gap-6'>
        <a href="#">
            <FaInstagram className="w-6 h-6" />
        </a>
        <a href="#">
            <RiFacebookCircleLine className="w-6 h-6" />
        </a>
        <a href="#">
            <FiYoutube className="w-6 h-6" />
        </a>
        <Link href={"/profile"}>
        <BsPerson className="w-6 h-6" />
      </Link>
    </div>
  )
}

export default SocialLinks