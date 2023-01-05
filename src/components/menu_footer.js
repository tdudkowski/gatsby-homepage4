import * as React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'
import MenuNav from "./menu_nav"

const StyledP = styled.p`
text-align: center;
`;

const Menu = ( ) => {
    return (
        <>
        <MenuNav>
            <ul>
                <li><Link to='/o_mnie' activeClassName="active">O mnie</Link></li>
                <li><Link to='/o_stronie' activeClassName="active">O stronie</Link></li>
                <li><Link to='/sitemap' activeClassName="active">Mapa strony</Link></li>
                <li><Link to='/hosting' activeClassName="active">Hosting</Link></li>
            </ul>
        </MenuNav>
        <StyledP>Wszystkie prawa zastrzeżone. Strona wykonana w <a href="https://www.gatsbyjs.com/">Gatsby v5</a> @{new Date().getFullYear()}; hosting: <a href="https://www.netlify.com/">Netlify</a></StyledP>
        </>
    )
}
export default Menu