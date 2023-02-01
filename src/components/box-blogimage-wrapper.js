import * as React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
width: calc(100% - 2px);
margin: 2rem 0;
padding: 0;
border: 1px solid rgba(235, 235, 235, .7);
background-color: rgba(200, 200, 200, .1);

&.boximagewrapper img {box-shadow: 2px 2px 14px #666; margin:0;}
&.boximagewrapper > p {padding: 1rem; background-color: rgba(200, 200, 200, .02); margin: 0; border-bottom: 1px solid #ccc;}
`;

const BoxBlogImageWrapper = ({ children }) => {

    return (
        <StyledDiv className="boximagewrapper">
           {children}
        </StyledDiv>
    )
}

export default BoxBlogImageWrapper