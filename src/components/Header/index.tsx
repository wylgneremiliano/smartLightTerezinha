import "./style.css";
import logo from "../../assets/logoEscola.png";

type Props = {
    nome: string
}
const Header = ({ nome }: Props) => {
    return (
        <div className="BarraTop">
            <img className="logo" src={logo} alt="" />
            <h1 className="">{nome}</h1>
        </div>
    );
};

export { Header };
