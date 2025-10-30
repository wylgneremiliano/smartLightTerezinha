import axios from "axios";

export async function APIdispositivos() {
  try {
    const dataBruto = await axios.get(
      `http://[fe80::96c6:91ff:fe41:d2e3]:3000/lista-dispositivos-sem-token`
    );
    return dataBruto;
  } catch (err) {
    console.error("Erro ao chamar API", err);
  }
}

