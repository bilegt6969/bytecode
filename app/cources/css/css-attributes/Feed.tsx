import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Атрибут сонгогч</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Тодорхой атрибуттай буюу шинж чанартай эсвэл утгатай HTML элементийг загварчилж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS [атрибут] сонгогч</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">[атрибут] </code></code>
 сонгогч нь тухайн атрибут буюу шинж чанар бүхий элементийг сонгоход ашигладаг.Дараах жишээ нь бүх <span className="text-pink-500">&lt;a&gt;</span> элементээс target шинж чанарыг агуулсан элементийг сонгох болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS [атрибут="утга"] сонгогч</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">[атрибут="утга"] </code></code>
 сонгогч нь тодорхой шинж чанар, утгатай элементийг сонгоход ашигладаг.Дараах жишээ нь бүх <span className="text-pink-500">&lt;a&gt;</span> элементээс target шинж чанарыг агуулсан элементийг сонгох болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS [атрибут~="утга"] сонгогч</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">[атрибут~="утга"] </code></code>
 нь тухайн үгийг агуулсан атрибутын утгатай элементийг сонгоход ашигладаг.Дараах жишээ нь бүх элементийн title шинж чанарт "mountain" гэсэн дан, эсвэл хоосон зайгаар тусгаарласан утгатай элементүүдэд хамаарах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    
    </div>
  );
}

export default DataComponent;