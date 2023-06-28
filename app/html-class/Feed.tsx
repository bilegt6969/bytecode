import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Class</h1>
<p>HTML-д класс атрибут нь ижил загвартай элементүүдийн загварыг тодорхойлдог. CSS-д классыг тодорхойлохдоо (.) тэмдэгтийн араас классын нэрийг бичнэ.</p>
<p>Энд нэг ижил загвартай хоёр &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "div"}} />&gt; элементээр жишээ авч үзье.</p>

      </section>
      <section>
    
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/crazy-joji-n357l3?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="crazy-joji-n357l3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      </section>
      <section>
      
      </section>
      <section>
      <div className="mt-8">

        <h1 className="font-bold text-4xl mt-8 mb-4">Inline элементэд класс атрибутын хэрэглээ</h1>
        <p><span className='text-pink-500'>class</span> атрибутыг inline элементэд хэрэглэж болно.</p>



      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/romantic-platform-vs63d2?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="romantic-platform-vs63d2"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
   
        </div>

      </section>
      

  
      

        <h1 className="font-bold text-4xl mt-8 mb-4">Multiple Classes</h1>
        <p>HTML класс нь нэгээс олон утга авч болно. Нэгээс олон утгыг авахдаа классын нэр хооронд хоосон зай авна.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/sad-ride-776rxn?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="sad-ride-776rxn"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <p className='mt-4'>Жишээн дээр h1 нь "zurwas" болон "garchig" класст хаарч байгаа бол h2 нь зөвхөн "zurwas"класст хамаарч байгааг анзаарна уу.</p>
      
        





          
        <h1 className="font-bold text-4xl mt-8 mb-4">Хоёр өөр tag нэг классыг ашиглаж болно</h1>
        <p>HTML хөдөлгөөнт зургийг зөвшөөрдөг.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/objective-kalam-hjmjjh?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="objective-kalam-hjmjjh"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
        <h1 className="font-bold text-4xl mt-8 mb-4">Javascript-д Класс атрибутыг ашиглах</h1>
<p>Классын нэрийг ашиглан Javascript-ийн тодорохой даалгаварыг гүйцэтгэж болно</p>
<p className='mt-4 mb-4'>Классын нэрийг ашиглан Javascript-ийн тодорохой даалгаварыг гүйцэтгэж болно.

</p>
  <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
  <p className='mb-4'>Хэрэглэгч товчлуур дээр дархад "zurwas" гэсэн нэртэй бүх классыг нууж болно.
</p>
      
<iframe src="https://codesandbox.io/embed/cool-tree-97m922?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="cool-tree-97m922"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   

         




   
     
      </div>
      
  );
}

export default Feed;
