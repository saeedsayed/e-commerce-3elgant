import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    title: string;
    description: string;
    icon: IconType
}

const FeatureCard = ({ title, description, icon : Icon }: Props) => {
  return (
    <div className='flex flex-col px-3 md:px-8 py-6 md:py-12 bg-primary w-[calc((100%/4)-1.5rem)] min-w-[142px]'>
        <Icon className='w-12 h-12 mb-4'/>
        <h3 className='text-sm md:text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-xs'>{description}</p>
    </div>
  )
}

export default FeatureCard