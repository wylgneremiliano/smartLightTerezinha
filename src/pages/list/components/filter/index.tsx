import "./style.css";
import buscar from "../../../../assets/buscar.png";
import reset from "../../../../assets/atualizar.png";


type Props = {
  buscaItens: () => void;

}

const Filter = ({ buscaItens }: Props) => {

  const handleClick = () => {
    buscaItens();
  }

  return (
    <div className="filter-Container">
      <div className="filter-Header">
        <div className="caixa-busca">
          <img className="img-busca" src={buscar}></img>
          <input className="buscar" placeholder="Buscar" autoComplete="off"></input>
        </div>
        <div className="atualiza" onClick={handleClick}>
          <img className="img-restart" src={reset}></img>
        </div>
      </div>
    </div>
  );
};

export { Filter };
