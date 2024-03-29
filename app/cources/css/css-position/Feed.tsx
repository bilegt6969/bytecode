import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return ( 
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Байрлал /Position/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">position</code></code>
 шинж чанарт элементийн байрлалыг тодорхойлдог хэдэн арга байдаг. Үүнд: static, relative, fixed, absolute болон sticky гэсэн утгууд багтана.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Байрлалын шинж чанар</h3>
    <p className="mb-4 mt-4">Баруун, зүүн, дээд, доод шинж чанаруудыг ашиглан элементүүдийг байрлуулдаг.     <code className="mb-4 mt-4"><code className="text-pink-500">position </code></code>
 шинж чанарыг хамгийн эхэнд тодорхойлохгүй бол зарим тохиолдолд ажиллахгүй байх талтай байдаг.     <code className="mb-4 mt-4"><code className="text-pink-500">position </code></code>
 нь утгаас хамаарч өөр өөрөөр ажиллах болно.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">position</code></code>
-н өөр өөр утгууд</p>
    <ul className="list-disc list-inside">
  <li className="mb-4 mt-4"><code className="text-pink-500">position</code></li>
  <li className="mb-4 mt-4"><code className="text-pink-500">static</code></li>
  <li className="mb-4 mt-4"><code className="text-pink-500">relative</code></li>
  <li className="mb-4 mt-4"><code className="text-pink-500">fixed</code></li>
  <li className="mb-4 mt-4"><code className="text-pink-500">absolute</code></li>
  <li className="mb-4 mt-4"><code className="text-pink-500">sticky</code></li>
</ul>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position:static</h3>
    <p className="mb-4 mt-4">Static нь     postition
 буюу байрлалын анхдагч утга юм.</p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">position: static;</code></code>
 нь баруун, зүүн, дээд, доод шинж чанарт нөлөөлдөггүй.Өөрөөр хэлбэл     <code className="mb-4 mt-4"><code className="text-pink-500">position: static;</code></code>
 шинж чанартай элемент нь ямар нэгэн онцгой байдлаар байрладаггүй бөгөөд хуудасны хэвийн урсгалын дагуу байрлах болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Position:relative</h3>
    <p className="mb-4 mt-4">харицангуй буюу relative шинж чанарыг элементэд     <code className="mb-4 mt-4"><code className="text-pink-500">position: relative;</code></code>
 гэж тодорхойлно.Харицангүй буюу relative байрлалтай элементэд баруун, зүүн, дээд, доод шинж чанарыг зааж өгсөнөөр элемент нь хэвийн байрлалаас салах болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Position fixed</h3>
    <p className="mb-4 mt-4">Тогтмол буюу fixed шинж чанарыг элементэд     <code className="mb-4 mt-4"><code className="text-pink-500">position: fixed;</code></code>
 гэж тодорхойлно.Ингэснээр хуудсыг дээш доош гүйлгэж байсан ч тухайн элемент нэг газраа байрласаар байх болно. Баруун, зүүн, дээд, доод шинж чанарыг ашиглан элементийн байрлалыг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Хуудасны баруун доод буланг анзаараарай.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Position absolute</h3>
    <p className="mb-4 mt-4">Үнэмлэхүй буюу absolute шинж чанарыг элементэд     <code className="mb-4 mt-4"><code className="text-pink-500">position: absolute;</code></code>
 гэж тодорхойлдог.</p>
    <p className="mb-4 mt-4">Ингэснээр тухайн элемент хамгийн эхний эцэг элемент дотор заасан байрлалд байрлах болно. Хэрэв эцэг элемент байхгүй бол хуудасны     <code className="mb-4 mt-4"><code className="text-pink-500">body</code></code>
-г ашиглах болно. Хуудсыг дээш доош гүйлгэхэд дагаж хөдөлнө. /Эцэг элементийн харагдах байрлал position: relative-н оронд position: fixed байж болно/.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Position sticky</h3>
    <p className="mb-4 mt-4">Наалдамхай буюу sticky шинж чанарыг элементэд    <code className="mb-4 mt-4"><code className="text-pink-500"> position: sticky;</code></code>
 гэж тодорхойлдог.</p>
    <p className="mb-4 mt-4">sticky элемент нь     <code className="mb-4 mt-4"><code className="text-pink-500">fixed </code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">relative </code></code>
-н хооронд сэлгэж ажилладаг. Хуудсыг гүйлгэж харьцангуй байрлалаас өгөгдсөн офсет байрлалд очиход элемент нь наалдамхай шинж чанарт шилжих болно. /үүнийг position:fixed ч гэж ойлгож болно/</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4">Тэмдэглэл: Internet Explorer, Edge 15-н өмнөх хувилбарууд дээр sticky position-г дэмжихгүй. Харин Safari -webkit- угтварыг шаарддаг. Sticky position нь ажиллахын тулд баруун, зүүн, доод, дээд шинж чанаруудын ядаж нэг нь байсан цагт ажиллах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Давхардсан элемент /Overlapping Elements/</h3>
    <p className="mb-4 mt-4">Элементийг байрлуулахад өөр элементүүдтэй давхцаж болно.</p>
    <p className="mb-4 mt-4">Тэгвэл     <code className="mb-4 mt-4"><code className="text-pink-500">z-index</code></code>  элемент нь давхардсан элементийн дарааллыг тодорхойлно. элемент нь сөрөг эсвэл эерэг дараалалтай байж болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Тэмдэглэл: Хэрэв давхардсан хоёр элементэд     <code className="mb-4 mt-4"><code className="text-pink-500">z-index </code></code>
 утгыг зааж өгөөгүй бол HTML кодод сүүлд байрлуулсан элементийг дээр нь харуулах болно.</p>
    <p className="mb-4 mt-4"></p>
   
    </div>
  );
}

export default DataComponent;