import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react";
import ArmiaNiemiecka from "../components/box-armia-niemiecka";
import WojnaNaPacyfiku from "../components/box-pacyfik";
import DolnySlask from "../components/box-dolny-slask";
import Europa from "../components/box-europa";
import SeeAlso from "../components/box-seealso";
import BoxImageWrapper from "../components/box-fbimage-wrapper";
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';

const FBArticleTemplate = ( {data, children} ) => {

  const shortcodes = { ArmiaNiemiecka, WojnaNaPacyfiku, DolnySlask, Europa, SeeAlso, BoxImageWrapper }

  const { frontmatter, body } = data.mdx;
  const { title: pageTitle, img, tags } = frontmatter;
  const headerTitle = `Festung Breslau 1945 | ${pageTitle}`

  let tagsArray
  if (frontmatter !== undefined) {
       tagsArray = [...frontmatter.tags.split(",")]
  }
  console.log(data)
  
  return (
    <LayoutFB sub="article">
      <h2 className="post-header">{pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="article">
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
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

export function Head({data}) { 
  return (
  <Seo title={`Festung Breslau 1945 täglich: ${data.mdx.frontmatter.title}`} /> 
  )
}

export const query = graphql`
query FBArticleQuery($id: String!) {
  mdx(id: { eq: $id }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
                }
     }
}
`