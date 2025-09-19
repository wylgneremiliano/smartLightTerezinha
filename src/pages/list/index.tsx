import { Filter } from "./components/filter";
import { Header } from "./components/header";
import { Listing } from "./components/listing";
import { Menu } from "./components/menu";
import "./style.css";

const List = () => {
  return (
    <div className="container">
      <Header></Header>

      <div className="conteudo">
        <Menu></Menu>
        <div className="conteudo-principal">
          <Filter></Filter>
          <Listing></Listing>
        </div>
      </div>
    </div>
  );
};

export { List };
