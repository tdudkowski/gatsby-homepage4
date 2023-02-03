import React from "react"
import styled from "styled-components"
import MenuHeader from "./menu_main"
import MenuFooter from "./menu_footer"

const StyledFooter = styled.footer`
    background-color: #26323c;
    color: #f8f3e7;
& a {color: #f8f3e7;}
& a:hover {color: #f8f337;}
`;

const FooterStandard = () => {

return (
        <StyledFooter>
            <MenuHeader />
            <MenuFooter />
        </StyledFooter>
)

}

export default FooterStandard