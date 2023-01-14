import * as React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import MenuHeader from "./menu_main"
import MenuFooter from "./menu_footer"
import "./layout.css"

const StyledContainer = styled.div`
position: relative;
min-height: 100vh;
display: flex; flex-direction: column;

`;

const StyledHeader = styled.header`
& div {max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column;}
& div > a {text-decoration: none; padding-left: 1rem;}
& h1 {font-size: 1rem;}
& ul > li:nth-child(1) {display: none;}

background-color: #ffe;
box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

@media (min-width: 900px) {
    position: sticky; top: 0; z-index: 100;
    & div {flex-direction: row;}
    & div > a {padding: 0 3rem;}
    & nav {flex: 1;}    
  }
`;

const StyledMain = styled.main`
width: 100%; max-width: 1200px; margin: 0 auto;
flex: 1;
`;

const StyledFooter = styled.footer`
width: 100%; max-width: 1200px;
margin: 0 auto;

border-top: 1px solid #ddc;
background-color: #ffe;

& nav {padding: 1rem 0; background-color: #ffe;}
& div {background-color: #ffe; border-top: 1px solid #ddc;}
`;

const Layout = ({children}) => {
    return (
        <StyledContainer>
        <StyledHeader>
            <div>
            <Link to="/"><h1>Tadeusz Dudkowski Homepage<br />dygresje.info</h1></Link>
            <MenuHeader />
            </div>
        </StyledHeader>
        <StyledMain>{children}</StyledMain>
        <StyledFooter>
            <MenuHeader />
            <MenuFooter />
        </StyledFooter>
        </StyledContainer>
    )
}
export default Layout