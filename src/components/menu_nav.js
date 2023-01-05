import * as React from 'react'
import styled from "styled-components"

const StyledNav = styled.nav`
& ul {list-style-type: none; margin: 0; padding-left:0; display: flex; flex-direction: column;}
& li {flex: 1; padding: .3rem 0; text-align: left; padding-left: 2rem;}
& a {display: block;}

@media (min-width: 800px) {
    & ul {flex-direction: row;}
    & li {padding-left: 0; text-align: center;}
  }
`;

const MenuNav = ({children}) => {
    return (
        <StyledNav>
            {children}
        </StyledNav>
    )
}
export default MenuNav