import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Халих /Owerflow/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS     <code className="mb-4 mt-4"><code className="text-pink-500">overflow </code></code>
 шинж чанар нь тухайн элементэд байрлах контентын эзлэх талбайг хянадаг.</p>
    <p className="mb-4 mt-4">Үр дүнг харах</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Overflow</h3>
    <p className="mb-4 mt-4">CSS     <code className="mb-4 mt-4"><code className="text-pink-500">overflow </code></code>
 шинж чанар нь тухайн элементэд байрлах контентын эзлэх талбайг хянаж scrollbar-тай байх үгүйг шийднэ.CSS     <code className="mb-4 mt-4"><code className="text-pink-500">overflow </code></code>
 шинж чанар нь дараах утгуудтай.</p>
    <li className=""><code className="text-pink-500">overflow</code></li>
    <li className=""><code className="text-pink-500">overflow</code></li>
    <li className=""><code className="text-pink-500">visible</code></li>
    <li className=""><code className="text-pink-500">hidden</code></li>
    <li className=""><code className="text-pink-500">scroll</code></li>
    <li className=""><code className="text-pink-500">auto</code></li>
    <p className="mb-4 mt-4">Тэмдэглэл:     <code className="mb-4 mt-4"><code className="text-pink-500">overflow </code></code>
 шинж чанар нь зөвхөн блок элементэд өндрийг нь зааж өгсөн тохиолдолд ажиллах болно. Тэмдэглэл: MAC үйлдлийн систем дээр scrollbar нь зөвхөн ашиглагдаж байх үед харагдах болно. /overflow:scroll зааж өгсөн ч гэсэн/</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">overflow: visible</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">overflow</code></code>
-н анхдагч утга нь     <code className="mb-4 mt-4"><code className="text-pink-500">visible </code></code>
 буюу харагдахуйц шинж чанартай байдаг бөгөөд элементийн агуулж буй контентын халилтыг дэлгэцэд үзүүлэх болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">overflow: hidden</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">hidden </code></code>
 далд утга элементийн агуулж буй контентын халилтыг нуух болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">overflow: scroll</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">scroll </code></code>
 утгыг зааж өгснөөр элементийн дотор талд дээш, доош болон баруун, зүүн чиглэлд scrollbar гарч ирнэ. Ингэснээр контентийн агуулгыг гүйлгэж үзэх боломжтой болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">overflow: auto</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">auto </code></code>
 утга нь     <code className="mb-4 mt-4"><code className="text-pink-500">scroll</code></code>
-той төстэй боловч зөвхөн шаардлагатай үед ажиллах болно.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">overflow: x ба overflow: y</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">overflow: x </code></code> нь хэвтээ тэнхлэгт буюу зүүн болон баруун чиглэлд, харин     <code className="mb-4 mt-4"><code className="text-pink-500">overflow: y </code></code>
 нь босоо тэнхлэгт буюу дээшээ болон доошоо чиглэлд scroll-г зааж өгч болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4"></p>
    
    </div>
  );
}

export default DataComponent;