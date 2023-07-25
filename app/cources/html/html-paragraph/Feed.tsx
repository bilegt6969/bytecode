import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className=" mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Paragraphs</h1>
      <p>HTML  &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "p" }} />&gt; элемент нь догол мөрийг тодорхойлдог.</p>
    
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/modern-glitter-ekvmq5?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="modern-glitter-ekvmq5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML дэлгэц
</h1>

          <p>HTML-ийг дэлгцэд хэрхэн харагдахыг бид мэдэхгүй.
Учир нь том болон жижиг дэлгэцээс хамаарч хэмжээ нь өөр өөр байх болно.
Хоосон зай авах, мөр шилжих зэргээр үр дүнг өөрчлөх боломжгүй. Интернет хөтөч нь хуудсыг ачаалах үед хоосон зай, нэмэлт мөрийг мэдэрч устгах болно.

</p>
<iframe src="https://codesandbox.io/embed/blissful-glade-qy0vo3?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="blissful-glade-qy0vo3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">Хаалын tag-ийг мартаж болохгүй</h1>
          <p className='mb-4'>Хаалтын tag-ийг мартлаа гээд ихэнх хөтөч дээр хэвийн ажиллах байх. Гэвч та үүнд хэзээч найдаж болохгүй гэдгийг хэлмээр байна.</p>
          <iframe src="https://codesandbox.io/embed/happy-wozniak-k75f2u?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="happy-wozniak-k75f2u"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <div className="items-center">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>Хэрэв та хаалтын tag-ийг мартсан бол гэнэтийн замбараагүй үр дүн гарах эсвэл алдаа үүсгэх болно. Иймд хаалтын Tag маш чухал гэдгийг сайн санах хэрэгтэй.
</span>
    </span>
  </p>
</div>
          
          
        </div>
        </section>
        <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Line Breaks</h1>

          <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "br" }} />&gt; элемент нь шугамыг таслах буюу шинэ догол мөр эхлүүлэхгүйгээр шинэ мөр эхлүүлнэ.</p>
          <iframe src="https://codesandbox.io/embed/divine-wind-ywq2vi?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="divine-wind-ywq2vi"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "pre" }} />&gt; элемент</h1>

          <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "pre" }} />&gt;  элемент нь урьдчилсан форматалсан текстийг тодорхойлдог. <br/> Pre нь preformatted гэсэн үг бөгөөд өөрөөр хэлбэл &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "pre" }} />&gt; элемент нь хоосон зай, мөр шилжилт зэрэг бичиглэлийг шууд байгаагаар нь дамжуулдаг гэсэн үг юм.

</p>
<iframe src="https://codesandbox.io/embed/competent-bell-60sx9k?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="competent-bell-60sx9k"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      </div>
  );
}

export default Feed;
