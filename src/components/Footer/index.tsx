import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='text-xl text-body text-center w-full p-6  flex flex-col max-w-screen-lg mx-auto'>
            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <h3>
                ✨ Created by <Link className='font-bold bg-blue-300 text-black px-1' href="https://github.com/thiotimoo">@thiotimoo</Link>
            </h3>
            <Link className='font-semibold px-1 underline' href="https://github.com/thiotimoo/mengaku-ngl">Github repository</Link>
        </div>
    )
}

export default Footer