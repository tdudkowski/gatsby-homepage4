// https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

// MAIN FUNCTION
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // TEMPLATES
  const pageArticleTemplate = path.resolve("./src/templates/pageArticleTemplate.js");
  const blogpostTemplate = path.resolve("./src/templates/blogpostTemplate.js");
  const fbBlogIndexTemplate = path.resolve("./src/pages/festung-breslau/index.js");
  const fbBlogpostTemplate = path.resolve("./src/templates/fbBlogpostTemplate.js");
  const fbArticleTemplate = path.resolve("./src/templates/fbArticleTemplate.js");
  const fbTagListTemplate = path.resolve("./src/templates/fbTagListTemplate.js");
  const blogTagListTemplate = path.resolve("./src/templates/blogTagListTemplate.js");

  // GET DATA OF GRAPHQL
  return graphql(`	{

    pageindexes: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/content/pageindexes/*.mdx" } }
              ) {
                nodes {
                  slug
                  body
                  id
                  frontmatter {
                    title
                    comment
                    subsection
                    section
                  }
                }
      }

      pagearticles: allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/content/pagearticles/*.mdx" } }
                ) {
                  nodes {
                    slug
                    body
                    id
                    frontmatter {
                      title
                      comment
                      subsection
                      section
                    }
                  }
        }

      blogposts: allMdx(
          filter: { fileAbsolutePath: { glob: "**/src/content/blogposts/*.mdx" } }
           sort: { order: DESC, fields: frontmatter___date }
          ) {
            nodes {
            slug
            id
            body
              frontmatter {
                title
                section
                subsection
                date
                edited
                tags
                }            
            }
          }

      fbposts: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/content/fbposts/*.mdx" }, fields: { isScheduledPost: { eq: false } } }
      sort: { order: DESC, fields: frontmatter___date }
      )  {
        nodes {
      slug
      frontmatter {
      title
      date(formatString: "YYYY-MM-DD")
      relativeDate:  date(fromNow: true locale: "de-DE")
      date1945
      published
      tags
    }    
  }
}

        fbarticles: allMdx(
          filter: { fileAbsolutePath: { glob: "**/src/content/fbarticles/*.mdx" } }
          sort: { order: DESC, fields: frontmatter___date }
        )  {
          nodes {    
        slug
        frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        published
      }
    }
  }

    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // HERE ARRAYS ARE COMING
    const pageindexes = result.data.pageindexes.nodes;
    const pagearticles = result.data.pagearticles.nodes;
    const blogposts = result.data.blogposts.nodes;
    const fbposts = result.data.fbposts.nodes;
    const fbarticles = result.data.fbarticles.nodes;

    // MAKE PAGE INDEXES AND ARTICLES
    pageindexes.forEach(article => {
      createPage({
        path: "/" + article.frontmatter.section + "/" + article.frontmatter.subsection,
        component: pageArticleTemplate,
        ...article,
        context: {
          ...article.context,
          slug: article.slug,
        },
      });
    });

    pagearticles.forEach(article => {
      createPage({
        path: "/" + article.frontmatter.section + "/" + article.frontmatter.subsection + "/" + article.slug,
        component: pageArticleTemplate,
        ...article,
        context: {
          ...article.context,
          slug: article.slug,
        },
      });
    });

    // MAKE BLOG POSTS
    blogposts.forEach(post => {
      createPage({
        path: "/blog/" + post.slug,
        component: blogpostTemplate,
        ...post,
        context: {
          ...post.context,
          slug: post.slug,
        },
      });
    });

    // BLOG TAGS
    const tags = []
    for (let i = 0; i < blogposts.length; i++) {
      const arrOfTags = blogposts[i].frontmatter.tags.split(",")
      for (let j = 0; j < arrOfTags.length; j++) {
        if (!tags.includes(arrOfTags[j].trim())) {
          tags.push(arrOfTags[j].trim())
        }
      }
    }

    tags.forEach(tag => {
      createPage({
        path: "/blog/tag/" + tag,
        component: blogTagListTemplate,
        ...tag,
        context: {
          ...tag.context,
          slug: tag,
        },
      });
    });

    // MAKE FB POSTS AND ARTICLES
    fbposts.forEach(post => {
      createPage({
        path: "/festung-breslau/blog/" + post.slug,
        component: fbBlogpostTemplate,
        ...post,
        context: {
          ...post.context,
          slug: post.slug,
        },
      });
    });

    fbarticles.forEach(article => {
      createPage({
        path: "festung-breslau/article/" + article.slug,
        component: fbArticleTemplate,
        ...article,
        context: {
          ...article.context,
          slug: article.slug,
        },
      });
    });

    // FB BLOG TAGS
    const fbtags = []
    for (let i = 0; i < fbposts.length; i++) {
      const arrOfTags = fbposts[i].frontmatter.tags.split(",")
      for (let j = 0; j < arrOfTags.length; j++) {
        if (!fbtags.includes(arrOfTags[j].trim())) {
          fbtags.push(arrOfTags[j].trim())
        }
      }
    }

    fbtags.forEach(tag => {
      createPage({
        path: "/festung-breslau/tag/" + tag,
        component: fbTagListTemplate,
        ...tag,
        context: {
          ...tag.context,
          slug: tag,
        },
      });
    });

    // MAKE FB POSTS PAGINATION
    const postsPerPage = 10;
    const numPages = Math.ceil(fbposts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      const firstPage = i === 0;
      const currentPage = i + 1;
      createPage({
        path: firstPage ? "/festung-breslau/1" : `/festung-breslau/${currentPage}`,
        component: fbBlogIndexTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage,
        },
      });
    });

  });
};

// ADD FIELD NODE PARAMETER FOR: 1. FB ARTICLE SLUG 2. SCHEDULING FB POSTS 
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    // Create scheduled post
    const publishDate = node.frontmatter.date
    const isScheduledPost = !publishDate || (new Date(publishDate)).getTime() > Date.now()
    createNodeField({
      node,
      name: "isScheduledPost",
      value: isScheduledPost,
    })
  }
}