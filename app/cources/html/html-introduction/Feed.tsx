import React from 'react';

function Feed() {
  return (
    <div className="lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5 lg:p-1 md:p-2 sm:p-4 p-4">
      <section className=''>
      <h1 className="font-bold text-4xl mt-8">HTML Оршил</h1>
        <ul className="list-disc mt-4">
          <li>HTML гэдэг нь Hyper Text Markup Language гэсэн үгний товчлол бөгөөд вэб хуудасны стандарт тэмдэглэгээний хэл юм.</li>
          <li>HTML-ийн тусламжтайгаар та өөрийн Вебсайт үүсгэх болно.</li>
          <li>HTML хэл сурахад хялбар байдаг тул танд сонирхолтой байх болов уу!</li>
        </ul>
      </section>
      <section>
      <h1 className="font-bold mt-8 text-2xl">жишээ код:</h1>
        <div style={{ cursor: 'move' }} className="mt-4">
          
        <iframe src="https://codesandbox.io/embed/charming-haze-vo1wwo?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="charming-haze-vo1wwo"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

          
        </div>
        <ul className="list-disc mt-8">
          <li><span className='text-green-400'>&lt;!DOCTYPE html&gt;</span> HTML5-ийг тунхаглан зарлаж байна.</li>
          <li><span className='text-green-400'>&lt;html lang=&quot;en&ldquo;&gt;</span> элемент нь HTML хуудас эхэлснийг илэрхийлнэ.</li>
          <li><span className='text-green-400'>&lt;head&gt;</span> элемент нь мета мэдээллийг агуулна.</li>
          <li><span className='text-green-400'>&lt;title&gt;</span> элементэд гарчгийг зааж өгнө.</li>
          <li><span className='text-green-400'>&lt;body&gt;</span> элемент нь дэлгэцэд харагдах хуудасны агуулгыг агуулна.</li>
          <h1 className='text-2xl font-sans'>тайлбар:</h1>
          <li><span className='text-green-400'>&lt;h1&gt;</span> элементэд гарчгийг тодорхойлно.</li>
          <li><span className='text-green-400'>&lt;p&gt;</span> элементэд догол мөрийг тодорхойлно.</li>
        </ul>
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-4xl mb-4  ">HTML -ийн хувилбар</h1>
          <table className=" lg:w-[46rem] md:w-[20rem] sm:w-[10rem] h-auto border border-gray-500">
            <thead>
              <tr className='border w-[4rem]'>
                <th className="px-4 py-2">HTML Version</th>
                <th className="px-4 py-2">Release Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">HTML 2.0</td>
                <td className="border px-4 py-2">1995</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">HTML 3.2</td>
                <td className="border px-4 py-2">1997</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">HTML 4.01</td>
                <td className="border px-4 py-2">1999</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">XHTML 1.0</td>
                <td className="border px-4 py-2">2000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">HTML5</td>
                <td className="border px-4 py-2">2014</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
        
       
      </div>
  );
}

export default Feed;
