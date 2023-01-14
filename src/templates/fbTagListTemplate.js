import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo"
import LayoutBlog from "../components/layout-fb";

const fbTagListPage = ({ data, location }) => {

    let tag = decodeURI(location.pathname.slice(21))
    if (tag[tag.length-1] === "/") {tag=tag.slice(0, -1)}
   
    const path = location.pathname
    const filteredPosts = [...data.posts.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))
    const filteredArticles = [...data.articles.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))
    const headerTitle = `Festung Breslau, tag: ${tag}`

    return (
        <LayoutBlog path={path}>
            <Link to="/festung-breslau">fb main page</Link>
            <h2>Tag: <span>{tag}</span></h2>
            <h3>Posty z tagiem <span>{tag}</span> ({filteredPosts.length})</h3>
            <section className="post">
                <ul>
                    {filteredPosts.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/festung-breslau/blog${fields.slug}`}>{frontmatter.date1945} - "{frontmatter.title}"</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <h3>Artykuły z tagiem <span>{tag}</span> ({filteredArticles.length})</h3>
            <section className="post">
                <ul>
                    {filteredArticles.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/festung-breslau/article${fields.slug}`}>"{frontmatter.title}"</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </LayoutBlog>
    );
};
export default fbTagListPage

export function Head({location}) {
    
    let tag = decodeURI(location.pathname.slice(21))
    if (tag[tag.length-1] === "/") {tag=tag.slice(0, -1)}

    return (
    <Seo title={`Festung Breslau 1945 täglich - tag: ${tag}`}/> 
    )
  }

export const query = graphql`
query AllFBTags {
  posts: allMdx(
    filter: {internal: {contentFilePath: {glob: "**/src/content/fbposts/*.mdx"}}},
    sort: {frontmatter: {date: ASC} }
   ) {
           nodes {
            fields {
                slug
            }
               frontmatter {
         title
         tags
         date1945
         }
         id
      }
   }
   articles: allMdx(
    filter: {internal: {contentFilePath: {glob: "**/src/content/fbarticles/*.mdx"}}},
    sort: {frontmatter: {date: ASC} }
    ) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
          title
          tags
                   }
          id
       }
    }
    }
`;