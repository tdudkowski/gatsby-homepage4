import React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout-blog"

const tagListPage = ({ data, location }) => {

    const { frontmatter } = data.allMdx.nodes[0];
    let tag = location.pathname.slice(10)
    if (tag[tag.length-1] === "/") {tag=tag.slice(0, -1)}
    const path = location.pathname
    const filteredPosts = [...data.allMdx.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))

    return (
        <LayoutBlog path={path}>
           <Link to="/blog">blog main page</Link>
            <h2>{frontmatter.title}</h2>
            <h2>Posty z tagiem <span>{tag}</span></h2>
            <section>
                <ul>
                    {filteredPosts.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
                            <span> - {frontmatter.subsection}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <p><Link to="/blog">blog main page</Link></p>
        </LayoutBlog>
    );
};
export default tagListPage

export const query = graphql`
query AllBlogTags {
  allMdx(
    filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}},
    sort: {frontmatter: {date: ASC} }
   ) {
           nodes {
            fields {
                slug
            }
               frontmatter {
         title
         subsection
         tags
         }
         id
      }
   }
 }
`;