import "../styles/Editor.css";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
// import { oneDark } from "@codemirror/theme-one-dark";
// import { useState } from "react";
import { ContentContext } from "../context/ContentContext";
import { useContext } from "react";
import NavBar from "../components/NavBar";
import {EditorView} from "@codemirror/view"

let myTheme = EditorView.theme({
  "&": {
    color: "#9a86fd",
    backgroundColor: "#282a36",
    fontSize: "12pt",
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  ".ͼ1l": {
    color: "#e09142"
  },
  ".ͼ1k": {
    color: "#9a86fd"
  },
  ".ͼi": {
    color: "white"
  },
  ".ͼb": {
    color: "#e09142"
  },
  ".ͼc": {
    color: "#ffcc99"
  },
  ".ͼd": {
    color: "#ffcc99"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#0e9"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#adadad8e"
  },
  ".cm-gutters": {
    backgroundColor: "#045",
    color: "#ddd",
    border: "none"
  }
}, {dark: true})

function Editor() {
  const [content, setContent] = useContext(ContentContext);

  return (
    <div id="editor" className="editor">
      <NavBar tittle="editor" count={content.length} />
      <CodeMirror
        id="cm"
        // className={styles.code}
        value={content}
        height="570px"
        // extensions={[css({ jsx: true })]}
        extensions={[html()]}
        theme={myTheme}
        // onChange={(value, viewUpdate) => {
        //   setContent(value);
        //   setCount(value.length);
        // }}
        onChange={(value) => {
          setContent(value);
        }}
      />
    </div>
  );
}

export default Editor;
