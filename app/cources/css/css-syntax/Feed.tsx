import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">CSS Бичиглэл /Syntax/</h1>
      <p>CSS-н бичиглэлийн дүрэм нь Selector буюу Сонгогч, Declaration буюу тунхаг гэсэн хоёр блокоос бүрдэнэ.</p>
      <img className='rounded-xl' src="http://www.abcd.mn/static/csss/CSS-Syntax.jpg" alt="" />
      <p>HTML элементийн загвар буюу Style-г өөрчлөх үед Selector-т зааж өгдөг.</p>
      <p>Declaration буюу Тунхаглалын хэсэгт нэг буюу түүнээс олон тунхаглалыг цэг таслалаар тусгаарлан шинж чанарт утгыг зааж өгдөг.</p>
      <p>CSS-д Declaration буюу Тунхаглал нь үргэлж цэг таслалаар төгсдөг бөгөөд суман хаалтад бичдэг {}.xj</p>

      </section>
      <section>
    
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p className='mb-4'>Хуудасны бүх &#60;p&#62; элементийг голлууж, дэвсгэр өнгө өгч үзье</p>
<iframe 
    src="https://codesandbox.io/embed/stoic-jepsen-hztrj5?fontsize=14&hidenavigation=1&theme=darkdark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

      </section>
      </div>
      
  );
}

export default Feed;
