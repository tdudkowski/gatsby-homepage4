import * as React from 'react'
import styled from "styled-components"
import HeaderStandard from "./header-standard"
import FooterStandard from './footer-standard'
import "./layout.css"

const StyledContainer = styled.div`
min-height: 100vh; max-width: 1300px; margin: 0 auto;
display: flex; flex-direction: column;
`;

const StyledMain = styled.main`
flex: 1;
`;

const StyledFooter = styled.footer`

`;

const Layout = ({children}) => {
    return (
        <StyledContainer>
        <HeaderStandard />
        <StyledMain>{children}</StyledMain>
        <FooterStandard />
        </StyledContainer>
    )
}
export default Layout