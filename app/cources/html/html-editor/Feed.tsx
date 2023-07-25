import React from 'react';
import Image from 'next/image';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'


function Feed() {
  return (
    <div className="col-span-5 lg:col-span-4 md:col-span-4 sm:col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Editor</h1>
        <ul className="list-disc mt-4">
          <li>Хамгийн энгийн editor нь windows үйлдэлийн системийн &quot;Notepad&ldquo; юм.</li>
          <li>&quot;Notepad&ldquo; Бичсэн HTML файлаа firstHtml гэсэн нэртэй хадгалаад ажилуулж үзье.</li>
          <li>Notepad дээр нэрийг өгхөд анхны утга нь index.txt байх бөгөөд үүнийг бид index.html гэж хадгална.</li>
          <li>Хадгалсан файл дээрээ 2 дархад таны интернет хөтөч нээгдэж таны бичсэн код ажиллах болно.</li>
        </ul>
      </section>
      <section>
      <div className="mt-8">
    <h1 className='font-bold mt-4 text-3xl'>1-р алхам: Notepad нээх.</h1>
    <Image src="https://www.windows11news.com/wp-content/uploads/2021/10/notepad_icon.png" className='rounded-2xl mt-4 w-auto h-[20rem]' alt="" width={150} height={150} />
    <h1 className='font-bold mt-8 text-3xl'>2-р алхам: код бичэх.</h1>
    <p>доорх кодыг хуулж аваад Notepad -дээр буулгаарай</p>
</div>
      <h1 className="font-bold mt-4 text-2xl">жишээ код:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
          
        <iframe src="https://codesandbox.io/embed/charming-haze-vo1wwo?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="charming-haze-vo1wwo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<h1 className='font-bold mt-8 text-3xl'>3-р алхам: хадгалах.</h1>
<p></p>
<Image src="https://www.w3schools.com/html/img_saveas.png" className='rounded-2xl w-auto mt-4' alt="" width={150} height={150} />
<h1 className='font-bold mt-8 text-3xl mb-4'>4-р алхам: хуудсыг үзэх.</h1>
<iframe src="https://codesandbox.io/embed/charming-haze-vo1wwo?fontsize=14&hidenavigation=1&theme=dark&editorsize=0"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="charming-haze-vo1wwo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>




          
        </div>
      </section>
      


<div className="mt-[5rem]">
<a href='https://code.visualstudio.com/' className='text-xl font-bold rounded-full bg-sky-500 p-3 mt-[4rem] px-auto justify-center items-center'>Visual Studio кодыг татаж авах</a>

</div>



        
        
       
      </div>
  );
}

export default Feed;
