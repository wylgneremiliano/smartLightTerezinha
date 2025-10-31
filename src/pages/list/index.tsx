import { useEffect, useState } from "react";
import { Filter } from "./components/filter";
import { Listing, type PropsItens } from "./components/listing";

import "./style.css";
import axios from "axios";
import { URL_PATH } from "../../constants";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";


const List = () => {
  const [listaItens, setListaItens] = useState<PropsItens[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const buscaItens = async () => {
    try {
      setLoading(true);
      setListaItens(
        (
          await axios.get(
            `${URL_PATH}/lista-dispositivos-sem-token`
          )
        ).data
      );
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscaItens()
  }, []);

  return (
    <div className="container-lista">
      <Header nome="Listagem de dispositivos" />
      <div className="conteudo">
        <NavBar />
        <div className="conteudo-principal">
          <Filter buscaItens={buscaItens} ></Filter>
          {loading ? (
            <div className="loading">

              <span className="texto">Carregando</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill"></div>
              </div>

            </div>
          ) : <Listing listaItens={listaItens} buscaItens={buscaItens}></Listing>}


        </div>
      </div>
    </div>
  );
};

export { List };
