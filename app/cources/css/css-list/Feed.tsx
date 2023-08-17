import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Жагсаалт /List/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">An Unordered List:</h3>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">An Ordered List:</h3>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н ялгаатай тэмдэглэгээнүүд</h3>
    <p className="mb-4 mt-4">list-style_type шинж чанарт жагсаалтын тэмдэглэгээг зааж өгнө.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н тэмдэглэгээг зургаар тэмдэглэж болно</h3>
    <p className="mb-4 mt-4">list-style-image шинж чанарт жагсаалтын тэмдэглэгээ хийх зургийг зааж өгнө.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н тэмдэглэгээний байрлал</h3>
    <p className="mb-4 mt-4">list-style-position шинж чанарт жагсаалтын тэмдэглэгээний байлалыг зааж өгнө. "list-style-position: outside;" гэж зааж өгвөл тэмдэглэгээ нь жагсаалтын гадна талд байрлах бөгөөд энэ нь анхдагч утга нь юм. "list-style-position: inside;" гэж зааж өгвөл тэмдэглэгээ нь жагсаалтын дотор талд item-тай хамт байрлах болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">Анхны утгыг тэглэх /Remove Default Settings/</h3>
    <p className="mb-4 mt-4">list-style-type шинж чанарт none-г зааж өгч жагсаалтын тэмдэглэгээг тэглээд margin, padding-ын утгыг 0 гэж зааж өгсөнөөр жагсаалтын анхны утгыг устгах болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <h3 className="font-bold text-4xl mb-4 mt-8">List-н загварыг CSS-н тусламжтай илүү гоё болгож болно.</h3>
    <p className="mb-4 mt-4">Бие дааж өөрчилж өөрийн зохиож хийж үзээрэй.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Нөхцөл & Шаардлага</h3>
    </div>
  );
}

export default DataComponent;