import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className=" mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Headings</h1>
      <p>HTML нь гарчгийг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h1" }} />&gt; ээс &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h6" }} />&gt; зургаан tag-д тодорохойлдог бөгөөд &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h1" }} />&gt;-г хамгийн чухал ач холбогдолтой гэж үздэг бөгөөд хамгийн том нь бадаг бол &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h6" }} />&gt;-г хамгийн бага ач холбогдолтой буюу хамгийн жижиг гарчиг гэж үздэг.</p>
    
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
          
        <iframe src="https://codesandbox.io/embed/quiet-sun-wmez75?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="quiet-sun-wmez75"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
<div className="items-center">
  <p className="text-xl font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>    HTML хуудсанд гарчиг байх газарт л гарчгийг ашиглана уу. Харин ямар нэгэн текстийг тод эсвэл том харуулахын тулд &lt;<span className='' dangerouslySetInnerHTML={{ __html: "/h1" }} />&gt;-ээс &lt;<span className='' dangerouslySetInnerHTML={{ __html: "/h6" }} />&gt; tag-ийг ашиглахгүй байхыг зөвлөж байна.
</span>
    </span>
  </p>
</div>

          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">Илүү том гарчиг</h1>

          <p>Гарчиг бүр нь өөрийн үндсэн хэмжээтэй байдаг. Гэхдээ санаа зоволтгүй бид <span className='text-pink-500'>style</span>  атрибутын <span className='text-pink-500'>font-size</span> шинж чанарыг ашиглан гарчгийг хүссэн хэмжээгээрэй өөрчилж болно.</p>
          <iframe src="https://codesandbox.io/embed/nice-fast-i44zy1?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
     title="nice-fast-i44zy1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Horizontal Rules</h1>
          <p className='mb-4'>&lt;<span dangerouslySetInnerHTML={{ __html: "hr" }} />&gt; элемент нь HTML хуудасны контентын хувааж бүлэглэн харуулахад ашигладаг.</p>
          <iframe src="https://codesandbox.io/embed/distracted-neumann-bdniez?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="distracted-neumann-bdniez"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
        </section>
      </div>
  );
}

export default Feed;
