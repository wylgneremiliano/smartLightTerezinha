import SearchIcon from "@mui/icons-material/Search";
import ItemPesquisa from "./itemPesquisa";
import type { Dispositivos } from "../types/types";
import { useEffect, useState } from "react";

interface props {
  listaDispositivos?: Array<Dispositivos>;
}
const CardPesquisaDispositivo = ({ listaDispositivos }: props) => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [filtro, setFiltro] = useState<Array<Dispositivos> | undefined>(
    listaDispositivos
  );

  useEffect(() => {
    const filtro = listaDispositivos?.filter((item) =>
      item.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setFiltro(filtro);
    if (pesquisa == "") {
      setFiltro(listaDispositivos);
    }
  }, [pesquisa, listaDispositivos]);
  return (
    <div className="cardPesquisaDispositivo">
      <h3 className="cinzaDefault">Pesquisar dispositivo</h3>
      <div className="inputPesquisa">
        <button className="">
          <SearchIcon />
        </button>
        <input
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="w-[90%]"
          type="text"
          placeholder="Digite o nome do dispositivo"
        />
      </div>
      <div>
        {filtro?.map((item) => (
          <ItemPesquisa
            key={item.id}
            dispositivo={item}
          ></ItemPesquisa>
        ))}
      </div>
    </div>
  );
};
export default CardPesquisaDispositivo;
