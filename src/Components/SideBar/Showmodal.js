import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal/Modal'

function Showmodal() {
    const [toggleModal, settoggleModal] = useState(true)
    return (
        <div className='show'>
            <Container clr={toggleModal}>
                <button onClick={() => settoggleModal(false)}>SHOW MODAL</button>
            </Container>
            <Modal toggleModal={toggleModal} settoggleModal={settoggleModal} />
        </div>
    )
}

export default Showmodal
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:${props => props.clr ? '' : '0'};
    left:${props => props.clr ? '' : '0'};
    right:${props => props.clr ? '' : '0'};
    bottom:${props => props.clr ? '' : '0'};
    background-color:${props => props.clr ? 'none' : 'rgba(0,0,0,0.3)'};
    button{
        padding:10px 25px;
        border:none;
        border-radius:2px;
        background-color:black;
        color:#fff;
        cursor:pointer;
    }
`