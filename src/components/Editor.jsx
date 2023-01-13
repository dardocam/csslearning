import "../styles/Editor.css";
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark'
// import { useState } from "react";
import { ContentContext } from "../context/ContentContext";
import { useContext } from "react";

function Editor() {
  const [content,setContent] = useContext(ContentContext);


  return (
    <div id="editor" className="editor">
      <CodeMirror
        id="cm"
        // className={styles.code}
        value= {content}
        height="700px"
        // extensions={[css({ jsx: true })]}
        extensions={[html()]}
        theme={oneDark}
        // onChange={(value, viewUpdate) => {
        //   setContent(value);
        //   setCount(value.length);
        // }}
        onChange={
          (value)=>{
            setContent(value);
          }
        }
      />
    </div>
  );
}

export default Editor;
