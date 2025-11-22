import "./info.css";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";

const Info = () => {
  return (
    <div className="bodyInfo">
      <Header nome="Sobre" />

      <div className="mainBox">
        <NavBar />
        <div className="wrapper">
          <h2 className="title">Sobre Nós</h2>
          <p className="text">
            Somos um grupo de alunos e professores da Escola Estadual Santa
            Terezinha desenvolvendo este sistema como parte de um projeto de
            aprendizado em tecnologia e internet das coisas (IoT). Nosso
            objetivo é criar uma solução prática para gerenciar dispositivos da
            escola, unindo teoria e prática de programação, redes e automação.
          </p>

          <h2 className="title">Como Funciona</h2>
          <p className="text">
            O sistema conecta dispositivos IoT (como sensores, lâmpadas, tomadas
            inteligentes e outros) a uma plataforma central.
          </p>

          <p className="text">De forma simples:</p>

          <ol className="list">
            <li className="list-item">
              Os dispositivos ficam instalados na escola e se comunicam pela
              rede.
            </li>
            <li className="list-item">
              O sistema recebe esses dados e permite controlar os dispositivos
              em tempo real.
            </li>
            <li className="list-item">
              Os usuários (professores e administradores) podem visualizar
              informações e gerenciar os equipamentos de forma fácil, pelo
              computador ou celular.
            </li>
          </ol>

          <p className="text">
            Esse projeto mostra como a tecnologia pode facilitar o dia a dia da
            escola e, ao mesmo tempo, serve como aprendizado prático para os
            alunos que estão desenvolvendo a solução.
          </p>

          <div className="footer">
            Desenvolvedores:
            <div className="devs">
              Luma, Gabriel, Larissa, Caliu, Sergio, Luiza, Adriely, Emerson,
              Pedro, Vitor, Luiz, Ícaro
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
