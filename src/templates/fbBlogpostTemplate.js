import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { MDXProvider } from "@mdx-js/react";
import BoxImage from "../components/box-image.js";
import ArmiaNiemiecka from "../components/box-armia-niemiecka.js";
import WojnaNaPacyfiku from "../components/box-pacyfik.js";
import DolnySlask from "../components/box-dolny-slask.js";
import Europa from "../components/box-europa.js";
import SeeAlso from "../components/box-seealso.js";
import BoxImageWrapper from "../components/box-fbimage-wrapper";
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';

const shortcodes = { BoxImage, ArmiaNiemiecka, WojnaNaPacyfiku, DolnySlask, Europa, SeeAlso, BoxImageWrapper }

const FBBlogPostTemplate = ({ data: {mdx}, children }) => {

  const { frontmatter, body } = mdx;
  const { title: pageTitle, img } = frontmatter;
 
  let tagsArray
  if (mdx !== undefined) {
    const { frontmatter } = mdx
    tagsArray = [...frontmatter.tags.split(",")]
  }

  return (
    <LayoutFB sub="post">
      <h2 className="post-header"><div>{frontmatter.date1945}</div><br /> {pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="post">
       
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
  )
}

export default FBBlogPostTemplate

export function Head({data}) {
  
  return (
  <Seo title={`Festung Breslau 1945 täglich: ${data.mdx.frontmatter.date1945} | ${data.mdx.frontmatter.title}`} image={data.mdx.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src} /> 
  )
}

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
        date1945
        tags
        img {
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
  `