import filter from "../../../../assets/filterIcon.png";
import "./style.css";

const Filter = () => {
  return (
    <div className="filter-Container">
      <div className="filter-header">
        <h1>Filtros</h1>
        <img className="iconeFilter" src={filter} />
      </div>

      <div className="description-header">
        <h2>Tipo</h2>
        <h2>Nome</h2>
        <h2>Grupo</h2>
        <h2>Status de Conexão</h2>
        <h2>Ligar/Desligar</h2>
      </div>
    </div>
  );
};

export { Filter };
