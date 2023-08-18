import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Жагсаалт /List/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">An Unordered List:</h3>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">An Ordered List:</h3>
    <ol>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    <li className="mb-4 mt-4">Item</li>
    </ol>

    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н ялгаатай тэмдэглэгээнүүд</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>list-style_type</span> шинж чанарт жагсаалтын тэмдэглэгээг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н тэмдэглэгээг зургаар тэмдэглэж болно</h3>
    <p className="mb-4 mt-4"> <span className='text-pink-500'>list-style-image</span> шинж чанарт жагсаалтын тэмдэглэгээ хийх зургийг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жагсаалтын item-н тэмдэглэгээний байрлал</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>list-style-position</span> шинж чанарт жагсаалтын тэмдэглэгээний байлалыг зааж өгнө.<br/> &quot;<span className='text-pink-500'>list-style-position: outside;</span>&quot; гэж зааж өгвөл тэмдэглэгээ нь жагсаалтын гадна талд байрлах бөгөөд энэ нь анхдагч утга нь юм.<br/> &quot;<span className='text-pink-500'>list-style-position: inside;</span>&quot; гэж зааж өгвөл тэмдэглэгээ нь жагсаалтын дотор талд item-тай хамт байрлах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Анхны утгыг тэглэх /Remove Default Settings/</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>list-style-type</span> шинж чанарт none-г зааж өгч жагсаалтын тэмдэглэгээг тэглээд margin, padding-ын утгыг 0 гэж зааж өгсөнөөр жагсаалтын анхны утгыг устгах болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">List-н загварыг CSS-н тусламжтай илүү гоё болгож болно.</h3>
    <p className="mb-4 mt-4">Бие дааж өөрчилж өөрийн зохиож хийж үзээрэй.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;