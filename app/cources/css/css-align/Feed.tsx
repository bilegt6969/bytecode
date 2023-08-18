import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Зэрэгцүүлэлт /Align/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Элементийг голлуулах</h3>
    <p className="mb-4 mt-4">Хэвтээ тэнхлэгт блок элементийн голлуулахын тулд өргөнийг зааж өгч     <code className="mb-4 mt-4"><code className="text-pink-500">margin: auto;</code></code>
-г ашиглана.Ингэснээр блок элемент голлож баруун болон зүүн талаас тэнцүү хэмжээний зайг авах болно.</p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <p className="mb-4 mt-4">Тэмдэглэл: Хэрэв өргөнийг тохируулаагүй эсвэл өргөнийг 100% гэж зааж өгсөн бол     <code className="mb-4 mt-4"><code className="text-pink-500">margin:auto;</code></code>
нь ямар ч нөлөө үзүүлэхгүй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Текстийг голлуулах</h3>
    <p className="mb-4 mt-4">Элементийн текстийг голлуулахын тулд     <code className="mb-4 mt-4"><code className="text-pink-500">text-align: center;</code></code>
 шинж чанарыг ашиглана.</p>
    <p className="mb-4 mt-4">Өнөөдөр нартай сайхан өдөр байна.</p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Зураг голлуулах</h3>
    <p className="mb-4 mt-4">Зургийг голлуулахын тулд     <code className="mb-4 mt-4"><code className="text-pink-500">block </code></code>
 элемент болгож, зүүн болон баруун margin-д     <code className="mb-4 mt-4"><code className="text-pink-500">auto </code></code>
 шинж чанарыг ашиглана.</p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Босоо тэнхлэгт голлуулах Padding-г ашиглах</h3>
    <p className="mb-4 mt-4">Босоо тэнхлэгт контентийг голлуулах хэд хэдэн арга байдгаас хамгийн энгийн жишээ нь padding-г ашиглах юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">padding </code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">text-align: center</code></code>
-г ашиглан хэвтээ болон босоо тэнхлэгт голлуулж болно.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Босоо тэнхлэгт голлуулах Line-height-г ашиглах</h3>
    <p className="mb-4 mt-4">Босоо тэнхлэгт голлуулах өөр нэгэн арга нь     <code className="mb-4 mt-4"><code className="text-pink-500">line-height </code></code>
 шинж чанарыг     <code className="mb-4 mt-4"><code className="text-pink-500">height</code></code>
-н хамт ашиглаж тэнцүү утга олгон.     <code className="mb-4 mt-4"><code className="text-pink-500">height</code></code>
 нь элементийн өндрийг заадаг бол     <code className="mb-4 mt-4"><code className="text-pink-500">line-height</code></code>
 нь элементийн мөрийн өндрийг заадаг байна.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[5].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Босоо тэнхлэгт голлуулах Line-position transform</h3>
    <p className="mb-4 mt-4">Босоо тэнхлэгт голлуулах өөр нэгэн арга нь     <code className="mb-4 mt-4"><code className="text-pink-500">transform </code></code>
 шинж чанарыг ашиглаж болно.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[6].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Босоо тэнхлэгт голлуулах     <code className="mb-4 mt-4"><code className="text-pink-500">Flexbox</code></code>
</h3>
    <p className="mb-4 mt-4">Босоо тэнхлэгт голлуулах өөр нэгэн арга нь     <code className="mb-4 mt-4"><code className="text-pink-500">Flexbox </code></code>
 шинж чанарыг ашиглаж болно. Энэ нь Интернет хөтөч 10 ба түүнээс өмнөх хувилбар дээр ажиллахгүй болохыг анхаарна уу.</p>
 <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[7].Url }} />
    
    </div>
  );
}

export default DataComponent;