import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Css</h1>
<p>CSS - гэдэг нь Cascading Style Sheets гэсэн үгний товчлол юм.</p>
<p>CSS нь HTML-н элементүүдийг дэлгэцэд хэрхэн харагдахыг тодорхойлдог.</p>
<p>CSS нь маш их ажлыг хэмнэж өгдөг. Өөрөөр хэлбэл вэб сайтын маш олон хуудасны загварыг нэг газраас хянах боломжийг олгодог.
</p>
<p>CSS-г HTML-н элементэд гурван аргаар нэмж болно.

</p>
<p className='mt-4'>Inline - Html-н элементэд style атрибутад нэг бүрчлэн бичиж өгөх
</p>

<p className=''>Internal - <span className='text-pink-500'>&lt;head&gt;</span> tag-н элементэд <span className='text-pink-500'>&lt;style&gt;</span> элементийг ашиглаж болно</p>
<p className='mb-4'>External - CSS файл ашиглаж болно.</p>
<p>CSS файлыг HTML-д дуудаж оруулж ирж ашиглах нь хамгийн түгээмэл хэрэглэгддэг арга юм. Гэхдээ бид энэ хичээлээр зөвхөн туршиж үзэх болно.</p>
<div className="items-center mt-4">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>    Хэрэв та CSS-н талаа илүү дэлгэрэнгүй үзэхийг хүсвэл CSS сурцгаая А-Я хичээлийг үзнэ үү
</span>
    </span>
  </p>
</div>
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">Inline Css</h1>
      <p>Inline CSS нь нэг HTML элементэд өвөрмөц хэв маягтай харуулахд ихэвчлэн ашигладаг</p>
      <p className='mt-4'>Inline CSS нь HTML <span className='text-pink-500'>&lt;style&gt;</span>
 атрибутыг ашигладаг

</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mt-4'><span className='text-pink-500'>&lt;h1&gt;</span>
       элементийн текстийн өнгийг улаан болгож үзье

</p>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/condescending-rui-52n4xx?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="condescending-rui-52n4xx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">Internal Css</h1>
      <p>HTML хуудасны хэв маягийг дотоод CSS ашиглан тодорхойлж болно, үүнийг Internal CSS гэдэг.</p>
      <p>Дотоод CSS-ийг HTML хуудасны <span className='text-pink-500'>&lt;head&gt;</span> хэсэгт <span className='text-pink-500'>&lt;style&gt;</span> элементэд тодорхойлж өгнө.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/misty-fast-nddzbk?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="misty-fast-nddzbk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">External 
 Css</h1>
<p>Гадаад CSS нь олон HTML хуудасны загварыг тодорхойлдог бөгөөд ганц CSS файлаас вэб сайтын өнгө төрхийг өөрчилж болно.</p>
<p>Гадаад CSS-г ашиглахын тулд HTML хуудасны <span className='text-pink-500'>&lt;head&gt;</span> хэсэгт холболт хийнэ.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/misty-fast-nddzbk?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="misty-fast-nddzbk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>

      </section>
     
      </div>
  );
}

export default Feed;
