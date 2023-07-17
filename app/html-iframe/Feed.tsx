import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { CopyBlock,dracula } from "react-code-blocks";
import React from 'react';


function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Iframe</h1>
      <p>Iframe нь вэб хуудсанд өөр вэб хуудсыг харуулна.</p>
      <iframe className='mt-4 w-full h-[40rem] border border-white rounded-xl' src="https://bytecode-smoky.vercel.app/" frameBorder="200"></iframe>

      </section>
      <section>
    
      
      
      
      </section>
      <section>

        <h1 className="font-bold text-4xl mt-8 mb-4">Iframe Бичиглэл /Syntax/</h1>
        <p className='mb-4'>HTML нь iframe-г iframe &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "iframe" }} />&gt;tag-д тодорхойлдог.</p>

      <CopyBlock
      text="<iframe src='URL'></iframe>
      "
      language='html'
      showLineNumbers='true'
      wrapLines
      theme={dracula}
    />
            <p className='mt-4 mb-4'><span className='text-pink-500'>src</span> атрибутад вэб хуудасны холбоос хаягийг зааж өгнө.</p>




      
      </section>
      

  
      

        <h1 className="font-bold text-4xl mt-8 mb-4">Iframe Өндөр ба Өргөн</h1>
        <p>Iframe-д өндөр ба өргөнийг <span className='text-pink-500'>height</span> болон <span className='text-pink-500'>width</span>th атрибутад зааж өгнө.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Өргөн ба Өндрийн анхны утга нь цэг буюу пиксел байна</p>
      <iframe src="https://codesandbox.io/embed/tender-ioana-6kgtpl?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="tender-ioana-6kgtpl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
<p className='mt-4'>Эсвэл өндөр ба өргөнийг CSS-ийн style атрибутад зааж өгнө.</p>      
<h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Өргөн ба Өндрийн анхны утга нь цэг буюу пиксел байна</p>
      <iframe src="https://codesandbox.io/embed/quirky-thunder-n4qjfq?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="quirky-thunder-n4qjfq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        





          
        <h1 className="font-bold text-4xl mt-8 mb-4">Iframe-н Хүрээг арилгах /Remove the Border/</h1>
        <p>Iframe-н анхдаг утга нь border буюу хүрээтэй байдаг бөгөөд хүрээг CSS-н <span className='text-pink-500'>border</span> шинж чанараар арилгах буюу өөрчилж болно.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Хүрээг арилгаж үзье.</p>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/nervous-elgamal-kwdrzr?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="nervous-elgamal-kwdrzr"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
        <p className='mt-4'>Хүрээг өөрчилж үзье</p>

  <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
  <iframe src="https://codesandbox.io/embed/hardcore-gates-hcs8lq?fontsize=14&hidenavigation=1&theme=dark&ediitorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="hardcore-gates-hcs8lq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


    <h1 className="font-bold text-4xl mt-8 mb-4">Iframe - Target for a Link</h1>
    <p>Iframe нь холбоосыг ачаалж чадна.</p>
    <p className='mt-4 mb-4'>Ингэхийн тулд &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "a" }} />&gt; tag-н <span className='text-pink-500'>target</span> атрибутад <span className='text-pink-500'>iframe</span>-н name атрибутын утгыг зааж өгнө.

</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Хүрээг арилгаж үзье.</p>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/sad-ully-3kyfln?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="sad-ully-3kyfln"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
   

         




   
     
      </div>
      
  );
}

export default Feed;
