import Link from 'next/link';
import React from 'react';
import ToggleMode from './ToggleMode';

const NavBar = () => {
  return (
    <nav className="flex flex-items-center  justify-center py-4">
      <div className="flex flex-row-reverse w-1/2">
        <div className="flex items-center gap-5 text-xl">
          <Link href="/">Home</Link>
          <Link href="#Experience">About Me</Link>
          <Link href="/#Projects">Projects</Link>
          <ToggleMode />
          </div>
    
      </div>
    </nav>
  )
}

export default NavBar