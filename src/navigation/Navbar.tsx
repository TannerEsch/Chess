import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <>
    <nav className='bg-darkModeUI fixed w-[8%] h-screen flex flex-col items-center justify-between py-2'>
        <ul className='text-gray-300 flex flex-col gap-4 font-bold text-xl'>
            <NavLink to="/" className='mb-5 cursor-pointer'>logo</NavLink>
            <NavLink to="/play" className='cursor-pointer'>Play</NavLink>
            <li>Puzzles</li>
            <li>Learn</li>
            <li>Watch</li>
            <li>Social</li>   
        </ul>

        <ul className='text-gray-300 flex flex-col gap-2 font-bold text-lg'>
            <li>Light mode</li>
            <li>Collapse</li>
            <li>Settings</li>
            <li>Help</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar