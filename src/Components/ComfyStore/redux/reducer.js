import { SRC_IMG, TEXT, ADD_TO_CART, DELET, CLEAR_ITEMS } from './Type'
const initialState = {
    ProductsDt: [
        {
            id: 1,
            img: "/imgComfy/accent.jfif",
            title: "Accent Chair",
            price: 259.99,
            category: "Office",
            categoryAll: "All",
            para: "marcos",
            count: 1,
            bg: "rgb(0, 255, 0)",
            bg_two: "rgb(255, 0, 0)",
            bg_th: "rgb(0, 0, 255)",
            otherImg: ["/imgComfy/accent.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 2,
            img: "/imgComfy/armchair.jfif",
            title: "Armchair",
            price: 125.99,
            category: "Bedroom",
            categoryAll: "All",
            bg: "rgb(0, 255, 0)",
            bg_th: "rgb(0, 0, 255)",
            bg_fo: "rgb(0, 0, 0)",
            count: 1,
            para: "marcos",
            otherImg: ["/imgComfy/armchair.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        // {
        //     id: 3,
        //     img: "/imgComfy/wootbl.jfif",
        //     title: "Dining Table",
        //     count: 1,
        //     price: 429.99,
        //     otherImg: ["/imgComfy/wootbl.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        // },
        {
            id: 4,
            img: "/imgComfy/bench.jfif",
            title: "High-Back Bench",
            category: "Office",
            count: 1,
            categoryAll: "All",
            para: "ikea",
            bg: "rgb(0, 255, 0)",
            bg_fo: "rgb(0, 0, 0)",
            price: 399.99,
            otherImg: ["/imgComfy/bench.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 5,
            img: "/imgComfy/leather.jfif",
            title: "Leather Chair",
            price: 200.99,
            category: "Bedroom",
            categoryAll: "All",
            para: "caressa",
            bg: "rgb(0, 255, 0)",
            bg_fo: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/leather.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 6,
            img: "/imgComfy/Sofa.jfif",
            title: "Leather Sofa",
            category: "Office",
            categoryAll: "All",
            price: 999.99,
            bg: "rgb(0, 255, 0)",
            bg_th: "rgb(0, 0, 255)",
            count: 1,
            otherImg: ["/imgComfy/Sofa.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 7,
            img: "/imgComfy/modern.jfif",
            title: "Modern Bookshelf",
            price: 319.99,
            category: "Kids",
            categoryAll: "All",
            bg: "rgb(255, 0, 0)",
            para_Two: "caressa",
            bg_fo: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/modern.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 8,
            img: "/imgComfy/shelf.jfif",
            title: "Shelf",
            price: 309.99,
            category: "Living Room",
            count: 1,
            para: "ikea",
            bg: "rgb(0, 255, 0)",
            categoryAll: "All",
            otherImg: ["/imgComfy/shelf.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 10,
            img: "/imgComfy/sofaset.jfif",
            title: "Sofa Set",
            price: 1299.99,
            category: "Living Room",
            categoryAll: "All",
            para: "marcos",
            bg: "rgb(0, 255, 0)",
            bg_fo: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/sofaset.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 11,
            img: "/imgComfy/ut_sofa.jfif",
            title: "Utopia Sofa",
            price: 799.99,
            category: "Living Room",
            categoryAll: "All",
            para: "liddy",
            para_Two: "caressa",
            bg: "rgb(255, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/ut_sofa.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 13,
            img: "/imgComfy/suede.jfif",
            title: "Suede Armchair",
            price: 159.99,
            category: "Office",
            categoryAll: "All",
            para: "caressa",
            bg_fo: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/suede.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 14,
            img: "/imgComfy/vase.jfif",
            title: "Vase Table",
            price: 1209.99,
            category: "Office",
            categoryAll: "All",
            para: "marcos",
            bg: "rgb(255, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/vase.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 15,
            img: "/imgComfy/lthr.jfif",
            title: "Leather Sofa",
            price: 999.99,
            category: "Office",
            categoryAll: "All",
            para: "caressa",
            bg: "rgb(0, 255, 0)",
            bg_fo: "rgb(0, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/lthr.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 16,
            img: "/imgComfy/desk.jfif",
            title: "Wooden Desk",
            price: 1509.99,
            category: "Office",
            categoryAll: "All",
            para: "ikea",
            bg: "rgb(0, 0, 255)",
            count: 1,
            otherImg: ["/imgComfy/desk.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 17,
            img: "/imgComfy/albany.jfif",
            title: "Albany Sectional",
            price: 1099.99,
            category: "Living Room",
            categoryAll: "All",
            para: "liddy",
            bg: "rgb(255, 185, 0)",
            bg_fo: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/albany.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 18,
            img: "/imgComfy/smplchr.jfif",
            title: "Simple Chair",
            price: 1099.99,
            category: "Living Room",
            categoryAll: "All",
            para: "liddy",
            count: 1,
            otherImg: ["/imgComfy/smplchr.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 19,
            img: "/imgComfy/center.jfif",
            title: "Entertainment Center",
            price: 599.99,
            category: "Living Room",
            categoryAll: "All",
            para: "caressa",
            bg: "rgb(255, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/center.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 20,
            img: "/imgComfy/Poster.jfif",
            title: "Modern Poster",
            price: 30.99,
            category: "Living Room",
            categoryAll: "All",
            para: "liddy",
            bg: "rgb(0, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/Poster.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 21,
            img: "/imgComfy/wooden_tble.jfif",
            title: "Wooden Table",
            price: 2349.99,
            category: "Kitchen",
            categoryAll: "All",
            para: "ikea",
            para_Two: "caressa",
            bg: "rgb(255, 0, 0)",
            bg_fi: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/wooden_tble.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 22,
            img: "/imgComfy/al.jfif",
            title: "Albany Table",
            price: 3099.99,
            category: "Kitchen",
            categoryAll: "All",
            para: "liddy",
            bg: "rgb(0, 0, 255)",
            count: 1,
            otherImg: ["/imgComfy/al.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 23,
            img: "/imgComfy/em_bed.jfif",
            title: "Emperor Bed",
            price: 239.99,
            category: "Bedroom",
            categoryAll: "All",
            para: "ikea",
            bg: "rgb(0, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/em_bed.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 24,
            img: "/imgComfy/wo_bed.jfif",
            title: "Wooden Bed",
            price: 2500.99,
            category: "Bedroom",
            categoryAll: "All",
            para: "ikea",
            bg: "rgb(255, 185, 0)",
            count: 1,
            otherImg: ["/imgComfy/em_bed.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 25,
            img: "/imgComfy/stool.jfif",
            title: "Bar Stool",
            price: 40.99,
            category: "Dining",
            categoryAll: "All",
            para: "liddy",
            bg: "rgb(0, 0, 0)",
            count: 1,
            otherImg: ["/imgComfy/stool.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 26,
            img: "/imgComfy/table.jfif",
            title: "Dining Table",
            price: 429.99,
            category: "Dining",
            categoryAll: "All",
            count: 1,
            bg: "rgb(255, 0, 0)",
            bg_two: "rgb(0, 255, 0)",
            bg_th: "rgb(0, 0, 255)",
            para: "marcos",
            otherImg: ["/imgComfy/table.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
        {
            id: 27,
            img: "/imgComfy/wooden.jfif",
            title: "Wooden Desk",
            price: 1509.99,
            category: "Dining",
            categoryAll: "All",
            bg: "rgb(0, 0, 0)",
            count: 1,
            para: "ikea",
            otherImg: ["/imgComfy/wooden.jfif", "/imgComfy/z-extra-2.jpeg", "/imgComfy/z-extra-3.jpeg", "/imgComfy/z-extra-4.jpeg"]
        },
    ],
    NavFilter: [
        {
            id: 1,
            text: "All"
        },
        {
            id: 2,
            text: "Office"
        },
        {
            id: 3,
            text: "Living Room"
        },
        {
            id: 4,
            text: "Kitchen"
        },
        {
            id: 5,
            text: "Bedroom"
        },
        {
            id: 6,
            text: "Dining"
        },
        {
            id: 7,
            text: "Kids"
        }
    ],
    company: [
        {
            id: 1,
            para: "all"
        },
        {
            id: 2,
            para: "marcos"
        },
        {
            id: 3,
            para: "liddy"
        },
        {
            id: 4,
            para: "ikea"
        },
        {
            id: 5,
            para: "caressa"
        }
    ],
    BgColor: [
        {
            id: 0,
            tx: "all"
        },
        {
            id: 1,
            bg: "rgb(255, 0, 0)",
        },
        {
            id: 2,
            bg: "rgb(0, 255, 0)",
        },
        {
            id: 3,
            bg: "rgb(0, 0, 255)",
        },
        {
            id: 4,
            bg: "rgb(0, 0, 0)",
        },
        {
            id: 5,
            bg: "rgb(255, 185, 0)"
        },
    ],
    ProductShop: [],
    NoDuplacte: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SRC_IMG: return {
            ...state,
            ProductsDt: state.ProductsDt
        }
        case TEXT: return {
            ...state,
            NavFilter: state.NavFilter
        }
        case ADD_TO_CART: return {
            ...state,
            ProductShop: state.ProductShop.concat({
                title: action.title,
                price: action.price,
                img: action.img,
                Quantity: action.Quantity
            })
        }
        case DELET: {
            return {
                ...state,
                ProductShop: state.ProductShop.filter(item => item.title !== action.title)
            }
        }
        case CLEAR_ITEMS: return {
            ...state,
            ProductShop: state.ProductShop = []
        }
        default:
            return state;
    }
}

export default reducer