import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo"
import styled from "styled-components"
import LayoutBlog from "../../components/layout-blog"
// import Seo from "../../components/seo"

const StyledSection = styled.section`
display:flex;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  margin:1rem;
  width: 350px;
  height: 5rem;
  border:1px solid #eed;
  background: url(${props => props.background}) no-repeat top center;
  background-size: contain;
  display: flex;
  flex-direction:column;
  justify-content: flex-end;
  & a {background-color: rgba(51,51,51,.8); color:#ddd; display:block; font-size:1.2rem; text-align:center; padding: .5rem; margin:auto 0;}
  &:hover {box-shadow: 2px 2px 8px rgba(50,50,50,.5)}
  &:hover a {color:yellow;}
`;

const IndexBlog = ({ data, location }) => {

  const headerTitle = `dygresje.info / blog - wpisy`
  const path = location.pathname
  const { frontmatter } = data.allMdx.nodes[0];
  const { image } = frontmatter;

  return (<LayoutBlog path={path}>
    {/* <Seo title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} /> */}
    
      <h3>Lista wpisów:</h3>

      <StyledSection>
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <StyledDiv key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
            <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
          </StyledDiv>
        ))}
      </StyledSection>
  </LayoutBlog>)
}

export default IndexBlog

export function Head() { 
    
  return ( <Seo title="Blog" /> ) }

export const query = graphql`
query AllBlogPosts {
  allMdx(filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}},
  sort: {frontmatter: {date: DESC} }){
    nodes {

       fields {
        slug
       }
        frontmatter {
  title
  section
  subsection
  image {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
           }
          
           id
           body
}
}
}
`;