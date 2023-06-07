import React from 'react';
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
  const shouldHideDiv = window.location.href === 'http://localhost:3000/';


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
    <div className="border-b border-[#454444] backdrop-blur-sm bg-black/90 sticky top-0">
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
        className={`${isOpen ? 'block' : 'hidden'} fixed sm:flex md:flex lg:flex top-0 left-0 w-full bg-gray-500 shadow-lg`}
      >
        {isOpen && (
          <div className="px-2 pt-[10rem] pb-3 space-y-1">
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
      <div className={` ${isOpen || shouldHideDiv ? 'hidden' : 'block'} `}>
      <div>
      <div className='sticky top-[66px] w-full'>
      <div className="md:hidden">
      <div className="">
      <div className="backdrop-blur-sm backdrop-saturate-200 w-full bg-black/40">
        <button
          onClick={toggleMenu}
          type="button"
          className="p-2 text-white  hover:text-white focus:outline-none"
        >
          {isOpen1 ? (
            <div className='flex items-center gap-1'>
            <ChevronDownIcon className="h-3 w-3" aria-hidden="true" />
            <span>Menu</span>
            </div>          ) : (
            <div className='flex items-center gap-1'>
            <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
            <span>Menu</span>

            </div>
          )}
        </button>
      </div>

      {isOpen1 && (
        <div className=" top-0 overflow-hidden md:overflow-auto  left-0 w-screen h-screen bg-gray-900 bg-opacity-50 backdrop-blur-md ">
          <div className="p-4 text-gray-100">
            <a
                href="../html-basic"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Үндсэн ойлголт
              </a>
              <a
                href="../html-element"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Element
              </a>
              <a
                href="../html-attributes"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Attributes
              </a>
              <a
                href="../html-headings"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Headings
              </a>
              <a
                href="../html-paragraph"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Paragraph
              </a>
              <a
                href="../html-style"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Style
              </a>
              <a
                href="../html-text"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Text Formatting
              </a>
              <a
                href="../html-quotation"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Quotation
              </a>
              <a
                href="../html-comments"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Comments
              </a>
              <a
                href="../html-colors"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Colors
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML CSS
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML anks
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Images
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Tables
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Block
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Class
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML id
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Iframe
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML JavaScript
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML File Paths
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Head
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Layout
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Responsive
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Semantic
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Forms
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML form
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Input Type
              </a>
              <a
                href="../html-"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Submit Button
              </a>          </div>
        </div>
      )}
    </div>
         </div>
    </div>      </div>
    </div>
      
    </div>



      

      

  );
};

export default Navbar;
