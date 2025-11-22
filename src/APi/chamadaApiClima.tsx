import { useState } from "react";
import type { dataApiClima } from "../pages/dashBoard/types/types";



export function ChamadaApi() {
  const [dataApi, setDataApi] = useState<dataApiClima>();

    const fecthApiClima = async () => {
        try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Lagoa Grande,BR&appid=b45cb690856fde97887ed46e5f7f132b&units=metric&lang=pt_br`
    );

    
    setDataApi(result.ok ? await result.json() : undefined);
  } catch {
    console.log("Erro ao chamar API");
  }
}

return { dataApi, fecthApiClima };
}