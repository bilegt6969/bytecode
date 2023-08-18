import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Дүрс, Тэмдэг /Icon/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Дүрс, Тэмдгийг хэрхэн нэмэх вэ?</h3>
    <li className="mb-4 mt-4">HTML хуудсанд icon буюу дүрс нэмэх энгийн арга бол Font Awesome санг ашиглана.</li>
    <li className="mb-4 mt-4">Inline HTML элементийн class-т тухайн дүрсийн /icon/-н нэрийг зааж өгнө. /<span className="text-pink-500">&lt;i&gt;</span> эсвэл <span className="text-pink-500">&lt;span&gt;</span>/</li>
    <li className="mb-4 mt-4">Бүх дүрсийн хэмжээг өөрчлөх, өнгө өгөх, сүүдэр өгөх зэрэг боломжтой.</li>
    <h3 className="font-bold text-4xl mb-4 mt-8">Font Awesome Icons</h3>
    <p className="mb-4 mt-4">Font Awesome Icons-г ашиглахын тулд fontawesome.com сайтад бүртгүүлж код авна. Авсан кодоо өөрийн HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> section буюу хэсэгт нэмж өгнө. &lt;script src=&quot;https://kit.fontawesome.com/tanii_code.js&quot;&gt;<span className="text-pink-500">&lt;/script&gt;</span></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Bootstrap Icons</h3>
    <p className="mb-4 mt-4">Bootstrap glyphicons-ийг ашиглахын тулд HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт доорох мөрийг нэмж өгнө.</p>
    <p className="mb-4 mt-4">&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot;&gt;</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Google Icons</h3>
    
    <p className="mb-4 mt-4">Google icons-ийг ашиглахын тулд HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт доорох мөрийг нэмнэ үү. &lt;link rel=&quot;stylesheet&quot; href=&quot;https://fonts.googleapis.com/icon?family=Material+Icons&quot;&gt;</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;