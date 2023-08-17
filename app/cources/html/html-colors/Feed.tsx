import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Colors</h1>
<p>HTML-д өнгийг урьдчилан тодорхойлсон нэр эсвэл RGB, HEX, HSL, RGBA, HSLA -ийн утгуудыг ашиглан тодорхойлдог.</p>
<h1 className='font-bold text-2xl mt-4'>Өнгийг нэрээр тодорхойлох</h1>
<div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
  <div className='bg-[#00FFFF] p-4 text-black rounded-xl text-center'>Aqua</div>
  <div className='bg-[#00FF00] p-4 text-black rounded-xl text-center'>Lime</div>
  <div className='bg-[#FF4500] p-4 text-black rounded-xl text-center'>OrangeRed</div>
  <div className='bg-[#FFFF00] p-4 text-black rounded-xl text-center'>Yellow</div>
  <div className='bg-[#4169E1] p-4 text-white rounded-xl text-center'>RoyalBlue</div>
  <div className='bg-[#800080] p-4 text-white rounded-xl text-center'>Purple</div>
   <div className='bg-[#FF00FF] p-4 text-black rounded-xl text-center'>Magenta</div>
   <div className='bg-[#708090] p-4 text-white rounded-xl text-center'>SlateGrey</div>

</div>
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
   <iframe src="https://codesandbox.io/embed/trusting-brook-zeif1w?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="trusting-brook-zeif1w"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


            </div>
        
      </section>
      <section>
        <div className="">
        <h1 className="font-bold text-2xl mt-8 mb-4">Дэвсгэр өнгө</h1>
        <p>HTML-ийн элементэд дэвсгэр өнгийг зааж өгч болно.</p>
        <div className="space-y-2">
          <h1 className='p-4 text-center text-xl bg-[#00FF00]'>Энэ бол гарчиг</h1>
          <p className='p-4 text-center bg-[#FF00FF]'>Энэ бол текст</p>
        </div>
        </div>
        <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>

        <iframe src="https://codesandbox.io/embed/jovial-easley-8lqd1x?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="jovial-easley-8lqd1x"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
       
      </section>
      <section>
      <h1 className="font-bold text-2xl mt-8 mb-4">Текстийн өнгө</h1>
      <p>Текстийг хүссэн өнгөөр бичиж болно.</p>
      <h1 className="font-bold text-2xl mt-8 mb-4 text-[#6A5ACD]">Зөвлөгөө</h1>
      <p className='text-pink-500'>Вэб сайт хийх нь сонирхолтой энгийн зүйл. Өдөр бүр бага багаар хичээлээ үзээд, сайтаа хөгжүүл... Нэг л өдөр та хамгийн хүчирхэг сайттай болсон байна</p>
      <p className='text-[#FF6347] mt-4'>HTML, СSS, JAVASCRIPT + Python хамгийн хүчирхэг хуудас бий болно</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/elegant-mccarthy-plffk7?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="elegant-mccarthy-plffk7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</section>
<section>
<h1 className="font-bold text-2xl mt-8 mb-4">Хүрээний өнгө</h1>
<p>HTML-ийн элементийн хүрээнд өнгө зааж өгч болно.</p>

<div className="space-y-4">
<h1 className='outline outline-2 outline-[#6A5ACD] p-4'>Зөвлөгөө</h1>
<p className='outline outline-2 outline-pink-500 p-4'>Вэб сайт хийх нь сонирхолтой энгийн зүйл.</p>
<p className='outline outline-2 outline-[#FF6347] p-4'>HTML, СSS, JAVASCRIPT + Python хамгийн хүчирхэг хуудас бий болно.</p>
</div>

<h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>

<iframe src="https://codesandbox.io/embed/elegant-mccarthy-plffk7?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="elegant-mccarthy-plffk7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>






</section>
<section>
<h1 className="font-bold text-2xl mt-8 mb-4">Хүрээний өнгө</h1>
<p className='mt-4 mb-4'>HTML-д өнгө нь RGB, HEX, HSL, RGBA болон HSLA -н эдгээрийн утгыг ашигладаг.</p>
<p>Жишээ нь &quot;slateblue&quot; өнгний хувьд авч үзвэл:</p>
<div className=" space-y-3">
  <p className='bg-[#6a5acd] p-4'>rgb(106, 90, 205)</p>
  <p className='bg-[#6a5acd] p-4'>#6a5acd</p>
  <p className='bg-[#6a5acd] p-4'>hsl(248, 53%, 58%)</p>
  <p>Өнгийг илүү тунгалга болгож болно. 40% болон 50%-ийн тунгалга болгож үзье.</p>
  <p  className='bg-[#aba3e1] p-4'>rgba(106, 90, 205, 0.4)</p>
  <p className='bg-[#aba3e1] p-4'>hsla(248, 53%, 58%, 0.5)</p>
</div>

<h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
<iframe src="https://codesandbox.io/embed/zealous-black-htv6jw?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="zealous-black-htv6jw"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>





</section>



     
      </div>
  );
}

export default Feed;
