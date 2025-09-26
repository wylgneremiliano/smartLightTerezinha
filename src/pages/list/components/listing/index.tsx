import "./style.css";
import listaItens from "../../../../mock/lista-itens.json";
import { Switch } from "@mui/material";

const Listing = () => {
  return (
    <div className="list">
      <div className="description-Header">
        <h2>Tipo</h2>
        <h2>Nome</h2>
        <h2>Grupo</h2>
        <h2>Status de Conexão</h2>
        <h2>Ligar/Desligar</h2>
      </div>
      {listaItens.map((item) => (
        <div className="table-line">
          <div>{item.tipo}</div>
          <div>{item.nome}</div>
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
