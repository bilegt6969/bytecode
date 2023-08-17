import React from 'react';
import {  CopyBlock, dracula} from 'react-code-blocks';


function data() {
  const codeText = `
  <style>
/* нэг мөр тайлбар оруулсан байна */
p {
  color: green;
}
</style>`
const codeText1 = `
<style>
p {
  color: green; /* нэг мөр тайлбар оруулсан байна*/
}
</style>`
const codeText2 = `
<style>
/* Энд олон 
мөр тайлбар 
оруулсан байна*/
p {
  color: green; 
}
</style>

`
  return (
    <div className="col-span-5 mb-[3rem] lg:col-span-4 md:col-span-4 sm:col-span-5 lg:p-1 md:p-2 sm:p-4 p-4 ">
    <h3 className="font-bold text-4xl mb-4 mt-8">CSS Тайлбар /Comments/</h3>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4"></p>
    <p className="mb-4 mt-4">Comment нь кодыг тайлбарлахад ашигладаг бөгөөд хэсэг хугацааны дараа кодыг засварлахад чухал үүрэг гүйцэтгэдэг юм.CSS-д comment-г /* Энэ бол сomment */ гэж бичдэг</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <div>
      <CopyBlock
        text={codeText}
        language='html'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    <p className="mb-4 mt-4">Тухайн кодын мөрний араас залгуулж тайлбар бичиж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <div>
      <CopyBlock
        text={codeText1}
        language='html'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>
    <p className="mb-4 mt-4">Мөн CSS кодод олон мөр тайлбар бичиж болно.</p>
    <h3 className="font-bold text-4xl mb-4 mt-8">Жишээ:</h3>
    <div>
      <CopyBlock
        text={codeText2}
        language='html'
        showLineNumbers={true}
        wrapLines
        theme={dracula}
      />
    </div>    </div>
  );
}

export default data;