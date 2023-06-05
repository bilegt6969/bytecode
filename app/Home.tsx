import React from 'react';
import Image from 'next/image';
import img from '../img/img.svg'


function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <header className="text-center mt-[0rem]">
        <Image src={img} className='w-[20rem] h-auto lg:w-[35rem] lg:h-auto md:w-[25rem] md:h-auto' alt={'gg'}/>
        <h2 className="text-2xl font-mono mt-[-5rem] lg:mt-[-10rem] md:mt-[-5rem] mb-4">Learn without limits</h2>
      </header>
      <section className="mt-[20rem] z-[-10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-[10rem]">
          <div className="text-center mb-[10rem]">
            <h1 className="text-7xl font-bold text-white mb-6 font-sans">
              A New Way to Learn
            </h1>
            <p className="text-lg text-gray-400 font-sans">
              CODE.gg is the best platform to help you enhance your skills, expand your knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto items-center justify-center lg:grid-cols-3 gap-6 xl:gap-10">
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-yellow-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <a href="/html-introduction" className="font-bold text-2xl mb-4">
                HTML
              </a>
              <p className="font-bold font-sans">
                Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
              </p>
            </div>
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-green-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl mb-4">CSS</h1>
              <p className="font-bold font-sans">
                Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
              </p>
            </div>
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-purple-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl text-white mb-4">JavaScript</h1>
              <p className="text-white font-bold font-sans">
                Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.
              </p>
            </div>
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-red-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl text-white mb-4">Python</h1>
              <p className="text-white font-bold font-sans">
                Learn the basics of Python 3, one of the most powerful, versatile, and in-demand programming languages today.
              </p>
            </div>
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-pink-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl mb-4">C++</h1>
              <p className="font-bold font-sans">
                Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.
              </p>
            </div>
            <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-orange-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl text-white mb-4">C#</h1>
              <p className="text-white font-bold font-sans">
                Learn the basics of Python 3, one of the most powerful, versatile, and in-demand programming languages today.
              </p>
            </div>
          </div>
          <div className="items-center mb-[-6rem]">
            <Image
              className="w-[30rem] h-[30rem] items-center justify-center mx-auto"
              height={30}
              width={40}
              src={'https://ui.dev/images/illuminated.svg'}
              alt={'sb'}
            />
            <div className="max-w-[30rem] items-center mx-auto justify-center">
              <h2 className="text-3xl font-bold text-[#f4f8df] mb-4 font-sans">
                Many kids have the ambition to learn coding, but often give up due to their lack of English proficiency.
              </h2>
              <p className="text-3xl font-bold text-[#f4f8df] font-sans mb-1">
                However, in this new era, we offer coding lessons taught in Mongolian for 6 different programming languages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
