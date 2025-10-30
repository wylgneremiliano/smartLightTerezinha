import axios from "axios";
import { URL_PATH } from "../constants";

export async function APIdispositivos() {
  try {
    const dataBruto = await axios.get(
      `${URL_PATH}/lista-dispositivos-sem-token`
    );
    return dataBruto;
  } catch (err) {
    console.error("Erro ao chamar API", err);
  }
}

