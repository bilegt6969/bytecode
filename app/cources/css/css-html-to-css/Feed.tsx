import React from 'react';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


function data() {
  const codeText = `
  body {
    background-color: Violet;
  }
  h1 {
    color: red;
  }
  p {
    color: yellow;
  }
  `
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS-г HTML-д хэрхэн нэмэх вэ?</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Browser буюу интернет хөтөч Style sheet-г уншихад HTML хуудсанд зааж өгсөн форматын дагуу унших болно.</p>
    <p className="mb-4 mt-4">Inline - Html-н элементэд style атрибутад нэг бүрчлэн бичиж өгөхInternal - <span className="text-pink-500">&lt;head&gt;</span> tag-н элементэд <span className="text-pink-500">&lt;style&gt;</span> элементийг ашиглаж болноExternal - CSS файл ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Inline CSS</h3>
    <p className="mb-4 mt-4">Inline CSS нь нэг HTML элементэд өвөрмөц буюу бусдаас ялгаатай хэв маягийг харуулахад ихэвчлэн ашигладаг.Inline CSS нь HTML-н <span className="text-pink-500">&lt;style&gt;</span> атрибутыг ашигладаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <p className="mb-4 mt-4"><span className="text-pink-500">&lt;h1&gt;</span> элементийн текстийн өнгийг улаан болгож үзье</p>
    <iframe src="https://codesandbox.io/embed/cranky-lederberg-pf7qhq?fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="cranky-lederberg-pf7qhq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">Internal CSS</h3>
    <p className="mb-4 mt-4">HTML хуудасны хэв маягийг дотоод CSS ашиглан тодорхойлж болно, үүнийг Internal CSS гэдэг.Дотоод CSS-г HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт <span className="text-pink-500">&lt;style&gt;</span> элементэд тодорхойлж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <p className="mb-4 mt-4"><span className="text-pink-500">&lt;h1&gt;</span> элементийн текстийн өнгийг улаан болгож үзье</p>
    <iframe 
    src="https://codesandbox.io/embed/frosty-butterfly-43try8?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">External CSS</h3>
    <p className="mb-4 mt-4">Гадаад CSS нь олон HTML хуудасны загварыг тодорхойлдог бөгөөд ганц CSS файлаас вэб сайтын өнгө төрхийг өөрчилж болно.Гадаад CSS-г ашиглахын тулд HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт холболт хийнэ.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээлбэл:</h3>
    <iframe 
    src="https://codesandbox.io/embed/cool-firefly-563nhf?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

    <p className="mb-4 mt-4">Гадаад CSS-г дурын текст editor дээр хөгжүүлж болох бөгөөд ямар нэгэн HTML код агуулдаггүй мөн .css өргөтгөлтэй хадгалагддаг болохыг дээрх жишээнээс /href=&quot;/static/csss/style.css&quot;/ анзаарсан биз ээ.</p>
    <div>
      <CopyBlock
        text={codeText}
        language='html'
        showLineNumbers={true}
        wrapLines
        theme={monokai}
      />
    </div>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default data;