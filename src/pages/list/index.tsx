import { useEffect, useState } from "react";
import { Filter } from "./components/filter";
import { Header } from "./components/header";
import { Listing, type PropsItens } from "./components/listing";
import { Menu } from "./components/menu";
import "./style.css";
import axios from "axios";
import { URL_PATH } from "../../constants";

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
    <div className="container">
      <Header></Header>

      <div className="conteudo">
        <Menu></Menu>
        <div className="conteudo-principal">
          <Filter buscaItens={buscaItens} ></Filter>
          {loading ? (
            <div className="loading">

              <span className="texto">Carregando</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill"></div>
              </div>

            </div>
          ) : <Listing listaItens={listaItens}></Listing>}


        </div>
      </div>
    </div>
  );
};

export { List };
