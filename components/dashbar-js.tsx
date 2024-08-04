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
    <h1 className="text-lg font-bold mb-4 text-white">Java-Script</h1>
    <div className="pl-4 text-[#9ba1a6] cursor-pointer flex flex-col space-y-3">
      <a href="../javascript/js-introduction" className="hover:text-gray-100 transition duration-100 ease-in-out">JS Танилцуулга</a>
      <a href='../javascript/js-where' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Хаана байрлах вэ</a>
      <a href='../javascript/js-output' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Output</a>
      <a href='../javascript/js-statement' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Statement</a>
      <a href='../javascript/js-syntax' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Syntax</a>
      <a href='../javascript/js-comments' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Comments</a>
      <a href='../javascript/js-variables' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Variables</a>
      <a href='../javascript/js-type' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Өгөгдлийн төрөл</a>
      <a href='../javascript/js-function'className="hover:text-gray-100 transition duration-100 ease-in-out">JS Function</a>
      <a href='../javascript/js-objects'className="hover:text-gray-100 transition duration-100 ease-in-out">JS Objects</a>
      <a href='../javascript/js-strings' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Strings</a>
      <a href='../javascript/js-stringmethods' className="hover:text-gray-100 transition duration-100 ease-in-out">JS String Methods</a>
      <a href='../javascript/js-number' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Numbers</a>
      <a href='../javascript/js-numbermethods' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Number methods</a>
      <a href='../javascript/js-array' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Array</a>
      <a href='../javascript/js-sort' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Sort</a>
      <a href='../javascript/js-iteration' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Iteration</a>
      <a href='../javascript/js-dates' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Dates</a>
      <a href='../javascript/js-dateformat' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Date format</a>
      <a href='../javascript/js-getdatemethods' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Get Date Methods</a>
      <a href='../javascript/js-setdatemethods' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Set Date Methods</a>
      <a href='../javascript/js-math' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Математик объект</a>
      <a href='../javascript/js-random' className="hover:text-gray-100 transition duration-100 ease-in-out"> JS Cанамсаргүй тоо</a>
      <a href='../javascript/js-boolean' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Boolean</a>
      <a href='../javascript/js-llll' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Харьцуулах ба Логик оператор</a>
      <a href='../javascript/js-ifelse' className="hover:text-gray-100 transition duration-100 ease-in-out">JS If Else</a>
      <a href='../javascript/js-switch' className="hover:text-gray-100 transition duration-100 ease-in-out">JS switch</a>
      <a href='../javascript/js-for' className="hover:text-gray-100 transition duration-100 ease-in-out">JS For</a>
      <a href='../javascript/js-forin' className="hover:text-gray-100 transition duration-100 ease-in-out">JS For In</a>
      <a href='../javascript/js-forof' className="hover:text-gray-100 transition duration-100 ease-in-out">Js For / Of</a>
      <a href='../javascript/js-whie' className="hover:text-gray-100 transition duration-100 ease-in-out">JS While </a>
      <a href='../javascript/js-break' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Break/Continue</a>
      <a href='../javascript/js-let' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Let</a>
      <a href='../javascript/js-const' className="hover:text-gray-100 transition duration-100 ease-in-out">JS Const</a>



    </div>
    
  </div>
</div>


);
}

export default Dashbar;