import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react";
import ArmiaNiemiecka from "../components/box-armia-niemiecka";
import WojnaNaPacyfiku from "../components/box-pacyfik";
import DolnySlask from "../components/box-dolny-slask";
import Europa from "../components/box-europa";
import SeeAlso from "../components/box-seealso";
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';

const FBArticleTemplate = ( {data, children} ) => {

  const shortcodes = { ArmiaNiemiecka, WojnaNaPacyfiku, DolnySlask, Europa, SeeAlso }

//   const data = useStaticQuery(graphql`
//   query FBArticleQuery {
//     mdx {
//         body
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           tags
//           date(formatString: "YYYY-MM-DD")
//                   }
//        }
//   }
// `)

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