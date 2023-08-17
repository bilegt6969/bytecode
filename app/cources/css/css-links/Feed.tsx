import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Холбоос /Links/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">CSS-ийн тусламжтай холбоосыг олон янзаар загварчлах боломжтой.   Энэ бол хобоос        Энэ бол хобоос</p>
    <div className="gap-4">    <a href='../../' className='text-blue-500'>Энэ бол хобоос</a>
    <a href='../../' className='bg-red-500 rounded-xl p-4 max-w-[170px] text-center '>Энэ бол хобоос</a></div>

    <h3 className="font-bold text-4xl mb-4 mt-8">Холбоосын загварууд</h3>
    <p className="mb-4 mt-4">Холбоосыг шинж чанараар нь загварчилж болно. /өнгө, дэвсгэр өнгө, үсгийн фонт, гэх мэт/</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">Холбоосыг тухайн мужаас хамаарч өөр өөр байдлаар загварчлах боломжтой.</p>
    <p className="mb-4 mt-4">Холболтын дөрвөн муж байдаг.</p>
    <li className="mb-4 mt-4">a:<span className="text-pink-500">link</span>  - Ердийн үед буюу холбоос дээр дараагүй үед</li>
    <li className="mb-4 mt-4">a:<span className="text-pink-500">visited</span>  - Хэрэглэгч холбоос дээр дарсан үед</li>
    <li className="mb-4 mt-4">a:<span className="text-pink-500">hover</span>  - Холбоос дээр хулгана очих үед</li>
    <li className="mb-4 mt-4">a:<span className="text-pink-500">active</span>  - Холбоос дээр дарж байх үед</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Холбоосын загварууд</h3>
    <p className="mb-4 mt-4">Холбоосыг тухайн мужаас хамаарч өөр өөр байдлаар загварчлах боломжтой.</p>
    <p className="mb-4 mt-4">Холболтын дөрвөн муж байдаг. a:link - Ердийн үед буюу холбоос дээр дараагүй үед a:visited - Хэрэглэгч холбоос дээр дарсан үед a:hover - Холбоос дээр хулгана очих үед a:active - Холбоос дээр дарж байх үед</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Текст Decoration</h3>
    <p className="mb-4 mt-4">шинж чанарт холбоосны доогуур зураасыг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Дэвсгэр өнгө /Background Color/</h3>
    <p className="mb-4 mt-4"><span className='text-pink-500'>background-color</span> шинж чанарт холбоосны дэвсгэр өнгийг зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Холбоос товчлуур /Link Buttons/</h3>
    <p className="mb-4 mt-4">Холбоосын CSS-н тусламжтай товч хэлбэртэй харуулж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;