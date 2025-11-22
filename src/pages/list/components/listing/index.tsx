import { APILigaDesligaDispositivo } from "../../../../APi/APILigaDesliga";
import "./style.css";
import { Switch } from "@mui/material";



export type PropsItens = {
  tipo: string;
  nome: string;
  grupo: string;
  status_conexao: boolean;
  estado: boolean;
  id: string;
};

type Props = {
  listaItens: PropsItens[];
  

}

const Listing = ({ listaItens }: Props) => {

  const handleChangeSwitch = async (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    APILigaDesligaDispositivo({ acao: event.target.checked ? "on" : "off", id });

  }



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
        <div className="table-line" key={item.id}>
          <div>{item.tipo}</div>
          <div className="line">{item.nome}</div>
          <div>{item.grupo}</div>
          <div className={`${item.status_conexao ? "green" : "gray"}`}>
            {item.status_conexao ? "Conectado" : "Desconectado"}
          </div>
          <Switch color="success" checked={item.estado} onChange={(e) => handleChangeSwitch(e, item.id)} />

        </div>
      ))}
    </div>
  );
};

export { Listing };
