import React from 'react';
import Image from 'next/image';
import {WobbleCardDemo} from '../components/ui/card/Card1'
import {AppleCardsCarouselDemo} from '../components/ui/carousel/CarouselReal'
import {FlipWordsDemo} from '../components/ui/flip/filp'
import {CardSpotlightDemo} from '../components/ui/SpotCard/spotcards'




function Home() {
  const redirectToHTML = () => {
    window.location.href = 'cources/html/html-introduction';
  };
  const redirectToCSS = () => {
    window.location.href = 'cources/css/css-syntax';
  };
  const redirectToJS = () => {
    window.location.href = 'cources/javascript/js-introduction';
  };
  const redirectToPY = () => {
    window.location.href = 'cources/python/python-home';
  };
  const redirectToCpp = () => {
    window.location.href = 'cources/cpp/cpp-home';
  };
  const redirectToCsharp = () => {
    window.location.href = 'cources/csharp/csharp-home';
  };




  return (
    <div className="text-white flex flex-col justify-center items-center">
      <header className="text-center mt-[0rem]" >
      <Image layout='fill' objectFit='cover' className='z-[-3] brightness-50	 absolute rounded-[3rem] mt-[4rem]' src='/bg.jpg' alt='bg'/>
      <h2 className="lg:max-w-none md:max-w-[40rem] sm:max-w-[40rem] md:text-8xl sm:text-6xl text-7xl font-bold lg:mt-[5rem] md:mt-[15rem] sm:mt-[18rem] mt-[18rem] text-left">
        <FlipWordsDemo/>
</h2>
      <h2 className="text-2xl mt-[-10rem] mb-4 bg-clip-text text-gray-200 lg:max-w-[40rem] md:max-w-[40rem] sm:max-w-[40rem] max-w-[30rem] mx-auto">
      Монгол хүсэл эрмэлзлийг цогцлоох платформ.</h2>
      </header>
      
      <section className="lg:mt-[30rem] md:mt-[30rem] sm:mt-[28rem] mt-[20rem]">
      <WobbleCardDemo/>
      </section>
      <section className="lg:mt-[5rem] md:mt-[30rem] sm:mt-[28rem] mt-[20rem]">
      <h1 className="lg:text-5xl text-3xl lg:text-left md:text-left sm:text-center text-left text-white mb-[6rem] font-sans">
      Яагаад bytecode гэж?
      </h1>
      <p>

      </p>
      <CardSpotlightDemo/>
      </section>
      <section className="lg:mt-[0rem] md:mt-[30rem] sm:mt-[28rem] mt-[20rem]">
      <AppleCardsCarouselDemo/>
      </section>



      <section className="lg:mt-[10rem] md:mt-[30rem] sm:mt-[28rem] mt-[25rem] mx-[2rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-[10rem]">
            <h1 className="lg:text-5xl text-3xl lg:text-left md:text-left sm:text-center text-left font-bold text-white mb-[6rem] font-sans">
              we&apos;re offering:
            </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto items-center justify-center lg:grid-cols-3 gap-6 xl:gap-10">
          
          <div className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-yellow-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]" onClick={redirectToHTML}>
        <a className="font-bold text-2xl mb-4">
          HTML
        </a>
      <p className="font-bold font-sans">
        Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
      </p>
    </div>
          

            
            <div onClick={redirectToCSS} className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-green-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl mb-4">CSS</h1>
              <p className="font-bold font-sans">
                Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.
              </p>
            </div>
            <div onClick={redirectToJS} className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-purple-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl text-white mb-4">JavaScript</h1>
              <p className="text-white font-bold font-sans">
                Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.
              </p>
            </div>
            <div onClick={redirectToPY} className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-red-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl text-white mb-4">Python</h1>
              <p className="text-white font-bold font-sans">
                Learn the basics of Python 3, one of the most powerful, versatile, and in-demand programming languages today.
              </p>
            </div>
            <div onClick={redirectToCpp} className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-pink-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
              <h1 className="font-bold text-2xl mb-4">C++</h1>
              <p className="font-bold font-sans">
                Learn C++ — a versatile programming language that&apos;s important for developing software, games, databases, and more.
              </p>
            </div>
            <div onClick={redirectToCsharp} className="outline mx-auto outline-3 outline-offset-2 outline-[#f6f2d6] bg-orange-500 hover:scale-105 transform transition duration-300 ease-out w-auto h-[302px] rounded-xl max-w-[18rem] min-w-[15rem] pl-4 pt-9 text-[#212121]">
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
