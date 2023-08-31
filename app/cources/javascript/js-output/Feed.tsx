import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Гаралт /Output/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript нь өгөгдлийг хэд хэдэн ялгаатай аргаар дэлгэцэд &quot;display&quot; харуулах боломжтой.</p>
    <li className="mb-4 mt-4"><code className="text-pink-500">inner.HTML</code></li>
    <li className="mb-4 mt-4"><code className="text-pink-500">document.write()</code></li>
    <li className="mb-4 mt-4"><code className="text-pink-500">windows.alert()</code></li>
    <li className="mb-4 mt-4"><code className="text-pink-500">console.log()</code></li>
    <h3 className="font-bold text-4xl mb-4 mt-8">innerHTML-г ашиглаж үзье</h3>
    <p className="mb-4 mt-4">HTML элементэд нэвтэрхийн тулд JavaScript-н     <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(id) </code></code>
 аргыг ашиглана. Энэ арга нь HTML элементийг ID-р нь хайж олох болно.    <code className="mb-4 mt-4"><code className="text-pink-500">inner.HTML</code></code>
 шинж чанар нь тухайн ID тай HTML элементэд байрлах контентийг зааж өгнө.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">HTML элементийн агуулж буй өгөгдлийг     <code className="mb-4 mt-4"><code className="text-pink-500">innerHTML </code></code>
 шинж чанарыг ашиглан өөрчлөн харуулах нь нийтлэг хэрэглэгддэг арга юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">document.write()-г ашиглаж үзье</h3>
    <p className="mb-4 mt-4">Туршилтын зорилгоор     <code className="mb-4 mt-4"><code className="text-pink-500">document.write()</code></code>
-г ашиглахад тохиромжтой.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <p className="mb-4 mt-4">HTML хуудсанд     <code className="mb-4 mt-4"><code className="text-pink-500">document.write()</code></code>
-г ачаалж дуудвал HTML хуудсыг бүхэлд нь устгаж үр дүнг харуулах болно.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    


    <h3 className="font-bold text-4xl mb-4 mt-8">console.log()-г ашиглаж үзье</h3>
    <p className="mb-4 mt-4">debug буюу алдаа засах зорилгоор console.log()-г ашигладаг.</p>
    <p className="mb-4 mt-4">Debug-н талаар илүү дэлгэрэнгүй дараагийн хичээл дээр үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
 
    </div>

  );
}

export default DataComponent;