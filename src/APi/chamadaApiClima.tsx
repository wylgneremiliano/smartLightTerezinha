import { useState } from "react";



export function ChamadaApi() {
  const [dataApi, setDataApi] = useState<string>("");

    const fecthApiClima = async () => {
        try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Lagoa Grande,BR&appid=b45cb690856fde97887ed46e5f7f132b&units=metric&lang=pt_br`
    );

    const data = await result.json();
    setDataApi(data.main.temp);
  } catch {
    console.log("Erro ao chamar API");
  }
}

return { dataApi, fecthApiClima };
}