import "../styles/Target.css";
import NavBar from "../components/NavBar";
import { BattleContext } from "../context/BattleContext";
import { useContext } from "react";

function Target() {
  const [battle] = useContext(BattleContext);

  return (
    <div className="target">
      <div className="linea"></div>
      <NavBar tittle="target" />
      <img
        id="imagenTarget"
        className="imagenTarget"
        alt=""
        src={require(`../img/${battle}.png`)}
      />
    </div>
  );
}

export default Target;
