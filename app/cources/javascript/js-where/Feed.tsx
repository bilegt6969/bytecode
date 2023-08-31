import React from 'react';
import { collectedData } from './Urls';
import { a11yDark, CopyBlock, dracula, monokai } from 'react-code-blocks';


  
function Feed() {
  const codeText = `
  function myFunction() {
    document.getElementById("test").innerHTML = "External javascript код.";
  }`
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">JS Хаана байрлах вэ</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <h3 className="font-bold text-4xl mb-4 mt-8"><span className="text-pink-500">&lt;script&gt;</span> tag</h3>
    <p className="mb-4 mt-4">HTML-д JavaScript кодыг <span className="text-pink-500">    <code className="mb-4 mt-4"><code className="text-pink-500"><span className="text-pink-500">&lt;script&gt;</span></code></code>
</span> болон <span className="text-pink-500">    <code className="mb-4 mt-4"><code className="text-pink-500"><span className="text-pink-500">&lt;/script&gt;</span></code></code>
</span>-н хооронд бичнэ.</p>
<h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[0].Url }} />
   
    <p className="mb-4 mt-4">Өмнөх загварууд дээр JavaScript-г HTML-д ашиглахад type атрибутад <span className="text-pink-500">&lt;script type=&quot;text/javascript&quot;&gt;</span> гэж зааж өгдөг байсан. Одоо бол тэгэх шаардлагагүй, JavaScript нь HTML-н үндсэн скрипт хэл юм.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript Функц ба Үйл явдал</h3>
    <p className="mb-4 mt-4">JavaScript функц гэдэг нь JavaScript-г &quot;дуудсан&quot; үед гүйцэтгэх боломжтой блок код юм.Жишээ нь функцийг ямар нэгэн үйл явдал тохиолдоход эсвэл хэрэглэгч товчлуур дээр дарахад дуудаж болно. Функцийн талаар дараагийн хичээлээр тусад нь авч үзэх болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript кодыг <span className="text-pink-500">&lt;head&gt;</span> эвсэл <span className="text-pink-500">&lt;body&gt;</span>-д байрлуулах</h3>
    <p className="mb-4 mt-4">HTML документэд хүссэн хэмжээгээр скриптийг байрлуулж болно. Скриптүүдийг <span className="text-pink-500">&lt;body&gt;</span>, эсвэл HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт байрлуулах боломжтой эсвэл хоёуланд нь байрлуулсан ч болно.</p>
   
    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript кодыг <span className="text-pink-500">&lt;head&gt;</span> хэсэгт</h3>
    <p className="mb-4 mt-4">Энэ жишээнд JavaScript функцийг HTML хуудасны <span className="text-pink-500">&lt;head&gt;</span> хэсэгт байрлууллаа. Товч дээр дарахад функцийг дуудана</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[1].Url }} />
    

    

    <h3 className="font-bold text-4xl mb-4 mt-8">JavaScript кодыг <span className="text-pink-500">&lt;body&gt;</span> хэсэгт</h3>
    <p className="mb-4 mt-4">Энэ жишээнд JavaScript функцийг HTML хуудасны <span className="text-pink-500">&lt;body&gt;</span> хэсэгт байрлууллаа. Товч дээр дарахад функцийг дуудана</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <div dangerouslySetInnerHTML={{ __html: collectedData[2].Url }} />
    
    <p className="mb-4 mt-4">Script interpretation буюу скрипт тайлагч нь дэлгэцийг удаашруулдаг тул скриптийг <span className="text-pink-500">&lt;body&gt;</span> элементийн доод хэсэгт байрлуулж байхыг зөвлөж байна.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">External JavaScript</h3>
    <p className="mb-4 mt-4">Скриптийг гадаад файл дээр бичиж болно.</p>
    <div dangerouslySetInnerHTML={{ __html: collectedData[3].Url }} />
    <h3 className="font-bold text-4xl mb-4 mt-8">Гадаад файл: app.js</h3>
    <div>
      <CopyBlock
        text={codeText}
        language='js'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    <h3 className="font-bold text-4xl mb-4 mt-8">External JavaScript</h3>
    <p className="mb-4 mt-4">Скриптийг гадаад файл дээр бичсэнээр ижил үүрэг гүйцэтгэдэг нэг кодыг олон веб хуудсан дээр ашиглах боломжтой болно.JavaScript файлууд нь .js файлын өргөтгөлтэй байдаг.Гаднах скриптийг ашиглахын тулд скриптийн файлын нэрийг <span className="text-pink-500">&lt;script&gt;</span> тагийн src (source) атрибутад зааж өгнө.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">&lt;script src=&quot;/static/js/lesson/app.js&quot;&gt;<span className="text-pink-500">&lt;/script&gt;</span></code></code>
    <p className="mb-4 mt-4"><span className="text-pink-500">&lt;head&gt;</span> болон <span className="text-pink-500">&lt;body&gt;</span>-н хүссэн газартаа гадаад скриптийг байрлуулж болно.</p>
    <p className="mb-4 mt-4">Гадаад CSS-д <span className="text-pink-500">&lt;script&gt;</span> тагийг ашигладаггүй болохыг анхаарна уу.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Гадаад JavaScript-н давуу талууд</h3>
    <p className="mb-4 mt-4">HTML ба Кодыг ялгадаг.HTML болон JavaScript кодтой ажиллахад илүү хялбар байдаг.Нэг хуудсанд хэд хэдэн скрипт файл нэмж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ нь</h3>
    <code className="mb-4 mt-4"><code className="text-pink-500">&lt;script src=&quot;/static/js/lesson/app1.js&quot;&gt;<span className="text-pink-500">&lt;/script&gt;</span>
&lt;script src=&quot;/static/js/lesson/app2.js&quot;&gt;<span className="text-pink-500">&lt;/script&gt;</span></code></code>

    </div>
  );
}

export default Feed;