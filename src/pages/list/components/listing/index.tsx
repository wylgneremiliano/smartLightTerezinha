import { useEffect, useState } from "react";
import "./style.css";
import { Switch } from "@mui/material";

import axios from "axios";

type PropsItens = {
  tipo: string;
  nome: string;
  grupo: string;
  status_conexao: boolean;
  estado: boolean;
};

const Listing = () => {
  const [listaItens, setListaItens] = useState<PropsItens[]>([]);

  const buscaItens = async () => {
    try {
      setListaItens(
        (
          await axios.get(
            `https://smartlightterezinhabackend.onrender.com/lista-dispositivos-sem-token`
          )
        ).data
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    buscaItens();
  }, []);

  return (
    <div className="list">
      <div className="description-Header">
        <h2>Tipo</h2>
        <h2>Nome</h2>
        <h2>Grupo</h2>
        <h2>Status de Conexão</h2>
        <h2>Ligar/Desligar</h2>
      </div>

      {listaItens?.map((item) => (
        <div className="table-line">
          <div>{item.tipo}</div>
          <div className="line">{item.nome}</div>
          <div>{item.grupo}</div>
          <div className={`${item.status_conexao ? "green" : "gray"}`}>
            {item.status_conexao ? "Conectado" : "Desconectado"}
          </div>
          <Switch color="success" checked={item.estado} />
        </div>
      ))}
    </div>
  );
};

export { Listing };
