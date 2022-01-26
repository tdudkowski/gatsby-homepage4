import React from 'react'
import { graphql, Link } from "gatsby"
import LayoutFB from "../../components/layout-fb"
import Seo from "../../components/seo"

const Posts = ({ pageContext, data }) => {

    return (
        <LayoutFB>
            <Seo title="Festung Breslau" />
            <h2>Lista wpisów</h2>
            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id} className="post-list">
                        <p><span>{frontmatter.date1945}:</span></p>
                        <p><Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.title}</Link></p>
                        <p><strong>Tagi:</strong> {frontmatter.tags}</p>
                    </li>
                ))}
            </ul>
        </LayoutFB>)
}

export default Posts

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
    filter: { fileAbsolutePath: { glob: "**/src/content/fbposts/*.mdx" }, fields: { isScheduledPost: { eq: false }} }
    sort: { fields: [frontmatter___date], order: DESC }
     ) {
        nodes {
            id
            slug
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