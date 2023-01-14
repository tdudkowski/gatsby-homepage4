import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { MDXProvider } from "@mdx-js/react";
import Warning from "../components/box-warning.js";
import LayoutBlog from "../components/layout-blog";

const shortcodes = { Warning }

const PageBlogpost = ({ data: {mdx}, children, location }) => {

  const path = location.pathname
  const { frontmatter } = mdx;
  const { date, edited, image } = frontmatter;
  const headerTitle = `dygresje.info / blog: ${frontmatter.title}`

  return (
    <LayoutBlog data={mdx} path={path}>
      <h2>{frontmatter.title}</h2>
      {date ? <p>Data publikacji: {date}</p> : null}
      {edited ? <p>Ostatnia edycja: {edited}</p> : null}

        <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </LayoutBlog>
  );
};

export default PageBlogpost

export function Head({data}) { 
  const {frontmatter} = data.mdx
  return (
    <Seo title={`dygresje.info Blog: ${frontmatter.set} | ${frontmatter.title}`} /> 
  ) }

export const query = graphql`
 query($id: String!) {
  mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        section
        subsection
        date(formatString: "YYYY-MM-DD")
        edited(formatString: "YYYY-MM-DD")
        set
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
