import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Зохион байгуулалт /Layout/</h1>
      <p className='mb-4'>html-д вэб хуудсыг зохион байгуулдаг үндсэн таван арга байдаг бөгөөд эдгээр нь өөрийн гэсэн давуу болон сул талуудтай байдаг.</p>
      <li>HTML tables</li>
      <li>CSS float</li>
      <li>CSS flexbox</li>
      <li>CSS framework</li>
      <li>CSS grid</li>

      </section>
     
      <section>
      
      </section>
      <section>
      <div className="mt-8">

        <h1 className="font-bold text-4xl mt-8 mb-4">HTML Table</h1>
        <p>Table элементийг ашиглан HTML хуудсыг зохион байгуулж болно. Гэвч тодорхой хугацааны дараа бид вэб хуудсанд жижигхэн өөрчлөлт оруулах, хуудсыг бага багаар сайжруулах хэрэгцээ гардаг бөгөөд энэ үед л table элементээр зохион байгуулсан вэб хуудас маань том асуудал болдог. Жишээ нь таны оруулсан жижигхэн өөрчлөлт HTML хуудсыг бүхэлд нь өөрчлөх, хүсээгүй үр дүнг үзүүлэх, кодыг эвдэх зэрэг том асуудал болон хувирдаг. Иймд table элементийг хүснэгтэн мэдээлэлд ашиглаж байхыг зөвлөж байна.</p>
        <h1 className="font-bold text-4xl mt-8 mb-4">CSS Frameworks</h1>
        <p>HTML хуудасны зохион байгуулалтыг бэлэн framework ашиглаж хурдан хийж болно. HTML, CSS, JavaScript-ийн тусламжтайгаар бид өөрийн гэсэн framework-г хийж чадна.</p>
        <h1 className="font-bold text-4xl mt-8 mb-4"> CSS Floats</h1>
        <p>CSS-ийн Float шинж чанрыг ашиглан HTML хуудасны зохион байгуулалтыг хийх бүрэн боломжтой. CSS-н хичээлээс Float болон Clear шинж чанарыг илүү сайн судлаарай.</p>
        <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <iframe src="https://codesandbox.io/embed/mystifying-bird-pc7xx8?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="mystifying-bird-pc7xx8"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





      
   
   
        </div>

      </section>
      

  
      

        <h1 className="font-bold text-4xl mt-8 mb-4">CSS Flexbox</h1>
        <p>CSS Flexbox нь HTML-хуудсыг зохион байгуулах зорилготой сүүлд CSS3 дээр гарсан шинж чанар юм.</p>
        <p>Бид вэб хуудсыг компьютер, гар утас, таб, ... гэх мэт маш олон төхөөрөмжөөс үздэг болоод удаж байна. Тэгвэл эдгээр асуудлыг шийдвэрлэхээр flexbox шинж чанар хийгдсэн гэж ойлгож болно. flexbox ашиглан ямар төхөөрөмж дээр таны вэб хуудас хэрхэн харагдахыг урьдчилан тооцоолох боломжтой юм. flexbox нь Internet explorer 10 болон түүнээс өмнөх хувилбар дээр ажиллахгүйг анхаарна уу.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/summer-browser-rhsdqk?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="summer-browser-rhsdqk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        <h1 className="font-bold text-4xl mt-8 mb-4">CSS Grid view</h1>
      <p>CSS Grid view нь модульд мөр ба багануудыг агуулсан бөгөөд float шинж чанрыг ашиглах шаардллаггүй зохион байгуулалтын систем юм.</p>
      <p className='mt-4'>CSS Grid view мөн адил сүүлд гарсан модуль учир internet explorer 10 болон Edge 15 өөс өмнөх хувилбарууд дээр ажиллахгүй.</p>
      <p className='mt-4'>Манай санд тун удахгүй орох CSS сурцгаая А-Я хичээлээс үзнэ үү.</p>
      
       
   

         




   
     
      </div>
      
  );
}

export default Feed;
