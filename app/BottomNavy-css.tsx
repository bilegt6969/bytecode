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
                href="../css/css-syntax"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Бичиглэл
              </a>
              <a
                href="../css/css-selector"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Selector
              </a>
              <a
                href="../css/css-html-to-css"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS-г HTML-д хэрхэн нэмэх вэ?
              </a>
              <a
                href="../css/css-comments"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Comments
              </a>
              <a
                href="../css/css-color"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Color
              </a>
              <a
                href="../css/css-bg"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Background
              </a>
              <a
                href="../css/css-border"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Border
              </a>
              <a
                href="../css/css-margins"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Margins
              </a>
              <a
                href="../css/css-padding"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Padding
              </a>
              <a
                href="../css/css-hw"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Heigh and Width
              </a>
              <a
                href="../css/css-bm"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Box-model
              </a>
              <a
                href="../css/css-outline"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Outline
              </a>
              <a
                href="../css/css-text"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Text
              </a>

              <a
                href="../css/css-font"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Font
              </a>
              <a
                href="../css/css-icon"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Icon
              </a>
              <a
                href="../css/css-links"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Links
              </a>
              <a
                href="../css/css-list"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS List
              </a>
              <a
                href="../css/css-display"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Display
              </a>
              <a
                href="../css/css-position"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Position
              </a>
              <a
                href="../css/css-overflow"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Overflow
              </a>
              <a
                href="../css/css-floatandclear"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Float and Clear
              </a>
              <a
                href="../css/css-inlineblock"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Inline block
              </a>
              <a
                href="../css/css-align"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Align
              </a>
              <a
                href="../css/css-cominators"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Combinators
              </a>
              <a
                href="../css/css-psuedo"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Pseudo-class selectors
              </a>
              <a
                href="../css/css-form"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS form
              </a>
              <a
                href="../css/css-opacity"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS Opacity
              </a>  
              <a
                href="../css/css-attributes"
              className="block text-lg font-medium mb-4 hover:underline"
              >
                CSS attributes
              </a>  
                </div>
        </div>
      )}
    </div>
         </div>
    </div>      </div>
      
  )
}

export default Bottomnav

