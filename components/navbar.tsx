import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { ArrowUp01Icon, Download } from '@hugeicons/core-free-icons'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  const navItems = ["Product", "Pricing", "Blog" ,"Tutorials","Help" ];
    return (
      <div className="flex mt-5 justify-between h-22 items-center bg-linear-to-b from-neutral-900 via-neutral-800 to-neutral-700/90 p-4 rounded-full w-5xl mx-auto shadow-lg shadow-black/40 border-none  ">
        <div className="flex items-center">
          <Link href="/" className="flex items-center ">
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              strokeWidth={5}
              className="text-white"
            />
            <h1 className="text-white text-2xl font-bold text-shadow text-shadow-xs text-shadow-white/10  ">screennote.</h1>
          </Link>
        </div>
        <div className="flex items-center text-white gap-12">
          {navItems.map(item=>{
            return <Link href="/" className="relative text-white group ">{item} <span className='absolute bottom-0 left-[50%] translate-x-[-50%] h-0.5 w-0 bg-white  transition-all duration-300 ease-out group-hover:w-full'></span></Link>
          })}
        </div>
        <Button className="px-6 py-6 rounded-full bg-linear-to-b from-orange-700/10 via-orange-700 to-orange-400 shadow-sm shadow-white/40 border-none hover:shadow-2xs transition-all duration-300 ease-out">
          Download{" "}
          <HugeiconsIcon
            icon={Download}
            strokeWidth={2}
            className="text-white"
          />
        </Button>
      </div>
    );
}



const Navbar2 = () => {
  const navItems = ["Home", "About", "Portfolio", "Contact"];

  return (
    <nav className="p-4 bg-white shadow-md">
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item}>
            {/* The 'group' class is essential here to apply hover effects to child elements */}
            <a
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 transition duration-300 ease-in-out group hover:text-blue-600"
            >
              {item}
              {/* The animated underline element */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export {Navbar2, Navbar};

