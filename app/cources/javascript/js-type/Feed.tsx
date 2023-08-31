import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


  
function DataComponent() {
  const codeText = `
  var nas = 55;                           // Number
var ovog = "Дорж";                      // String
var x = {ner:"Болд", ovog:"Дондог"};    // Object`
const codeText1 = `
var x = 18 + "ШУТИС-КТМС"
`
const codeText2 = `
var x = "18" + "ШУТИС-КТМС"
`

  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Өгөгдлийн төрөл</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript хувьсагч нь олон төрлийн хувьсагч хадгалах боломжтой: тоо, тэмдэгт, объект, ... гэх мэт.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <h3 className="font-bold text-4xl mb-4 mt-8">Өгөгдлийн төрлийн тухай ойлголт</h3>
    <p className="mb-4 mt-4">Програмчлалын хувьд өгөгдлийн төрөл гэдэг зүйл чухал ойлголт байдаг бөгөөд хувьсагчтай ажиллахын тулд өгөгдлийн төрлийг зайлшгүй мэдэж байх шаардлагатай.</p>
    <p className="mb-4 mt-4">Өгөгдлийн төрлийг мэдэхгүйгээр компьютер асуудлыг аюулгүй шийдвэрлэж чадахгүй.</p>
    <div>
      <CopyBlock
        text={codeText1}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">18 + &quot;ШУТИС-КТМС&quot; нь алдаа гарах уу? эсвэл үр дүнд хүрэх үү?</p>
    <p className="mb-4 mt-4">Дээрх жишээ нь доорх байдалтай байна</p>
    <div>
      <CopyBlock
        text={codeText2}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    <p className="mb-4 mt-4">Javascript нь тоо + тэмдэг буюу /number + string/ үед тоог тэмдэгт гэж үздэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <p className="mb-4 mt-4">JavaScript-д илэрхийллийн үйлдлийн дарааллыг зүүнээс баруунд чиглэлд гүйцэтгэдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <p className="mb-4 mt-4">Эхний жишээнд, Үйлдлийн дарааллын дагуу 18 + 6 үйлдлийг гүйцэтгээд, гарсан үр дүн 24 + ШУТИС-КТМС үйлдлийг гүйцэтгэнэ.</p>
    <p className="mb-4 mt-4">Хоёр дахь жишээнд, Үйлдлийн дарааллын дагуу ШУТИС-КТМС + 18 үйлдлийг гүйцэтгээд, гарсан үр дүн ШУТИС-КТМС18 + 6 үйлдлийг гүйцэтгэнэ.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript-н төрлүүд нь динамик</h3>
    <p className="mb-4 mt-4">Нэг хувьсагчид өөр өөр төрлийн өгөгдөл хадгалах боломжтой бөгөөд үүнийг Динамик Төрлүүдтэй гэж үздэг байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript String</h3>
    <p className="mb-4 mt-4">String нь тэмдэгтээс бүрдэнэ: &quot;Дорж овогтой Болд&quot;</p>
    <p className="mb-4 mt-4">String-г qoute-д бичнэ. Qoute нь дан &apos; &apos; эсвэл давхар &quot; &quot; байж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">Хэрэв та String-д qoute ашиглах шаардлага гарвал Qoute нь дан &apos; &apos; үед давхар &quot; &quot;, давхар үед дан qoute ашиглах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Тоо буюу Number</h3>
    <p className="mb-4 mt-4">JavaScript-д тоон төрлүүд нь бүгд number төрөлд хамаарна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[7].Url }} />
    <p className="mb-4 mt-4">Хэт их эсвэл хэт бага тоог шинжлэх ухааны (exponential)-г тэмдэглэгээгээр бичиж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[8].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Үнэн эсвэл Худал буюу Booleans</h3>
    <p className="mb-4 mt-4">Booleans нь     <code className="mb-4 mt-4"><code className="text-pink-500">true </code></code>
 буюу үнэн эсвэл     <code className="mb-4 mt-4"><code className="text-pink-500">false </code></code>
 буюу худал гэсэн хоёр утгын аль нэгийг буцаадаг.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[9].Url }} />
    <p className="mb-4 mt-4">Booleans-г нөхцөл шалгахад түлхүү ашигладаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Arrays буюу Массив</h3>
    <p className="mb-4 mt-4">JavaScript-д массив-г [] хаалтад бичдэг</p>
    <p className="mb-4 mt-4">Массивийн item-ууд таслалаар тусгаарлагдана.</p>
    <p className="mb-4 mt-4">Доорх код нь schools нэртэй гурван items-тай массив зарласан бөгөөд items-ууд нь сургуулийн нэрийг агуулж байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[10].Url }} />
    <p className="mb-4 mt-4">Массивын индекс хаяг нь 0 ээс эхэлдэг. Тэгэхлээр эхний item [0] хоёр дахь [1], ... гэх мэт байрлах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Objects буюу Объект</h3>
    <p className="mb-4 mt-4">JavaScript-д массив-г {} хаалтад бичдэг</p>
    <p className="mb-4 mt-4">Объектыг name:value гэж шинж чанар болон утгыг хосоор нь бичдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[11].Url }} />
    <p className="mb-4 mt-4">Дээрх Жишээнд (schools) объект нь schoolName, startDate, color гэсэн гурван шинж чанартай байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Typeof оператор</h3>
    <p className="mb-4 mt-4">JavaScript хувьсагчийн төрлийг     <code className="mb-4 mt-4"><code className="text-pink-500">typeof </code></code>
 ашиглан олж болно.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">typeof </code></code>
 оператор нь хувьсагчийн төрлийг буцаадаг.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[12].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Undefined</h3>
    <p className="mb-4 mt-4">JavaScript-д хувьсагч зарлаад утга олгоогүй байх үед утга нь нь     <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 буюу утга тодорхойгүй байна.</p>
    <p className="mb-4 mt-4">Энэ үед хувьсагчийн төрөл ч мөн адил     <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 буюу төрөл тодорхойгүй байна.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[13].Url }} />
    <p className="mb-4 mt-4">Аливаа хувьсагчид     <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 утга олгох замаар хувьсагчийн утгыг хоосолж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[14].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Хоосон утга /Empty Value/</h3>
    <p className="mb-4 mt-4">Хоосон утга нь     <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 буюу тодорхойгүй гэсэн үг биш юм.</p>
    <p className="mb-4 mt-4">Хоосон утга нь утга болон төрлийг хоёууланг нь агуулж байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[15].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Null</h3>
    <p className="mb-4 mt-4">Javascript-д     <code className="mb-4 mt-4"><code className="text-pink-500">null </code></code>
 нь хоосон буюу 0 гэсэн утгыг илэрхийлдэг.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">null </code></code>
 утга тодорхой, хоосон гэсэн санааг илэрхийлж байгаа тул өгөгдлийн төрөл нь object байдаг.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[16].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Undefined болон Null-н ялгаа.</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">null</code></code>
-н утга нь тэнцүү боловч төрөл нь ялгаатай байна.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">undefined </code></code>
 хоосон зарласан хувьсагчийн анхны утга бол, хэрэглэж байгаад дууссан гэж үзсэн үед хувьсагчид     <code className="mb-4 mt-4"><code className="text-pink-500">null </code></code>
 утга олгодог байна.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[17].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Complex Data.</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">typeof </code></code>
 оператор нь хоёр комплекс төрлийн аль нэгийг буцаах болно.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">object </code></code>
    <code className="mb-4 mt-4"><code className="text-pink-500">function</code></code>
</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">object </code></code>
 төрөлд объект, массив болон null хамаарна. Функц нь     <code className="mb-4 mt-4"><code className="text-pink-500">object </code></code>
 төрөлд хамаарахгүй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[18].Url }} />

    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;