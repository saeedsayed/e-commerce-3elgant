import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface IHeroCardProps{
  size: string;
  data: {title:string,thumbnail:string};
}

const HeroCard = ({size, data}:IHeroCardProps) => {
  return (
    <div className={`flex gap-12 ${size === 'lg' ? 'flex-col' : 'flex-row'} flex-1 bg-[#F3F5F7] p-8 md:p-12`}>
        <div>
            <h3 className='text-2xl md:text-[34px]'>{data.title}</h3>
            <a href="#" className='border-b border-b-black inline-flex text-sm md:text-base items-center gap-2'>Shop Now <FaArrowRight/></a>
        </div>
        <div className='min-w-[100px]'>
        <img src={data.thumbnail} alt=""/>
        </div>
    </div>
  )
}

export default HeroCard