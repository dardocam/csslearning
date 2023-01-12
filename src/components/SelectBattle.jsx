import { useState } from "react";
import "../styles/SelectBattle.css";
function SelectBattle() {
  const [ battle, setBattle ] = useState(1);
  const handleChange = (event) => {
    setBattle(event.target.value);
    console.log(event.target.value);
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
        </select>
      </label>
    </>
  );
}

export default SelectBattle;
