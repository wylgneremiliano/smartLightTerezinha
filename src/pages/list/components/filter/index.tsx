import filter from "../../../../assets/filterIcon.png";
import "./style.css";

const Filter = () => {
  return (
    <div className="filter">
      <h1>Filtros</h1>
      <img className="iconeFilter" src={filter} />
    </div>
  );
};

export { Filter };
