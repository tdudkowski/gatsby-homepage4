/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, location }) {

    const pageTitle = title;
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
    )

    const twitterImage = site.siteMetadata.siteUrl + image;
    const metaDescription = site.siteMetadata.description;
    const metaTitle = pageTitle ? pageTitle : `${site.siteMetadata.title} ${title}`;
    const smimage = image || site.siteMetadata.image;

    title = metaTitle // site.siteMetadata.title || {pageTitle}
            // titleTemplate={metaTitle}
            // image={image}

    return (
        <>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="og:title" content={metaTitle} />
        <meta name="og:description" content={metaDescription} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={smimage} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={smimage} />
        </> 
    )
}

SEO.defaultProps = {
    lang: `pl`,
    meta: [],
    description: ``,
    title: "",
    image: null,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default SEO
