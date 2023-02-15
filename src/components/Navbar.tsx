import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import logo from '../assets/logo.svg';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 h-[10vh] ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 ">
              <img className="p-2 md:w-48 w-28" src={logo} alt="Logo" />
            </a>
            <button
              className="text-white cursor-pointer text-xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiMenuAlt3 />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto font-bold">
              <li className="nav-item hover:text-mint-green hover:scale-125 ">
                <a className="px-3 py-2 flex items-center hover:cursor-pointer leading-snug">
                  <span className="ml-2">About Me</span>
                </a>
              </li>
              <li className="nav-item hover:text-mint-green hover:scale-125 ">
                <a className="px-3 py-2 flex items-center hover:cursor-pointer leading-snug">
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item hover:text-mint-green hover:scale-125 ">
                <a className="px-3 py-2 flex items-center hover:cursor-pointer leading-snug">
                  <span className="ml-2">Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
