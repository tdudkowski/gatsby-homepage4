import React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout-fb";
import Seo from "../components/seo";

const fbTagListPage = ({ data, location }) => {

    const tag = decodeURI(location.pathname.slice(21))
    const path = location.pathname
    const filteredPosts = [...data.posts.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))
    const filteredArticles = [...data.articles.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))
    const headerTitle = `Festung Breslau, tag: ${tag}`
    return (
        <LayoutBlog path={path}>
            <Seo title={headerTitle} defer={false} />
            <Link to="/festung-breslau">fb main page</Link>
            <h2>Tag: <span>{tag}</span></h2>
            <h3>Posty z tagiem <span>{tag}</span> ({filteredPosts.length})</h3>
            <section className="post">
                <ul>
                    {filteredPosts.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.date1945} - "{frontmatter.title}"</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <h3>Artykuły z tagiem <span>{tag}</span> ({filteredArticles.length})</h3>
            <section className="post">
                <ul>
                    {filteredArticles.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/festung-breslau/article/${slug}`}>"{frontmatter.title}"</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </LayoutBlog>
    );
};
export default fbTagListPage

export const query = graphql`
query AllFBTags {
  posts: allMdx(
   filter: { fileAbsolutePath: { glob: "**/src/content/fbposts/*.mdx" },  fields: { isScheduledPost: { eq: false }} }
   sort: { order: ASC, fields: frontmatter___date }
   ) {
           nodes {
               frontmatter {
         title
         tags
         date1945
         image {
             childImageSharp {
             gatsbyImageData(
                 width: 200
                 placeholder: BLURRED
                 formats: [AUTO, WEBP]
                     )
                 }
             }
         }
         slug
         id
      }
   }
   articles: allMdx(
    filter: { fileAbsolutePath: { glob: "**/src/content/fbarticles/*.mdx" }}
    sort: { order: ASC, fields: frontmatter___date }
    ) {
            nodes {
                frontmatter {
          title
          tags
                   }
          slug
          id
       }
    }
    }
`;