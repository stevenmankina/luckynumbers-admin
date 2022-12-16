import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ text, setText }) => {
  const editor = useRef(null);


  return (
    <>
      <JoditEditor
      className="text-left min-h-[50vh]"
        ref={editor}
        value={text}
        tabIndex={1}
        onBlur={(newContent) => setText(newContent)}
      />

      <button className="px-4 py-1 my-5 float-right border-primary-500 border-2 text-white rounded bg-primary-500" onClick={()=> console.log(text)}>Send</button>
      <button className="px-4 py-1 my-5 float-right mx-2 border-2 rounded text-primary-500 border-primary-500" onClick={()=>setText('')}>Cancel</button>



    </>
  );
};

export default TextEditor;
