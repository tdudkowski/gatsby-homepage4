import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 2px solid #ddc;
margin: 1rem;
padding: 1rem;
`;

const BoxWarning = ({ ...props }) => {

    if (props.comment === undefined) { props.comment = "Więcej na ten temat w osobnym artykule: " }

    return (
        <StyledDiv>
            {props.comment}
            {props.link ? <Link to={props.link}> {props.linktxt}</Link> : null}
        </StyledDiv>
    )
}

export default BoxWarning