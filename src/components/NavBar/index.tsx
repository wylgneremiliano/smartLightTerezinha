import iconHome from "../../assets/homeIcon.png";
import iconListItem from "../../assets/listItemIcon.png";
import iconInfo from "../../assets/infoIcon.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { PAGE } from "../../constants";



const NavBar = () => {
    const navigate = useNavigate();
    const handleNavigate = (local: string) => {
        navigate(local)
    }
    return <div className="barralateral">
        <img className="icon" src={iconHome} alt="Home" onClick={() => handleNavigate(PAGE.DASHBOARD())} />
        <img className="icon" src={iconListItem} alt="List Item" onClick={() => handleNavigate(PAGE.LISTA_ITENS())} />
        <img className="icon" src={iconInfo} alt="Info" onClick={() => handleNavigate(PAGE.INFO())} />
    </div>;
}
export { NavBar }