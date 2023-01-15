import "../styles/Mensajes.css";
import { BattleContext } from "../context/BattleContext";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Mensajes() {
  const [battle] = useContext(BattleContext);

  const [mensaje, setMensaje] = useState([1, 2, 3]);

  useEffect(() => {
    const msj = [
      {
        id: 1,
        msj: [
          "primer tip battle 1",
          "segundo tip battle 1",
          "tercer tip battle 1",
        ],
      },
      {
        id: 2,
        msj: [
          "primer tip battle 2",
          "segundo tip battle 2",
          "tercer tip battle 2",
        ],
      },
      {
        id: 3,
        msj: [
          "primer tip battle 3",
          "segundo tip battle 3",
          "tercer tip battle 3",
        ],
      },
    ];
    msj.map((obj) => {
      if (obj.id === parseInt(battle)) {
        setMensaje(obj.msj);
        return 0;
      }
      return 0;
    });
  }, [battle]);

  return (
    <div className="mensajes">
      <Carousel
        interval={5000}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {
          mensaje
        }
      </Carousel>
    </div>
  );
}

export default Mensajes;
