import React, { useState } from 'react'
import styled from 'styled-components'
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

function SideBar(props) {
    const [Toggle, setToggle] = useState(false);
    return (
        <Contanier>
            <IconBars onClick={() => setToggle(true)}>
                <MenuIcon />
            </IconBars>
            <Content show={Toggle}>
                <First>
                    <Header>
                        <Title>
                            <h2>coding addict</h2>
                        </Title>
                        <IconClose onClick={() => setToggle(false)} >
                            <CancelIcon />
                        </IconClose>
                    </Header>
                    <Menu>
                        <Layout>
                            <HomeIcon />  <a href='#'>Home</a>
                        </Layout>
                        <Layout>
                            <GroupIcon />  <a href='#'>Team</a>
                        </Layout>
                        <Layout>
                            <FolderIcon />  <a href='#'>Projects</a>
                        </Layout>
                        <Layout>
                            <CalendarTodayIcon />  <a href='#'>Calendar</a>
                        </Layout>
                        <Layout>
                            <ArticleIcon />  <a href='#'>Documents</a>
                        </Layout>
                    </Menu>
                </First>
                <SocialMedia>
                    <LayoutSocial>
                        <FacebookIcon />
                    </LayoutSocial>
                    <LayoutSocial>
                        <TwitterIcon />
                    </LayoutSocial>
                    <LayoutSocial>
                        <LinkedInIcon />
                    </LayoutSocial>
                </SocialMedia>
            </Content>
        </Contanier >
    )
}

export default SideBar

const Contanier = styled.div`
     
      height:657px;
      width:300px;
`
const Content = styled.div`
      display:flex;
      width:300px;
      height:657px;
      flex-direction:column;
      justify-content:space-between;
      transition:all .3s;
      background-color:#fff;
      transform:${props => props.show ? 'translateX(0%)' : 'translateX(-100%)'};
      position:absolute;
      top:0;
`
const First = styled.div`
`
const Header = styled.div`
      display:flex;
      justify-content:space-between;
      margin-bottom:40px;
      padding:20px;
`
const Title = styled.div`
`
const IconClose = styled.div`
      cursor:pointer;
`
const IconBars = styled.div`
      padding:25px;
      cursor:pointer;
      svg{
          font-size:50px;
      }

`
const Menu = styled.div`
`
const Layout = styled.div` 
      display:flex;
      align-items:center;
      color:#324d67;
      padding:20px;
      transition:all .3s;
      cursor:pointer;
      a{
          margin-left:6px;
          color:#324d67;
      }
      &:hover{
          background-color:#f1f5f8;
      }

`
const SocialMedia = styled.div`
      display:flex;
      justify-content:center;
      padding:35px;
`
const LayoutSocial = styled.div`
       margin-right:10px;
       color:#49a6e9;
`