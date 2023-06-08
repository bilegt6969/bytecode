import React from 'react';
import Image from 'next/image';
import founderImage from '../../img/founder.png';

function Page() {
  return (
    <div className="mt-20 mb-4 flex flex-col lg:px-[4rem] md:px-[4rem] sm:px-[3rem] px-[2rem]">
            <h1 className="text-5xl font-bold text-yellow-400 mb-20 mx-auto"><span className='font-mono'>01.</span>About Us</h1>
      <div className="grid lg:grid-cols-2 ">
        <div className="">
        <section>
        <h2 className="text-3xl font-bold mb-4"> <span className='font-mono'>1.1</span> Our Story</h2>
        <div className="text-gray-400 max-w-[30rem] mb-4">
          <p className="">In order to address the aspirations of Mongolian youth who are eager to acquire knowledge in coding and programming, we recognized the significant barrier posed by the lack of English proficiency.</p>
          <p className="mt-4">As a result, many adolescents feel discouraged and give up on their pursuit. Taking these challenges into consideration, we established our organization in May 2023.</p> 
        </div>
      </section>
      <section className="mt-9">
        <h2 className="text-3xl font-bold mb-4"><span className='font-mono'>1.2</span> Our Aim</h2>
        <p className="max-w-[30rem] text-gray-400">We are dedicated to providing exceptional coding knowledge to everyone, without any cost. Our goal is to remove barriers and ensure accessibility to coding education. Join us today and explore a world of coding without financial constraints.</p>
      </section>
    <section className="mt-9">
        <h2 className="text-3xl font-bold mb-4"><span className='font-mono'>1.3</span> Our Aim</h2>
        <p className="max-w-[30rem] text-gray-400">We are dedicated to providing exceptional coding knowledge to everyone, without any cost. Our goal is to remove barriers and ensure accessibility to coding education. Join us today and explore a world of coding without financial constraints.</p>
      </section>

      </div>

      <div className="mt-10">
      <p className='text-2xl font-bold font-sans'>from</p>
      <h1 className='lg:text-8xl md:text-6xl sm:text-6xl text-7xl font-bold font-sans bg-clip-text bg-gradient-to-r from-pink-500 from-20% via-sky-500 via-30% to-emerald-500 to-90% text-transparent inline-block'>2023.05</h1>
      <h1 className='mt-8 lg:text-8xl md:text-6xl sm:text-6xl text-7xl font-bold font-sans bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent inline-block'> For everyone.<br/> By youths.</h1>
      
</div>
      
      
      </div>
      
      <h1 className="text-5xl font-bold text-yellow-400 mb-20 mx-auto mt-8">
        <span className='font-mono'>02.</span>Our Team
      </h1>
      <div className="lg:w-1/4 md:w-1/3 sm:w-1/3 w-1/1">
        <div className="flex flex-col mx-auto items-center">
        <Image src={founderImage} className="w-[20rem] h-auto p-1 rounded-full ring-4 ring-yellow-500 dark:ring-sky-500 " alt="Founder" />
        <h1 className="text-xl font-bold mt-4">Bilegt Amartuvshin</h1>
        <p className="">Founder</p>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Page;
