import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Float ба Clear</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Float шинж чанар</h3>
    <p className="mb-4 mt-4">Float гэдэг үг нь хөвөх гэсэн утгатай бөгөөд цаашид бид энэ хичээл дээр хөвөх гэсэн утгаар нь ашиглах болно. Float шинж чанар нь агуулгыг хуудасны хаана хөвөхийг заахад ашигладаг бөгөөд дараах утгуудтай байдаг.</p>
    <li className="mb-4 mt-4"><code className="text-pink-500">left</code> Элемент нь савныхаа зүүн талд хөвдөг</li>
    <li className="mb-4 mt-4"><code className="text-pink-500">right</code> Элемент нь савныхаа баруун талд хөвдөг</li>
    <li className="mb-4 mt-4"><code className="text-pink-500">none</code> Элемент хөвөхгүй бөгөөд андагч утга нь юм</li>
    <li className="mb-4 mt-4"><code className="text-pink-500">inherit</code> Уг элемент нь эцэг элементийн хөвөх утгыг удамшуулан авна</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Float right</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">right </code></code>
 утгын тусламжтай зургийг текстийн баруун талд байрлуулж үзье.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">Зузаан чанартай материал Хэмжээ: Дотор радиус-9 см, гадна радиус- 38см 0-2 нас хүртэл хэрэглэх боломжтой Хийлэгч дагалдана Зөөвөрлөхөд хөнгөн, авсаархан Гэрт, лагерт хөдөө хээр хаана ч хэрэглэхэд хялбар</p>
    <p className="mb-4 mt-4">Тэмдэглэл: Дээрх жишээнээс хархад     <code className="mb-4 mt-4"><code className="text-pink-500">float </code></code>
 шинж чанар нь зураг болон текстийг ороож зургийг текстийн баруун тал байрлуулж байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Float left</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">left </code></code>
 утгын тусламжтай зургийг текстийн зүүн талд байрлуулж үзье.</p>
    <p className="mb-4 mt-4">Зузаан чанартай материал Хэмжээ: Дотор радиус-9 см, гадна радиус- 38см 0-2 нас хүртэл хэрэглэх боломжтой Хийлэгч дагалдана Зөөвөрлөхөд хөнгөн, авсаархан Гэрт, лагерт хөдөө хээр хаана ч хэрэглэхэд хялбар</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Float none</h3>
    <p className="mb-4 mt-4">Доорх жишээн дээр зураг ямар нэгэн байдлаар хөвөхгүй бөгөөд     <code className="mb-4 mt-4"><code className="text-pink-500">float: none; </code></code>
 шинж чанар ажиллаж байна. Иймд зураг нь текст дунд гарч ирэх болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Clear шинж чанар</h3>
    <p className="mb-4 mt-4">Clear шинж чанарт цэвэрлэсэн элементийн хажууд ямар элементүүд, аль талд нь хөвж болохыг зааж өгдөг бөгөөд дараах утгуудтай байдаг.</p>
    <li className=""><code className="text-pink-500">none</code></li>
    <li className=""><code className="text-pink-500">left</code></li>
    <li className=""><code className="text-pink-500">right</code></li>
    <li className=""><code className="text-pink-500">both</code></li>
    <li className=""><code className="text-pink-500">inherit</code></li>
    <p className="mb-4 mt-4">Хэрэв элемент зүүн талд хөвж байвал зүүн талдаа цэвэрлэх хэрэгтэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">The clearfix Hack</h3>
    <p className="mb-4 mt-4">Хэрэв элемент нь агуулж буй элементээс өндөр бөгөөд хөвөгч буюу floated бол агуулж буй элементээс халих болно.Дээрх асуудлыг     <code className="mb-4 mt-4"><code className="text-pink-500">overflow: auto; </code></code>
 шинж чанарын тусламжтай амархан шийдвэрлэж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4">overflow: auto; шинж чанар нь clearfix-д ажиллахдаа элемент агуулж буй элементийн өндөр болон margin, padding-г бүгдийн нь хянаж ажилладаг байна. /Үгүй бол overflow: auto;нь scroll үүсгэдгийг бид өмнөх хичээлээр үзсэн/</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">overflow: auto;</code></code>
    <code className="mb-4 mt-4"><code className="text-pink-500">overflow: auto;</code></code>
    <p className="mb-4 mt-4">Нэмж хэлэхэд олон веб сайтууд дээрх аргыг ашиглан веб хуудасны зохион байгуулалтыг хийсэн байдаг.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <p className="mb-4 mt-4">Тэмдэглэл: CSS pseudo-element хичээлээр     <code className="mb-4 mt-4"><code className="text-pink-500">::after</code></code>
-н талаар үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Grid of Boxes</h3>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">float </code></code>
 шинж чанарын тусламжтай хайрцагнуудыг зэрэгцүүлэн байршуулахад хялбар байх болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">box-sizing гэж юу вэ?</h3>
    <p className="mb-4 mt-4"><code className='text-pink-500'>float</code>-н тусламжтай гурван хайрцгийг бид хялбархан зэрэгцүүлж чадна. Гэвч бид padding, border гэх мэт хайрцгийг томруулдаг зүйлийг нэмхэд хайрцаг эвдэрнэ гэдгийг бид өмнөх хичээл дээр үзсэн.</p>
    <p className="mb-4 mt-4">Тэгвэл     <code className="mb-4 mt-4"><code className="text-pink-500">border-sizing </code></code>
 шинж чанар нь padding, border гэх мэт хайрцагны нийт өргөн болон өндрийг оруулах боломжийг өөртөө агуулдаг тул хайрцаг эвдрэхгүй.</p>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;