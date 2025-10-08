import "./style.css";
import buscar from "../../../../assets/buscar.png";

const Filter = () => {
  return (
    <div className="filter-Container">
      <div className="filter-Header">
        <div className="caixa-busca">
          <img className="img-busca" src={buscar}></img>
          <input className="buscar" placeholder="Buscar"></input>
        </div>

        </div>
        
      </div>

  );
};

export { Filter };
