import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledDiv = styled.div`
border: 2px solid #ddc;
margin: 1rem;
padding: 1rem;
`;

const BoxImage = ({src, alt, txt }) => {

  console.log(src, alt, txt);

    return (
        <StyledDiv>

            <p>{src}</p>
            <p>{alt}</p>
            <p>{txt}</p>
            
        </StyledDiv>
    )
}

export default BoxImage