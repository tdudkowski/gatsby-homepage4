import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo";
import LayoutBlog from "../../components/layout-blog"
// import Seo from "../../components/seo"

const GatsbyWebdevBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / webdev everythink`
    const path = location.pathname
    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;

    return (<LayoutBlog path={path}>
        
             <h3>Webdev everythink</h3>

<p>Ponieważ dotychczasowe dwa cykle na tym blogu wciąż nie są dokończone, jest to najlepszy czas, żeby wprowadzić dwa kolejne. Pierwszym będzie seria wpisów o ogólnie rozumianym webdevelopmencie (jakkolwiek to słowo nie brzmi po polsku, jesteśmy na nie skazani, choćby z racji braku dobrego polskiego odpowiednika). Dotyczyć będzie zarówno frontendu jak i backendu. Ponieważ obie te rzeczy są ze sobą ściśle powiązane zdecydowałem się ich nie rozdzielać. Uprzedzając pytania - błąd w tytule jest celowy.</p>

<p>W tym momencie jest tylko jeden wpis. Kiedy pojawią się następne - nie wiem.</p>

            <h3>Wzmiankowany wpis</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>
            
    </LayoutBlog >)
}

export default GatsbyWebdevBlog

export function Head() { 
    
    return ( <Seo title="dygresje.info Blog: Webdev everythink" /> ) }

export const query = graphql`
        query AllWebdevBlogPosts {
            allMdx(
                filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}, frontmatter : {set : {eq: "Webdev everythink" } } },
                sort: {frontmatter: {date: ASC} }
        ) {
            nodes {
            fields {
                slug
            }
            frontmatter {
            title
            section
        subsection
        description
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
        id
        body
        }
      }
    }
        `;