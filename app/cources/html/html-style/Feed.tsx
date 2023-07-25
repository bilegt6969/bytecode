import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className=" mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Style</h1>
      <p className='mb-4'>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "style" }} />&gt; атрибутад HTML-ийн загварыг тодорхойлж өгдөг.</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "style" }} />&gt;  атрибутын бичиглэл буюу syntax нь дараах байдалтай байна.</p>
      <p className='mt-8'>HTML-ийн &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "style" }} />&gt;  атрибутад бичигдэж байгаа property болон value нь бүгд CSS-д хамаарах бөгөөд энэхүү хичээл дээр товчхон авч үзэх болно.</p>
      <div className="items-center">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>CSS-ийн хичээлээс илүү дэлгэрэнгүй гүн судлах болно.</span>
    </span>
  </p>
</div>

    
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">Дэвсгэр өнгө</h1>
      <p className='mt-4 mb-8'>CSS-д дэвсгэр өнгө нь <span className='text-pink-500'>background-color</span> шинж чанарт тодорхойлогддог бөгөөд HTML элементийн арын өнгийг зааж өгнө.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/crazy-microservice-whpqh0?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="crazy-microservice-whpqh0"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


          
        </div>
        
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">Текстын өнгө</h1>
      <p className='mt-4 mb-8'>CSS-д текстийн өнгө нь <span className='text-pink-500'>color</span> шинж чанарт тодорхойлогддог бөгөөд HTML элементийн текстийн өнгийг зааж өгнө.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/wonderful-dewdney-rtzxqs?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="wonderful-dewdney-rtzxqs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


          
        </div>
        
      </section>
      <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML фонт</h1>
          <p className='mb-4'>CSS-д үсгийн фонтыг нь  <span className='text-pink-500'>font-family</span> шинж чанарт тодорхойлогддог бөгөөд HTML элементийн үсгийн фонтыг зааж өгнө.</p>
          <iframe src="https://codesandbox.io/embed/happy-wozniak-k75f2u?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="happy-wozniak-k75f2u"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
          
        </div>
        </section>
        <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">Текстийн хэмжээ</h1>
          <p className='mb-4'>CSS-д текстийн хэмжээг <span className='text-pink-500'>font-size</span> шинж чанарт тодорхойлогддог бөгөөд HTML элементийн текстийн хэмжээг зааж өгнө.</p>
          <iframe src="https://codesandbox.io/embed/dry-firefly-px30il?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="dry-firefly-px30il"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">Текстийн хэмжээ</h1>
          <p className='mb-4'>CSS-д текстийг зэрэгцүүлэхэд  <span className='text-pink-500'>text-align</span> шинж чанарт тодорхойлогддог бөгөөд HTML элементийн текстийг хэвтээ шугамын дагуу тодорхойлно.</p>
          <iframe src="https://codesandbox.io/embed/sad-cdn-3gzqwi?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="sad-cdn-3gzqwi"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      </div>
  );
}

export default Feed;
