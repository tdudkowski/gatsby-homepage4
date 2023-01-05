import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 3px solid #0ff;
margin:1rem;
padding:1rem;
`;

const BoxSeeAlso = ({ ...props }) => {

    if (props.comment === undefined) { props.comment = "Więcej na ten temat w osobnym artykule: " }

    return (
        <StyledDiv>
            {props.comment}<Link to={props.url}>{props.txt}</Link>
        </StyledDiv>
    )
}

export default BoxSeeAlso