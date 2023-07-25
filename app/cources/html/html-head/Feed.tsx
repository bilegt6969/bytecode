import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Толгой хэсэг /Head/</h1>
      <p>HTML <span className='text-pink-500'>head</span> элемент нь метадата өгөгдлийг агуулдаг ба <span className='text-pink-500'>html</span> болон <span className='text-pink-500'>body</span> элементийн хооронд бичигдэнэ.</p>
      <p>HTML метадата гэдэг таны HTML хуудасны тухай өгүүлнэ. Метадата нь дэлгэцэд харагдахгүй.</p>
      <p>Метадатад HTML хуудасны нэр, загвар, скрипт,... болон бусад мэдээллийг тодорхойлно.</p>
      <pre><span className='text-pink-500'>&lt;title&gt;</span>, <span className='text-pink-500'>&lt;style&gt;</span>, <span className='text-pink-500'>&lt;meta&gt;</span>, <span className='text-pink-500'>&lt;link&gt;</span>, <span className='text-pink-500'>&lt;script&gt;</span>, болон <span className='text-pink-500'>&lt;base&gt;</span> тагуудад мета өгөгдлийг зааж өгнө.</pre>


      </section>
      <section>
      
      </section>
      <section>
      <div className="mt-8">

        <h1 className="font-bold text-4xl mt-8 mb-4">HTML Title элемент</h1>
        <p><span className='text-pink-500'>&lt;title&gt;</span> элементэд HTML хуудасны гарчгийг зааж өгнө.</p>
        <li>Гарчгийг зааж өгснөөр интернет хөтчийн таб-д гарчиг гарч ирнэ.
</li>
<li>Гарчгийг зааж өгснөөр favorites-д хуудсыг нэмж болно.
</li>
<li>Гарчгийг зааж өгснөөр хайлтын системийн илэрцэд тухайн хуудасны гарчгийг харуулах болно
</li>



      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <iframe src="https://codesandbox.io/embed/inspiring-hill-mqq456?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="inspiring-hill-mqq456"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   
   
        </div>

      </section>
      

  
      

        <h1 className="font-bold text-4xl mt-8 mb-4">HTML Style элемент</h1>
        <p><span className='text-pink-500'>&lt;style&gt;</span> элементэд тухайн HTML хуудасны элементийн загварыг тодорхойлно.</p>

     <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
     <iframe src="https://codesandbox.io/embed/adoring-elion-q3ldpk?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="adoring-elion-q3ldpk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
      
        
        <h1 className="font-bold text-4xl mt-8 mb-4">HTML meta элемент</h1>
      <p><span className='text-pink-500'>&lt;meta&gt;</span> элементэд хуудасны тайлбар, түлхүүр үг, зохиогч болон бусад өгөгдлийг зааж өгдөг.

</p>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/hidden-lake-k2cc7f?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="hidden-lake-k2cc7f"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
        </div>
        <h1 className="font-bold text-4xl mt-8 mb-4">HTML Base элемент</h1>
<p><span className='text-pink-500'>&lt;base&gt;</span> элемент нь хуудасны бүх холбоосын <span className='text-pink-500'>target</span> утгыг тодорхойлно.</p>

  <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      
  <iframe src="https://codesandbox.io/embed/admiring-firefly-9ywtfq?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="admiring-firefly-9ywtfq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

         




   
     
      </div>
      
  );
}

export default Feed;
