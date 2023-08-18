import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Pseudo-элемент сонгогч</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS-д Pseudo-элементийг ашиглан тухайн элементийн тодорхой хэсгийг загварчлахад ашигладаг.Жишээ нь та доорх зорилгоор ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Syntax буюу Бичиглэл</h3>
    <p className="mb-4 mt-4">pseudo-elements-н бичиглэл нь дараах хэлбэртэй байна.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ::first-line</h3>
    <p className="mb-4 mt-4">Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-line </code></code>
 шинж чанарыг текстийн эхний мөрөнд тусгай хэв маяг нэмэхэд ашигладаг. Доорх жишээнд бүх <span className="text-pink-500">&lt;p&gt;</span>-н эхний мөрийг тохируулж өгч байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <p className="mb-4 mt-4">Тэмдэглэл: Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-line-</code></code>
-г зөвхөн блок төвшний элементэд ашигладаг.</p>
    <p className="mb-4 mt-4">Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-line </code></code>
 нь дараах шинж чанаруудыг агуулдаг. Нэг бүрчилэн туршаад үзээрэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ::first-letter</h3>
    <p className="mb-4 mt-4">Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-letter</code></code>
-г текстийн эхний үсэгт тусгай хэв маяг нэмхэд ашигладаг. Доорх жишээнд бүх <span className="text-pink-500">&lt;p&gt;</span>-н эхний үсгийг тохируулж өгч байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4">Тэмдэглэл: Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-letter-</code></code>
-г зөвхөн блок төвшний элементэд ашигладаг.</p>
    <p className="mb-4 mt-4">Pseudo-элементийн     <code className="mb-4 mt-4"><code className="text-pink-500">::first-letter </code></code>
 нь дараах шинж чанаруудыг агуулдаг. Нэг бүрчилэн туршаад үзээрэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ба CSS Classes</h3>
    <p className="mb-4 mt-4">Pseudo-элементийг CSS-н класстай хослуулан ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Олон Pseudo-элемент /Multiple/</h3>
    <p className="mb-4 mt-4">Хэд хэдэн Pseudo-элементийг нэгтгэн ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ::before</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">::before </code></code>
 Pseudo-элемент нь контентийн өмнө контент нэмж чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ::after</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">::after </code></code>
 Pseudo-элемент нь контентийн ард контент нэмж чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Pseudo-элемент ::selection</h3>
    <p className="">::selection Pseudo-элемент нь сонгосон элементийг тохируулж өгнө.::selection-д дараах шинж чанаруудыг ашиглаж болно: color, background, cursor болон outline.</p>
    <li className=""><code className="text-pink-500">::selection</code></li>
    <li className=""><code className="text-pink-500">::selection</code></li>
    <li className=""><code className="text-pink-500">color</code></li>
    <li className=""><code className="text-pink-500">background</code></li>
    <li className=" "><code className="text-pink-500">cursor</code></li>
    <li className=""><code className="text-pink-500">outline</code></li>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;