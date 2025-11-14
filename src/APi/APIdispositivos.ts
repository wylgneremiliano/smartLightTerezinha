import axios from "axios";
import { URL_PATH } from "../constants";
import type { Dispositivos } from "../pages/dashBoard/types/types";

export async function APIdispositivos() {
  try {
    const dataBruto = await axios.get<Dispositivos[]>(
      `${URL_PATH}/lista-dispositivos-sem-token`
    );
    return dataBruto;
  } catch (err) {
    console.error("Erro ao chamar API", err);
  }
}

