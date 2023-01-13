// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Editor from "./components/Editor";
import Output from "./components/Output";
import Target from "./components/Target";
import { ContentContext } from "./context/ContentContext";
import { useState } from "react";

function App() {
  const template = "<div>\n</div>\n<style>\n body {\n  background: pink;\n }" +
  "\n div {\n  width: 100px;\n  height: 100px;\n  background: #dd6b4d;\n }\n"+
  "</style>";

  const [content,setContent]= useState(template)

  return (
    <>
      <ContentContext.Provider value={[content, setContent]}>
        <Header />
        <NavBar />
        <div className="contenedorFlex">
          <Editor />
          <Output />
          <Target />
        </div>
      </ContentContext.Provider>
    </>
  );
}

export default App;
