import { useEffect, useState } from "react";
import ApiClimatologico from "./componentes/apiClimatolgico";
import BarraTop from "./componentes/barraTop";
import BotaoLocais from "./componentes/botaoLocais";
import CardPesquisaDispositivo from "./componentes/cardPesquisaDispositivo";
import CardsLigarDesligarTodosDispositivosIguais from "./componentes/cardsLigarDesligar";
import CardStatus from "./componentes/cardStatus";
import BarraLateral from "./componentes/BarraLateral";
import { APIdispositivos } from "../APi/APIdispositivos";
import type { Dispositivos } from "../dashBoard/types/types";
const DashBoard = () => {
  const [dispositivos, setDispositivos] = useState<Dispositivos[]>([]);
  const [calculoDispositivos, setCalculoDispositivos] = useState({
    conectados: 0,
    desconectado: 0,
    quantidadeDispositivos: 0,
  });

  const handleApi = async () => {
    const disp = await APIdispositivos();
    if (disp) setDispositivos(disp.data);
  };
  const calcularDispo = () => {
    const conectados = dispositivos.filter(
      (item) => item.status_conexao
    ).length;
    console.log(conectados);

    const desconectado = dispositivos.filter(
      (item) => !item.status_conexao
    ).length;
    const quantidadeDispositivos = dispositivos.length;
    setCalculoDispositivos({
      conectados,
      desconectado,
      quantidadeDispositivos,
    });
  };
  useEffect(() => {
    handleApi();
    calcularDispo();
  }, []);
  useEffect(() => {
    calcularDispo();
  }, [dispositivos]);

  return (
    <div className="DashBoard">
      <BarraTop></BarraTop>
      <div className="flex">
        {
        window.innerWidth > 768 && <BarraLateral></BarraLateral>
        }
       
        <div className="flex-grow flex flex-col items-center ">
          <div className="containerBotaoLocais">
            <BotaoLocais texto="Salas"></BotaoLocais>
            <BotaoLocais texto="Refeitório"></BotaoLocais>
            <BotaoLocais texto="Secretarias"></BotaoLocais>
            <BotaoLocais texto="Biblioteca"></BotaoLocais>
            <BotaoLocais texto="Banheiros"></BotaoLocais>
            <BotaoLocais texto="Quadras"></BotaoLocais>
            <BotaoLocais texto="Depositos"></BotaoLocais>
          </div>
          <div className="elementosInferiores">
            <div>
              <div className="apiClimatologicoEstatusDispositivos">
                <ApiClimatologico></ApiClimatologico>
                <div className="containerStatusDispositivos">
                  <CardStatus
                    className="verdeDefault "
                    numero={calculoDispositivos.conectados}
                    texto="Conectados"
                  ></CardStatus>
                  <CardStatus
                    className="vermelhoDefault"
                    numero={calculoDispositivos.desconectado}
                    texto="Desconectados"
                  ></CardStatus>
                  <CardStatus
                    className="azulDefault"
                    numero={calculoDispositivos.quantidadeDispositivos}
                    texto="Qtd.Dispositivos"
                  ></CardStatus>
                </div>
              </div>
              <div className="containerLigarDesligarDispositivos">
                <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Lâmpadas" tipoDispositivo="lampada"></CardsLigarDesligarTodosDispositivosIguais>
                 <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Projetores" tipoDispositivo="projetor"></CardsLigarDesligarTodosDispositivosIguais>
                  <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="TVs" tipoDispositivo="tv"></CardsLigarDesligarTodosDispositivosIguais>
                   <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="interruptores" tipoDispositivo="interruptor"></CardsLigarDesligarTodosDispositivosIguais>
                    <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Ares-Condicionados" tipoDispositivo="arCondicionado"></CardsLigarDesligarTodosDispositivosIguais>
              </div>
            </div>
            <CardPesquisaDispositivo listaDispositivos={dispositivos}></CardPesquisaDispositivo>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
