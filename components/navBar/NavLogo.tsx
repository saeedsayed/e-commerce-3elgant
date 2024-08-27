import React from 'react'
import Link from 'next/link'
import Logo from '../common/Logo'

const NavLogo = () => {
  return (
    <div className="logo">
    <Link 
    href="/" 
    className="font-medium sm:text-2xl"
    >
      <Logo/>
    </Link>
  </div>
  )
}

export default NavLogo