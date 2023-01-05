import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Sitemap = ({ data }) => {

    const articlesIT = data.allMdx.nodes.filter(item => item.frontmatter.section === "it")
    const articlesTurystyka = data.allMdx.nodes.filter(item => item.frontmatter.section === "turystyka")
    const articlesMisc = data.allMdx.nodes.filter(item => item.frontmatter.section === "misc")

    return (
        <Layout>
            <section className="section-meta">
                <h2>Mapa strony</h2>
                <p>To są wszystkie opublikowane tu artykuły, wkrótce to uporządkuję.</p>

                <h3>IT</h3>

                <ul>
                    {articlesIT.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/${frontmatter.section}/${frontmatter.subsection && frontmatter.subsection}${fields.slug}`}>{frontmatter.title}</Link> ({frontmatter.subsection})
                            {/*<span>{frontmatter.id} - {slug}</span>*/}
                        </li>
                    ))}
                </ul>

                <h3>Turystyka</h3>

                <ul>
                    {articlesTurystyka.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/${frontmatter.section}/${frontmatter.subsection && frontmatter.subsection}${fields.slug}`}>{frontmatter.title}</Link> ({frontmatter.subsection})
                            {/*<span>{frontmatter.id} - {slug}</span>*/}
                        </li>
                    ))}
                </ul>
                
                <h3>Misc</h3>

                <ul>
                    {articlesMisc.map(({ id, frontmatter, fields }) => (
                        <li key={id}>
                            <Link to={`/${frontmatter.section}/${frontmatter.subsection && frontmatter.subsection}${fields.slug}`}>{frontmatter.title}</Link> ({frontmatter.subsection})
                            {/*<span>{frontmatter.id} - {slug}</span>*/}
                        </li>
                    ))}
                </ul>
            
            </section>
        </Layout>
    )
}

export default Sitemap

export function Head() { return ( <Seo title="Mapa strony" /> ) }

export const query = graphql`
    query AllArticlesIndexQuery {
        allMdx(
            filter: {internal: {contentFilePath: {glob: "**/src/content/pagearticles/*.mdx"}}}) {
                nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    section
                    subsection
                }            
        }
     }
     mdx {
        fields {
            slug
        }
        frontmatter {section}}
  }
`;