import './info.css';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';


const Info = () => {


    return (
        <div className='bodyInfo'>
            <Header nome='Sobre' />

            <div className="mainBox">

                <NavBar />
                <div className="containerInfo">
                    <h2>Sobre nós</h2>
                    <p>Somos um grupo de alunos e professores da Escola Estadual Santa Terezinha desenvolvendo este sistema como parte de um projeto de aprendizado em tecnologia e internet das coisas (IoT). Nosso objetivo é criar uma solução prática para gerenciar dispositivos da escola, unindo teoria e prática de programação, redes e automação.</p>
                    <h2>Como funciona</h2>
                    <p>O sistema conecta dispositivos IoT (como sensores, lâmpadas, tomadas inteligentes e outros) a uma plataforma central. </p>
                    <p>De forma simples:</p>
                    <ol>
                        <li>Os dispositivos ficam instalados na escola e se comunuicam pela rede.</li>
                        <li>O sistema recebe esses dados e permite controlar os dispositivos em tempo real.</li>
                        <li>Os usuários (professores e administradores) podem visualizar informações e gerenciar os equipamentos de forma fácil, pelo computador ou celular.</li>
                    </ol>
                    <p>Esse projeto mostra como a tecnologia pode facilitar o dia a dia da escola e, ao mesmo tempo, serve como aprendizado prático para os alunos que estão desenvolvendo a solução.</p>
                    <p>Desenvolvedores: Luma, Gabriel, Larissa, Caliu, Sérgio, Luiza, Adriely, Emerson, Pedro, Vitor, Luiz, Ícaro</p>
                </div>
            </div>

        </div>

    )
}

export default Info;
