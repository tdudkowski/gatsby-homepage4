import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo";
import LayoutBlog from "../../components/layout-blog"
// import Seo from "../../components/seo"

const GatsbyBlog = ({ data, location }) => {
    const headerTitle = `dygresje.info / sec.w@ar`
    const path = location.pathname

console.log(data)

    if (data.length) {
    const { frontmatter } = data.allMdx.nodes[0];
    const { image } = frontmatter;}

    return (<LayoutBlog path={path}>
        {/* <Seo title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} /> */}
                    <h3>sec.w@r - secret war is war of secrets</h3>

<p>To czwarta seria wpisów na moim blogu. Podobnie jak w przypadku <Link to="/blog/enigma">Enigmy</Link> jest to w dużej mierze wycieczka w nieznane. Seria ta będzie dotyczyć ogólnie rozumianego bezpieczeństwa IT, nowego oblicza przestępczości i wojny.</p>

<p>Zaczynam od pewnego aspektu toczącej się obecnie wojnie Rosji o panowanie nad Ukrainą. Jest to sprawa niezwykle ważna i wszyscy ją śledzimy z uwagą. Wydaje mi sę jednak, że po pierwsze opinia publiczna ma dość krótką pamięć, dlatego trzeba wprowadzić kontekst historyczny. Po drugie zaś w natłoku aktualnych spraw wojny łatwo przeoczyć fakt, że w jej cieniu toczy się druga, tajna wojna i to od prawie 10 lat. Wbrew pozorom nie jest mniej ważna. I również w dużym stopniu dotyczy Polski. I właśnie o tej tajnej wojnie prowadzonej środkami informatycznymi będą pierwsze wpisy w tej serii</p>

            <h3>Dotychczasowe wpisy</h3>

            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                    <li key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
                        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link> - <span>{frontmatter.description}</span>
                    </li>
                ))}
            </ul>

       
        
    </LayoutBlog >)
}
//^.(\bgatsby\b)?.$
export default GatsbyBlog

export function Head() { 
    
    return ( <Seo title="dygresje.info Blog: sec.w@r" /> ) }

export const query = graphql`
        query AllSecwarBlogPosts {
            allMdx(
                filter: {internal: {contentFilePath: {glob: "**/src/content/blogposts/*.mdx"}}, frontmatter : {set : {eq: "secwar" } } },
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