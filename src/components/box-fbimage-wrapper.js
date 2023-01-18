import * as React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
width: calc(100% - 2px - .1rem);
margin: 2rem .1rem 2rem 0;
padding: 0;
border: 1px solid rgba(235, 235, 235, .1);
background-color: rgba(25, 25, 25, .4);

& p {padding: 1rem; background-color: rgba(250, 250, 250, .1); margin: 0;}
`;

const BoxImageWrapper = ({ children }) => {

    return (
        <StyledDiv className="boximagewrapper">
           {children}
        </StyledDiv>
    )
}

export default BoxImageWrapper