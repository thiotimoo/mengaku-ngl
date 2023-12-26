import React from 'react'
import Logo from './Logo'
import SignInButton from './SignInButton'

const Navbar = () => {
  return (
    <header className='w-full bg-black border-b-2 border-b-neutral-900'>
        <div className='w-full max-w-screen-xl m-auto px-6 py-2 items-center flex justify-between'>
        <Logo/>
        <SignInButton/>
        </div>
    </header>
  )
}

export default Navbar