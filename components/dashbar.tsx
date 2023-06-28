import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
 

function Dashbar() {
return (
  <div className=" col-span-1 mt-8 hidden sm:hidden md:flex lg:flex ">
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
      <a href='../html-css'className="hover:text-gray-100 transition duration-100 ease-in-out">HTML CSS</a>
      <a href='../html-links' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML links</a>
      <a href='../html-images' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Images</a>
      <a href='../html-class' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Class</a>
      <a href='../html-id' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML id</a>
      <a href='../html-iframe' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Iframe</a>
      <a href='../html-js' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML JavaScript</a>
      <a href='../html-filePath' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML File Paths</a>
      <a href='../html-head' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Head</a>
      <a href='../html-layout' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Layout</a>
      <a href='../html-responsive' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Responsive</a>
      <a href='../html-semantic' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Semantic</a>
      <a href='../html-forms' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Forms</a>
      <a href='../html-form' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML form </a>
      <a href='../html-inputType' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Input Type</a>
      <a href='../html-submitButton' className="hover:text-gray-100 transition duration-100 ease-in-out">HTML Submit Button</a>
    </div>
    
  </div>
</div>


);
}

export default Dashbar;