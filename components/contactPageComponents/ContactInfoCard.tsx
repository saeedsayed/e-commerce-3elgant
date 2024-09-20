import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    title: string;
    description: string;
    icon: IconType
}

const ContactInfoCard = ({ title, description, icon : Icon }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center px-3 md:px-8 py-6 md:py-12 bg-primary'>
        <Icon className='w-12 h-12 mb-4'/>
        <h3 className='md:text-xl text-[#6C7275] font-semibold mb-2'>{title}</h3>
        <p className='font-semibold text-black'>{description}</p>
    </div>
  )
}

export default ContactInfoCard