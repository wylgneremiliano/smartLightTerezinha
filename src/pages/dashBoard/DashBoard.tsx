import { useEffect, useState } from "react";
import ApiClimatologico from "./componentes/apiClimatolgico";
import BarraTop from "./componentes/barraTop";

import CardPesquisaDispositivo from "./componentes/cardPesquisaDispositivo";
import CardsLigarDesligarTodosDispositivosIguais from "./componentes/cardsLigarDesligar";
import CardStatus from "./componentes/cardStatus";
import BarraLateral from "./componentes/BarraLateral";

import type { Dispositivos } from "../dashBoard/types/types";
import { APIdispositivos } from "../../api/APIdispositivos";
const DashBoard = () => {
  const [filtroGrupo, setFiltroGrupo] = useState<string>("");
  const [dispositivosIguaisDoGrupo, setDispositivosIguaisDoGrupo] = useState<
    string[]
  >([]);
  const [dispositivos, setDispositivos] = useState<Dispositivos[]>([]);
  const [calculoDispositivos, setCalculoDispositivos] = useState({
    conectados: 0,
    desconectado: 0,
    quantidadeDispositivos: 0,
  });

  const handleApi = async () => {
    const disp = await APIdispositivos();
    if (disp && filtroGrupo !== "" && filtroGrupo !== "Todos") {
      const data = disp.data;
      setDispositivos(
        data.filter((itens: Dispositivos) => itens.grupo === filtroGrupo)
      );
    } else if (disp) {
      if (filtroGrupo === "Todos" || filtroGrupo === "") {
        setDispositivos(disp.data);
      }
    }
  };
  const calcularElementosIguais = () => {
    const dispositivosIguaisGrupo = [
      ...new Set(dispositivos.map((item) => item.tipo)),
    ];
    setDispositivosIguaisDoGrupo(dispositivosIguaisGrupo);
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
    calcularElementosIguais();
  }, []);

  useEffect(() => {
    calcularElementosIguais();
    handleApi();
    calcularDispo();
  }, [filtroGrupo]);


  useEffect(() => {
    calcularDispo();
  }, [dispositivos]);

  return (
    <div className="DashBoard">
      <BarraTop></BarraTop>
      <div className="flex">
        {window.innerWidth > 768 && <BarraLateral></BarraLateral>}

        <div className="flex-grow flex flex-col items-center ">
          <div className="containerBotaoLocais">
            {[
              "Todos",
              "Salas",
              "Refeitório",
              "Secretaria",
              "Biblioteca",
              "Banheiros",
              "Quadras",
              "Depositos",
            ].map((grupo) => (
              <button
                key={grupo}
                onClick={() => setFiltroGrupo(grupo)}
                value={grupo}
                className="BotaoLocais"
              >
                {grupo}
              </button>
            ))}
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
                {dispositivosIguaisDoGrupo.map((itens) => (
                  <CardsLigarDesligarTodosDispositivosIguais
                    nomeDispositivo={itens}
                    tipoDispositivo={itens}
                  ></CardsLigarDesligarTodosDispositivosIguais>
                ))}
                {/* <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Lâmpadas" tipoDispositivo="lampada"></CardsLigarDesligarTodosDispositivosIguais>
                 <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Projetores" tipoDispositivo="projetor"></CardsLigarDesligarTodosDispositivosIguais>
                  <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="TVs" tipoDispositivo="tv"></CardsLigarDesligarTodosDispositivosIguais>
                   <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="interruptores" tipoDispositivo="interruptor"></CardsLigarDesligarTodosDispositivosIguais>
                    <CardsLigarDesligarTodosDispositivosIguais nomeDispositivo="Ares-Condicionados" tipoDispositivo="arCondicionado"></CardsLigarDesligarTodosDispositivosIguais> */}
              </div>
            </div>
            <CardPesquisaDispositivo
              listaDispositivos={dispositivos}
            ></CardPesquisaDispositivo>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
