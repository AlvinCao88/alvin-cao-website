import Link from 'next/link';
import React from 'react';
import ToggleMode from './ToggleMode';

const NavBar = () => {
  return (
    <nav className="flex flex-items-center  justify-center py-4">
      <div className="flex flex-row-reverse border w-1/2">
        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="#home">Profile</Link>
          <Link href="/">Setting</Link>
          <ToggleMode />
          </div>
    
      </div>
    </nav>
  )
}

export default NavBar