import "../styles/SelectBattle.css";
import { BattleContext } from "../context/BattleContext";
import { CheckedContext } from "../context/CheckedContext";
import { useContext } from "react";

function SelectBattle() {
  const [battle, setBattle] = useContext(BattleContext);
  const [, setChecked] = useContext(CheckedContext);

  const handleChange = (event) => {
    setBattle(event.target.value);
    setChecked(false);
  };

  return (
    <>
      <label htmlFor="battles">
        <span className="label">Choose a Battle:</span>
        <select
          id="battles"
          className="selectbattle"
          name="battles"
          onChange={handleChange}
          value={battle}
        >
          <option value="1">Battle #1</option>
          <option value="2">Battle #2</option>
          <option value="3">Battle #3</option>
          <option value="4">Battle #4</option>
          <option value="5">Battle #5</option>
          <option value="6">Battle #6</option>
          <option value="7">Battle #7</option>
          <option value="8">Battle #8</option>
          <option value="9">Battle #9</option>
          <option value="10">Battle #10</option>
        </select>
      </label>
    </>
  );
}

export default SelectBattle;
