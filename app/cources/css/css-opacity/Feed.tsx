import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Opacity</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">opacity </code></code>
 шинж чанарт элементийн тунгалаг байдлыг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Тунгалаг зураг /Transparent/</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">opacity </code></code>
 шинж чанарт багаас илүү тод гэсэн утгыг 0.0 - 1.0-н хооронд зааж өгнө.</p>
    <p className="mb-4 mt-4">opacity 1Анхны утга /Default/</p>
    <p className="mb-4 mt-4">opacity 0.5</p>
    <p className="mb-4 mt-4">opacity 0.2</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Тунгалаг зураг Hover Effect</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">opacity </code></code>
 шинж чанартай     <code className="mb-4 mt-4"><code className="text-pink-500">:hover </code></code>
 сонгогчийг хамт ашиглах боломжтой.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Тунгалаг BOX</h3>
    <p className="mb-4 mt-4">Бид     <code className="mb-4 mt-4"><code className="text-pink-500">opacity </code></code>
 шинж чанарыг элементийн дэвсгэрт ашиглахад тухайн элементийн бүх хүү элемент тунгалаг байдлыг удамшуулан авдаг.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Тунгалаг байдал RGBA</h3>
    <p className="mb-4 mt-4">Хэрэв     <code className="mb-4 mt-4"><code className="text-pink-500">opacit </code></code>
 шинж чанарыг хүү элементэд зөвшөөрөхгүй, зөвхөн арын дэвсгэрт утга олгохыг хүсвэл RGBA өнгөний утгыг ашиглаарай.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />

    </div>
  );
}

export default DataComponent;