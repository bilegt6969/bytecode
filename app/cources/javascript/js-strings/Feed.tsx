import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Тэмдэгт /Strings/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">JavaScript-д String нь текстийг хадгалах, удирдахад ашиглагддаг.</p>
    <p className="mb-4 mt-4">Javascript string нь тэг буюу түүнээс олон тэмдэгтийг дан &apos; &apos; эсвэл &quot; &quot; хашилт дотор бичнэ.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Тэмдэгтийн урт</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">length </code></code>
 түлхүүр үгийн тусламжтай мөрийн уртыг олж чадна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Escape тэмдэгт</h3>
    <p className="mb-4 mt-4">Quote буюу давхар &quot; &quot; болон &apos; &apos; дан ишлэлийг string-д бичих шаардлага гардаг, энэ үед javascript буруу ойлгодог.</p>



    <code className="mb-4 mt-4"><code className="text-pink-500">var x = &quot;String гэдэг нь &quot;програмчлалын&quot; хэлний хувь тэмдэг юм.&quot;;</code></code>
    <p className="mb-4 mt-4">Энэ тохиолдолд (    <code className="mb-4 mt-4"><code className="text-pink-500">\</code></code>
) буюу backslash тэмдэгтийг ашигладаг.</p>
    <p className="mb-4 mt-4">Тэмдэгтэд     <code className="mb-4 mt-4"><code className="text-pink-500">\&quot;</code></code>
    &quot; давхар ишлэл оруулж үзье</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <code className="mb-4 mt-4"><code className="text-pink-500">var x = &quot;String гэдэг нь \&quot;програмчлалын\&quot; хэлний хувь тэмдэг юм.&quot;;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">String нь обьект байж чадна</h3>
    <p className="mb-4 mt-4">Энгийн javascript string нь нэг тэмдэгт, нэг үгнээс үүсдэг.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">var firstName = &quot;John&quot;;</code></code>
    <p className="mb-4 mt-4">Гэхдээ string-г     <code className="mb-4 mt-4"><code className="text-pink-500">new </code></code>
 түлхүүр үгийн тусламжтай обьект болгож болно.</p>
 <code className="mb-4 mt-4"><code className="text-pink-500">var firstName = new String(&quot;John&quot;);</code></code>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <p className="mb-4 mt-4">Тэмдэгт мөрийг объект болгон ашиглах нь тохиромжгүй байдаг бөгөөд гүйцэтгэх хурдыг удаашруулдаг. Мөн     <code className="mb-4 mt-4"><code className="text-pink-500">new </code></code>
 түлхүүр үг тооцоолоогүй гэнэтийн үр дүнд хүргэдэг.</p>
    <p className="mb-4 mt-4">Тэгвэл тэмдэгтүүд тэнцүү    <code className="mb-4 mt-4"><code className="text-pink-500">== </code></code>
 байж чадах уу?</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4">Тэгвэл     <code className="mb-4 mt-4"><code className="text-pink-500">=== </code></code>
 ийм үед тэнцүү байж чадахгүй. Учир нь утга болон төрлийн хувь     <code className="mb-4 mt-4"><code className="text-pink-500">=== </code></code>
 оператор нь авч үздэг.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>

    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">JavaScript-д объектуудыг харьцуулах боломжгүй байдаг</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;