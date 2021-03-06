import React from "react";
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet'
import { MDXRenderer } from "gatsby-plugin-mdx"
import LayoutBlog from "../components/layout-blog"
import Seo from "../components/seo";

const blogPage = ({ data, location }) => {

  const path = location.pathname
  const { frontmatter, body } = data.mdx;
  const { date, edited, image } = frontmatter;
  const headerTitle = `dygresje.info / blog: ${frontmatter.title}`

  return (
    <LayoutBlog data={data} path={path}>
      <Seo title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} defer={false} />
      <Helmet title={headerTitle} image={image} defer={false} />
      <h2>{frontmatter.title}</h2>
      {date ? <p>Data publikacji: {date}</p> : null}
      {edited ? <p>Ostatnia edycja: {edited}</p> : null}
      <MDXRenderer>{body}</MDXRenderer>
    </LayoutBlog>
  );
};

export default blogPage

export const query = graphql`
  query BlogpostBySlug($slug: String!) {
   mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        section
        subsection
        date(formatString: "YYYY-MM-DD")
        edited(formatString: "YYYY-MM-DD")
        tags
        image {
           childImageSharp {
              gatsbyImageData(
                 width: 1200
                 placeholder: BLURRED
                 formats: [AUTO, WEBP]
                 )
              }
           }
      }
   }
}
`;
