import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars2Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Logo from '../img/logo.svg'
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';

function bottomnav() {
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleMenu = () => {
      setIsOpen1(!isOpen1);
    };
  
    const sidebarVariants = {
      hidden: {
        y: '-100%',
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          type: 'spring',
          damping: 25,
          stiffness: 500,
        },
      },
    };
  
    const overlayVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Add state for submenu
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleSubmenu = () => { // Add toggleSubmenu function
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
    </div>
  )
}

export default bottomnav
