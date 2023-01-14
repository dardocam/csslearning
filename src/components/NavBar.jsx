import { useEffect } from "react";
import "../styles/NavBar.css";
import { CheckedContext } from "../context/CheckedContext";
import { useContext } from "react";

//diferentes props para el editor , para el output y para el target
function NavBar(props) {
  const { tittle } = props;
  const [checked, setChecked] = useContext(CheckedContext);
  const handleDiff = (e) => {
    setChecked(e.target.checked);
  };
  const imgDiff = () => {
    const imgDiff = document.getElementById("imagenDiff");
    if (checked) {
      imgDiff.style.opacity = 0.5;
    } else {
      imgDiff.style.opacity = 0;
    }
  };
  useEffect(() => {
    imgDiff();
  });

  return (
    <div className="navbar">
      {tittle}
      {tittle === "output" ? (
        <input
          id="check"
          type="checkbox"
          name="checkboxDiff"
          value=""
          checked={checked}
          onChange={handleDiff}
        />
      ) : (
        "noo"
      )}
    </div>
  );
}

export default NavBar;
