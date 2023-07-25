import React from 'react';

function Feed() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Үндсэн ойлголт</h1>
    <p>Энэ хичээлээр бид үндсэн HTML кодыг авч үзэх болно.
Дараа дараагийн хичээлээр бид HTML хэлийг алхам алхмаар судалсаар бүрэн ойлголтыг эзэмших болно.</p>
<p>HTML код нь &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "html" }} />&gt;-ээр эхэлж &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/html" }} />&gt;-ээр төгсөх болно.</p>
<p>хуудсан дээрх үзэгдэх хэсэг &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "body" }} />&gt; -ээс &lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/body" }} />&gt; -ны хооронд бичигдэн.
</p>
      </section>
      <section>
      <h1 className="font-bold text-4xl mt-8 mb-4">жишээ:</h1>
      <p>&lt;!DOCTYPE html&gt; Тунхаглал нь HTML эхэлж буйг зарлан тунхаглаж байна гэж ойлгож болно.</p>
        <div style={{ cursor: 'move' }} className="mt-4">
          
        <iframe src="https://codesandbox.io/embed/charming-haze-vo1wwo?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="charming-haze-vo1wwo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

          
        </div>
        
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Headings:</h1>
          <p className='mb-4'>HTML гарчиг нь ямар ч төрлийн таг байдаг бөгөөд &lt;<span dangerouslySetInnerHTML={{ __html: "h1" }} />&gt; ээс &lt;<span dangerouslySetInnerHTML={{ __html: "h6" }} />&gt; хооронд зураасан төрлийн таг аар бичигдэн.</p>
          <iframe src="https://codesandbox.io/embed/quiet-sun-wmez75?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="quiet-sun-wmez75"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
          
        </div>
      </section>
      <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Paragraphs:</h1>
          <p className='mb-4'>HTML догол мөрийг &lt;<span dangerouslySetInnerHTML={{ __html: "p" }} />&gt; tag тодорхойлж бичнэ.</p>
          <iframe src="https://codesandbox.io/embed/loving-night-bsfixd?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="loving-night-bsfixd"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
        </section>
        <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Links:</h1>
          <p className='mb-4'>HTML холболтыг&lt;<span dangerouslySetInnerHTML={{ __html: "a" }} />&gt;tag тодорхойлж бичнэ.</p>
          <iframe src="https://codesandbox.io/embed/naughty-rhodes-sqg0yl?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="naughty-rhodes-sqg0yl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
        </section>
        <section><div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML Images:</h1>
          <p className='mb-4'>HTML зургийг эх файлыг src, зургийн тайлбар текстийг <span className='text-pink-500'>alt</span>, зургийн өргөнийг <span className='text-pink-500'>width</span>, өндрийг <span className='text-pink-500'>height</span> атрибутуудад тус тус тодорхойлж бичнэ.</p>
          <iframe src="https://codesandbox.io/embed/musing-blackwell-5jhn7e?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="musing-blackwell-5jhn7e"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
          
        </div>
        </section>
    
        
        
       
      </div>
  );
}

export default Feed;
