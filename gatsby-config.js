require("dotenv").config({ path: `.env`, })

module.exports = {
    siteMetadata: {
        title: `Tadeusz Dudkowski Homepage :// `,
        titleTemplate: `Tadeusz Dudkowski | http://dygresje.info`,
        author: `Tadeusz Dudkowski`,
        description: `Tadeusz Dudkowski strona domowa: turystyka, Niemcy, Brandenburgia, Saksonia, Berlin, Drezno; programowanie, IT, HTML, CSS, JavaScript, React, GatsbyJS; Deutsch, Francais`,
        url: "https://dygresje.info",
        siteUrl: `https://dygresje.info/`,
        image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@tdudkowski",
        facebookFanpage: "https://www.facebook.com/dygresje.info",
    },
    pathPrefix: "/",
    plugins: [
        "dotenv",
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-catch-links`,
        'gatsby-plugin-netlify',
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pagearticles`,
                path: `${__dirname}/src/content/pagearticles`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pageimages`,
                path: `${__dirname}/src/content/pageimages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pageindexes`,
                path: `${__dirname}/src/content/pageindexes`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogposts`,
                path: `${__dirname}/src/content/blogposts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blogimages`,
                path: `${__dirname}/src/content/blogimages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fbposts`,
                path: `${__dirname}/src/content/fbposts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fbarticles`,
                path: `${__dirname}/src/content/fbarticles`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fbimages`,
                path: `${__dirname}/src/content/fbimages`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            withWebp: true,
                            maxWidth: 900,
                            backgroundColor: false,
                            linkImagesToOriginal: true,
                            tracedSVG: true,
                            lazy: true,
                        },
                    },
                ],
                remarkPlugins: [
                    [require('gatsby-remark-vscode').remarkPlugin, {
                        theme: {
                            default: 'Default Dark+',
                            parentSelector: {
                                // Any CSS selector will work!
                                'html[data-theme=dark]': 'Monokai Dimmed',
                                'html[data-theme=light]': 'Quiet Light'
                            }
                        },
                        inlineCode: {
                            marker: '???',
                            theme: {
                                default: 'Default Light+',
                                dark: 'Default Dark+'
                            }
                        }
                    }]
                ],
            },

        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                // useAutoGen: required 'true' to use autogen
                useAutoGen: true,
                // autoGenHomeLabel: optional 'Home' is default
                autoGenHomeLabel: `Strona g????wna`,
                // exlude: optional, include this array to overwrite paths you don't want to
                // generate breadcrumbs for.
                exclude: [
                    `**/dev-404-page/**`,
                    `**/404/**`,
                    `**/404.html`,
                    `**/offline-plugin-app-shell-fallback/**`,
                    `**/blog/**`,
                    `**/festung-breslau/**`,
                ],
                // crumbLabelUpdates: optional, update specific crumbLabels in the path
                crumbLabelUpdates: [
                    {
                        pathname: '/turystyka',
                        crumbLabel: 'Turystyka'
                    },
                    {
                        pathname: '/turystyka/brandenburgia',
                        crumbLabel: 'Brandenburgia'
                    },
                    {
                        pathname: '/turystyka/saksonia',
                        crumbLabel: 'Saksonia'
                    },
                    {
                        pathname: '/turystyka/dolny-slask',
                        crumbLabel: 'Dolny ??l??sk'
                    },
                    {
                        pathname: '/it',
                        crumbLabel: 'IT'
                    },
                    {
                        pathname: '/it/js',
                        crumbLabel: 'JavaScript'
                    },
                    {
                        pathname: '/it/kryptologia',
                        crumbLabel: 'Kryptologia'
                    },
                    {
                        pathname: '/it/internet',
                        crumbLabel: 'Internet'
                    },
                    {
                        pathname: '/it/historia',
                        crumbLabel: 'Historia IT'
                    },
                    {
                        pathname: '/it/web-accessibility',
                        crumbLabel: 'Web Accessibility'
                    },
                    {
                        pathname: '/it/kryptologia',
                        crumbLabel: 'Kryptologia'
                    },
                    {
                        pathname: '/it/css',
                        crumbLabel: 'CSS'
                    },
                    {
                        pathname: '/it/cms',
                        crumbLabel: 'CMS'
                    },
                    {
                        pathname: '/misc',
                        crumbLabel: 'Misc'
                    },
                    {
                        pathname: '/misc/deutsch',
                        crumbLabel: 'Deutsch'
                    },
                    {
                        pathname: '/misc/francais',
                        crumbLabel: 'Fran??ais'
                    }
                ],
                // trailingSlashes: optional, will add trailing slashes to the end
                // of crumb pathnames. default is false
                trailingSlashes: false,
                // usePathPrefix: optional, if you are using pathPrefix above
                // usePathPrefix: '/blog',
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: process.env.GOOGLE_TAGMANAGER_ID,        
              // Include GTM in development.
              //
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: false,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              //
              // Defaults to null
              // defaultDataLayer: { platform: "gatsby" },
        
              // Specify optional GTM environment details.
              // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
              // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
              // dataLayerName: "YOUR_DATA_LAYER_NAME",
        
              // Name of the event that is triggered
              // on every Gatsby route change.
              //
              // Defaults to gatsby-route-changeS
              // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
              // Defaults to false
              // SSenableWebVitalsTracking: true,
              // Defaults to https://www.googletagmanager.com
              // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
          },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dygresje.info Homepage`,
                short_name: `dygresje.info`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                description: `Dygresje.info - Tadeusz Dudkowski Homepage`,
                lang: `pl`,
                icon: `src/images/maskable-icon-512.png`,
                icons: [
                    {
                        "src": "favicon.ico",
                        "sizes": "16x16",
                        "type": "image/x-icon"
                      },
                    {
                        "src": "src/images/maskable-icon-512.png",
                        "sizes": "192x192 512x512",
                        "type": "image/png",
                        "purpose": "any maskable"
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/sitemap/`, `/kontakt/*`],
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `{
                    allSitePage {
                       nodes {
                         path
                         }
                    }
                    site {
                      siteMetadata {
                        siteUrl
                      }
                    }
                  }
              `,
                resolvePages: ({
                    allSitePage: { nodes },
                }) => {
                    return nodes.map(path => { return { ...path } })
                },
                serialize: ({ path }) => { return { url: path } },
            },
        },
    ],
}