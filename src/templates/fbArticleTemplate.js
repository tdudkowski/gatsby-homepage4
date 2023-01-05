import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react";
import ArmiaNiemiecka from "../components/box-armia-niemiecka";
import WojnaNaPacyfiku from "../components/box-pacyfik";
import DolnySlask from "../components/box-dolny-slask";
import Europa from "../components/box-europa";
import SeeAlso from "../components/box-seealso";
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';

const shortcodes = { ArmiaNiemiecka, WojnaNaPacyfiku, DolnySlask, Europa, SeeAlso }

const FBArticleTemplate = ({ data: {mdx}, children }) => {

  const { frontmatter, body } = mdx;
  const { title: pageTitle, img } = frontmatter;
  const headerTitle = `Festung Breslau 1945 | ${pageTitle}`

  let tagsArray
  if (mdx !== undefined) {
    const { frontmatter } = mdx
    tagsArray = [...frontmatter.tags.split(",")]
  }
  
  return (
    <LayoutFB sub="article">
      <h2 className="post-header">{pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="article">
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
      {/* {children} */}
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

export default FBArticleTemplate

export const query = graphql`
query($id: String!) {
  mdx(id: { eq: $id }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
             }
     }
  }
`;
