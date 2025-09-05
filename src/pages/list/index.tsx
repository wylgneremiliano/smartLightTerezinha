import { Header } from "./components/header";
import { Menu } from "./components/menu";
import "./list.css";

const List = () => {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
    </div>
  );
};

export { List };
