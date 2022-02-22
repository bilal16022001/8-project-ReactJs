import React, { useState } from 'react'
import styled from 'styled-components'
import { cockData } from './CockatalisData'
function SearchBar() {
    const [input, setInput] = useState("")
    return (
        <Contanier>
            <Title>
                <h2>Search Your Favorite Cocktail</h2>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <h1>Cocktails</h1>
            </Title>
            <Content>
                {cockData.filter(item => item.id == input || item.id_pa == input).map(item => (
                    <div>
                        <img src={item.img} />
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </Content>
        </Contanier>
    )
}

export default SearchBar

const Contanier = styled.div`
`
const Title = styled.div`
     width:430px;
     margin:auto;
     margin-bottom:15px;
     h2,input{
         margin-bottom:15px;
     }
     h1{
         text-align:center;
     }
     input{
         width:100%;
         Border:none;
         height:30px;
     }
`
const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 15px;
    img{
        width:250px;
        height:250px;
    }
    div{
        background-color:#fff;
        padding:10px;
    }
      
`