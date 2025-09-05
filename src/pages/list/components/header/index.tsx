import logo from "../../../../assets/logo.png";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <img className="iconeHeader" width={102.4} height={108} src={logo} />
      <h1>Listagem de dispositivos</h1>
    </div>
  );
};

export { Header };
