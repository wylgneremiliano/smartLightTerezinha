interface props {
  texto: string;
  numero: number;
  className: string;
}
const CardStatus = ({ texto, numero, className }: props) => {
  return (
    <div className={`${className} items-center flex justify-center flex-col w-[150px] h-[150px] rounded-md`}>
      <div className="text-[40px]">{numero}</div>
      <p className="text-[18px]">{texto}</p>
    </div>
  );
};
export default CardStatus;
