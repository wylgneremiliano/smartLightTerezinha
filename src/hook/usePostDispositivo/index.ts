import { useMutation } from "@tanstack/react-query"
import { APILigaDesligaDispositivo } from "../../api/APILigaDesliga"

type Props = {
    onSuccess: () => void
    onError: (data: Error) => void
}

type MutationProps = {
    id: string;
    acao: string
}

async function changeStateDisp(data: MutationProps): Promise<any> {
    const response = APILigaDesligaDispositivo({ id: data.id, acao: data.acao })
    return response;
}
const usePostDispositivo = ({ onSuccess, onError }: Props) => {
    return useMutation<void, Error, MutationProps>({
        mutationFn: changeStateDisp,
        onSuccess,
        onError,
    })
}

export { usePostDispositivo }