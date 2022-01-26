import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import LayoutFB from "../components/layout-fb"
import Seo from "../components/seo";

const articleFB = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const { title: pageTitle } = frontmatter;
  const headerTitle = `Festung Breslau 1945 | ${pageTitle}`

  let tagsArray
  if (data !== undefined) {
    const { frontmatter } = data.mdx
    tagsArray = [...frontmatter.tags.split(",")]
  }

  return (
    <LayoutFB sub="article">
      <Seo title={headerTitle} defer={false} />
      <h2 className="post-header">{pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="article"><MDXRenderer>{body}</MDXRenderer>
        <div className="tags tagsDiv">
          <h4>Tagi:</h4>
          <ul>{tagsArray.map(tag => <li key={tag}><Link to={`/festung-breslau/tag/${tag.trim()}`}>{tag.trim()}</Link></li>)}</ul>
        </div>
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
        tags
             }
      slug
    }
  }
`;
