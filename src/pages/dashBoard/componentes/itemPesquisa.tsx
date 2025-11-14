import { Switch } from "@mui/material";

import imgArCondicionado from "../../../assets/dashboard/air.png";
import imgProjetor from "../../../assets/dashboard/projector.png";
import imgTv from "../../../assets/dashboard/tv.png";
import imgLampada from "../../../assets/dashboard/ideia.png";
import { APILigaDesligaDispositivo } from "../../../api/APILigaDesliga";
import type { Dispositivos } from "../types/types";

type Props = {
  dispositivo: Dispositivos;
}
const ItemPesquisa = ({ dispositivo }: Props) => {
  const { nome, tipo, status_conexao, id, estado } = dispositivo
  const handleChangeSwitch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await APILigaDesligaDispositivo({ acao: event.target.checked ? "on" : "off", id });
  }


  return (
    <div className="cinzaFundo cinzaDefault itemPesquisa">
      <div className="flex justify-between items-center">
        <p>{"Interruptor"}</p>
        {
          tipo === "lampada" ? <img className="imagensCard sm:w-[30px]" src={imgLampada} alt="" /> :
            tipo === "arCondicionado" ? <img className="imagensCard sm:w-[30px]" src={imgArCondicionado} alt="" /> :
              tipo === "tv" ? <img className="imagensCard sm:w-[30px]" src={imgTv} alt="" /> :
                tipo === "projetor" ? <img className="imagensCard sm:w-[30px]" src={imgProjetor} alt="" /> :
                  <img className="imagensCard sm:w-[30px]" src={imgLampada} alt="" />

        }
        <Switch color="success" onChange={(e) => handleChangeSwitch(e)} checked={estado}></Switch>
      </div>
      <p>
        {nome}
      </p>
      <p className={status_conexao ? "text-green-500" : "text-red-500"}>
        {status_conexao ? "conectado" : "desconectado"}
      </p>
    </div>
  )
}
export default ItemPesquisa