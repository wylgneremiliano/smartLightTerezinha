import "./style.css";
import logo from "../../../assets/logoEscola.png"
const BarraTop = () => {
  return (
    <div className="BarraTop">
      <img className="logo" src={logo} alt="" />
      <h1 className="">Pagina inicial</h1>
    </div>
  );
};

export default BarraTop;
