import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 3px solid #0ff;
margin:1rem;
padding:1rem;
`;

const BoxSeeAlso = ({ ...props }) => {
    return (
        <StyledDiv>
            Więcej na ten temat w osobnym artykule: <Link to={props.url}>{props.txt}</Link>
        </StyledDiv>
    )
}

export default BoxSeeAlso