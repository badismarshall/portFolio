import React from 'react'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className='w-full flex justify-center p-7'>
        <nav>
            <NavItems />
        </nav>
    </header>
  )
}

export default Header