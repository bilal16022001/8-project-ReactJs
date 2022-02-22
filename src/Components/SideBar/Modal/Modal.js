import React from 'react'
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';
function Modal(props) {
    return (
        <Container dis={props.toggleModal}>
            <h1>mODAL</h1>
            <IconClose onClick={() => props.settoggleModal(true)} >
                <CancelIcon />
            </IconClose>
        </Container>
    )
}

export default Modal

const Container = styled.div`
      width:500px;
      height:200px;
      margin:auto;
      display:flex;
      justify-content:center;
      align-items:center;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background-color:#fff;
      display:${props => props.dis ? 'none' : 'flex'};
`
const IconClose = styled.div`
    position:absolute;
    right:-13px;
    cursor:pointer;
    top:-13px;
    svg{
        font-size:40px;
    }
`