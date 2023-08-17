import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Padding</h3>
    <p className="mb-4 mt-4 p-[70px] text-center border">padding: 70px зай авлаа</p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"><span className='text-pink-500'>Padding</span> шинж чанар нь тухайн элементийн агуулж буй контент болон элемент хүрээний хооронд авч буй зай юм.CSS-н тусламжтай баруун, зүүн, дээд, доод талуудаас тус бүр өөр өөр зай авахаар тохируулж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Padding Individual Sides</h3>
    <p className="mb-4 mt-4">CSS нь <span className='text-pink-500'>Padding</span>-г тал бүрээс нь тодорхойлох шинж чанаруудтай байдаг.</p>
    <li className='text-pink-500'>margin-left</li>
    <li className='text-pink-500'>margin-right</li>
    <li className='text-pink-500'>margin-top</li>
    <li className='text-pink-500'>margin-bottom</li>
    <p className="mb-4 mt-4">Бүх padding-н шинж чанарууд дараах утгатай байна.</p>
    <li>% - padding авах зайг %-аар зааж өгч болно.</li>
    <li>inherit - padding зайг эцэг элементээс удамшуулж болно.</li>
    <li>урт - px, pt, cm, гэм мэт хэмжих нэгжээр зааж өгч болно.</li>
    <p className="mb-4 mt-4">Тэмдэглэл: Сөрөг утгыг зөвшөөрөхгүй болохыг анхаарна уу.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>

    <iframe 
    src="https://codesandbox.io/embed/bold-moon-yjydx3?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Padding Shorthand Property</h3>
    <p className="mb-4 mt-4">Кодыг богиносгохын тулд бүх шинж чанарыг padding-д зааж өгч болно.</p>
    <ul>
        <li className='text-pink-500'>1. padding-top: 30px;</li>
        <li className='text-pink-500'>2. padding-right: 50px;</li>
        <li className='text-pink-500'>3. padding-bottom: 50px;</li>
        <li className='text-pink-500'>4. padding-left: 70px;</li>

    </ul>



    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/floral-leftpad-rf7qcd?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


    <p className="mb-4 mt-4">Хэрэв padding дараах гурван утгатай байвал.</p>
    <p className="mb-4 mt-4">padding-top: 30px;</p>
    <p className="mb-4 mt-4">padding-right: 50px болон padding-left: 50px;</p>
    <p className="mb-4 mt-4">padding-bottom: 70px; зай авч байна гэсэн үг юм.</p>

    <li className='text-pink-500'>1. padding-top: 30px;</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/elated-sound-w4k7d2?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хэрэв padding дараах хоёр утгатай байвал.</p>
    <p className="mb-4 mt-4">padding: 30px; 50px;</p>
    <li className='text-pink-500'>padding-top: 30px; болон padding-bottom:30px;</li>
    <li className='text-pink-500'>padding-right: 50px болон padding-left: 50px; px зай авч байна гэсэн үг юм.</li>

    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/hardcore-ishizaka-rfnwcr?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хэрэв padding дараах нэг утгатай байвал.</p>
    <p className="mb-4 mt-4">padding: 30px; 4-н талаас адил 30px зай авсан байна гэсэн үг юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/runtime-sun-z3wp4f?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>





    <h3 className="font-bold text-4xl mb-4 mt-8">Padding болон Width элемент</h3>
    <p className="mb-4 mt-4">CSS-д width шинж чанар нь тухайн элементийн агуулж буй контентийн өргөнийг заадаг. Харин padding, margin болон border нь тухайн элементэд хамаарна.</p>
    <p className="mb-4 mt-4">Иймээс сайтын загвараа хийх явцдаа контентийн өргөн дээр padding, margin болон border-г нэмж тооцох хэрэгтэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    
    <p className="mb-4 mt-4">Контентийн өргөн 400px, контентийн баруун болон зүүн талаас 30px, 30px зай авсан тул нийт 460px болж байна.</p>
    <iframe 
    src="https://codesandbox.io/embed/twilight-field-vdjmqx?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">padding-н хэмжээнээс үл хамааран нийт 400px зайд багтаах шаардлагатай болбол box-sizing шинж чанарыг ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/competent-worker-sxp56x?file=/index.html:0-270?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
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