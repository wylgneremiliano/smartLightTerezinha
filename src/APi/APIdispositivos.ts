import axios from "axios";

export async function APIdispositivos() {
  try {
    const dataBruto = await axios.get(
      `https://smartlightterezinhabackend.onrender.com/lista-dispositivos-sem-token`
    );
    return dataBruto;
  } catch (err) {
    console.error("Erro ao chamar API", err);
  }
}

