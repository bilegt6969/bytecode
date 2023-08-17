import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээ /Border/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS border нь элементийн хил хязгаарын өргөн, өнгөний хэв маягийг тодорхойлдог.</p>
    <p className="mb-4 mt-4 border p-4 ">Бүх талд хүрээ хийв</p>
    <p className="mb-4 mt-4 border-b p-4 ">Зөвхөн доод талд хүрээ хийв</p>
    <p className="mb-4 mt-4 rounded-xl p-4 ">Хүрээний буланд радиус хийв</p>
    <p className="mb-4 mt-4 bg-red-500 p-4 ">Хүрээнд дэвсгэр өнгө хийв</p>




    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Border Style</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-style</span> шинж чанарт хүрээний хил ямар харагдахыг зааж өгдөг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/optimistic-kare-n4grn4?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээний өргөн /Border width/</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-width</span> шинж чанарт хүрээний хилийн өргөнийг зааж өгдөг. Хүрээний өргөний хэмжээг (px, pt, cm, em гэх мэт) хэмжих нэгжээр зааж өнгө. Эсвэл урьдчилсан тодорхойлсон thin, medium, thick гэсэн гурван янзын хэмжээг ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/fancy-feather-t3prpj?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээний талуудын өргөн /Specific Side Widths/</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-width</span> шинж чанарт хүрээний дөрвөн талын өргөнийг өөр өөрөөр зааж өгч болно. Дараалал нь (Дээд тал, Баруун тал, Доод тал, Зүүн тал)</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>

    <iframe 
    src="https://codesandbox.io/embed/nostalgic-meitner-h9lql6?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээний өнгө /Border Color/</h3>
    <p className="mb-4 mt-4">border-color шинж чанарт хүрээний өнгийг тодорхойлж өгдөг</p>
    <p className="mb-4 mt-4">Өнгөний төрлүүд:</p>
    <ul>
<li>name "red"</li>
<li>HEX - "#ff0000"</li>
<li>RGB - "rgb(255,0,0)"</li>
<li>HSL - "hsl(0, 100%, 50%)"</li>
<li>transparent</li>
</ul>
    <p className="mb-4 mt-4">Тэмдэглэл: Хэрэв хүрээний өнгийг зааж өгөөгүй бол элементийн өнгийг өвлөн авах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/upbeat-raman-r2fc92?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>




    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Дөрвөн талын өнгө</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-color</span> шинж чанарт дөрвөн талын хүрээний өнгийг өөр өөрөөр зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/gifted-currying-pdhysk?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>




    <h3 className="font-bold text-4xl mb-4 mt-8">CSS HEX утга</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-color</span>  шинж чанарт HEX буюу hexadecimal утга ашиглан өнгө зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>




    <iframe 
    src="https://codesandbox.io/embed/optimistic-darkness-59tklt?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS RGB утга</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-color</span>  шинж чанарт RGB утга ашиглан өнгө зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/determined-night-g96jjq?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS HSL утга</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-color</span>  шинж чанарт HSL утга ашиглан өнгө зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/wizardly-dijkstra-h983n9?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээний талууд</h3>
    <p className="mb-4 mt-4">CSS-д хүрээний талуудыг тус бүрээр нь зааж өгөх шинж чанар байдаг. (top, right, botoom, left)</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/epic-agnesi-s5k4pc?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Хүрээний хоёр тал нь адил байх тохиолдолд товч бичиглэл ашиглаж болно</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/eager-tereshkova-h5jq6k?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Богино бичиглэл /Shorthand/</h3>
    <p className="mb-4 mt-4">Кодын бичиглэлийг багасгахын тулд өмчлөгч буюу border-т шинж чанаруудыг нэг мөрөнд зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>

    <iframe 
    src="https://codesandbox.io/embed/purple-water-gd7g89?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Border-left</h3>

    <iframe 
    src="https://codesandbox.io/embed/friendly-butterfly-jrq4t3?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    <h3 className="font-bold text-4xl mb-4 mt-8">Border-bottom</h3>

    <iframe 
    src="https://codesandbox.io/embed/empty-pine-ddvs9q?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Хүрээний радиус /Rounded Borders/</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>border-radius</span>шинж чанарт хүрээний буланг дугуй хэлбэртэй болгох утгыг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/jovial-thunder-qpcf99?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
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