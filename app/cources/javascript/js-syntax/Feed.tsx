import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Бичиглэл /Syntax/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript дээр хэрхэн програм бүтээдэг вэ? ямар дүрэм үйлчилдэг вэ? гэдэг талаар JavaScript Syntax хичээлээс бид олж мэдэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Утга /Value/</h3>
    <p className="mb-4 mt-4">JavaScript syntax нь тогтмол ба хувьсах гэсэн хоёр төрлийн утгыг тодорхойлдог.Тогтмол утгыг УТГА гэж нэрлэдэг бол хувьсах утгыг ХУВЬСАГЧ гэж нэрлэдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Тогтмол Утга</h3>
    <p className="mb-4 mt-4">JavaScript-д тогтмол утга бичих дүрэм.Number буюу ТОО эсвэл АРАВТЫН БУТАРХАЙ-г бичихэд хоорондоо ялгаа байхгүй бөгөөд доорх байдлаар бичнэ.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test1&quot;).innerHTML = 1010;
document.getElementById(&quot;test2&quot;).innerHTML = 10.10;</code></code>
    <p className="mb-4 mt-4">String буюу ТЕКСТ-г &quot;хоёр&quot; эсвэл &apos;нэг&apos; quote-д бичиж болох бөгөөд үр дүн нь адил байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test1&quot;).innerHTML = &quot;Сур сур бас дахин сур&quot;;
document.getElementById(&quot;test2&quot;).innerHTML = &apos;Сур сур бас дахин сур&apos;;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Хувьсагч /Variables/</h3>
    <p className="mb-4 mt-4">Програмчлалын хэлэнд өгөгдлийн утгыг хадгалах зорилгоор хувьсагчийг ашигладаг.JavaScript-д хувьсагчийг зарлахдаа var түлхүүр үгийн ашигладаг бол, тэнцүүгийн тэмдгийг хувьсагчид утга олгоход ашигладаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4">x хувьсагч зарлаад зарласан хувьсагчид 15 гэсэн утга олгож байна.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">var x;
