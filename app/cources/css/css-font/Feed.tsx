import React from 'react';

function data() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Үсгийн Фонт /Font/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS font шинж чанарт үсгийн өргөн нарийн, хэв маяг фонтын төрлийг зааж өгдөг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Font Families</h3>
    <p className="mb-4 mt-4">CSS-д Үсгийн фонтыг /font family/ хоёр төрөлд хувааж авч үздэг.</p>
    <li className="mb-4 mt-4">generic family ижил төстэй хэсэг бүлэг ("Serif" болон "Monospace")</li>
    <li className="mb-4 mt-4">font family тодорхой хэв маягтай хэсэг бүлэг ("Times New Roman" болон "Arial")</li>

    <p className="mb-4 mt-4">Тэмдэглэл: Компьютерын дэлгэцээс sans-serif фонтыг уншихад serif фонтуудаас илүү хялбар уншигддаг гэж үздэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Font Family</h3>
    <li className="mb-4 mt-4"><code className='text-pink-500'>font-family</code>  шинж чанарт үсгийн фонтыг /font family/ зааж өгнө.</li>
    <li className="mb-4 mt-4"><code className='text-pink-500'>font-family</code> шинж чанарт хэд хэдэн үсгийн фонтыг "fallback" буюу уналтын систем хэлбэрээр зааж өгдөг. Энэ нь хэрэв интернет хөтөч эхний фонтыг дэмжихгүй бол дараагийн фонтыг туршиж үзнэ гэсэн санаа юм.</li>
    <li className="mb-4 mt-4"><code className='text-pink-500'>font-family</code> шинж чанарт таны зааж өгсөн font-г хөтөч алийг нь ч дэмжихгүй тохиолдолд хөтчийн санал болгосон font-г автоматаар ашиглана.</li>
    <li className="mb-4 mt-4">Хэрэв font-н нэр нь нэгээс олон үгтэй байвал "Times New Roman" хаалтад гэж бичээд олон font-г таслалаар тусгаарлан зааж өгнө.</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/infallible-mountain-4jc493?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Font Style</h3>
    <p className="mb-4 mt-4"> <code className='text-pink-500'>font-style</code> шинж чанарт текстийн хэв маягийг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/trusting-tu-p3fhtf?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Font Size</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>font-size</code> шинж чанарт текстийн хэмжээг зааж өгнө.</p>
    <p className="mb-4 mt-4">Текстийн хэмжээг тохируулах нь дизайны хувьд чухал ач үүрэг гүйцэтгэдэг. Гэсэн хэдийн ч догол мөрийг гарчиг, гарчгийг догол мөр шиг харагдуулан ашиглаж болохгүй.</p>
    <p className="mb-4 mt-4"><span className="text-pink-500">&lt;h1&gt;</span>-<span className="text-pink-500">&lt;h6&gt;</span> элементэд гарчгийг <span className="text-pink-500">&lt;p&gt;</span>-д үндсэн текстийг харуулахад ашиглаж байхын анхаарна уу.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Үсгийн хэмжээ /Font Size Pixels/</h3>
    <p className="mb-4 mt-4">Pixel-р текстийн хэмжээг зааж өгч бүрэн хянаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    



    <iframe 
    src="https://codesandbox.io/embed/nostalgic-taussig-9d4dyh?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Үсгийн хэмжээ /Font Size EM/</h3>
    <p className="mb-4 mt-4">Маш олон хөгжүүлэгчид текстийн хэмжээг pixel-н оронд em-г ашигладаг байна.1em = 16px байдаг тул бид pixel-г em-рүү тооцоолон шилжүүлж ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>

    <iframe 
    src="https://codesandbox.io/embed/amazing-pine-ydl3q5?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>




    <p className="mb-4 mt-4">Тэмдэглэл: em-г зарим интернет хөтчид алдагддаг тул процентыг давхар ашиглаж байгаарай.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Em болон Процентын хослол</h3>
    <p className="mb-4 mt-4">Бүх интернет хөтөч дээр ажилладаг шийдэл бол процент юм. Иймд текстийн хэмжээний анхны утгыг <span className="text-pink-500">&lt;body&gt;</span> элементэд процентоор зааж өгч байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <iframe 
    src="https://codesandbox.io/embed/jolly-colden-2fq6vm?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Font Weight</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>font-weight</code>  шинж чанарт үсгийн фонтын өргөнийг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>


    <iframe 
    src="https://codesandbox.io/embed/awesome-fog-sqrkwt?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Responsive Font Size</h3>
    <p className="mb-4 mt-4">Текстийн хэмжээг vw-р тохируулж болно, энэ нь "viewport width" буюу харах талбайн өргөн гэсэн үг юм, Ингэсэнээр текстийн хэмжээ нь интернет хөтчийн цонхны хэмжээг том болгоход нь том болж жижиг болгоход нь жижиг болон дагаж мөрдөх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/dark-dust-zy7fvs?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    </div>
  );
}

export default data;