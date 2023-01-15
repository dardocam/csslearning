// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";

import Editor from "./components/Editor";
import Output from "./components/Output";
import Target from "./components/Target";
import Mensajes from "./components/Mensajes";
import { ContentContext } from "./context/ContentContext";
import { BattleContext } from "./context/BattleContext";
import { CheckedContext } from "./context/CheckedContext";

import { useState } from "react";

function App() {
  const template =
    "<div>\n</div>\n<style>\n body {\n  background: pink;\n }" +
    "\n div {\n  width: 100px;\n  height: 100px;\n  background: #dd6b4d;\n }\n" +
    "</style>";

  const [content, setContent] = useState(template);

  const [battle, setBattle] = useState(1);

  const [checked, setChecked] = useState(false);

  return (
    <>
      <ContentContext.Provider value={[content, setContent]}>
        <BattleContext.Provider value={[battle, setBattle]}>
          <CheckedContext.Provider value={[checked, setChecked]}>
            <Header />
            <div className="contenedorFlex">
              <Editor />
              <Output />
              <Target />
            </div>
            <div className="footer">
              <Mensajes />
            </div>
          </CheckedContext.Provider>
        </BattleContext.Provider>
      </ContentContext.Provider>
    </>
  );
}

export default App;
