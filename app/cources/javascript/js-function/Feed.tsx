import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';
import Image from 'next/image';


  
function DataComponent() {
   const codeText = `
   function ner(parameter1, parameter2) {
      // Гүйцэтгэх кодын энд бичнэ
    }
    `
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Функц /Function/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript функц нь тодорхой үүргийг гүйцэтгэхэд зориулагдсан блок код юм.</p>
    <p className="mb-4 mt-4">JavaScript Функцийг дуудах үед функц нь ямар нэгэн үүргийг гүйцэтгэдэг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
   
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript функцийн бичиглэл.</h3>
    <p className="mb-4 mt-4">JavaScript-д фунцийн     <code className="mb-4 mt-4"><code className="text-pink-500">function </code></code>
 түлхүүр үгээр тодорхойлж, араас нь нэр, () хаалт байна.</p>
    <p className="mb-4 mt-4">Фунцийн нэр нь үсэг, тоо, доогуур зураас, долларын тэмдэгийг агуулж болно. /Хувьсагчтай адил/</p>
    <p className="mb-4 mt-4">() хаалтад параметрийн нэр байж болно. (parameter1, parameter2, ...)</p>
    <p className="mb-4 mt-4">функцийн гүйцэтгэх кодыг {} Хаалтад бичнэ.</p>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>



    <p className="mb-4 mt-4">функцийн параметрийг () хаалтад бичиж өгнө.</p>
    <p className="mb-4 mt-4">Функцийн аргумент гэдэг нь функц дуудагдах үед хүлээн авсан утга юм.</p>
    <p className="mb-4 mt-4">Аргументууд нь функц дотроо хувьсагч хэлбэрээр ажилладаг.</p>
    <p className="mb-4 mt-4">Функц нь бусад програмчлалын хэлний нэгэн адил Процедур буюу Дэд програмтай ижил юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Функц дуудах.</h3>
    <p className="mb-4 mt-4">функцийг дуудах үед функц доторх код ажиллах болно.</p>
    <li>Хэрэглэгч товч дарах үед,</li>
    <li>JavaScript кодоос автоматаар дуудах үед... гэх мэт.</li>
    <p className="mb-4 mt-4">Дараагийн хичээлээр функц дуудах талаар үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Функц буцаах</h3>
    <p className="mb-4 mt-4">JavaScript нь  <code className="mb-4 mt-4"><code className="text-pink-500">return </code></code>
 мэдэгдэл буюу statement-д хүрэхэд функц ажиллахаа болино.</p>
    <p className="mb-4 mt-4">Хэрэв мэдэгдэл буюу statement-с функцийг дуудсан бол JavaScript нь кодыг гүйцэтгэж үр дүнг буцаах болно.</p>
    <p className="mb-4 mt-4">Функцүүд нь ихэвчлэн буцах утгыг тооцоолдог бөгөөд дуудлага руу утгыг буцаадаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Яагаад функц ашиглах ёстой вэ?</h3>
    <p className="mb-4 mt-4">Кодыг нэг удаа тодорхойлж, дахин дахин ашиглах боломжийг функц бидэнд өгдөг.</p>
    <p className="mb-4 mt-4">Өөрөөр хэлбэл та нэг кодыг ашиглан олон янзын аргументаар олон удаа ашиглаж, өөр өөр үр дүнг авч чадна.</p>
    <Image width={600} height={600} alt='image' className='rounded-xl' src='http://www.abcd.mn/static/img/html/celsius.png'/>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Fahrenheit-г Celsius рүү шилжүүлэх функц бичиж үзье</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Функцийн үүргийг () оператор гүйцэтгэдэг</h3>
    <p className="mb-4 mt-4">Дээрх жишээн дээр тайлбарлавал     <code className="mb-4 mt-4"><code className="text-pink-500">toCels </code></code>
 нь функцийн объектыг,     <code className="mb-4 mt-4"><code className="text-pink-500">toCels() </code></code>
 функцийн үр дүнг илэрхийлдэг.</p>
    <p className="mb-4 mt-4">Хэрэв () операторгүй функцэд хандахад функцийн үр дүнг биш харин функцийн тодорхойлолтыг буцаах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Функцийг хувьсагчийн утга болгон ашиглах</h3>
    <p className="mb-4 mt-4">Хувьсагчийг бүх төрлийн томьёо, даалгавар, тооцоонд ашигладагтай адил функцийг ашиглаж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4">Та илүү ихийн манай дараа дараагийн хичээлээс үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Local Хувьсагч</h3>
    <p className="mb-4 mt-4">Функц дотор зарлагдсан хувьсагчийг LOCAL хувьсагч гэдэг.</p>
    <p className="mb-4 mt-4">LOCAL хувьсагчид зөвхөн функцээс хандах боломжтой.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">Локал хувьсагчдыг зөвхөн тухайн функц дотор хүлээн зөвшөөрдөг тул ижил нэртэй хувьсагчдыг өөр өөр функцэд ашиглаж болно. Функц эхлэх үед локал хувьсагчууд үүсч, функц дууссаны дараа устдаг.</p>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;