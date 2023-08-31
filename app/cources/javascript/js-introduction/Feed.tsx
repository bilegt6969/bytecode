import React from 'react';
import { collectedData } from './Urls';

  
function DataComponent() {
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript нь HTML элементийн агуулгыг өөрчлөх боломжтой</h3>
    <p className="mb-4 mt-4">JavaScript-н HTML элементэд хандах олон аргуудын нэг нь     <code className="mb-4 mt-4"><code className="text-pink-500">getElementById()</code></code>
 юм.Доорх жишээ нь (id=&quot;test&quot;) утгатай элементийг олж     <code className="mb-4 mt-4"><code className="text-pink-500">(inner.HTML)</code></code>
 функцийн тусламжтай элементийн контентийг &quot;Сайн уу JavaScript&quot; болгож үзье.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&quot;test&quot;).innerHTML = &quot;Сайн уу? JavaScript!&quot;;</code></code>
    <p className="mb-4 mt-4">JavaScript нь давхар &quot; &quot; болон дан &apos; &apos;	 хашилтийг зөвшөөрнө.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&apos;test&apos;	).innerHTML = &apos;	Сайн уу&apos;	 JavaScript!&apos;	</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript нь HTML атрибутын утгыг өөрчлөх боломжтой</h3>
    <p className="mb-4 mt-4">Энэ жишээгээр JavaScript нь <span className="text-pink-500">&lt;img&gt;</span> tag-н <span className="text-pink-500">&lt;src&gt;</span> атрибутын утгыг өөрчилж үзье.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500"><span className="text-pink-500">&lt;img&gt;</span></code></code>
    <code className="mb-4 mt-4"><code className="text-pink-500"><span className="text-pink-500">&lt;src&gt;</span></code></code>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Үр дүнг харах</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript нь HTML-н хэв маягийг өөрчлөх боломжтой</h3>
    <p className="mb-4 mt-4">HTML элементийн хэв маягийг өөрчлөх нь HTML-н шинж чанарыг өөрчлөхтэй утга нэг юм.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&apos;	test&apos;	).style.fontSize=&apos;	40px&apos;	;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript нь HTML элементийг нууж чадна</h3>
    <p className="mb-4 mt-4">HTML элементийг нуухын тулд бид style-н     <code className="mb-4 mt-4"><code className="text-pink-500">display </code></code>
 шинж чанарын утгыг өөрчилнө.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">document.getElementById(&apos;	test&apos;	).style.display=&apos;	none&apos;	;</code></code>
    <h3 className="font-bold text-4xl mb-4 mt-8">Буурах</h3>
    <p className="mb-4 mt-4">-- оператор нь тоог бууруулж буцаах болно.</p>
    <code className="mb-4 mt-4"><code className="text-pink-500">--</code></code>
    <div dangerouslySetInnerHTML={{ __html: collectedData[4].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">var x = 15;
x--;
var z = x;</code></code>
    <p className="mb-4 mt-4"></p>
    </div>
  );
}

export default DataComponent;