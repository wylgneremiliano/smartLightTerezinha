import { Switch } from "@mui/material";
import interruptorImg from "../../assets/dashboard/switch.png"

import { useState } from "react";

const ItemPesquisa = () => {
    const [statusDispositivo, setStatusDispositivo] = useState<boolean>(true)
  return (
    <div className="cinzaFundo cinzaDefault itemPesquisa">
        <div className="flex justify-between items-center">
        <p>{"Interruptor"}</p>
        <img width={25} src={interruptorImg} alt={"Interruptor"} />
    <Switch color="success"></Switch>
    </div>
    <p>
        {"Interruptor_sala_1"}
    </p>
    <p className={statusDispositivo ? "text-green-500" : "text-red-500"}>
        {statusDispositivo ? "conectado" : "desconectado"}
    </p>
    </div>
  )
}
export default ItemPesquisa