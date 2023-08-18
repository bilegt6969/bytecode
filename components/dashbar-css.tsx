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
    <h1 className="text-lg font-bold mb-4 text-white">CSS tutorial</h1>
    <div className="pl-4 text-[#9ba1a6] cursor-pointer flex flex-col space-y-3">
      <a href="../css/css-syntax" className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Бичиглэл</a>
      <a href='../css/css-selector' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Selector</a>
      <a href='../css/css-html-to-css' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS-г HTML-д хэрхэн нэмэх вэ?</a>
      <a href='../css/css-comments' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Comments</a>
      <a href='../css/css-color' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Color</a>
      <a href='../css/css-bg' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Background</a>
      <a href='../css/css-border' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Border</a>
      <a href='../css/css-margins' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Margins</a>
      <a href='../css/css-padding' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Padding </a>
      <a href='../css/css-hw' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Height and Width </a>
      <a href='../css/css-bm' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Box-model</a>
      <a href='../css/css-outline' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Outline</a>
      <a href='../css/css-text'className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Text</a>
      <a href='../css/css-font' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Font</a>
      <a href='../css/css-icon' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Icon</a>
      <a href='../css/css-links' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Links</a>
      <a href='../css/css-list' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS List</a>
      <a href='../css/css-display' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Display</a>
      <a href='../css/css-position' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Position</a>
      <a href='../css/css-overflow' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Overflow</a>
      <a href='../css/css-floatandclear' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Float and Clear</a>
      <a href='../css/css-inlineblock' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Inline-block</a>
      <a href='../css/css-align' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Align</a>
      <a href='../css/css-combinators' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Combinators</a>
      <a href='../css/css-psuedo' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Pseudo-class selectors</a>
      <a href='../css/css-form' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS form </a>
      <a href='../css/css-opacity' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS Opacity</a>
      <a href='../css/css-attributes' className="hover:text-gray-100 transition duration-100 ease-in-out">CSS attributes</a>

    </div>
    
  </div>
</div>


);
}

export default Dashbar;