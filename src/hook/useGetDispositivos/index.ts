import { useQuery } from "@tanstack/react-query";

import type { Dispositivos } from "../../pages/dashBoard/types/types";
import axios from "axios";
import { URL_PATH } from "../../constants";


const useGetDispositivos = () => {
    return useQuery({
        queryKey: ['dispositivos'],
        queryFn: async () => {

            const dataBruto = await axios.get<Dispositivos[]>(
                `${URL_PATH}/lista-dispositivos-sem-token`
            );

            return dataBruto.data


        },

    });
}

export { useGetDispositivos }