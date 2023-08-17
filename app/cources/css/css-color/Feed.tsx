import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Өнгө /Color/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS-д өнгийг урьдчилан тодорхойлсон нэр эсвэл RGB, HEX, HSL, RGBA, HSLA -ийн утгуудыг ашиглан тодорхойлдог.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Өнгийг нэрээр тодорхойлох</h3>
    <p className="mb-4 mt-4">Өнгийг нэрээр тодорхойлж болно.</p>

    <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
    <p className="mb-4 mt-4 bg-[#ff6347] p-4 rounded-xl text-center">Tomato</p>
    <p className="mb-4 mt-4 bg-[#FFA500] p-4 rounded-xl text-center">Orange</p>
    <p className="mb-4 mt-4 bg-[#1E90FF] p-4 rounded-xl text-center">DodgerBlue</p>
    <p className="mb-4 mt-4 bg-[#3CB371] p-4 rounded-xl text-center">MediumSeaGreen</p>
    <p className="mb-4 mt-4 bg-[#808080] p-4 rounded-xl text-center">Gray</p>
    <p className="mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center">SlateBlue</p>
    <p className="mb-4 mt-4 bg-[#7F00FF] p-4 rounded-xl text-center">Violet</p>
    <p className="mb-4 mt-4 bg-[#D3D3D3] p-4 rounded-xl text-center">LightGray</p>
    </div>
    <iframe src="https://codesandbox.io/embed/amazing-silence-h6cgjl?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}     title="amazing-silence-h6cgjl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Дэвсгэр өнгө</h3>
    <p className="mb-4 mt-4">HTML-ийн элементэд дэвсгэр өнгийг зааж өгч болно.</p>
    <p className="mb-4 mt-4 bg-[#6a5acd] text-center rounded-xl p-4">Энэ бол гарчиг</p>
    <p className="mb-4 mt-4 bg-pink-500 text-center rounded-xl p-4">Энэ бол текст</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <iframe src="https://codesandbox.io/embed/gracious-almeida-kf58wr?fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}     title="amazing-silence-h6cgjl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Текстийн өнгө</h3>
    <p className="mb-4 mt-4">Текстийг хүссэн өнгөөр бичиж болно.</p>
    <h1 className='text-red-500 tex-3xl'>Зөвлөгөө</h1>
    <p className='text-pink-500'>Вэб сайт хийх нь сонирхолтой энгийн зүйл. Өдөр бүр бага багаар хичээлээ үзээд, сайтаа хөгжүүл... Нэг л өдөр та хамгийн хүчирхэг сайттай болсон байна</p>
    <p className='text-yellow-500'>HTML, СSS, JAVASCRIPT + Python хамгийн хүчирхэг хуудас бий болно</p>


    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <iframe 
    src="https://codesandbox.io/embed/stoic-brown-5mtsfg?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Хүрээний өнгө</h3>
    <p className="mb-4 mt-4">HTML-ийн элементийн хүрээнд өнгө зааж өгч болно.</p>

    <h1 className='border-4 mt-4 text-center border-violet-800'>Зөвлөгөө</h1>
    <p className='border-4 mt-4 text-center border-sky-500'>Вэб сайт хийх нь сонирхолтой энгийн зүйл.</p>
    <p className='border-4 mt-4 text-center border-red-500'>HTML, СSS, JAVASCRIPT + Python хамгийн хүчирхэг хуудас бий болно.</p>


    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <iframe 
    src="https://codesandbox.io/embed/nice-gwen-srhj2x?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Өнгөний утгууд</h3>
    <p className="mb-4 mt-4">HTML-д өнгө нь RGB, HEX, HSL, RGBA болон HSLA -н эдгээрийн утгыг ашигладаг.</p>
    <p className="mb-4 mt-4">Жишээ нь "slateblue" өнгний хувьд авч үзвэл:</p>
    <p className='mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center'>rgb(106, 90, 205)</p>
    <p className='mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center'>#6a5acd</p>
    <p className='mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center'>hsl(248, 53%, 58%)</p>
    <p className="mb-4 mt-4">Өнгийг илүү тунгалга болгож болно. 40% болон 50%-ийн тунгалга болгож үзье.</p>
    <p className='mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center opacity-40'>rgba(106, 90, 205, 0.4)</p>
    <p className='mb-4 mt-4 bg-[#6a5acd] p-4 rounded-xl text-center opacity-50'>hsla(248, 53%, 58%, 0.5)</p>

    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <iframe 
    src="https://codesandbox.io/embed/quiet-monad-34yg6m?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default data;