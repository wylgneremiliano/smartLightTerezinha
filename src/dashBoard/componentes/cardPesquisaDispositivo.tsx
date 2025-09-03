
import SearchIcon from '@mui/icons-material/Search';

const CardPesquisaDispositivo = ()=>{
  return (
    <div className="cardPesquisaDispositivo">
      <h3 className="">Pesquisar dispositivo</h3>
      <div className="inputPesquisa">
        <button><SearchIcon /></button>
      <input className="" type="text" placeholder="Digite o nome do dispositivo" />
      </div>
    </div>
  );
};
export default CardPesquisaDispositivo