import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LayoutFB from "../../components/layout-fb"
// import SEO from "react-seo-component";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const BlogFBList = ({ data }) => {
  const buttons = Array.from({ length: Math.ceil(data.allMdx.totalCount / 10) });
  console.log(buttons)
  // const image = getImage(data.frontmatter.img)

  return (
    <LayoutFB sub="post">
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <section key={id} className="posts post">
          <h4>{frontmatter.date1945}</h4>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date} - {frontmatter.relativeDate}</p>
          <div className="contentStream">
            <p>{excerpt}</p>
            <figure className="figure imgThumbnail">
              <GatsbyImage image={getImage(frontmatter.img)} alt="ilustracja" />
            </figure>
          </div>
          <p>Cały wpis: <Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.title}</Link></p>
        </section>
      ))}
      <div className="remote">
        <p>Na stronie jest do 10 wpisów bloga - od najnowszych:</p>

        <p>Na każdej podstronie jest do dziesięciu wpisów:</p>
        <ul className="fbbuttons">{buttons.map((_, i) => <li key={i}>
          <Link to={`/festung-breslau/${i + 1}`} activeClassName="paginationActive">{i + 1}</Link>
        </li>)}</ul>
      </div>
    </LayoutFB>
  );
};

export default BlogFBList

export const query = graphql`
query AllListsArticles($skip: Int!=0) {
  allMdx(
    filter: { fileAbsolutePath: { glob: "**/src/content/fbposts/*.mdx" }, fields: { isScheduledPost: { eq: false }}}
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 10
    skip: $skip
  ) {
        nodes {
            id
            excerpt(pruneLength: 750)
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              relativeDate:  date(fromNow: true locale: "de-DE")
              date1945
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            fields {
              
              slug
            }
            slug
            }
          pageInfo {
            currentPage
          }
    }
  }
`;

