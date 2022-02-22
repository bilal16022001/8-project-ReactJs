import { CHOOSE_CORRECT } from "./Type";

export const choose_correct = (id) => {
    return {
        type: CHOOSE_CORRECT,
        paylaod: id
    }
}