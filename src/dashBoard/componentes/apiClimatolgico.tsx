import "./style.css";
import imgClima from "../../assets/dashboard/cloud.png";
import { ChamadaApi } from "../../APi/chamadaApiClima";
import { useEffect } from "react";

const ApiClimatologico = () => {
  const { dataApi, fecthApiClima } = ChamadaApi();
  useEffect(() => {
    fecthApiClima();
  }, []);
  return (
    <div className="apiClimatologico flex flex-col items-center rounded-md">
      <div className="">
        <h2>Lagoa Grande</h2>
        <p className="text-[40px]">{dataApi}°C</p>
        <img src={imgClima} alt="" />
      </div>
    </div>
  );
};
export default ApiClimatologico;
