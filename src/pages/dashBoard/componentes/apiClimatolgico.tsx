import "./style.css";
import imgClima from "../../../assets/dashboard/cloud.png";

import { useEffect } from "react";
import { ChamadaApi } from "../../../APi/chamadaApiClima";

const ApiClimatologico = () => {
  const { dataApi, fecthApiClima } = ChamadaApi();
  useEffect(() => {
    fecthApiClima();
  }, []);
  return (
    <div className="apiClimatologico flex flex-col items-center rounded-md">
      <div className="">
        {dataApi && (
          <>
            <h2>{dataApi.name}</h2>
            <p className="text-[40px]">{dataApi.main.temp}°C</p>
            <div className="iconeTexto"> 
              <img
                width={80}
                src={`https://openweathermap.org/img/wn/${dataApi.weather[0].icon}@2x.png`}
                alt=""
              />
              <p>{dataApi.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ApiClimatologico;
