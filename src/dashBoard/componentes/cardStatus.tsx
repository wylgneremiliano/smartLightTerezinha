interface props {
  texto: string;
  numero: number;
  className: string;
}
const CardStatus = ({ texto, numero, className }: props) => {
  return (
    <div className={`${className} items-center flex justify-center flex-col w-[220px] h-[120px] sm:h-[150px] sm:w-[150px]  rounded-md cursor-pointer`}>
      <div className="text-[40px]">{numero}</div>
      <p className="text-[18px]">{texto}</p>
    </div>
  );
};
export default CardStatus;
