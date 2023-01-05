import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { MDXProvider } from "@mdx-js/react";
import Warning from "../components/box-warning.js";
import LayoutBlog from "../components/layout-blog";

const shortcodes = { Warning }

const PageBlogpost = ({ data: {mdx}, children, location }) => {

  const path = location.pathname
  const { frontmatter, body } = mdx;
  const { date, edited, image } = frontmatter;
  const headerTitle = `dygresje.info / blog: ${frontmatter.title}`

  return (
    <LayoutBlog data={mdx} path={path}>
      <h2>{frontmatter.title}</h2>
      {date ? <p>Data publikacji: {date}</p> : null}
      {edited ? <p>Ostatnia edycja: {edited}</p> : null}
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </LayoutBlog>
  );
};

export default PageBlogpost

export function Head({data}) { 
  const {frontmatter} = data.mdx
  return ( <Seo title={frontmatter.title} section={frontmatter.section} /> ) }

export const query = graphql`
 query($id: String!) {
  mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
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
                 formats: [WEBP]
                 )
              }
           }
      }
   }
}
`;
