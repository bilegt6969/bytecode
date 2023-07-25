import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { CopyBlock,dracula } from "react-code-blocks";
import React from 'react';


function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section className=''>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Файлын байршил /File Paths/</h1>

<table className="table-auto w-full border-collapse">
  <thead>
    <tr>
      <th className="border px-4 py-2 bg-black">Код</th>
      <th className="border px-4 py-2 bg-black">Тайлбар</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">&lt;img src=&quot;zurag.jpg&quot;&gt;</td>
      <td className="border px-4 py-2">zurag.jpg файл болон файлыг дуудсан HTML хуудас нэг хавтсанд байна</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">&lt;img src=&quot;img/zurag.jpg&quot;&gt;</td>
      <td className="border px-4 py-2">HTML хуудас байрлаж буй хавтсанд байрлах img хавтсанд zurag.jpg файл байна</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">&lt;img src=&quot;/img/zurag.jpg&quot;&gt;</td>
      <td className="border px-4 py-2">Вэб сайтын үндсэн хэсэн буюу index.html байрлаж буй хавтсанд байрлах img хавтсанд zurag.jpg файл байна</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">&lt;img src=&quot;../zurag.jpg&quot;&gt;</td>
      <td className="border px-4 py-2">HTML файл байрлаж буй хавтастай зэрэгцэн zurag.jpg файл байрлаж байна</td>
    </tr>
  </tbody>
</table>

      

      </section>
      <section>
    
      
      
      
      </section>
    
      

  
      

      
        





          
        <h1 className="font-bold text-4xl mt-8 mb-4">HTML Файлын зам /File Paths/</h1>
        <p>Вэб сайт нь хэд хэдэн хавтсанд файлуудаа ангилан байршуулж хадгалдаг бөгөөд тухайн хуудсанд шаардлагатай файлыг дээрх хэлбэрээр File Paths буюу файлын замыг зааж өгч ашигладаг.</p>
        <p className='mt-4'>File Paths-г дараах файлуудтай холбоход ашигладаг.</p>
        <li>Вэб хуудас /HTML файл/
</li>
        <li>css файл /Загварыг тодорхойлох/
</li>
        <li>js файл /JavaScript файл/
</li>
        <li>images Файл /Зургийн файл/</li>
        
        <h1 className="font-bold text-4xl mt-8 mb-4">Интернет файлын зам /Absolute File Paths/</h1>
        <p>URL хаягаар файлын замыг зааж өгч болно.</p>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/green-voice-y4mmvj?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="green-voice-y4mmvj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
    
   

         




   
     
      </div>
      
  );
}

export default Feed;
