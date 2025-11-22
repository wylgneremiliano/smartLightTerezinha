
import { Listing } from "./components/listing";

import "./style.css";


import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Loader } from "../../components/Loader";
import { useGetDispositivos } from "../../hook/useGetDispositivos";

const List = () => {
  const { data: dispositivos, isLoading } = useGetDispositivos();



  return (
    <div className="container-lista">
      <Header nome="Listagem de dispositivos" />
      <div className="conteudo">
        <NavBar />
        <div className="conteudo-principal">
          {/* <Filter /> */}
          {isLoading ? <Loader /> : <Listing listaItens={dispositivos ?? []} />}
        </div>
      </div>
    </div>
  );
};

export { List };
