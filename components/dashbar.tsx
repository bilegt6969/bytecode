import React from 'react';
import { Roboto } from 'next/font/google';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'

 

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
 

function Dashbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };

return (
  
  <div className="sticky z-[-1] top-0 overflow-y-scroll ">
    
    

    <div className="col-span-1 mt-8 hidden sm:hidden md:flex lg:flex  ">
  <div className={roboto.className}>
    <h1 className="text-lg font-bold mb-4 text-white">HTML tutorial</h1>
    <div className="pl-4 text-[#9ba1a6] cursor-pointer flex flex-col space-y-3">
      <a href="../html-introduction" className="hover:text-gray-100 transition duration-100 ease-in-out active:text-red-500 active:bg-violet-700 focus:text-red-500">HTML Introduction</a>
      <a href='../html-editor' className="hover:text-gray-100 transition duration-100 ease-in-out active:active:bg-violet-700 focus:text-red-500">HTML Editor</a>
      <a href='../html-basic' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Үндсэн ойлголт</a>
      <a href='../html-element' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Element</a>
      <a href='../html-attributes' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Attributes</a>
      <a href='../html-headings' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Headings</a>
      <a href='../html-paragraph' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Paragraph</a>
      <a href='../html-style' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Style</a>
      <a href='../html-text' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Text Formatting </a>
      <a href='../html-quotation' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Quotation </a>
      <a href='../html-comments' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Comments</a>
      <a href='../html-colors' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Colors</a>
      <a href='../html-'className="hover:text-gray-100 transition duration-100 ease-in-out">HTML CSS</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML anks</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Images</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Tables</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Block</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Class</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML id</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Iframe</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML JavaScript</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML File Paths</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Head</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Layout</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Responsive</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Semantic</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Forms</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML form </a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Input Type</a>
      <a href='../html-' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Submit Button</a>
    </div>
    </div>

</div>
</div>



);
}

export default Dashbar;