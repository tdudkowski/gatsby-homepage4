import React from "react";
import { graphql } from "gatsby";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { MDXRenderer } from "gatsby-plugin-mdx";
import LayoutPage from "../components/layout"

const articlePage = ({ data, pageContext, location }) => {

  const { frontmatter, body } = data.mdx;

  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <LayoutPage section={frontmatter.section} subsection={frontmatter.subsection}>

      <Breadcrumb
        location={location}
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={frontmatter.title}
      />

      <h2>{frontmatter.title}</h2>

      <MDXRenderer>{body}</MDXRenderer>

    </LayoutPage>
  );
};

export default articlePage

export const query = graphql`
  query ArticlePageBySlug($slug: String!) {
   mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        section
        subsection
      }
    }
  }
`;
