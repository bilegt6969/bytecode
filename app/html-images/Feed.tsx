import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Images</h1>

<p className='mt-4'>Зураг нь вэб хуудасны өнгө төрхийг гоё сайхан харагдуулдгаас гадна маш их мэдээлэл өгч чаддаг хүчирхэг хэрэгсэл юм.</p>


      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML image syntax</h1>
      <p>HTML-д зургийг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "img"}} />&gt; tag-д тодорхойлдог. &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "img" }} />&gt; tag-д хаалтын tag байдаггүй. Зургийн байршлыг <span className='text-pink-500'>src</span> атрибутад зааж өгнө.</p>
      <div className="container mx-auto py-8">
  <pre className="bg-white  p-4 rounded-lg">
    <code className="text-blue-600">&lt;img</code> <code className="text-gray-700">src</code><code className="text-gray-700">=</code><code className="text-red-600">"url"</code><code className="text-blue-600">&gt;</code>
  </pre>
</div>

<h1 className="font-bold text-4xl mt-8 mb-4">Alt атрибут</h1>
<p>Вэб хуудсыг хэт удаан ачаалах, эсвэл зурагт ямар нэгэн алдаа гарсан тохиолдолд alt атрибутад зааж өгсөн зурагтай холбоотой текстийг дэлгэцэд харуулна.
Өөрөөр хэлбэл <span className='text-pink-400'>alt</span> атрибутын утга нь зургийг дүрсэлсэн текст байх ёстой.</p>


      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Зурагт ямар нэгэн алдаа гараагүй тохиолдол зөвхөн зураг дэлгэцэд харагдах болно</p>
      <iframe src="https://codesandbox.io/embed/practical-boyd-hzwhvs?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="practical-boyd-hzwhvs"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      </section>
      <section>
      <div className="mt-8">
     
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Алдаа гарвал дараах байдалтай харагдана</p>
      <iframe src="https://codesandbox.io/embed/purple-worker-66gg93?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="purple-worker-66gg93"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
      </section>
      <section>
      <div className="mt-8">





        <h1 className="font-bold text-4xl mt-8 mb-4">Зургийн хэмжээ Өндөр ба Өргөн</h1>
        <p>Зургийн өндөр, өргөнийг тодорхойлохдоо <span className='text-pink-500'>style</span> атрибутыг ашиглаж болно.</p>



      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/distracted-mountain-5j9r3v?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="distracted-mountain-5j9r3v"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>

      <p className='mt-4'>Эсвэл HTML-ийн өөрийн <span className='text-pink-500'>width</span> ба <span className='text-pink-500'>height</span> атрибутыг ашиглаж болно.</p>
      </section>
      

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>

      <iframe src="https://codesandbox.io/embed/quiet-haze-hp4pc5?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
     title="quiet-haze-hp4pc5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <div className="items-center mt-4">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'> Анхаар: <span className='text-pink-500'>width</span> ба <span className='text-pink-500'>height</span> атрибут нь үргэж pixel-ээр тодорхойлогдсон байдаг.






</span>
    </span>
  </p>
</div>
<div className="items-center mt-4">
  <p className="text-xln font-bold bg-sky-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>Тэмдэглэл: Зургийн өргөн, өндрийг зааж өгч байхыг зөвлөж байна. Хэрэв зааж өгөхгүй бол таны хүссэнээс өөр хэмжээтэй дэлгэцэд харагдах болно.
</span>
    </span>
  </p>
</div>
        






          

        <h1 className="font-bold text-4xl mt-8 mb-4">Өргөн, өндөр атрибутыг сонгох уу? Style-г сонгох уу?</h1>
<p><span className='text-pink-500'>width</span>, <span className='text-pink-500'>height</span> болон <span className='text-pink-500'>style</span> атрибутууд нь бүгд HTML-ийн атрибут юм.
Өргөн ба өндрийг <span className='text-pink-500'>style</span> атрибутад зааж өгч байхыг зөвлөж байна. Хэрвээ CSS-ээс зургийн хэмжээг өөрчилөх комманд өгвөл HTML атрибутад зааж өгсөн зургийн хэмжээ хүчингүй болно.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/elegant-oskar-fc4s3d?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="elegant-oskar-fc4s3d"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      
        





          
        <h1 className="font-bold text-4xl mt-8 mb-4">Хөдөлгөөнт зураг</h1>
        <p>HTML хөдөлгөөнт зургийг зөвшөөрдөг.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/quirky-williamson-896jry?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="quirky-williamson-896jry"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
        <h1 className="font-bold text-4xl mt-8 mb-4">Image Floating</h1>
<p>CSS-ийн <span className='text-pink-500'>float</span> шинж чанарыг ашиглан зургийг текстийн баруун эсвэл зүүн тал руу зэрэгцүүлж болно.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
      <iframe src="https://codesandbox.io/embed/weathered-cookies-qwqvhg?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="weathered-cookies-qwqvhg"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <h1 className="font-bold text-4xl mt-8 mb-4">Background-image</h1>
   <p>HTML-д бараг бүх элемент дэвсгэр зураг авдаг.</p>
   <p>HTML нь дэвсгэр зургийг авахдаа CSS-ийн <span className='text-pink-500'>background-image</span> шинж чанарыг ашиглана.</p>
   <h1 className="font-bold text-4xl mt-8 mb-4">Дэвсгэр зургийг HTML элементэд авч үзье</h1>
   <p><span className='text-pink-500'>style</span> атрибутыг ашиглан HTML элементэд дэвсгэр зураг авч үзье.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
      <iframe src="https://codesandbox.io/embed/competent-glade-ll2778?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="competent-glade-ll2778"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      <h1 className="font-bold text-4xl mt-8 mb-4">Background repeat</h1>
      <p>Дэвсгэр зураг нь HTML элементээс жижиг бол зураг хэвтээ болон босоо тэнхлэгт давтдаг.</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/condescending-snowflake-zmz3h9?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="condescending-snowflake-zmz3h9"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <p><span className='text-pink-500'>background-repeat</span> шинж чанарын тусламжтайгаар давталтаас татгалзаж болно.</p>
   <p>      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
</p>
   <iframe src="https://codesandbox.io/embed/shy-glade-9hsr65?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="shy-glade-9hsr65"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
         <h1 className="font-bold text-4xl mt-8 mb-4">Background cover</h1>
         <p>Таны оруулсан дэвсгэр зураг давталт ашиглахгүй HTML элементийг бүхэлд нь хамрахыг хүс байвал <span className='text-pink-500'>background-size</span> шинж чанарт хамрах утгыг зааж өгнө.</p>
         <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
         <iframe src="https://codesandbox.io/embed/broken-shadow-7n9vkj?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="broken-shadow-7n9vkj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
            <h1 className="font-bold text-4xl mt-8 mb-4">Background Stretch</h1>
            <p>Таны оруулсан дэвсгэр зураг элементийг бүхэлд нь давталтгүй хамрах өөр нэг арга бол <span className='text-pink-500'>background-size</span> шинж чанарт хамрах утгыг 100% 100% гэж урт болон өргөнийг зааж өгнө.</p>
            <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
            <iframe src="https://codesandbox.io/embed/friendly-frog-957gvv?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="friendly-frog-957gvv"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

         




   
     
      </div>
      
  );
}

export default Feed;
