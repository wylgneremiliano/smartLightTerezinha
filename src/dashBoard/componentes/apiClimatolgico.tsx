import "./style.css";
import imgClima from "../../assets/dashboard/cloud.png"

const ApiClimatologico = () => {
  return (
    <div className="apiClimatologico flex flex-col items-center rounded-md">
        <div className="">
      <h2>Lagoa Grande</h2>
      <p className="text-[40px]">25°C</p>
      <img src={imgClima} alt="" />
      </div>
    </div>
  );
};
export default ApiClimatologico;
