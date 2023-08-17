import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Outline</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4 text-center outline outline-[10px] bg-white outline-sky-500 text-black border-red-500 border-4 p-4">Тус элементэд 2px өргөн мүжбуж, 10px өргөн outline зураас авлаа.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Outline</h3>
    <p className="mb-4 mt-4">Outline гэдэг нь чухал гэж үзсэн элементийн хүрээний гадна талаар тойрсон шугам юм.</p>
    <img className='rounded-xl' src="https://tutorials.freshersnow.com/wp-content/uploads/2020/02/CSS-Outliners-2.png" alt="" />
    <p className="mb-4 mt-4">Outline нь дараах шинж чанаруудтай байдаг.</p>
    <li><code className='text-pink-500'>outline</code></li>
<li><code className='text-pink-500'>outline-style</code></li>
<li><code className='text-pink-500'>outline-color</code></li>
<li><code className='text-pink-500'>outline-width</code></li>
<li><code className='text-pink-500'>outline-offset</code></li>
    <p className="mb-4 mt-4">Тэмдэглэл: Outline нь тухай элементийг чухал гэж үзэн border-н гадна талаар хийгдсэн хүрээ бөгөөд бусад элементэд давхардаж чаддагаараа border-оос ялгаатай юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Outline Style</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>outline-sytle</code>-д чухал гэж үзсэн элементийн хэв маягийг тодорхойлдог бөгөөд дараах утгууд хамаарна.</p>
    <li><code className='text-pink-500'>dotted</code></li>
<li><code className='text-pink-500'>dashed</code></li>
<li><code className='text-pink-500'>solid</code></li>
<li><code className='text-pink-500'>double</code></li>
<li><code className='text-pink-500'>groove</code></li>
<li><code className='text-pink-500'>ridge</code></li>
<li><code className='text-pink-500'>inset</code></li>
<li><code className='text-pink-500'>outset</code></li>
<li><code className='text-pink-500'>none</code></li>
<li><code className='text-pink-500'>hidden</code></li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>




    <iframe src="https://codesandbox.io/embed/optimistic-sea-krf2ys?fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}     title="optimistic-sea-krf2ys"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Өргөн /Outline Width/</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>outline-width</code> шинж чанарт outline-н өргөнийг тодорхойлдог бөгөөд дараах утгуудын аль нэгийг зааж өгнө.</p>
    <li>thin (1px гэсэн үг)</li>
<li>medium (3px гэсэн үг)</li>
<li>thick (5px гэсэн үг)</li>
<li>Эсвэл (px, pt, cm, em) гэх мэт хэмжих нэгжийг ашиглаж болно.</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/lively-brook-rc7cw6?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Outline Offset</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>outline-offset</code> шинж чанарт элементийн хүрээ болон outline-н хоорондын зайг тодорхойлдог.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <p className="mb-4 mt-4">Элементийн хүрээ буюу border болон outline-н хооронд 20px зай авч үзье.</p>
    <iframe 
    src="https://codesandbox.io/embed/elated-bartik-4h3gk9?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>


  
    </div>
  );
}

export default data;