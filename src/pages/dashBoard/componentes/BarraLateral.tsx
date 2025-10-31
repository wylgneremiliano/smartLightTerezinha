import iconHome from "../../../assets/homeIcon.png";
import iconListItem from "../../../assets/listItemIcon.png";
import iconInfo from "../../../assets/infoIcon.png";
import "./style.css";


const BarraLateral = () => {
    return <div className="barralateral">
        <img className="icon" src={iconHome} alt="Home" />
        <img className="icon" src={iconListItem} alt="List Item" />       
        <img className="icon" src={iconInfo} alt="Info" />   
    </div>;
}
export default BarraLateral;