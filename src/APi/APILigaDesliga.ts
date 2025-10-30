import axios from "axios";

type Props = {
    id: string;
    acao: string;
}

export async function APILigaDesligaDispositivo({ acao, id }: Props) {
    try {
        const dataBruto = await axios.post(
            `http://[fe80::96c6:91ff:fe41:d2e3]:3000/device/${id}/${acao}`
        );
        return dataBruto;
    } catch (err) {
        console.error("Erro ao tentar ligar/desligar dispositivo", err);
    }
}

