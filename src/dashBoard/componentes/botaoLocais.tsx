import "./style.css";
interface props {
  texto: string;
}
const BotaoLocais = ({ texto }: props) => {
  return <button className="BotaoLocais">{texto}</button>;
};
export default BotaoLocais;
