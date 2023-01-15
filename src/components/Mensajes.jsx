import { useEffect, useState } from "react";
import "../styles/Mensajes.css";

function Mensajes() {

  const [tips, setTips] = useState('')

  useEffect(()=>{
    let i = 0;
    const msj = [
      {
        "id": 1,
        "msj": "Primer tip"
      },
      {
        "id": 2,
        "msj": "Segundo tip"
      },
      {
        "id": 3,
        "msj": "Tercero tip"
      }
    ]
    setInterval(() => {
      if(i < msj.length){
        setTips(msj[i++].msj)
      }else{
        i=0;
      }
    }, 2000);
  },[])

  return (
    <div className="mensajes">
        {tips}
    </div>
  );
}

export default Mensajes;