import { REMOVE_ITEM } from "./Type";

export const remove_item = (id) => {
    return {
        type: REMOVE_ITEM,
        id,
    }
}