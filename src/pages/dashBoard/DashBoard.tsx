import { useEffect, useState } from "react";
import ApiClimatologico from "./componentes/apiClimatolgico";

import CardPesquisaDispositivo from "./componentes/cardPesquisaDispositivo";
import CardsLigarDesligarTodosDispositivosIguais from "./componentes/cardsLigarDesligar";
import CardStatus from "./componentes/cardStatus";



import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useGetDispositivos } from "../../hook/useGetDispositivos";
import { Loader } from "../../components/Loader";

const DashBoard = () => {
  const navigate = useNavigate();
  const { data: dispositivos, isLoading } = useGetDispositivos()
  const [filtroGrupo, setFiltroGrupo] = useState<string>("");
  const [dispositivosIguaisDoGrupo, setDispositivosIguaisDoGrupo] = useState<
    string[]
  >([]);

  const [calculoDispositivos, setCalculoDispositivos] = useState({
    conectados: 0,
    desconectado: 0,
    quantidadeDispositivos: 0,
  });


  const calcularElementosIguais = () => {
    if (dispositivos) {
      const dispositivosIguaisGrupo = [
        ...new Set(dispositivos.map((item) => item.tipo)),
      ];
      setDispositivosIguaisDoGrupo(dispositivosIguaisGrupo);
    }

  };


  const calcularDispo = () => {
    console.log(JSON.stringify(dispositivos, null, 2))
    const conectados = dispositivos?.filter(
      (item) => item.status_conexao
    ).length ?? 0;


    const desconectado = dispositivos?.filter(
      (item) => !item.status_conexao
    ).length ?? 0;
    const quantidadeDispositivos = dispositivos?.length ?? 0;

    setCalculoDispositivos({
      conectados,
      desconectado,
      quantidadeDispositivos,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    calcularElementosIguais();
  }, []);

  useEffect(() => {
    calcularElementosIguais();

    calcularDispo();
  }, [filtroGrupo]);


  useEffect(() => {
    calcularDispo();

  }, [dispositivos]);

  return (
    <div className="DashBoard">
      <Header nome="Página inicial" />
      <div className="flex">
        {window.innerWidth > 768 && <NavBar />}

        {isLoading ? <Loader /> : <div className="flex-grow flex flex-col items-center ">
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
        }
      </div>
    </div>
  );
};
export default DashBoard;
