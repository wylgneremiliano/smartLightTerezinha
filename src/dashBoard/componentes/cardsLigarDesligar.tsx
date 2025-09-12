import { Switch } from "@mui/material";
import { useState } from "react";
import imgArCondicionado from "../../assets/dashboard/air.png";

const CardsLigarDesligarTodosDispositivosIguais = () => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div
      className="cardUniversalDosDispositivosIguais"

    >
      <div className=" flex w-full justify-between p-4 ">
        <p className={checked ? "text-green-500" : "cinzaDefault"}>
          {checked ? "on" : "off"}
        </p>
        <Switch onChange={handleChange} defaultChecked color="success" />
      </div>
      <div>
        <img className="imagensCard sm:w-[50px]" src={imgArCondicionado} alt="" />
      </div>
      <div style={{ alignSelf: "flex-end", paddingTop: "30px" }}>
        <p className="cinzaDefault ">{"Ar Condicionado"}</p>
      </div>
    </div>
  );
};
export default CardsLigarDesligarTodosDispositivosIguais;