x = 15;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Оператор /Operators/</h3>
    <p className="mb-4 mt-4">JavaScript нь арифметик операторуудыг (+ - * /) ашиглан утгыг тооцоолж чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test&quot;).innerHTML = (15 + 6) * 10;</code></code>
    <p className="mb-4 mt-4">JavaScript нь хувьсагчид утга олгохын тулд (=) операторыг ашигладаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Илэрхийлэл /Expressions/</h3>
    <p className="mb-4 mt-4">Илэрхийлэл гэдэг нь утга, хувьсагч ба операторын нийлбэр бөгөөд утгыг ТООЦООЛЖ өгдөг. Тооцооллыг ҮНЭЛГЭЭ гэж нэрлэдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>

    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">15 * 11 үр дүн 165 буюу үнэлгээ нь 165 байна.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test&quot;).innerHTML = 15 * 11;</code></code>
    <p className="mb-4 mt-4">Илэрхийлэл нь хувьсагчийн агуулсан утгыг илэрхийлж чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
   
    <p className="mb-4 mt-4">Утга нь тоо, текст гэх мэт өөр өөр төрөлтэй байж болох бөгөөд илэрхийллийн үнэлгээг гаргаж болно.Доорх жишээнд: &quot;Болд&quot; + &quot;&quot; + &quot;Дорж&quot; гэвэл үнэлгээ нь &quot;Болд Дорж&quot; буюу хоёр string-г залгаж харуулдаг. STRING төрөл дээр NUMBER төрлийг нэмэхэд тоон төрлийг текст төрөлд хувиргаж  &quot;Болд&quot; + &quot; &quot; + 5; -н ҮНЭЛГЭЭ нь &quot;Болд 5&quot; буюу утгуудыг залгаж буцаана.</p>
    <p className="mb-4 mt-4">Харин STRING төрлөөс NUMBER төрлийг хасах &quot;Болд&quot; + &quot; &quot; - 5; үед JavaScript нь NaN буюу /Not-a-Number/ тоо биш байна гэсэн утга буцаадаг.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[7].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Түлхүүр үг /Keywords/</h3>
    <p className="mb-4 mt-4">JavaScript-д түлхүүр үг нь гүйцэтгэх үйлдлийг тодорхойлдог.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">var</code></code>
 түлхүүр үгийг бид хувьсагч зарлаж байна гэж хардаг бол JavaScript нь хөтчид хэлж өгдөг юм байна.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[8].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Тайлбар /Comments/</h3>
    <p className="mb-4 mt-4">Commnet-г бид програмчлалын хэлэнд кодын тайлбарт ашигладаг бөгөөд JavaScript-д тайлбарыг slash буюу налуу зураасны араас // эсвэл /* хооронд */ бичдэг бөгөөд тайлбар нь програмын кодод ямар нэгэн нөлөө үзүүлэхгүй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[9].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Тодорхойлогч /Identifiers/</h3>
    <p className="mb-4 mt-4">JavaScript-д тодорхойлогч нь хувьсагч, функцийг нэрлэхэд ашигладаг. Ингэснээр регистр цаанаа хувьсагч, функц, түлхүүр үг болон бусад элементийг таньдаг гэж ойлгож болно.</p>
    <p className="mb-4 mt-4">JavaScript-д эхний тэмдэгт нь үсэг, доогуур зураас (_) эсвэл долларын тэмдэг ($) байж болно. Мөн нэрийн дунд үсэг, цифр, доогуур зураас эсвэл долларын тэмдэг байж болно.</p>
    <p className="mb-4 mt-4">Анхаар: Эхний тэмдэгт нь тоо байж болохгүй. Ингэснээр JavaScript тоон утгаас ялгаж авч үздэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Мэдрэмтгий /Case Sensitive/</h3>
    <p className="mb-4 mt-4">JavaScript нь том болон жижиг үсгийг ялгаатай гэж авч үздэг. Иймд     <code className="mb-4 mt-4"><code className="text-pink-500">var</code></code>
 хувьсагчийг     <code className="mb-4 mt-4"><code className="text-pink-500">var</code></code>
 эсвэл VAR гэх мэт бичвэл ажиллахгүй. Учир нь JavaScript-н танигч регистрээс зөвхөн жижиг var тай тэнцүү утга хайх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript ба Camel Case</h3>
    <p className="mb-4 mt-4">Өнгөрсөн хугацаан програмистууд олон үгнээс бүрдсэн хувьсагчийн нэрийг нэгтгэх өөр өөр арга ашиглаж байжээ.</p>
    <p className="mb-4 mt-4">Доогуур зураас: first_name, last_name, inter_city, ...</p>
    <p className="mb-4 mt-4">Дундуур зураас: first-name, last-name, inter-city, ...</p>
    <p className="mb-4 mt-4">Анхаар: JavaScript нь хувьсагчийн нэрэнд дундуур зураас ашиглахыг зөвшөөрдөггүй. Учир нь JavaScript дундуур зураасыг хасах тэмдгээр ойлгох болно.</p>
    <p className="mb-4 mt-4">Том Camel Case: FirstName, LastName, InterCity, ...</p>
    <p className="mb-4 mt-4">Жижиг Camel Case: firstName, lastName, interCity, ...</p>
    <p className="mb-4 mt-4">Эдгээр аргууд нь бүгд програмистуудад кодыг уншихад хялбар болгож өгдөг бөгөөд сүүлийн үеийн хандлага Жижиг Camel Case болсон байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Tэмдэгтийн багц /Character Set/</h3>
    <p className="mb-4 mt-4">JavaScript нь Юникод /Unicode/ тэмдэгтүүдийн багцыг ашигладаг.</p>
    <p className="mb-4 mt-4">Юникод гэдэг нь дэлхий дээрх тэмдэг, тэмдэглэгээ, цэг, цэг таслал, ... гэх мэт бүх тэмдэгтийг хамардаг стандарт гэж ойлгож болно.</p>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;