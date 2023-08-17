import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Margins</h3>
    <p className="mb-4 mt-4 p-[70px] text-center border">Гадна талаас 70px зай авлаа</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Individual Sides</h3>
    <p className="mb-4 mt-4">CSS нь margin-г тал бүрээс нь тодорхойлох шинж чанаруудтай байдаг.</p>
    <li className='text-pink-500'>margin-left</li>
    <li className='text-pink-500'>margin-right</li>
    <li className='text-pink-500'>margin-top</li>
    <li className='text-pink-500'>margin-bottom</li>
    <p className="mb-4 mt-4">Бүх margin-н шинж чанарууд дараах утгатай байна.</p>
    <li>auto - хөтөч margin-г автоматаар тооцоолно.</li>
    <li>% - margin авах зайг %-аар зааж өгч болно.</li>
    <li>урт - px, pt, cm, гэм мэт хэмжих нэгжээр зааж өгч болно.</li>
    <li>inherit - margin зайг эцэг элементээс удамшуулж болно.</li>
    <p className="mb-4 mt-4">Тэмдэглэл: Сөрөг утгыг зөвшөөрөхгүй болохыг анхаарна уу.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/vibrant-cookies-w25v3m?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хэрэв <span className='text-pink-500'>margin</span> дараах гурван утгатай байвал.</p>
    <ul>
        <li>1. дээрээс 20px</li>
        <li>2. баруун болон зүүн талаас 40px</li>
        <li>3. доороос 80px зай авна гэсэн үг юм.</li>

    </ul>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/distracted-thunder-kmlw7t?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хэрэв <span className='text-pink-500'>margin</span>  дараах хоёр утгатай байвал.</p>
    <li>margin: 20px 40px;</li>
    <ul>
        <li>1. дээрээс болон доороос 20px</li>
        <li>2. баруун болон зүүн талаас 40px зай авна гэсэн үг юм. </li>
    </ul>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/beautiful-shamir-l4ldsw?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хэрэв <span className='text-pink-500'>margin</span> дараах нэг утгатай байвал.</p>
    <li>margin: 40px</li>
    <ul><li>1. Бүх талаас 40px зай авна гэсэн үг юм </li></ul>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/patient-sun-fzgrwx?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Auto Value</h3>
    <p className="mb-4 mt-4">Хэрэв та <span className='text-pink-500'>margin</span>-д <span className='text-pink-500'>auto</span> гэсэн утгыг зааж өгвөл элемент нь өөрт заасан өргөнийг авч агуулгын хамт голлох буюу баруун болон зүүн талаас ижил зайг автоматаар авах болно. /Хэвтээ тэнхлэгт/</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/optimistic-sutherland-8k7kjj?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    <h3 className="font-bold text-4xl mb-4 mt-8">The inherit Value</h3>
    <p className="mb-4 mt-4">CSS нь эцэг элементийн шинж чанарыг удамшуулж авч чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/lively-bush-7lylgf?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
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