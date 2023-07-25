import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'


function Feed() {
  return (
    <div className=" mb-8 lg:col-span-4 md:col-span-4 sm:col-span-5 col-span-5  lg:p-1 md:p-2 sm:p-4 p-4 ">
      <section>
      <h1 className="font-bold text-4xl mt-8">HTML Elements</h1>
      <p className='mt-4'>HTML элемент гэж эхлэлийн tag болон төгсгөлийн tag-н хооронд байрлах бүх контентыг хэлнэ.</p>
      <table className=" w-[46rem] border border-gray-500">
            <thead>
              <tr className='border w-[4rem]'>
                <th className="px-4 py-2">ЭХЛЭХ TAG	</th>
                <th className="px-4 py-2">утга</th>
                <th className="px-4 py-2">ТӨГСГӨЛИЙН TAG</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "h1" }} />&gt;</td>
                <td className="border px-4 py-2">Энэ бол гарчиг	</td>
                <td className="border px-4 py-2">&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h1" }} />&gt;</td>


              </tr>
              <tr>
                <td className="border px-4 py-2">&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "p" }} />&gt;</td>
                <td className="border px-4 py-2">	Энэ бол догол мөр</td>
                <td className="border px-4 py-2">&lt;<span className='text-red-400 bg-gray-700' dangerouslySetInnerHTML={{ __html: "/h1" }} />&gt;</td>

              </tr>
              
              
            </tbody>
          </table>
       
       
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
        <h1 className="font-bold mt-8 mb-4 text-3xl">Жишээг тайлбарлавал</h1>

<p>Дээрх жишээ нь зургаан нь HTML элементийг агуулсан бөгөөд <code>&lt;html&gt;</code> тагаар эхэлж, <code>&lt;/html&gt;</code> таг-д дууссан байна.
Тэгвэл <code>&lt;body&gt;</code> таг нь <code>&lt;html&gt;</code> таг дотор агуулагдаж байгаа тул тус таг-ийн элемент гэж ойлгоно.
Харин <code>&lt;body&gt;</code> таг-н элемент нь <code>&lt;h1&gt;</code> болон <code>&lt;p&gt;</code> таг-ууд байна.</p>
          
        </ul>
      </section>
      <section>
      <div className="mt-8">
          <h1 className="font-bold text-3xl mb-4  ">Хаах Tag-ийг мартаж болохгүй</h1>
          <iframe src="https://codesandbox.io/embed/stoic-bush-o4ehwp?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="stoic-bush-o4ehwp"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
   <div className="items-center"> <p className="text-xln font-bold bg-yellow-700 mt-4 rounded-xl p-4"> <span className="flex items-center"> <ExclamationCircleIcon className="w-10 h-10 mr-2" /> <span className='text-xl'> Гэсэн хэдий ч үүнд хэзээ ч бүү найд! Хэрэв та хаах tag-г мартсан бол гэнэтийн алдаа гарч болзошгүй! тул иймд хэзээ ч хаах tag-г бүү март </span> </span> </p> </div>
   <h1 className="font-bold text-3xl mb-4  ">HTML &lt;<span className='' dangerouslySetInnerHTML={{ __html: "br" }} />&gt;</h1>
   <p className='mb-4'>&lt;<span className='' dangerouslySetInnerHTML={{ __html: "br" }} />&gt;-д хаалтын tag байдгүй ба үүрэг нь мөр таслах буюу мөр шилжихэд ашиглагдана.</p>
   <iframe src="https://codesandbox.io/embed/hopeful-chihiro-nhxzps?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
  title="hopeful-chihiro-nhxzps"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


         
        </div>
      </section>
        
        
       
      </div>
  );
}

export default Feed;
