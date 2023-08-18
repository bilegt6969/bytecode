import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Inline-block</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">    <code className="mb-4 mt-4"><code className="text-pink-500">display:inline</code></code>
-аас     <code className="mb-4 mt-4"><code className="text-pink-500">display:inline-blok</code></code>
-н гол ялгаа нь элементэд өргөн ба өндрийг зааж өгөх боломжтой.    <code className="mb-4 mt-4"><code className="text-pink-500">display:blok</code></code>
-аас     <code className="mb-4 mt-4"><code className="text-pink-500">display:inline-blok</code></code>
-н гол ялгаа нь элемент шинэ мөрөнд шилжихгүй.    <code className="mb-4 mt-4"><code className="text-pink-500">display:inline</code></code>
,     <code className="mb-4 mt-4"><code className="text-pink-500">display:inline-blok </code></code>
 болон     <code className="mb-4 mt-4"><code className="text-pink-500">display:blok</code></code>
-н гол ялгаа доорх жишээнээс илүү тодорхой үзнэ үү.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">display: inline;</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">display: inline-block;</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <p className="mb-4 mt-4">display: block;</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />

    </div>
  );
}

export default DataComponent;