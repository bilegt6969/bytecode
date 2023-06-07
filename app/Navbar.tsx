import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars2Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Logo from '../img/logo.svg'
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const xIconVariants = {
    closed: { rotate: -45 },
    open: { rotate: 0 },
  };

  return (
    <div className="z-[90000] sticky border-b border-[#454444] top-0">
      <div className="backdrop-blur-sm bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#454444]">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Fragment>
              <a href="./">
                <Image src={Logo} alt="Logo" className="w-[130px] h-auto" />
              </a>
            </Fragment>
          </div>
          <div className="hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                Нүүр
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium"
              >
                Бидний тухай
              </a>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button className="flex items-center space-x-1 px-3 py-2 rounded-md focus:outline-none">
                      <span className="text-sm font-medium">Хичээлүүд</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </Popover.Button>

                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel className="absolute z-10 w-48 p-2 mt-2 bg-white rounded-md shadow-lg outline outline-black ring-offset-1 outline-1">
                        <div className="flex flex-col space-y-2">
                          <a
                            href="/html-introduction"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            Html
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            Css
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            JavaScript
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            Python
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            C++
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-yellow-500 rounded-md"
                          >
                            C#
                          </a>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a
                href="#"
                className="text-gray-200 hover:text-gray-400 transition px-3 py-2 whitespace-nowrap rounded-md text-sm font-medium"
              >
                Холбоо барих
              </a>
            </div>
          </div>
          <div className="items-center hidden sm:ml-6 sm:hidden lg:flex sm:items-center">
            <button className="bg-white px-5 py-3 text-black text-sm font-medium rounded-xl hover:bg-yellow-400 whitespace-nowrap transition">
              Яг одоо эхлэх
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:flex md:flex lg:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <motion.span
                className="h-6 w-6 z-50"
                variants={isOpen ? xIconVariants : menuIconVariants}
                animate={isOpen ? 'open' : 'closed'}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </motion.span>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? '100vh' : 0 }}
        transition={{ duration: 0 }}
        className={`${isOpen ? 'block' : 'hidden'} fixed sm:flex md:flex lg:flex top-0 left-0 w-full bg-[#161617] shadow-lg`}
      >
        {isOpen && (
          <div className="px-9 pt-[10rem] pb-3 space-y-1">
            <a
              href="./"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl font-medium"
            >
              Нүүр
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl font-medium"
            >
              Бидний тухай
            </a>
            <div className="flex items-center" onClick={toggleSubmenu}>
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl font-medium"
              >
                Хичээлүүд
              </a>
              <ChevronRightIcon className="w-8 h-8" />
            </div>
            {isSubmenuOpen && (
              <div className="pl-6">
                <a
                  href="/html-introduction"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  Html
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  Css
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  JavaScript
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  Python
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  C++
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-2xl text-white font-medium hover:bg-yellow-500 rounded-md"
                >
                  C#
                </a>
              </div>
            )}
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-3xl font-medium"
            >
              Холбоо барих
            </a>
            {/* Add more navigation links as needed */}
          </div>
        )}
      </motion.div>
      </div>
      
    </div>
      



      

      

  );
};

export default Navbar;
