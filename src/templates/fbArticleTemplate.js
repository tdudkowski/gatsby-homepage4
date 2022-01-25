import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LayoutFB from "../components/layout-fb"
import Seo from "../components/seo";

const articleFB = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const { title: pageTitle } = frontmatter;
  const headerTitle = `Festung Breslau 1945 | ${pageTitle}`

  return (
    <LayoutFB sub="article">
      <Seo title={headerTitle} defer={false} />
      <h2 className="post-header">{pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="article"><MDXRenderer>{body}</MDXRenderer>
        <hr />
        <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      </section>
    </LayoutFB>
  );
};

export default articleFB

export const query = graphql`
  query ArticleBySlug($slug: String!) {
   mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
             }
      slug
    }
  }
`;
