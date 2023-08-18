import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Combinators</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS-д дөрвөн өөр комбинатор байдаг. Комбинатор нь сонгогчдын хоорондын харилцааг тайлбарладаг.Сонгогч нь нэгээс олон сонгогчийг агуулж болох бөгөөд энгийг сонгогчдын хооронд бид комбинаторыг нэмж өгснөөр сонгогчийн хооронд харилцаа би болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Удамшил сонгогч /Descendant Selector/</h3>
    <p className="mb-4 mt-4">descendant selector нь удамшлыг сонгогч гэсэн утгатай бөгөөд элемент нь дотроо өөр нэгэн элемент агуулж байвал бид түүнийг ЭЦЭГ элемент, агуулагдаж буй элементийг ХҮҮ элемент гэдэг. Үүнийг эцэг хүүгийн удамшил гэж товчхондоо ойлгож болно.Дараах жишээ нь <span className="text-pink-500">&lt;div&gt;</span> элемент доторх бүх <span className="text-pink-500">&lt;p&gt;</span> элементүүдийг сонгож байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Хүү сонгогч /Child Selector/</h3>
    <p className="mb-4 mt-4">Child Selector нь тухайн элементийн зөвхөн хүү элементүүдийг л сонгох болно.Доорх жишээ нь <span className="text-pink-500">&lt;div&gt;</span> элементийн хүү элемент болох бүх <span className="text-pink-500">&lt;p&gt;</span> элементүүдийг сонгох болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Хөрш сонгогч /Adjacent Sibling Selector/</h3>
    <p className="mb-4 mt-4">Adjacent Sibling Selector нь тухайн элементийн хамгийн ойр байгаа хөрш элементийг сонгох болно. Хөрш элементийг сонгогчид зааж өгсөн байх ёстойг анхаарна уу. Доорх жишээ нь <span className="text-pink-500">&lt;div&gt;</span> элементийн яг дараагийн <span className="text-pink-500">&lt;p&gt;</span> элементүүдийг сонгох авах болно. Хэрэв дунд нь өөр элемент байвал хөрш гэж үзэхгүй. Иймд туршиж үзээрэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
   <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Ерөнхий хөрш сонгогч /General Sibling Selector/</h3>
    <p className="mb-4 mt-4">General Sibling Selector нь тухайн элементээс ерөнхий хөрш элементийг бүгдийн сонгох болно. Доорх жишээ нь <span className="text-pink-500">&lt;div&gt;</span> элементээс хойших бүх ерөнхий хөрш <span className="text-pink-500">&lt;p&gt;</span> элементүүдийг сонгон авах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;