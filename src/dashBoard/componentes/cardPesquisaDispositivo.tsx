
import SearchIcon from '@mui/icons-material/Search';
import ItemPesquisa from './itemPesquisa';

const CardPesquisaDispositivo = ()=>{
  return (
    <div className="cardPesquisaDispositivo">
      <h3 className="cinzaDefault">Pesquisar dispositivo</h3>
      <div className="inputPesquisa">
        <button className=""><SearchIcon /></button>
      <input className="w-[90%]" type="text" placeholder="Digite o nome do dispositivo" />
      </div>
      <div>
        <ItemPesquisa></ItemPesquisa>
      </div>
    </div>
  );
};
export default CardPesquisaDispositivo