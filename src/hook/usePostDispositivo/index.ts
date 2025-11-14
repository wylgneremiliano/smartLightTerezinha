import { useMutation } from "@tanstack/react-query"
import { APILigaDesligaDispositivo } from "../../api/APILigaDesliga"

type Props = {
    onSuccess: () => void
}

type MutationProps = {
    id: string;
    acao: string
}
const usePostDispositivo = ({ onSuccess }: Props) => {
    return useMutation({
        onMutate(data: MutationProps) {
            APILigaDesligaDispositivo({ id: data.id, acao: data.acao })
        },

        onSuccess
    })
}

export { usePostDispositivo }