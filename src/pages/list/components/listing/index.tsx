import "./style.css";

const Listing = () => {
  return (
    <div className="list"> 
    <div className="description-Header">
      <h2>Tipo</h2>
      <h2>Nome</h2>
      <h2>Grupo</h2>
      <h2>Status de Conexão</h2>
      <h2>Ligar/Desligar</h2>
    </div>

    <div className="table-line">
      <div>Lâmpada</div>
      <div>Lâmpada_sala_01</div>
      <div>Sala</div>
      <div>Conectado/Desconectado</div>
      <input type="checkbox"></input>
      </div>

    <div className="table-line">  
      <div>Lâmpada</div>
      <div>Lâmpada_sala_02</div>
      <div>Sala</div>
      <div>Conectado/Desconectado</div>
      <input type="checkbox"></input>
      </div>

    <div className="table-line">
      <div>Lâmpada</div>
      <div>Lâmpada_sala_03</div>
      <div>Sala</div>
      <div>Conectado/Desconectado</div>
      <input type="checkbox"></input>
      </div>

    <div className="table-line">
      <div>Lâmpada</div>
      <div>Lâmpada_sala_04</div>
      <div>Sala</div>
      <div>Conectado/Desconectado</div>
      <input type="checkbox"></input>
      </div>

    <div className="table-line">
      <div>Lâmpada</div>
      <div>Lâmpada_sala_05</div>
      <div>Sala</div>
      <div>Conectado/Desconectado</div>
      <input type="checkbox"></input>
      </div>
  
    </div>
  
  );
};

export { Listing };
