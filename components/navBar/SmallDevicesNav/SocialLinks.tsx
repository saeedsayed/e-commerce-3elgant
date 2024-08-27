import React from 'react'
import { SOCIAL_LINKS } from '@/constants';

const SocialLinks = () => {
  return (
    <div className='flex gap-6'>
      {SOCIAL_LINKS.map(({name, path, icon: Icon}) => (
        
        <a href="#" title={name} key={name}>
            <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks