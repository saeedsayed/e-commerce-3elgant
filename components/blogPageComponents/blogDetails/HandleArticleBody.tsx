import Image from 'next/image'
import React from 'react'



const HandleArticleBody = ({ item }: { item: string }) => {
  const imgUrlReg = /\((https?:\/\/[^\)]+)\)/
  if (item.startsWith('#')) {
    return <h1 className='text-3xl my-5'>{item.slice(2)}</h1>
  } else if (item.startsWith('##')) {
    return <h2>{item.slice(3)}</h2>
  } else if (item.startsWith('###')) {
    return <h3>{item.slice(4)}</h3>
  } else if (item.startsWith('####')) {
    return <h4>{item.slice(5)}</h4>
  } else if (item.startsWith('#####')) {
    return <h5>{item.slice(6)}</h5>
  } else if (item.startsWith('######')) {
    return <h6>{item.slice(7)}</h6>
  } else if (item.startsWith('!')) {
    return (
      <div className='relative w-full md:w-1/2 h-[340px] md:h-[600px] inline-block md:my-10'>
        <Image fill className='py-2 md:py-0 md:px-2' src={item.match(imgUrlReg)?.[1] as string} alt='dddddddddd' />
      </div>
    )
  } else {
    return <p>{item}</p>
  }
}

export default HandleArticleBody