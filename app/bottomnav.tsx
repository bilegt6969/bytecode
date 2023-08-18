'use client'
import React from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'

function Bottomnav() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };


  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className='md:hidden z-[2] sticky top-[65px] w-full border-b border-[#454444]'>
      <div className='z-[2] sticky top-[66px] w-full'>
      <div className="md:hidden">
      <div className="">
      <div className="p-2 backdrop-blur-sm backdrop-saturate-200 w-full bg-black/60">
        <button
          onClick={toggleMenu}
          type="button"
          className="p-1 text-white  hover:text-white focus:outline-none"
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
        <div className="mb-10 top-0 overflow-hidden md:overflow-auto overflow-y-scroll left-0 w-screen h-screen bg-gray-900 bg-opacity-50 backdrop-blur-md ">
          <div className="p-4 text-gray-100">
            <a
                href="../html/html-basic"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Үндсэн ойлголт
              </a>
              <a
                href="../html/html-element"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Element
              </a>
              <a
                href="../html/html-attributes"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Attributes
              </a>
              <a
                href="../html/html-headings"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Headings
              </a>
              <a
                href="../html/html-paragraph"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Paragraph
              </a>
              <a
                href="../html/html-style"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Style
              </a>
              <a
                href="../html/html-text"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Text Formatting
              </a>
              <a
                href="../html/html-quotation"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Quotation
              </a>
              <a
                href="../html/html-comments"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Comments
              </a>
              <a
                href="../html/html-colors"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Colors
              </a>
              <a
                href="../html/html-css"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML CSS
              </a>
              <a
                href="../html/html-anks"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML anks
              </a>
              <a
                href="../html/html-images"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Images
              </a>

              <a
                href="../html/html-class"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Class
              </a>
              <a
                href="../html/html-id"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML id
              </a>
              <a
                href="../html/html-iframe"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Iframe
              </a>
              <a
                href="../html/html-js"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML JavaScript
              </a>
              <a
                href="../html/html-filePath"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML File Paths
              </a>
              <a
                href="../html/html-head"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Head
              </a>
              <a
                href="../html/html-layout"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                HTML Layout
              </a>
              <a
                href="../html/html-responsive"
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
      
  )
}

export default Bottomnav

