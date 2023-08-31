import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


  
function DataComponent() {
   const codeText = `
   a + b = b + a,
   a + (b + c) = (a + b) + c, 
   a(bc) = (ab)c , ... гэх мэт`
   const codeText1 = `
   var = schoolName
   `
   const codeText2 = `
   schoolName = "ШУТИС-КТМС"
`
   const codeText3 = `
   var schoolName = "ШУТИС-КТМС"
`
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Хувьсагч /Variables/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript нь өгөгдлийн утгыг хадгалах савыг хувьсагч гэдэг.</p>
    <p className="mb-4 mt-4">Доорх жишээнд     <code className="mb-4 mt-4"><code className="text-pink-500">x</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">y</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">z</code></code>
 гэсэн гурван төрлийн сав буюу хувьсагчийг зарласан байна. Цаашид бид Хувьсагч гэдэг нэрийг ашиглах болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">Дээрх жишээнд:</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">x</code></code>
    <code className="mb-4 mt-4"><code className="text-pink-500">y</code></code>
    <code className="mb-4 mt-4"><code className="text-pink-500">z</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Алгебртай адилхан</h3>
    <p className="mb-4 mt-4">АЛГЕБРЫН талаар ерөнхий ойлголтоо хамтдаа сэргээе.</p>
    <p className="mb-4 mt-4">Алгебр бол ерөнхийлөл, хийсвэрлэлийн үндсэн дээр ТЭМДЭГТЭЭР СЭТГЭХ УХААН юм.Хаалт, үйлдлийн тэмдгээр холбогдсон, үсэг ба тооноос тогтох илэрхийллийг Алгебрын илэрхийлэл гэнэ.</p>
    <p className="mb-4 mt-4">ЖИШЭЭ НЬ</p>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">huu, ohin болон niit хувьсагчийг зарлаж байгаад жишээн дээр туршиж үзье.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <p className="mb-4 mt-4">Алгебрийн нэгэн адил програмчлалын хувьд бид хувьсагчийг илэрхийлэл болгон ашигладаг. (niit = huu + ohin).</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Тодорхойлогч /Identifiers/</h3>
    <p className="mb-4 mt-4">JavaScript-д хувьсагчийг өвөрмөц нэрээ тодорхойлж болно.Хувьсагчид богино нэр (x, y) эсвэл илүү тодорхой нэр (ner, nas, huis) өгч болно.</p>
    <p className="mb-4 mt-4">Хувьсагчид нэр өгөх дүрэм:</p>
    <p className="mb-4 mt-4">JavaScript нь том болон жижиг үсгийг ялгаатайд авч үздэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Даалгаврын оператор /Assignment Operator/</h3>
    <p className="mb-4 mt-4">JavaScript-д тэнцүү (    <code className="mb-4 mt-4"><code className="text-pink-500">=</code></code>
) тэмдэг нь &quot;Assignment&quot; буюу даалгаврын оператор юм. &quot;тэнцүү&quot; тэмдэг биш юм. Үүгээр алгебраас ялгаатай юм. Доорх жишээ нь алгебр дээр утгаггүй ойлголт юм.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4">Дээрх жишээнд даалгаврын оператор нь x хувьсагчийн утгыг 20 -р нэмэгдүүлээд буцаад x хувьсагчид нийт утгыг олгож байна. Энэ нь алгебраас ялгаатай програмчлалын хэлний томоохон шийдлүүдийн нэг юм.</p>
    <p className="mb-4 mt-4">JavaScript &quot;тэнцүү&quot; операторыг     <code className="mb-4 mt-4"><code className="text-pink-500">== </code></code>
 гэж бичдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Өгөгдлийн төрөл /Data Type/</h3>
    <p className="mb-4 mt-4">JavaScript-н хувьсагчид тоон болон текст төрлийн утга олгож болно.програмчлалын хувьд текст төрлийн утгатай хувьсагчийг text strings гэж дууддаг.JavaScript нь олон төрлийн өгөгдлийг зохицуулж чаддаг. Бид дараагийн хичээлээр дэлгэрэнгүй үзэх болно.String-г &quot; &quot; буюу &apos; &apos; quote-д бичнэ. Харин тоог quote-гүй шууд бичнэ.Хэрэв &quot; &quot; буюу &apos; &apos; quote-д тоог бичиж өгвөл string төрлийн хувьсагч гэж ойлгох болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Өгөгдлийн төрөл /Data Type/</h3>
    <p className="mb-4 mt-4">JavaScript-н хувьсагчид тоон болон текст төрлийн утга олгож болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>

    <h3 className="font-bold text-4xl mb-4 mt-8">Хувьсагч үүсгэх буюу тунхаглах /Declaring (Creating)/</h3>
    <p className="mb-4 mt-4">JavaScript дээр хувьсагч үүсгэхийг &quot;declaring&quot; буюу тунхаглах гэж нэрлэдэг бөгөөд var түлхүүр үгээр зарлана:</p>
    <div>
      <CopyBlock
        text={codeText1}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">Тунхагласны дараа хувьсагч ямар ч утгагүй хоосон байдаг бөгөөд үүнийг техникийн хувьд тодорхойгүй утгатай байна гэж ойлгож болно.</p>
    <p className="mb-4 mt-4">Хувьсагчид утга ХУВААРИЛАХ буюу бидний ярьж сурснаар ОЛГОХ-д &quot;тэнцүү&quot; тэмдгийг ашигладаг.</p>
    <div>
      <CopyBlock
        text={codeText2}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">Хувьсагчийг зарлаж байх үед утга олгож болно.</p>
    <div>
      <CopyBlock
        text={codeText3}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">HTML <span className="text-pink-500">&lt;p&gt;</span> элементийг id-р нь олж хувьсагчийн утгыг дэлгэцэд гаргаж үзье.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Нэг мэдэгдэлд олон хувьсагч зарлах</h3>
    <p className="mb-4 mt-4">Нэг &quot;statment&quot; буюу мэдэгдэлд олон хувьсагчийг таслалаар тусгаарлан зарлаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">var schoolName = &quot;ШУТИС-КТМС&quot;, student = &quot;Болд&quot;, credit = 3.5;</code></code>
    <p className="mb-4 mt-4">Хувьсагчийг олон мөрөнд зарлаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Утга тодорхойгүй /Value = Undefined/</h3>
    <p className="mb-4 mt-4">Компьютерын програм нь хувьсагчийг анх зарлахдаа ямар нэгэн утгагүй зарладаг. Хувьсагчийн утга нь ямар нэгэн тооцоолол хийдэг бөгөөд, хэрэглэгчийн гараас утгыг сүүлд нь авч болно.</p>
    <p className="mb-4 mt-4">Ямар нэгэн утаггүй зарласан хувьсагчийн утга нь &quot;Undefined&quot; буюу тодорхойгүй байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[7].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">var schoolName;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Хувьсагчийг дахин зарлах</h3>
    <p className="mb-4 mt-4">Их хэмжээний код бичих явцад, эсвэл өөр хүний програмыг цааш хөгжүүлэх шаардлага гарах үед өмнө зарласан хувьсагчийг дахин зарлах тохиолдол програмистын хувьд багагүй тохиолддог.</p>
    <p className="mb-4 mt-4">Гэвч javascript-д өмнөх хувьсагчийн утга хэвээр байх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[8].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript арифметик</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">+</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">-</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">*</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">/</code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">=</code></code>
 операторуудыг ашиглан арифметик үйлдэл хийж үр дүнг хувьсагчид олгож болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[9].Url }} />
    <p className="mb-4 mt-4">Текст буюу string дээр string-г нэмж болно, энэ нь нэгтгэх буюу хоёр string-г     <code className="mb-4 mt-4"><code className="text-pink-500">+ </code></code>
 тэмдэг ашиглан залгаж харуулж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[10].Url }} />
    <p className="mb-4 mt-4">Хувьсагчид &quot;15&quot; гэсэн утга олговол JavaScript үүнийг тоо биш текст төрлийн хувьсагч гэж ойлгох болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[11].Url }} />
    <p className="mb-4 mt-4">JavaScript-д (тоон + текст) үед тоог текст төрөлд шилжүүлж хоёр утгыг нэгтгэж харуулдаг. иймд дээрх жишээний үр дүн үйлдлийн дарааллаас хамаарч 1578 байна.</p>
    <p className="mb-4 mt-4">Хэрэв string төрлийг тоон утгын ард (7 + 8 + &quot;15&quot;) оруулах үед үйлдлийн дарааллын дагуу эхний хоёр арифметик үйлдэл хийгдсэний дараа үр дүнг сүүлийн утгатай залгаж харуулах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[12].Url }} />
    </div>
  );
}

export default DataComponent;