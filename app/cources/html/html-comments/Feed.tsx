import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML Comments</h1>
<p>HTML кодонд тайлбар оруулах бичиглэл нь дараах хэлбэртэй байна.</p>   
<div className="items-center mt-4">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>    Тайлбар нь дэлгэцэд харагдахгүй. HTML кодыг тайлбарлахад ашиглана.
</span>
    </span>
  </p>
</div>
<p className='mt-4 mb-4'>Тайлбарын тусламжтай мэдэгдэл болон сануулгыг байнга авах боломжтой.</p> 
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/mystifying-snow-mxb75m?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="mystifying-snow-mxb75m"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
        <p className=" text-1xl mt-8 mb-4">HTML кодыг тайлбар болгох боломжтой. Их хэмжээний код бичих үед алдаа гарах тохиолдол их гардаг.</p>
        <iframe src="https://codesandbox.io/embed/misty-bush-jlpee7?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="misty-bush-jlpee7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
     
      </div>
  );
}

export default Feed;
