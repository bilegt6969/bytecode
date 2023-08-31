import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


  
function DataComponent() {
  const codeText = `
  function myFunction() {
    document.getElementById("test").innerHTML = "External javascript код.";
  }`
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Мэдэгдэл /Statement/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">Компьютерын гүйцэтгэх зааврын жагсаалтыг програм гэдэг.Програмын хэлээр эдгээр зааврын дагуу хийгдэж буй програмыг &quot;statement&quot; гэнэ.JavaScript програм бол &quot;statement&quot; буюу зааврын дагуу ажилладаг програм юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Мэдэгдэл /Statement/</h3>
    <p className="mb-4 mt-4">JavaScript Statement нь дараах зүйлийг агуулдаг.</p>
<li>Values буюу утга,</li>
<li>Operators,</li>
<li>Expressions буюу Илэрхийлэл,</li>
<li>Keywords буюу Түлхүүр үг,</li>
<li>Comments буюу тайлбар.</li>

    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <p className="mb-4 mt-4">Statement буюу Мэдэгдэл нь хөтөчид &quot;Сайн уу Javascript&quot; гэж хэвлэх болно. id=&quot;test&quot; элементэд.</p>
    <p className="mb-4 mt-4">JavaScript програм нь маш олон statement-с бүрдэх бөгөөд, statement буюу мэдэгдэл нь нэг нэгээр нь бичигдсэн дарааллын дагуу ажиллах болно.</p>
    <p className="mb-4 mt-4">JavaScript програм (мөн JavaScript мэдэгдэл)-г ихэвчлэн JavaScript код гэж дууддаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Цэг таслал /Semicolons ;/</h3>
    <p className="mb-4 mt-4">JavaScript statements буюу мэдэгдэлүүд нь таслалаар тусгаарласан байдаг бөгөөд харин мэдэгдэлийн төгсгөлд цэг таслал нэмнэ.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    
    <p className="mb-4 mt-4">Цэг таслалаар тусгаарлан нэг мөрөнд олон statement байж болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Хоосон зай /White Space/</h3>
    <p className="mb-4 mt-4">JavaScript-д хоосон зай авахад ямар нэгэн алдааг өгөхгүй бөгөөд хоосон зайг ашигласнаар програмын кодыг уншихад илүү хялбар байх болно.</p>
    <p className="mb-4 mt-4">Доорх кодын үр дүн нь ижил байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    

    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Мөрийн урт ба Мөр шилжих</h3>
    <p className="mb-4 mt-4">Програмын кодыг нэг мөрөнд 80-н тэмдэгтээс хэтрүүлэхгүй бичих нь програмын кодыг уншихад хамгийн тохиромжтой гэж үздэг юм байна</p>
    <p className="mb-4 mt-4">Хэрэв 80-н тэмдэгтээс урт болж байгаа тохиолдол (+ - * / =) гэх мэт операторуудын араас дараагийн мөрөнд шилжүүлэх нь хамгийн тохиромжтой гэж зөвлөж байна.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test&quot;).innerHTML = 
    &quot;Сайн байна уу&quot;;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Блок код</h3>
    <p className="mb-4 mt-4">JavaScript мэдэгдэлд кодын суман хаалтад буюу блокод бүлэглэж болно. U+007B...U+007DКодын блокуудын зорилго нь хамт хэрэгжүүлэх мэдэгдлийг тодорхойлж байна гэсэн үг юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;