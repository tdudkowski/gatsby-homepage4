import * as React from 'react'
import styled from "styled-components"
import MenuHeader from "./menu_main"
import MenuFooter from "./menu_footer"
import "./layout.css"

const StyledContainer = styled.div`
min-height: 100vh; max-width: 1200px; margin: 0 auto;
display: flex; flex-direction: column;
`;

const StyledHeader = styled.header`
display: flex; flex-direction: column;
& h1 {font-size: 1rem;}
& ul > li:nth-child(1) {display: none;}

@media (min-width: 900px) {
    flex-direction: row;
    & h1 {padding: 0 2rem;}
    & nav {flex: 1;}
  }
`;

const StyledMain = styled.main`
flex: 1;
`;

const StyledFooter = styled.footer`
`;

const Layout = ({children}) => {
    return (
        <StyledContainer>
        <StyledHeader>
            <h1>Tadeusz Dudkowski Homepage<br />dygresje.info</h1>
            <MenuHeader />
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