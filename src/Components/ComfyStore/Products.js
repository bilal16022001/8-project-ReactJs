import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { ProductsDt } from './ProductData'
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { titleNav } from './redux/Action';

function Products(props) {
    const products = useSelector(state => state.ProductsDt);
    const NavFilter = useSelector(state => state.NavFilter);
    const BgColor = useSelector(state => state.BgColor);
    const company = useSelector(state => state.company)
    const [input, setInput] = useState("");
    const [Category, setCategory] = useState("");
    const dispatch = useDispatch();
    const [Area, setArea] = useState(3);
    const [AreaFilter, setAreaFilter] = useState();
    const [StockProduct, setStockProduct] = useState([]);
    const [ArrClr, setArrclr] = useState([]);
    const [ArrPro, setArrPro] = useState([]);

    const switchAreaFltr = (ar) => {
        setAreaFilter(ar)
    }
    const handlchange = (txt) => {
        dispatch(titleNav(txt))
        const flt = StockProduct.length == 0 ? products : StockProduct.filter(ele => {
            return ele.category == txt || ele.categoryAll == txt
        })
        setStockProduct(flt);
        setAreaFilter("Category");

    }
    const searchBar = (e) => {
        setInput(e.target.value);

        const fltsearch = products.filter(ele => {
            return ele.title.toUpperCase().indexOf(input.toUpperCase()) > -1
        })

        setStockProduct(fltsearch);
        setAreaFilter(e.target.value);
    }

    const handlCompany = (e) => {
        const filterCom = StockProduct.length == 0 ? products : StockProduct.filter(el => {
            return el.para == e.target.value || el.para_Two == e.target.value
        })
        setArrPro(filterCom);
        setAreaFilter("SelectCompany")

    }
    const handlColor = (txt) => {
        dispatch(titleNav(txt))
        const filterClr = StockProduct.length == 0 ? products : StockProduct.filter(el => {
            return el.bg == txt || el.bg_two == txt || el.bg_th == txt || el.bg_fo == txt
        })
        setArrclr(filterClr)
        setAreaFilter("Color")
    }

    return (
        <ParentPrdcts>
            <Header />
            <Titl>
                <Container>
                    <h2>Home / Products</h2>
                </Container>
            </Titl>
            <Container>
                <Prodcts>
                    <FiltersProd>
                        <input onInput={searchBar} type="text" placeholder='search' />
                        <h3>Category</h3>
                        <nav>
                            {NavFilter.map(item => (
                                <Layout>
                                    <a onClick={(e) => handlchange(item.text)} href='#'>{item.text}</a>
                                </Layout>
                            ))}
                        </nav>
                        <h3>Company</h3>
                        <select onChange={handlCompany}>
                            {company.map(item => (
                                <option>
                                    {item.para}
                                </option>

                            ))}
                        </select>
                        <h3>Colors</h3>
                        <Colors>
                            {BgColor.map(itm => (
                                <Clr onClick={(e) => handlColor(itm.bg)} style={{ background: `${itm.bg}` }}>
                                    <span>{itm.tx}</span>
                                </Clr>
                            ))}
                        </Colors>
                        <h3>Price</h3>
                        <p>$<span>10</span></p>
                        <input type="range" />
                        <Shop>
                            <span>Free Shipping
                            </span>
                            <input type="checkbox" />
                        </Shop>
                        <button>Clear Filters</button>
                    </FiltersProd>
                    <InfoPrdct>
                        <Parntfltr>
                            <FltrVie>
                                <Ficon>
                                    <IconView onClick={(e) => setArea(3)}>
                                        <ViewWeekIcon />
                                    </IconView>
                                    <IconMe onClick={(e) => setArea(1)}>
                                        <MenuIcon />
                                    </IconMe>
                                    <p>Products</p>
                                </Ficon>
                                <Sort>
                                    <p>Sort By</p>
                                    <select>
                                        <option>Price (Lowest)</option>
                                        <option>Price (Highest)</option>
                                        <option>Name (A-Z)</option>
                                        <option>Name (Z-A)</option>
                                    </select>
                                </Sort>
                            </FltrVie>
                            <FltrSlct show={Area}>
                                {AreaFilter === "Category" ?
                                    (
                                        StockProduct.map(item => (
                                            <Prod>
                                                <Link to={`/ProductDetails/${item.id}`}>
                                                    <Pss>
                                                        <OverLay></OverLay>
                                                        <img src={item.img} />
                                                        <IconSrch>
                                                            <SearchIcon />
                                                        </IconSrch>
                                                    </Pss>
                                                    <Title>
                                                        <h4>{item.title}</h4>
                                                        <span>${item.price}</span>
                                                    </Title>
                                                </Link>
                                            </Prod>
                                        ))
                                    )
                                    :
                                    AreaFilter == "SelectCompany" ? (
                                        ArrPro.map(item => (
                                            <Prod>
                                                <Link to={`/ProductDetails/${item.id}`}>
                                                    <Pss>
                                                        <OverLay></OverLay>
                                                        <img src={item.img} />
                                                        <IconSrch>
                                                            <SearchIcon />
                                                        </IconSrch>
                                                    </Pss>
                                                    <Title>
                                                        <h4>{item.title}</h4>
                                                        <span>${item.price}</span>
                                                    </Title>
                                                </Link>
                                            </Prod>
                                        ))
                                    )
                                        :
                                        AreaFilter == undefined ?
                                            (
                                                products.map(item => (
                                                    <Prod>
                                                        <Link to={`/ProductDetails/${item.id}`}>
                                                            <Pss>
                                                                <OverLay></OverLay>
                                                                <img src={item.img} />
                                                                <IconSrch>
                                                                    <SearchIcon />
                                                                </IconSrch>
                                                            </Pss>
                                                            <Title>
                                                                <h4>{item.title}</h4>
                                                                <span>${item.price}</span>
                                                            </Title>
                                                        </Link>
                                                    </Prod>
                                                ))

                                            )
                                            :
                                            AreaFilter == "Color" ?
                                                (
                                                    ArrClr.map(item => (
                                                        <Prod>
                                                            <Link to={`/ProductDetails/${item.id}`}>
                                                                <Pss>
                                                                    <OverLay></OverLay>
                                                                    <img src={item.img} />
                                                                    <IconSrch>
                                                                        <SearchIcon />
                                                                    </IconSrch>
                                                                </Pss>
                                                                <Title>
                                                                    <h4>{item.title}</h4>
                                                                    <span>${item.price}</span>
                                                                </Title>
                                                            </Link>
                                                        </Prod>
                                                    ))

                                                )
                                                : AreaFilter === input && (
                                                    StockProduct.map(item => (
                                                        <Prod>
                                                            <Link to={`/ProductDetails/${item.id}`}>
                                                                <Pss>
                                                                    <OverLay></OverLay>
                                                                    <img src={item.img} />
                                                                    <IconSrch>
                                                                        <SearchIcon />
                                                                    </IconSrch>
                                                                </Pss>
                                                                <Title>
                                                                    <h4>{item.title}</h4>
                                                                    <span>${item.price}</span>
                                                                </Title>
                                                            </Link>
                                                        </Prod>
                                                    ))
                                                )
                                }
                            </FltrSlct>
                        </Parntfltr>
                    </InfoPrdct>
                </Prodcts>
            </Container>
            <Footer>
                <Container>
                    <p>© 2022 <span>ComfySloth</span> All rights reserved</p>
                </Container>
            </Footer>
        </ParentPrdcts >
    )
}

