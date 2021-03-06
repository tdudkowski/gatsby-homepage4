/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
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

    const twitterImage = site.siteMetadata.siteUrl + image
    const metaDescription = `${site.siteMetadata.description}`
    const metaTitle = `${site.siteMetadata.title} ${title}`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={`${title} || ${pageTitle}`}
            titleTemplate={`${metaTitle}`}
            image={`${image}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: "og:image",
                    content: image,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: "twitter:image:src",
                    content: twitterImage,
                },
            ].concat(meta)}
        />
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
