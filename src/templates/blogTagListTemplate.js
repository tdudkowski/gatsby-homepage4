import React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout"

const tagListPage = ({ data, location }) => {

    const { frontmatter } = data.allMdx.nodes[0];
    const tag = location.pathname.slice(10)
    const path = location.pathname
    const filteredPosts = [...data.allMdx.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))

    return (
        <LayoutBlog path={path}>
            <Link to="/blog">blog main page</Link>
            <h2>{frontmatter.title}</h2>
            <h2>Posty z tagiem <span>{tag}</span></h2>
            <section>
                <ul>
                    {filteredPosts.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
                            <span> - {frontmatter.subsection}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </LayoutBlog>
    );
};
export default tagListPage

export const query = graphql`
query AllBlogTags {
  allMdx(
   filter: { fileAbsolutePath: { glob: "**/src/content/blogposts/*.mdx" } }
   sort: { order: ASC, fields: frontmatter___date }
   ) {
           nodes {
               frontmatter {
         title
         section
         subsection
         tags
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
 }
`;