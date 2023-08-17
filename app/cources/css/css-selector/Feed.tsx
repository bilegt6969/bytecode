import React from 'react';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';

function data() {
  const codeText = `"
    <h3>GeeksforGeeks Code</h3>
    <CopyBlock
      text="print('GeeksforGeeks')"
      language='python'
      showLineNumbers={true}
      wrapLines
      theme={dracula}
    />
    <style>
      h1, h2, p {
        background-color: yellow;
        text-align: center;
        color: red;
      }
    </style>
  "`;

  const code1text = `"
  <!DOCTYPE html lang="en-US">
<html>
<head>
<style>
h1,h2, p  {
  background-color: yellow;
  text-align: center;
  color: red;
}
</style>
</head>
<body>

<h1 class="firstClass">H1 элементийг сонгосон болно</h1>
<p class="firstClass">Cайн байна уу!</p>
<p class="firstClass textSize">Cайн байна уу!</p>

</body>
</html>"`

  return (
        <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
  
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Сонгогч /Selector/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Загварыг нь өөрчлөхийг хүсч буй HTML элементүүдийг CSS selelctor нь олж өгдөг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS элемент сонгох</h3>
    <p className="mb-4 mt-4">HTML элементийн нэрийг үндэслэн элементийг сонгож болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>



    <p className="mb-4 mt-4">Хуудасны бүх &lt;h1&gt; элементийг голлууж, дэвсгэр өнгө өгч үзье.</p>
    <iframe 
    src="https://codesandbox.io/embed/broken-mountain-vtm6h6?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Id сонгогч /Id Selector/</h3>
    <p className="mb-4 mt-4">id selector буюу id сонгогч нь тодорхой элементийг сонгохын тулд HTML-н id атрибутыг ашигладаг.HTML-н id элемент нь дахин давхардахгүй гэсэн утгатай байдаг тул id selector нь дахин дахардахгүй нэг элементийг сонгоход ашиглагддаг!Тухайн ID-тай элементийг сонгохын тулд /#/ тэмдэгтийг оруулаад элеметнийн ID-г залгаж оруулна</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/suspicious-bas-jdkmzc?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">Тэмдэглэл: ID-н нэр тоогоор эхэлж болохгүйг анхаарна уу!</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS CSS class сонгогч /Class selector/</h3>
    <p className="mb-4 mt-4">Class selector нь HTML классын тодорхой шинж чанартай элементүүдийг сонгодог.Тодорхой класстай элементийг сонгохын тулд /./ тэмдэгтийг бичиж HTML классын нэрийг оруулна!</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe 
    src="https://codesandbox.io/embed/hopeful-grass-cmtkcj?file=/index.html?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">HTML хуудасны тодорхой элементүүдэд class-г нөлөөлөх ёстой гэж зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <p className="mb-4 mt-4">Зөвхөн <span className="text-pink-500">&lt;p&gt;</span> tag-н дэвсгэр өнгө болон тесктийг голлуулах болно.</p>
    <iframe 
    src="https://codesandbox.io/embed/black-wood-hvjsgs?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <p className="mb-4 mt-4">HTML элемент нь олон class-т хамаарч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe src="https://codesandbox.io/embed/youthful-alex-4n9rjf?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="youthful-alex-4n9rjf"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    <p className="mb-4 mt-4">Тэмдэглэл: Class-н нэр тоогоор эхэлж болохгүйг анхаарна уу!</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Нийтээр нь сонгох /Universal Selector/</h3>
    <p className="mb-4 mt-4">Universal Selector нь HTML хуудасны бүх элементүүдийг / * / тэмдэгтээр сонгодог.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <p className="mb-4 mt-4">HTML хуудасны бүх элементийн дэвсгэр өнгийг шар болгож текстийг голд байрлуулж үзье.</p>
    <iframe 
    src="https://codesandbox.io/embed/awesome-cherry-lh9kkr?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="sleepy-glitter-54dpgn"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Бүлэглэж сонгох /Grouping Selector/</h3>
    <p className="mb-4 mt-4">HTML элементүүдийг ижил загвартай болгох үед бүлэглэж болно.Доорх CSS кодыг хархад бүгд ижил хэв маягтай харагдаж байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <div>
      <CopyBlock
        text={codeText}
        language='html'
        showLineNumbers={true}
        wrapLines
        theme={monokai}
      />
    </div>
    <p className="mb-4 mt-4">Дээрх CSS кодыг хархад бүгд ижил хэв маягтай байгаа тул selector бүрийг таслалаар тусгаарлан бүлэглэж кодын бичиглэлийг багасгаж үзье.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <iframe src="https://codesandbox.io/embed/late-brook-pd739q?fontsize=14&hidenavigation=1&theme=dark&editorsize=50"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="late-brook-pd739q"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
    
    </div>
  );
}

export default data;