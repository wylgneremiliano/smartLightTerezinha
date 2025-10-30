import "./style.css";
import home from "../../../../assets/homeIcon.png";
import list from "../../../../assets/listItemIcon.png";
import info from "../../../../assets/infoIcon.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="icones">
        <img className="iconesMenu" src={home} alt="icone home" />
        <img className="iconesMenu" src={list} alt="icone list" />
        <img className="iconesMenu" src={info} alt="icone info" />
      </div>
    </div>
  );
};

export { Menu };
