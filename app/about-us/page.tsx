import React from 'react';
import Image from 'next/image';
import bilegt from '../../img/founder.png';

function Page() {
  return (
    <div className="mt-20 mb-4 flex flex-col">
      <h1 className="text-5xl font-bold text-yellow-400 mb-20 mx-auto"><span className='font-mono'>01.</span>About Us</h1>
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
      <h1 className="text-5xl font-bold text-yellow-400 mb-20">
        <span className='font-mono'>02.</span>Our team</h1>
      <div className="flex flex-col">
        <div className="mb-4 flex flex-col justify-center items-center">
          <Image src={bilegt} className="w-[20rem] h-auto" alt="" />
          <h1 className="text-xl font-bold">Bilegt Amartuvshin</h1>
          <p>Founder</p>


        </div>
      </div>
    </div>
  );
}

export default Page;
