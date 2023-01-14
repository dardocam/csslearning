import "../styles/Output.css";
import { ContentContext } from "../context/ContentContext";
import { BattleContext } from "../context/BattleContext";
import { useContext } from "react";
import NavBar from "../components/NavBar";

function Output() {
  const [content] = useContext(ContentContext);
  const [battle] = useContext(BattleContext);

  return (
    <div className="output">
      <NavBar tittle="output" />
      <iframe title="output" srcDoc={content} className="iframe"></iframe>
      <div className="imagenDiff">
        <img id="imagenDiff" alt="" src={require(`../img/${battle}.png`)} />
      </div>
    </div>
  );
}

export default Output;
