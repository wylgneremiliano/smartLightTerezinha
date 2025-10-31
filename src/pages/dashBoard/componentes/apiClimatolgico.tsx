import "./style.css";
import imgClima from "../../../assets/dashboard/cloud.png";

import { useEffect } from "react";
import { ChamadaApi } from "../../../api/chamadaApiClima";

const ApiClimatologico = () => {
  const { dataApi, fecthApiClima } = ChamadaApi();
  useEffect(() => {
    fecthApiClima();
  }, []);
  return (
    <div className="apiClimatologico flex flex-col items-center rounded-md">
      <div className="">
        <h2>Lagoa Grande</h2>
        <p className="text-[40px]">{dataApi.temp}°C</p>
        <img width={80} src={imgClima} alt="" />
        <p>{dataApi.description}</p>
      </div>
    </div>
  );
};
export default ApiClimatologico;
