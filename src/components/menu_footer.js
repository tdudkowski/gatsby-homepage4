import * as React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import MenuNav from "./menu_nav"

const StyledDiv = styled.div`
padding: .5rem;

background-color: rgba(250, 250, 250, .1);
`;

const StyledP = styled.p`
text-align: center;
padding: .5rem;
margin: .5rem 0;
`;

const Menu = ( ) => {
    return (
        <StyledDiv>
        <MenuNav>
            <ul>
                <li><Link to='/o_mnie' activeClassName="active">O mnie</Link></li>
                <li><Link to='/o_stronie' activeClassName="active">O stronie</Link></li>
                <li><Link to='/sitemap' activeClassName="active">Mapa strony</Link></li>
                <li><Link to='/hosting' activeClassName="active">Hosting</Link></li>
            </ul>
        </MenuNav>
        <StyledP>Wszystkie prawa zastrzeżone. Strona wykonana w <a href="https://www.gatsbyjs.com/">Gatsby v5</a> @{new Date().getFullYear()}; hosting: <a href="https://www.netlify.com/">Netlify</a></StyledP>
        </StyledDiv>
    )
}
export default Menu