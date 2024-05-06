import React from 'react'
import { Link } from 'react-router-dom';
import { Button, TextInput, Navbar,NavbarCollapse,NavbarLink } from "flowbite-react";
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa'

import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <div  className='flex justify-around h-11 items-center'>
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Das's</span>
            Blog
        </Link>
      <form>
        <TextInput type='text' placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray'>
            <FaMoon/>
        </Button>
        <Link to='/signup'>
            <Button gradientDuoTone='purpleToBlue' pill>
                Sign In
            </Button>
        </Link>
      </div>
        <div className="flex gap-2 hidden sm:inline">
            <Link to="/" className='hover:font-semibold'>Home</Link>
            <Link to="/about" className='hover:font-semibold'>About</Link>
            <Link to="/projects" className='hover:font-semibold'>Projects</Link>
        </div>
        <div className="sm:hidden">
          <Dropdown dismissOnClick={false}>
            <Dropdown.Item><Link to="/" className='hover:font-semibold'>Home</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/about" className='hover:font-semibold'>About</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/projects" className='hover:font-semibold'>Projects</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/signup" className='hover:font-semibold'>SignUp</Link></Dropdown.Item>
          </Dropdown>
        </div>
    </div>
  )
}

export default Header
