import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo";
import styled from "styled-components"
import LayoutFB from "../../components/layout-fb"

const StyledList = styled.ul`
display:flex;
flex-wrap: wrap;
& li {list-style-type: none; padding-left: 0; }
& li a {display: block; padding: .5rem 1rem; margin: 0 .5rem; text-decoration: none; text-align: center; border: none;}
& a:hover {text-decoration: underline;}
& a.paginationActive { background-color: #ddc; color:#333; pointer-events: none;}
`;

const BlogFBList = ({ data }) => {
  const buttons = Array.from({ length: Math.ceil(data.allMdx.totalCount / 10) });

  return (
    <LayoutFB sub="post">
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
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
          <p>Cały wpis: <Link to={`/festung-breslau/blog${fields.slug}`}>{frontmatter.title}</Link></p>
        </section>
      ))}
      <div className="remote">
        <p>Na każdej podstronie jest do 10 wpisów bloga - od najnowszych:</p>
        <StyledList>{buttons.map((_, i) => <li key={i}>
          <Link to={`/festung-breslau/${i + 1}`} activeClassName="paginationActive">{i + 1}</Link>
        </li>)}</StyledList>
      </div>
    </LayoutFB>
  );
};

export default BlogFBList

export function Head() { 
  return ( <Seo title="Festung Breslau 1945 täglich" /> ) }

export const query = graphql`
query AllListsArticles($skip: Int!=0)  {
  allMdx(
    filter: {internal: {contentFilePath: {glob: "**/src/content/fbposts/*.mdx"}}},
    sort: {frontmatter: {date: DESC} }
    limit: 10
    skip: $skip
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        date1945
        description
        date(formatString: "YYYY-MM-DD")
        relativeDate:  date(fromNow: true locale: "de-DE")
        img {
          childImageSharp {
            gatsbyImageData(width: 400, placeholder: BLURRED, formats:  [AUTO, WEBP])
          }
        }
      }
      internal {
        contentFilePath
      }
      excerpt(pruneLength: 750)
      id
    }
    totalCount
    pageInfo {
      currentPage
    }
  }
  }
`;

