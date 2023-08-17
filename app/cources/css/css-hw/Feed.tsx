import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Өндөр ба Өргөн</h3>
    <p className="mb-4 mt-4 w-[100%] border text-center">Элементийн өргөн 100%</p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS height/width утга</h3>
    <p className="mb-4 mt-4">Өндөр ба Өргөний шинж чанар нь дараах утгатай байдаг.</p>
    <ul>
<li><code className='text-pink-500'>auto</code> Энэ нь анхдагч утга бөгөөд хөтөч өндөр ба өргөнийг тооцоолно.</li>
<li><code className='text-pink-500'>length</code> Өндөр ба Өргөнийг px, cm гэх мэт хэмжих нэгжээр зааж өгнө.</li>
<li><code className='text-pink-500'>%</code> Өргөнийг хувиар зааж өгнө. Тухайн агуулагдаж буй блок дотроо үйлчилнэ.</li>
<li><code className='text-pink-500'>initial</code> Өндөр ба Өргөний анхдагч утгыг тохируулна.</li>
<li><code className='text-pink-500'>inherit</code> Өндөр ба Өргөний утгыг эцэг элементээс удамшуулж авна.</li>
</ul>

    <h3 className="font-bold text-4xl mb-4 mt-8">Өргөн болон Өндрийн жишээ</h3>
    <p className='w-[50%] h-[150px] bg-sky-500'>Контентийн өргөн 50%, Өндөр 150px</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/charming-dream-l52hcz?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <p className="mb-4 mt-4">Өргөнийг PX ээр зааж үзье</p>




    <iframe 
    src="https://codesandbox.io/embed/stupefied-forest-q53f3w?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Setting max-width</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>max-width</span> шинж чанарт элементийн хамгийн дээд өргөнийг зааж өгнө.Элементийн дээд өргөнийг px, cm эсвэл % зааж өгөх бөгөөд элементийн өргөн нь заасан дээд өргөнөөс бага байж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/affectionate-margulis-d7vrch?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Нөхцөл & Шаардлага</h3>
    </div>
  );
}

export default data;