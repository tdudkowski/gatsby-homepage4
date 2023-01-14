import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import { MDXProvider } from "@mdx-js/react";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Warning from "../components/box-warning.js";
import LayoutPage from "../components/layout"

const shortcodes = { Warning }

const ArticlePage = ({ data: {mdx}, children, pageContext, location  }) => {

  const { frontmatter } = mdx;
  const headerTitle = `dygresje.info | ${frontmatter.title}`
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <LayoutPage section={mdx.frontmatter.section} subsection={mdx.frontmatter.subsection}>

    <Breadcrumb
        location={location}
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={frontmatter.title}
      />

      <h2>{mdx.frontmatter.title}</h2>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
      
    </LayoutPage>
  );
};

export default ArticlePage

export function Head({data}) { 
  const {frontmatter} = data.mdx
  return ( 
    <Seo title={`dygresje.info: ${frontmatter.section} | ${frontmatter.title}`} /> 
  ) }

export const query = graphql`
query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        comment
        title
        section
        subsection
      }
    }
  }
  `;

