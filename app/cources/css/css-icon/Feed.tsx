import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Байрлал /Position/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">position шинж чанарт элементийн байрлалыг тодорхойлдог хэдэн арга байдаг. Үүнд: static, relative, fixed, absolute болон sticky гэсэн утгууд багтана.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Байрлалын шинж чанар</h3>
    <p className="mb-4 mt-4">Баруун, зүүн, дээд, доод шинж чанаруудыг ашиглан элементүүдийг байрлуулдаг. position шинж чанарыг хамгийн эхэнд тодорхойлохгүй бол зарим тохиолдолд ажиллахгүй байх талтай байдаг. position нь утгаас хамаарч өөр өөрөөр ажиллах болно.</p>
    <p className="mb-4 mt-4">position-н өөр өөр утгууд</p>
    <li className="mb-4 mt-4">static,</li>
    <li className="mb-4 mt-4">relative,</li>
    <li className="mb-4 mt-4">fixed,</li>
    <li className="mb-4 mt-4">absolute</li>
    <li className="mb-4 mt-4">sticky</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position:static</h3>
    <p className="mb-4 mt-4">Static нь Position буюу байрлалын анхдагч утга юм.</p>
    <p className="mb-4 mt-4">position: static; нь баруун, зүүн, дээд, доод шинж чанарт нөлөөлдөггүй.Өөрөөр хэлбэл position: static; шинж чанартай элемент нь ямар нэгэн онцгой байдлаар байрладаггүй бөгөөд хуудасны хэвийн урсгалын дагуу байрлах болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position:relative</h3>
    <p className="mb-4 mt-4">харицангуй буюу relative шинж чанарыг элементэд position: relative; гэж тодорхойлно.Харицангүй буюу relative байрлалтай элементэд баруун, зүүн, дээд, доод шинж чанарыг зааж өгсөнөөр элемент нь хэвийн байрлалаас салах болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position fixed</h3>
    <p className="mb-4 mt-4">Тогтмол буюу fixed шинж чанарыг элементэд position: fixed; гэж тодорхойлно.Ингэснээр хуудсыг дээш доош гүйлгэж байсан ч тухайн элемент нэг газраа байрласаар байх болно. Баруун, зүүн, дээд, доод шинж чанарыг ашиглан элементийн байрлалыг зааж өгнө.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Хуудасны баруун доод буланг анзаараарай.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position absolute</h3>
    <p className="mb-4 mt-4">Үнэмлэхүй буюу absolute шинж чанарыг элементэд position: absolute; гэж тодорхойлдог.</p>
    <p className="mb-4 mt-4">Ингэснээр тухайн элемент хамгийн эхний эцэг элемент дотор заасан байрлалд байрлах болно. Хэрэв эцэг элемент байхгүй бол хуудасны body-г ашиглах болно. Хуудсыг дээш доош гүйлгэхэд дагаж хөдөлнө. /Эцэг элементийн харагдах байрлал position: relative-н оронд position: fixed байж болно/.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Position sticky</h3>
    <p className="mb-4 mt-4">Наалдамхай буюу sticky шинж чанарыг элементэд position: sticky; гэж тодорхойлдог.</p>
    <p className="mb-4 mt-4">sticky элемент нь fixed болон relative-н хооронд сэлгэж ажилладаг. Хуудсыг гүйлгэж харьцангуй байрлалаас өгөгдсөн офсет байрлалд очиход элемент нь наалдамхай шинж чанарт шилжих болно. /үүнийг position:fixed ч гэж ойлгож болно/</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Тэмдэглэл: Internet Explorer, Edge 15-н өмнөх хувилбарууд дээр sticky position-г дэмжихгүй. Харин Safari -webkit- угтварыг шаарддаг. Sticky position нь ажиллахын тулд баруун, зүүн, доод, дээд шинж чанаруудын ядаж нэг нь байсан цагт ажиллах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Давхардсан элемент /Overlapping Elements/</h3>
    <p className="mb-4 mt-4">Элементийг байрлуулахад өөр элементүүдтэй давхцаж болно.</p>
    <p className="mb-4 mt-4">Тэгвэл z-index элемент нь давхардсан элементийн дарааллыг тодорхойлно. элемент нь сөрөг эсвэл эерэг дараалалтай байж болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Тэмдэглэл: Хэрэв давхардсан хоёр элементэд z-index утгыг зааж өгөөгүй бол HTML кодод сүүлд байрлуулсан элементийг дээр нь харуулах болно.</p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">нацагдорж</p>
    <p className="mb-4 mt-4">bayrlalaa</p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Нөхцөл & Шаардлага</h3>
    </div>
  );
}

export default DataComponent;