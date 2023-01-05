import React from 'react'
import { graphql, Link } from "gatsby"
import Seo from "../../components/seo";
import LayoutFB from "../../components/layout-fb"
// import Seo from "../../components/seo"

const Posts = ({ pageContext, data }) => {

    return (
        <LayoutFB>
            {/* <Seo title="Festung Breslau" /> */}
            <h2>Lista wpisów</h2>
            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                    <li key={id} className="post-list">
                        <p><span>{frontmatter.date1945}:</span></p>
                        <p><Link to={`/festung-breslau/blog${fields.slug}`}>{frontmatter.title}</Link></p>
                        <p><strong>Tagi:</strong> {frontmatter.tags}</p>
                    </li>
                ))}
            </ul>
        </LayoutFB>)
}

export default Posts

export function Head() { 
    return ( <Seo title="Festung Breslau 1945 täglich" /> ) }

// AllArticles($currentDate: Date!)
// SITE_INDEX_QUERY
// , date: { lte: $currentDate }

// query BlogPostQuery($slug: String!) {
//   allGhostPost(filter: { slug: { eq: $slug } })
// filter: {  frontmatter: { published: { eq: true }, date: { lte: $currentDate } }}
// sort: { fields: [frontmatter___date], order: DESC }
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09T00:00:00.000Z
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09

export const query = graphql`
query AllPosts {
    allMdx(
        filter: {internal: {contentFilePath: {glob: "**/src/content/fbposts/*.mdx"}}}
        sort: {frontmatter: {date: DESC} }
      )  {
        nodes {
            id
            fields {
            slug
            }
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              date1945
              tags
            }
            }
           }
  }
`;