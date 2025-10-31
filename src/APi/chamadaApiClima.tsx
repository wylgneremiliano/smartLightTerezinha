import { useState } from "react";
import type { dataApiClima } from "../pages/dashBoard/types/types";



export function ChamadaApi() {
  const [dataApi, setDataApi] = useState<dataApiClima>({temp:0, description:""});

    const fecthApiClima = async () => {
        try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Lagoa Grande,BR&appid=b45cb690856fde97887ed46e5f7f132b&units=metric&lang=pt_br`
    );

    const data = await result.json();
    setDataApi({description: data.weather[0].description,  temp: data.main.temp});
  } catch {
    console.log("Erro ao chamar API");
  }
}

return { dataApi, fecthApiClima };
}