import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';
import Seo from "../components/seo";

const blogFBPost = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  const { title: pageTitle, img } = frontmatter;
  const headerTitle = `Festung Breslau, ${frontmatter.date1945} | ${frontmatter.title}`

  let tagsArray
  if (data !== undefined) {
    const { frontmatter } = data.mdx
    tagsArray = [...frontmatter.tags.split(",")]
  }

  return (
    <LayoutFB sub="post">
      <Seo title={headerTitle} image={img.childImageSharp.gatsbyImageData.images.fallback.src} defer={false} />
      <h2 className="post-header"><div>{frontmatter.date1945}</div><br /> {pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="post">
        <MDXRenderer>{body}</MDXRenderer>
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

export default blogFBPost

export const query = graphql`
  query FBPostBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
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
                formats: [AUTO, WEBP]
                )
             }
          }
       }
      slug
    }
  }
`;

