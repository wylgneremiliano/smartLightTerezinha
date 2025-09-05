import { Filter } from "./components/filter";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import "./style.css";

const List = () => {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Filter></Filter>
    </div>
  );
};

export { List };
