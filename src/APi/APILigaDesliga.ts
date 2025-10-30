import axios from "axios";
import { URL_PATH } from "../constants";

type Props = {
    id: string;
    acao: string;
}

export async function APILigaDesligaDispositivo({ acao, id }: Props) {
    try {
        const dataBruto = await axios.post(
            `${URL_PATH}/device/${id}/${acao}`
        );
        return dataBruto;
    } catch (err) {
        console.error("Erro ao tentar ligar/desligar dispositivo", err);
    }
}