export default Products;

const ParentPrdcts = styled.div`
`
const Container = styled.div`
    max-width:1200px;
    margin:auto;
`
const Titl = styled.div`
    background-color:#eaded7;
    padding:40px 0;
    margin-bottom:50px;
    h2{
        font-size:40px;
    }
    span{
        color:#795744;
    }
    @media(max-width:768px){
        h2{
            font-size:30px;
        }
        padding-left:20px;
    }
`
const Prodcts = styled.div`
    display:flex;
    margin-bottom:70px;
    gap:25px;
    img{
        width:315px;
        height:175px;
    }
    @media(max-width:768px){
       grid-template-columns:repeat(1,1fr);
       padding-left:30px;
    }
`
const FiltersProd = styled.div`
        input{
            background-color:#f1f5f8;
            height:37px;
            padding-left:10px;
            border:none;
            width:220px;
            margin-bottom:15px;
            display:block;
        }
        h3{
            margin-bottom:15px;
        }
        select{
            margin-bottom:15px;
        }
        button{
            background-color:#bb2525;
            color:#fff;
            padding:10px;
            border-radius:3px;
            border:none;
            cursor:pointer;
        }

`
const Shop = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:20px;
    input{
        width:15px;
        height:15px;
        margin-top:14px;
    }


   }
`
const Layout = styled.div`
       margin-bottom:15px;
       a{
           color:#617d98;
       }
`
const Colors = styled.div`
      display:flex;
      gap:7px;
      margin-bottom:20px;
`
const Clr = styled.div`
   width:20px;
   height:20px;
   border-radius:50%;
   cursor:pointer;
   position:relative;
   span{
       font-size:20px;
       position:absolute;
       left:50%;
       top:60%;
       transform:translate(-50%, -50%);

   }
`

const InfoPrdct = styled.div`
      
`
const FltrVie = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
    position:relative;
    &:before{
        position: absolute;
        content: "";
        width:calc(100% - 450px);
        height: 2px;
        background:#bcccdc;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    @media(max-width:768px){
        flex-direction:column;
        align-items:center;
        margin-bottom:60px;
        &:before{
            width:100%;
            transform: translateX(-52%);

        }
    }
`
const Ficon = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
    @media(max-width:768px){
        flex-direction:column;
    }
`
const IconView = styled.div`
      cursor:pointer;
`
const IconMe = styled.div`
cursor:pointer;
`
const Sort = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
    @media(max-width:768px){
        flex-direction:column;
    }
`
const Parntfltr = styled.div`
`
const FltrSlct = styled.div`
    display:grid;
    grid-template-columns:repeat(${props => props.show} ,1fr);
    gap:20px;
    @media(max-width:768px){
        grid-template-columns:repeat(1,1fr);
        place-items:center;
    }
`
const Prod = styled.div`
`
const OverLay = styled.div`
     position:absolute;
     inset:0;
     background-color:rgba(0,0,0,0.3);
     display:none;
`
const IconSrch = styled.div`
     position:absolute;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);
     background-color:#ab7a5f;
     width:45px;
     height:45px;
     border-radius:50%;
     color:#fff;
     text-align:center;
     display:none;
       svg{
          margin-top:10px;
       }
`
const Pss = styled.div`
 position:relative;
 &:hover{
    ${OverLay},${IconSrch}{
        display:block;
    }
    @media(max-width:768px){
        ${OverLay},${IconSrch}{
            display:none;
        }
    }
  }
`
const Title = styled.div`
     display:flex;
     justify-content:space-between;
     @media(max-width:768px){
         width:315px;    
     }
`
const Footer = styled.div`
        text-align:center;
        background-color:#222222;
        color:#fff;
        padding:30px;
        span{
            color:#ab7a5f;
        }
`