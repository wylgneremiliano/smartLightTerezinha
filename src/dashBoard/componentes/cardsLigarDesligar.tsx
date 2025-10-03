import { Switch } from "@mui/material";
import { useState } from "react";
import imgArCondicionado from "../../assets/dashboard/air.png";
import imgProjetor from "../../assets/dashboard/projector.png";
import imgTv from "../../assets/dashboard/tv.png";
import imgLampada from "../../assets/dashboard/ideia.png";
import imgInterruptor from "../../assets/dashboard/switch.png";

interface Props {
  nomeDispositivo?: string;
  tipoDispositivo?: string;
}

const CardsLigarDesligarTodosDispositivosIguais = ({
  nomeDispositivo,
  tipoDispositivo,
}: Props) => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="cardUniversalDosDispositivosIguais">
      <div className=" flex w-full justify-between p-4 ">
        <p className={checked ? "text-green-500" : "cinzaDefault"}>
          {checked ? "on" : "off"}
        </p>
        <Switch onChange={handleChange} defaultChecked color="success" />
      </div>
      <div>
        {tipoDispositivo === "lampada" ? (
          <img className="imagensCard sm:w-[50px]" src={imgLampada} alt="" />
        ) : tipoDispositivo === "arCondicionado" ? (
          <img
            className="imagensCard sm:w-[50px]"
            src={imgArCondicionado}
            alt=""
          />
        ) : tipoDispositivo === "tv" ? (
          <img className="imagensCard sm:w-[50px]" src={imgTv} alt="" />
        ) : tipoDispositivo === "projetor" ? (
          <img className="imagensCard sm:w-[50px]" src={imgProjetor} alt="" />
        ) : tipoDispositivo === "interruptor" ? (
          <img className="imagensCard sm:w-[50px]" src={imgInterruptor} alt="" />
        ) : (
          <img className="imagensCard sm:w-[50px]" src={imgLampada} alt="" />
        )
        }
      </div>
      <div style={{ alignSelf: "flex-end", paddingTop: "30px" }}>
        <p className="cinzaDefault ">{nomeDispositivo}</p>
      </div>
    </div>
  );
};
export default CardsLigarDesligarTodosDispositivosIguais;
