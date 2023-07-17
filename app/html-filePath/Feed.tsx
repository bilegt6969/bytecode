import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { CopyBlock,dracula } from "react-code-blocks";
import React from 'react';


function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section className=''>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Файлын байршил /File Paths/</h1>
      <p className='mt-4'>JavaScript нь HTML-г динамик, интерактив болгодог.</p>
      <p className='mt-4'><span className='text-pink-500'>script</span> нь клиент талын хэл бөгөөд HTML-д &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "script" }} />&gt; tag-д тодорхойлогдоно.</p>
      <p className='mt-4'>Эсвэл бид <span className='text-pink-500'>src</span> атрибутыг ашиглан гадна байрлах нь скрипт файлыг ашиглаж болно.</p>
      <p className='mt-4'>HTML элементийг сонгохын тулд JavaScript нь ихэвчилэн <span className='text-pink-500'> <code>document.getElementById()</code> </span>  функцийг ашигладаг.</p>

      </section>
      <section>
    
      
      
      
      </section>
    
      

  
      

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>test гэсэн id-тай элементэд &quot; Энэ бол JavaScript &quot; текстийг бичиж үзье.</p>
      <iframe src="https://codesandbox.io/embed/stoic-bash-r64wc2?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="stoic-bash-r64wc2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

        





          
        <h1 className="font-bold text-4xl mt-8 mb-4">JavaScript-ийн боломжоос сонирхвол</h1>
        <p>JavaScript юу хийж чаддаг вэ? Товчхон жишээнээс үзье.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML-ийн контентыг өөрчилж чадна</h1>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/crazy-sara-shgg6c?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="crazy-sara-shgg6c"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
        <h1 className="font-bold text-4xl mt-8 mb-4">HTML-элементийн загварыг өөрчилж чадна</h1>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/compassionate-water-hckn6p?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="compassionate-water-hckn6p"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        
   

         




   
     
      </div>
      </div>

      
  );
}

export default Feed;
