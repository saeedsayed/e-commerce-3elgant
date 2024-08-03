import React from 'react'
import Link from 'next/link'

const NavLogo = () => {
  return (
    <div className="logo">
    <Link 
    href="/" 
    className="font-medium sm:text-2xl"
    >
      3elegant.
    </Link>
  </div>
  )
}

export default NavLogo