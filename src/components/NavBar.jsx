import { useEffect } from "react";
import "../styles/NavBar.css";
import { CheckedContext } from "../context/CheckedContext";
import { useContext } from "react";

//diferentes props para el editor , para el output y para el target
function NavBar(props) {
  const { tittle, count } = props;
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
      {tittle === "output" ? (
        <div className="wrapper">
          <h3>OUTPUT</h3>

          <label htmlFor="check" className="diff">
            Diff
            <input
              id="check"
              className="check"
              type="checkbox"
              name="checkboxDiff"
              value=""
              checked={checked}
              onChange={handleDiff}
            />
          </label>
        </div>
      ) : (
        <></>
      )}
      {tittle === "editor" ? (
        <div className="wrapper">
          <h3>EDITOR</h3>
          <h3>{count} carácteres</h3>
        </div>
      ) : (
        <></>
      )}
      {tittle === "target" ? (
        <div className="wrapper">
          <h3>TARGET</h3>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavBar;
