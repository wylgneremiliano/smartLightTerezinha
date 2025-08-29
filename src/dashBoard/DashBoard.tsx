import BarraTop from "./componentes/barraTop";
import BotaoLocais from "./componentes/botaoLocais";
import CardStatus from "./componentes/cardStatus";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <BarraTop></BarraTop>
      <div className="containerBotaoLocais">
        <BotaoLocais texto="Salas"></BotaoLocais>
        <BotaoLocais texto="Refeitório"></BotaoLocais>
        <BotaoLocais texto="Secretarias"></BotaoLocais>
        <BotaoLocais texto="Biblioteca"></BotaoLocais>
        <BotaoLocais texto="Banheiros"></BotaoLocais>
        <BotaoLocais texto="Quadras"></BotaoLocais>
        <BotaoLocais texto="Depositos"></BotaoLocais>
      </div>
      <div>
        <div className="apiClimatologico">

        </div>
        <div className="containerStatusDispositivos">
          <CardStatus
            className="verdeDefault "
            numero={0}
            texto="Conectados"
          ></CardStatus>
          <CardStatus
            className="vermelhoDefault"
            numero={0}
            texto="Desconectados"
          ></CardStatus>
          <CardStatus
            className="azulDefault"
            numero={0}
            texto="Qtd.Dispositivos"
          ></CardStatus>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
