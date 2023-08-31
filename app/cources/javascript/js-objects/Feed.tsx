import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


  
function DataComponent() {
  const codeText = `var car = {type:"Pickup", model:"55", color:"red"};`
  const codeText1 = `var car = {
    type:"Pickup", 
    model:"55", 
    color:"red"
    };`
    const codeText2 = `var x = new String();        // x-г String объект гэж зарлав
    var y = new Number();        // x-г Number объект гэж зарлав
    var z = new Boolean();       // x-г Boolean объект гэж зарлав
    `

  return (
    
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Обьект /Objects/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript-д хувьсагч нь өгөгдлийн утгыг хадгалах сав гэдгийг бид өмнөх хичээлээс мэдэж авсан.</p>
    <p className="mb-4 mt-4">Доорх кодод car гэсэн хувьсагчид (pickup) гэсэн энгийн утга олгож байна</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">Объект нь мөн адил хувьсагч бөгөөд, энгийн хувьсагчаас ялгаатай нь олон тооны утгыг хувьсагчид олгож чадна.</p>
    <p className="mb-4 mt-4">Javascript-д объект нь &#123;key: value, key: value, ... &#125; бүтэцтэй бичигддэг. (эхний key: value оруулаад таслалаар тусгаарлаж дараагийн key: value оруулна.)</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Объект тодорхойлох /Үүсгэх/</h3>
    <p className="mb-4 mt-4">JavaScript объектыг тодорхойлох буюу үүсгэхэд шууд шугаман хэлбэртэй байж болно.</p>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    <p className="mb-4 mt-4">Эсвэл ийм байж болно.</p>
    <div>
      <CopyBlock
        text={codeText1}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>

    
    <h3 className="font-bold text-4xl mb-4 mt-8">Объектын шинж чанар</h3>
    <p className="mb-4 mt-4">Объектын key:value хослолыг шинж чанар гэж нэрлэдэг.</p>
    <div className="">

<div className="max-w-md mx-auto mt-8">
  <table className="table-auto border w-full">
    <thead>
      <tr className="">
        <th className="px-4 py-2">ШИНЖ ЧАНАР</th>
        <th className="px-4 py-2">УТГА</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">type</td>
        <td className="border px-4 py-2">Pickup</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">model</td>
        <td className="border px-4 py-2">55</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">color</td>
        <td className="border px-4 py-2">red</td>
      </tr>
    </tbody>
  </table>
</div>

</div>

    


    <h3 className="font-bold text-4xl mb-4 mt-8">Объектын шинж чанар хандах</h3>
    <p className="mb-4 mt-4">Объектын шинж чанарт хандах хоёр арга байдаг.</p>


    <code className="mb-4 mt-4"><code className="text-pink-500">objectName.keyName</code></code>
    <p className="mb-4 mt-4">Эсвэл</p>

    <code className="mb-4 mt-4"><code className="text-pink-500">objectName[&quot;keyName&quot;]</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">car[&quot;color&quot;];</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Объектын аргууд</h3>
    <p className="mb-4 mt-4">Объектууд нь method буюу аргуудтай байж болно. Объектод гүйцэтгэх боломжтой үйлдлийг арга гэж ойлгох бөгөөд функцийг тодорхойлолт болгон шинж чанарт хадгалах боломжтой.</p>
    <div className="max-w-md mx-auto mt-8">
  <table className="table-auto border w-full">
    <thead>
      <tr className="">
        <th className="px-4 py-2">ШИНЖ ЧАНАР</th>
        <th className="px-4 py-2">УТГА</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">ovog</td>
        <td className="border px-4 py-2">Дорж</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">ner</td>
        <td className="border px-4 py-2">Болд</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">nas</td>
        <td className="border px-4 py-2">20</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">huis</td>
        <td className="border px-4 py-2">Эр</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">ovog ner</td>
        <td className="border px-4 py-2">function() &#123;return this.ovog + &quot; &quot; + this.ner;&#125;</td>
      </tr>
    </tbody>
  </table>
</div>

    <h3 className="font-bold text-4xl mb-4 mt-8">Объектын аргууд</h3>
    <p className="mb-4 mt-4">Объектууд нь method буюу аргуудтай байж болно. Объектод гүйцэтгэх боломжтой үйлдийг арга гэж ойлгох бөгөөд функцийг тодорхойлолт болгон шинж чанарт хадгалах боломжтой.</p>
    
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    


    <h3 className="font-bold text-4xl mb-4 mt-8">This түлхүүр үг</h3>
    <p className="mb-4 mt-4">Функцийн тодорхойлолтод     <code className="mb-4 mt-4"><code className="text-pink-500">This </code></code>
 түлхүүр үг нь тухайн функцийн эзэмшигчийг хэлдэг.</p>
    <p className="mb-4 mt-4">Дээрх жишээнд     <code className="mb-4 mt-4"><code className="text-pink-500">hun </code></code>
 объектын     <code className="mb-4 mt-4"><code className="text-pink-500">ovogNer </code></code>
 шинж чанарт функц агуулагдаж байгаа болохоор эзэмшигч нь     <code className="mb-4 mt-4"><code className="text-pink-500">hun </code></code>
 объект юм.</p>
    <p className="mb-4 mt-4">Өөрөөр хэлбэл     <code className="mb-4 mt-4"><code className="text-pink-500">this.ovog </code></code>
 гэдэг нь объектын <code className="mb-4 mt-4"><code className="text-pink-500">ovog </code></code> шинж чанарыг илэрхийлнэ.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">This </code></code>
 түлхүүр үгийн талаар дараагийн хичээлээр дэлгэрэнгүй үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Объектын арга буюу Method-д хандах</h3>
    <p className="mb-4 mt-4">Объектын арга буюу Method-д хандах бичиглэл.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">objectName.methodName()</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Эдгээр нь бүгд объект байна</h3>
    <p className="mb-4 mt-4">JavaScript-д хувьсагчийг     <code className="mb-4 mt-4"><code className="text-pink-500">new </code></code>
 гэсэн түлхүүр үгээр зарлавал хувьсагчийг объект болгон үүсгэнэ.</p>
 <div>
      <CopyBlock
        text={codeText2}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;