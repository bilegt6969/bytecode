import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Тайлбар /Comments/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Коммент нь програмын кодыг тайлбарлаж, уншихад хялбар болгож өгдөг.</p>
    <p className="mb-4 mt-4">Мөн кодыг туршиж үзэхэд тайлбар чухал үүрэг гүйцэтгэдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Нэг мөрийн тайлбар</h3>
    <p className="mb-4 mt-4">Нэг мөрийн тайлбар нь     <code className="mb-4 mt-4"><code className="text-pink-500">&#47;&#47;	 </code></code>
 аар эхэлдэг.    <code className="mb-4 mt-4"><code className="text-pink-500">&#47;&#47;	 </code></code>
 бичсэн текст нь кодод хамаарахгүй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
  
    <p className="mb-4 mt-4">Кодын мөр бүрийн араас тайлбар өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Олон мөрийн тайлбар</h3>
    <p className="mb-4 mt-4">Олон мөрийн тайлбар нь     <code className="mb-4 mt-4"><code className="text-pink-500">&#47;*</code></code>
 хооронд     <code className="mb-4 mt-4"><code className="text-pink-500">*/ </code></code>
бичигдэнэ.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Кодыг тайлбар болгох</h3>
    <p className="mb-4 mt-4">Кодыг туршиж үзэхэд тайлбар чухал үүрэг гүйцэтгэдэг бөгөөд тухайн кодын урд     <code className="mb-4 mt-4"><code className="text-pink-500">&#47;&#47;	 </code></code>
 нэмж өгснөөр тухайн код тайлбар болж програмын кодод нөлөөлж чадахгүй  болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">&#47;&#47;document.getElementById(&quot;test1&quot;).innerHTML = &quot;Энэ бол тогтмол утга&quot;;
document.getElementById(&quot;test2&quot;).innerHTML = &quot;Энэ бол javascript код&quot;;</code></code>
    <p className="mb-4 mt-4">Нэг хэсэг буюу блок кодыг тайлбар болгох үед     <code className="mb-4 mt-4"><code className="text-pink-500">&#47;* ... *&#47; </code></code>
 ашиглана.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
   
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;