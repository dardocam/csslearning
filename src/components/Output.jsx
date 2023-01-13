import "../styles/Output.css"
import { ContentContext } from "../context/ContentContext";
import { useContext } from "react";

function Output() {
  const [content] = useContext(ContentContext);

  return (
    <div className="output">
      <iframe title="output" srcDoc={content} className="result"></iframe>
    </div>
  );
}

export default Output;