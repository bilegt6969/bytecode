import React from 'react';
import Image from 'next/image';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Box модель /Box Model/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Бүх HTML элементийг хайрцаг буюу box хэлбэртэй гэж үздэг. CSS-д загвар зохион байгуулалт буюу Design and Layout гэсэн ойлголтыг box model гэдэг.Box model нь margins, borders, padding, болон content бүтэцтэй байдаг бүтэцтэй байдаг. Доорх зурган дээрээс харна уу.</p>
    <Image className='rounded-xl' src="https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif" alt="" />
    <ul>
<li><strong>Content</strong> - Текст, зураг гарчиг гэх мэт мэдээллийг агуулна</li>
<li><strong>Padding</strong> - Content-с хүрээ хүртэл авах зай</li>
<li><strong>Border </strong>- Padding болон Content-г агуулсан хүрээний хэл юм.</li>
<li><strong>Margin</strong> - нь хүрээний хэлний гаднаас авах зай юм.</li>
</ul>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/solitary-browser-hlm7tj?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Элементийн Өргөн ба Өндөр</h3>
    <p className="mb-4 mt-4">Өргөн болон өндрийг зөв бүх интернет хөтчид тохируулахын тулд box буюу хайрцгийн загвар хэрхэн ажилладаг болохыг мэдэх шаардлагатай.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/boring-volhard-ccrcxp?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Нийт элементийн өргөнийг дараах байдлаар тооцоолно</p>
    <p className="mb-4 mt-4">Нийт элементийн өргөн = width + left-padding + right-padding + left-border + right-border + left-margin + right-margin</p>
    <p className="mb-4 mt-4">Нийт элементийн өндрийг дараах байдлаар тооцоолно</p>
    <p className="mb-4 mt-4">Нийт элементийн өндөр = height + top-padding + bottom-padding + top-border + bottom-border + top-margin + bottom-margin</p>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default data;