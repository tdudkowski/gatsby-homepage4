import React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout-fb"

const fbTagListPage = ({ data, location }) => {

    const tag = decodeURI(location.pathname.slice(21))
    const path = location.pathname
    const filteredPosts = [...data.allMdx.nodes].filter(item => item.frontmatter.tags.split(", ").includes(tag))

    return (
        <LayoutBlog path={path}>
            <Link to="/festung-breslau">fb main page</Link>
            <h2>Posty z tagiem <span>{tag}</span></h2>
            <section>
                <ul>
                    {filteredPosts.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.date1945} - "{frontmatter.title}"</Link>
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
  allMdx(
   filter: { fileAbsolutePath: { glob: "**/src/content/fbposts/*.mdx" }, fields: { isScheduledPost: { eq: false }} }
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
 }
`;