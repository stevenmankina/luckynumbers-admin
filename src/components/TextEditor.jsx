import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'

const TextEditor = ({text, setText}) => {

    const editor = useEditor({
        extensions: [
          StarterKit,
          FontFamily,
          TextStyle,
        ],
        content: '<p>Email Text</p>',
        
      })


  return (
    <>

    <Menubar editor={editor}/>
    <EditorContent className='border w-3/4 p-3 rounded outline-white text-left ' editor={editor} />

    
    <button onClick={()=> setText(editor.getHTML())} className="px-5 py-1 rounded bg-primary-500 text-white">Save</button>



    
    </>
  )
}

const Menubar = ({editor}) => {
    if (!editor) {
        return null
      }

      const changeFF = (e) => {
        console.log(e.target.value);
        editor.chain().focus().setFontFamily(e.target.value).run()
      }

    return (
        <>
        <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
       Bold 
      </button>

        
    {/* <select name="" id="" onChange={(e) => console.log(e.target.value)} > */}
    <select name="" id="" onChange={(e) => changeFF(e)} >
        <option value="Inter">Inter</option>
        <option value="serif">Serif</option>
        <option value="cursive">cursive</option>
    </select>





        </>
    )
}

export default TextEditor