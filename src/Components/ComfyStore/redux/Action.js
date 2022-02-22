import { SRC_IMG, TEXT, ADD_TO_CART, DELET, CLEAR_ITEMS } from './Type'

export const img_src = (src) => {
    return {
        type: SRC_IMG,
        src
    }
}
export const titleNav = (txt) => {
    return {
        type: TEXT,
        txt
    }
}
export const addToCart = (title, price, img, Quantity) => {
    return {
        type: ADD_TO_CART,
        title, price, img, Quantity
    }
}

export const deletItem = (title) => {
    return {
        type: DELET,
        title
    }
}
export const clear_items = () => {
    return {
        type: CLEAR_ITEMS
    }
}