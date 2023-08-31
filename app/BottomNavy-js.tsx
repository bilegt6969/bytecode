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
    <div className='md:hidden z-[4] sticky top-[65px] w-full border-b border-[#454444]'>
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
            <div className='flex items-center gap-0'>
            <ChevronDownIcon className="h-3 w-3" aria-hidden="true" />
            <span>Menu</span>
            </div>          ) : (
            <div className='flex items-center gap-0'>
            <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
            <span>Menu</span>

            </div>
          )}
        </button>
      </div>

      {isOpen1 && (
        <div className="mb-[40rem] top-0 overflow-hidden md:overflow-auto overflow-y-scroll left-0 w-screen h-screen bg-gray-900 bg-opacity-50 backdrop-blur-md ">
          <div className="p-4 text-gray-100">
              <a href="../javascript/js-introduction" className="block text-lg font-medium mb-4 hover:underline">JS Танилцуулга</a>
      <a href='../javascript/js-where' className="block text-lg font-medium mb-4 hover:underline">JS Хаана байрлах вэ</a>
      <a href='../javascript/js-output' className="block text-lg font-medium mb-4 hover:underline">JS Output</a>
      <a href='../javascript/js-statement' className="block text-lg font-medium mb-4 hover:underline">JS Statement</a>
      <a href='../javascript/js-syntax' className="block text-lg font-medium mb-4 hover:underline">JS Syntax</a>
      <a href='../javascript/js-comments' className="block text-lg font-medium mb-4 hover:underline">JS Comments</a>
      <a href='../javascript/js-variables' className="block text-lg font-medium mb-4 hover:underline">JS Variables</a>
      <a href='../javascript/js-operators' className="block text-lg font-medium mb-4 hover:underline">JS Operators</a>
      <a href='../javascript/js-padding' className="block text-lg font-medium mb-4 hover:underline">JS Padding </a>
      <a href='../javascript/js-arithmetics' className="block text-lg font-medium mb-4 hover:underline">JS Arithmetics</a>
      <a href='../javascript/js-assignment' className="block text-lg font-medium mb-4 hover:underline">JS Assignment</a>
      <a href='../javascript/js-type' className="block text-lg font-medium mb-4 hover:underline">JS Өгөгдлийн төрөл</a>
      <a href='../javascript/js-function'className="block text-lg font-medium mb-4 hover:underline">JS Function</a>
      <a href='../javascript/js-strings' className="block text-lg font-medium mb-4 hover:underline">JS Strings</a>
      <a href='../javascript/js-stringmethods' className="block text-lg font-medium mb-4 hover:underline">JS String Methods</a>
      <a href='../javascript/js-numbers' className="block text-lg font-medium mb-4 hover:underline">JS Numbers</a>
      <a href='../javascript/js-numbermethods' className="block text-lg font-medium mb-4 hover:underline">JS Number methods</a>
      <a href='../javascript/js-array' className="block text-lg font-medium mb-4 hover:underline">JS Array</a>
      <a href='../javascript/js-sort' className="block text-lg font-medium mb-4 hover:underline">JS Sort</a>
      <a href='../javascript/js-iteration' className="block text-lg font-medium mb-4 hover:underline">JS Iteration</a>
      <a href='../javascript/js-dates' className="block text-lg font-medium mb-4 hover:underline">JS Dates</a>
      <a href='../javascript/js-dateformat' className="block text-lg font-medium mb-4 hover:underline">JS Date format</a>
      <a href='../javascript/js-getdatemethods' className="block text-lg font-medium mb-4 hover:underline">JS Get Date Methods</a>
      <a href='../javascript/js-setdatemethods' className="block text-lg font-medium mb-4 hover:underline">JS Set Date Methods</a>
      <a href='../javascript/js-math' className="block text-lg font-medium mb-4 hover:underline">JS Математик объект</a>
      <a href='../javascript/js-random' className="block text-lg font-medium mb-4 hover:underline"> JS Cанамсаргүй тоо</a>
      <a href='../javascript/js-boolean' className="block text-lg font-medium mb-4 hover:underline">JS Boolean</a>
      <a href='../javascript/js-llll' className="block text-lg font-medium mb-4 hover:underline">JS Харьцуулах ба Логик оператор</a>
      <a href='../javascript/js-ifelse' className="block text-lg font-medium mb-4 hover:underline">JS If Else</a>
      <a href='../javascript/js-switch' className="block text-lg font-medium mb-4 hover:underline">JS switch</a>
      <a href='../javascript/js-for' className="block text-lg font-medium mb-4 hover:underline">JS For</a>
      <a href='../javascript/js-forin' className="block text-lg font-medium mb-4 hover:underline">JS For In</a>
      <a href='../javascript/js-forof' className="block text-lg font-medium mb-4 hover:underline">Js For / Of</a>
      <a href='../javascript/js-whie' className="block text-lg font-medium mb-4 hover:underline">JS While </a>
      <a href='../javascript/js-break' className="block text-lg font-medium mb-4 hover:underline">JS Break/Continue</a>
      <a href='../javascript/js-let' className="block text-lg font-medium mb-4 hover:underline">JS Let</a>
      <a href='../javascript/js-const' className="block text-lg font-medium mb-4 hover:underline">JS Const</a>
                </div>
        </div>
      )}
    </div>
         </div>
    </div>      </div>
      
  )
}

export default Bottomnav

