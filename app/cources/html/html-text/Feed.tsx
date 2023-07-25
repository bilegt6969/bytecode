import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

function Feed() {
  return (
    <div className=" mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML текст формат</h1>
      <p className='mt-4'>HTML-д тусгай утгатай текстүүдийг тодорхойлдог элементүүд байдаг. Үүнд:</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "b" }} />&gt; Тод текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "strong" }} />&gt; Чухал текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "i" }} />&gt; Налуу текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "em" }} />&gt; Тодруулсан текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "mark" }} />&gt; Тэмлэглэгдсэн текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "small" }} />&gt; Жижиг текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "del" }} />&gt; Утстгасан текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "ins" }} />&gt; Нэмсэн текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "sub" }} />&gt; Дэд текст</p>
      <p>&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "sup" }} />&gt; Дээд текст</p>    
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "b" }} />&gt; ба &lt;<span dangerouslySetInnerHTML={{ __html: "strong" }} />&gt; элемент
</h1>
      <p className='mt-4 mb-8'>HTML-д текст тодруулахыг &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "b" }} />&gt; элементэд тодорхойлдог бол чухал гэж үзсэн тохиолдолд &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "strong" }} />&gt; элементэд тодорхойлдог.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/clever-wave-bmzip7?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="clever-wave-bmzip7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

          
        </div>
        
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "i" }} />&gt; ба &lt;<span dangerouslySetInnerHTML={{ __html: "em" }} />&gt; элемент
</h1>
      <p className='mt-4 mb-8'>HTML-д налуу текстийг &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "i" }} />&gt; элементэд тодорхойлдог бол илүү ач холбогдолтой гэж үзсэн тохиолдолд  &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "em" }} />&gt;  элементэд тодорхойлдог.</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/funny-hertz-92vg7q?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="funny-hertz-92vg7q"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <div className="items-center">
  <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4">
    <span className="flex items-center">
      <ExclamationCircleIcon className="w-10 h-10 mr-2" />
      <span className='text-xl'>    Хөтөч бидэнд хоорондоо бараг ялгаагүй зүйлийг харуулж байгаа боловч цаанаа &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "b" }} />&gt; болон &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "i" }} />&gt; нь тод болон налууг тодорхойлж байдаг бөгөөд &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "strong" }} />&gt; болон &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "em" }} />&gt; нь чухалыг тодорхойлж байна гэж ойлгодог байна.
</span>
    </span>
  </p>
</div>


          
        </div>
        
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "small" }} />&gt; элемент
</h1>
      <p className='mt-4 mb-8'>HTML-д жижиг текстийг &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "small" }} />&gt; элементэд тодорхойлдог</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/lucid-snow-d1qnst?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="lucid-snow-d1qnst"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

          
        </div>
        
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "small" }} />&gt; элемент
</h1>
      <p className='mt-4 mb-8'>HTML-д жижиг текстийг &lt;<span className='text-red-400' dangerouslySetInnerHTML={{ __html: "small" }} />&gt; элементэд тодорхойлдог</p>

      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
        <iframe src="https://codesandbox.io/embed/lucid-snow-d1qnst?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="lucid-snow-d1qnst"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "mark" }} />&gt; элемент
</h1>          <p className='mb-4'>HTML-д Тэмлэглэгдсэн текстийг &lt;<span dangerouslySetInnerHTML={{ __html: "mark" }} />&gt; элементэд тодорхойлдог.</p>
<iframe src="https://codesandbox.io/embed/nice-neumann-yy0fe4?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="nice-neumann-yy0fe4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "del" }} />&gt; элемент
</h1>          <p className='mb-4'>HTML-д устгасан текстийг &lt;<span dangerouslySetInnerHTML={{ __html: "del" }} />&gt; элементэд тодорхойлдог.</p>
<iframe src="https://codesandbox.io/embed/serene-gates-0myjm5?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="serene-gates-0myjm5"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "sub" }} />&gt; элемент
</h1>          <p className='mb-4'>HTML-д subscripted текстийг &lt;<span dangerouslySetInnerHTML={{ __html: "sub" }} />&gt; элементэд тодорхойлдог.</p>
<iframe src="https://codesandbox.io/embed/lingering-bird-7u1eqi?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="lingering-bird-7u1eqi"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      <section>
      <div className="mt-8">
      <h1 className="font-bold text-4xl mt-8 mb-4">HTML &lt;<span dangerouslySetInnerHTML={{ __html: "sup" }} />&gt; элемент
</h1>          <p className='mb-4'>HTML-д superscripted текстийг &lt;<span dangerouslySetInnerHTML={{ __html: "sup" }} />&gt; элементэд тодорхойлдог.</p>
<iframe src="https://codesandbox.io/embed/compassionate-bassi-zspv9l?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="compassionate-bassi-zspv9l"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
      </section>
      </div>
  );
}

export default Feed;
