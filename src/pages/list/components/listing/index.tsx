import { useQueryClient } from "@tanstack/react-query";
import { APILigaDesligaDispositivo } from "../../../../APi/APILigaDesliga";
import { usePostDispositivo } from "../../../../hook/usePostDispositivo";
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
};

const Listing = ({ listaItens }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = usePostDispositivo({
    onSuccess: () => {
      setTimeout(
        () => queryClient.invalidateQueries({ queryKey: ["dispositivos"] }),
        500
      );
    },
    onError: (data) => {
      console.log(data.message);
    },
  });

  const handleChangeSwitch = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    mutate({ id: id, acao: event.target.checked ? "on" : "off" });
  };

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
          <Switch
            color="success"
            checked={item.estado}
            onChange={(e) => handleChangeSwitch(e, item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export { Listing };
