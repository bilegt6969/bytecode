import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Тэмдэгтийн аргууд /String Methods/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Тэмдэгтийн аргууд нь Тэмдэгттэй ажиллахад тань туслах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Тэмдэгтийн урт</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">length </code></code>
 аргыг ашиглан тэмдэгтийн уртыг буцааж болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">String-с string-г хайх /Find/</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">IndexOf () </code></code>
 аргыг ашиглан string-с string-г хайж болно. String-н байрлалыг олоод эхний тэмдэгтийн индекс хаягийг буцаана.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }}/>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">lastIndexOf() </code></code>
 аргыг ашиглавал string-с string-г хойноос нь хайж олоод индекс хаягыг буцаах болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4">Хэрэв string-д байхгүй утгыг хайвал     <code className="mb-4 mt-4"><code className="text-pink-500">lastIndexOf() </code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">indexOf() </code></code>
 нь -1 утга буцаана.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">lastIndexOf() </code></code>
болон     <code className="mb-4 mt-4"><code className="text-pink-500">indexOf() </code></code>
 арга нь string-г хайж эхлэх байрлалыг параметрээр зааж өгч болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">String-с string-г хайх /Search/</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">Search() </code></code>
 арга нь заасан утгын string-г хайж олоод тохирох байрлалыг буцаана.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">Search() </code></code>
 нь параметрээр дамжуулсан утгыг хайж эхний тохиолдлыг буцаадаг бол     <code className="mb-4 mt-4"><code className="text-pink-500">indexOf() </code></code>
 нь дараагийн тохиолдлыг буцаах боломжтой байдгаараа хоорондоо ялгаатай юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">String-г задлах</h3>
    <p className="mb-4 mt-4">String-г задлах 3 арга байдаг.</p>
    <li className="mb-4 mt-4"><code className="text-pink-500">slice(эхлэл, төгсгөл)</code></li>
    <li className="mb-4 mt-4"><code className="text-pink-500">substring(эхлэл, төгсгөл)</code></li>
    <li className="mb-4 mt-4"><code className="text-pink-500">substr(эхлэл, урт)</code></li>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;