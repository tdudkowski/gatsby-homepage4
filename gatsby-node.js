const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// MAIN FUNCTION
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // TEMPLATES
  const pageArticleTemplate = path.resolve("./src/templates/pageArticleTemplate.js");
  const pageBlogpostTemplate = path.resolve("./src/templates/pageBlogpostTemplate.js");
  const fbBlogpostTemplate = path.resolve("./src/templates/fbBlogpostTemplate.js");
  const fbArticleTemplate = path.resolve("./src/templates/fbArticleTemplate.js");
  const fbBlogIndexTemplate = path.resolve("./src/pages/festung-breslau/index.js");

  const fbTagListTemplate = path.resolve("./src/templates/fbTagListTemplate.js");
  const blogTagListTemplate = path.resolve("./src/templates/pageBlogTagListTemplate.js");
  
  // GET DATA OF GRAPHQL
  const result = await graphql(`{
      pageindexes: allMdx(
        filter: { internal: { contentFilePath: { glob: "**/src/content/pageindexes/*.mdx" } } }
        ) {
      nodes {
        id
        internal {
          contentFilePath
        }
        frontmatter {
          subsection
          section
        }
      }
    }

      pagearticles: allMdx(
        filter: { internal: { contentFilePath: { glob: "**/src/content/pagearticles/*.mdx" } } }
        ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            subsection
            section
          }
        }
      }

      blogposts: allMdx(
        filter: { internal: { contentFilePath: { glob: "**/src/content/blogposts/*.mdx" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            tags
          }
        }
      }

      fbposts:   allMdx(
        filter: { internal: { contentFilePath: { glob: "**/src/content/fbposts/*.mdx" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            date1945
            tags
          }
        }
      }

      fbarticles: allMdx(
        filter: { internal: { contentFilePath: { glob: "**/src/content/fbarticles/*.mdx" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            tags
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

    // HERE ARRAYS ARE COMING
    const pageindexes = result.data.pageindexes.nodes;
    const pagearticles = result.data.pagearticles.nodes;
    const blogposts = result.data.blogposts.nodes;
    const fbposts = result.data.fbposts.nodes;
    const fbarticles = result.data.fbarticles.nodes;

    // console.log(fbarticles)
    // MAKE PAGE INDEXES AND ARTICLES

    pageindexes.forEach(article => {
      createPage({
        path: "/" + article.frontmatter.section + "/" + article.frontmatter.subsection,
        component: `${pageArticleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: { id: article.id },
      })
    })

    pagearticles.forEach(article => {
      createPage({
        path: "/" + article.frontmatter.section + "/" + article.frontmatter.subsection + article.fields.slug,
        component: `${pageArticleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: { id: article.id },
      })
    })

    blogposts.forEach(article => {
      createPage({
        path: "/blog" + article.fields.slug,
        component: `${pageBlogpostTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: { id: article.id },
      })
    })

        // BLOG TAGS
        const blogtags = []
        for (let i = 0; i < blogposts.length; i++) {
          const arrOfTags = blogposts[i].frontmatter.tags.split(",")
          for (let j = 0; j < arrOfTags.length; j++) {
            const thisTag = blogtags.filter(tag => tag.name === arrOfTags[j].trim());
            if (thisTag.length) { thisTag[0].counter += 1; }
            else { blogtags.push({ name: arrOfTags[j].trim(), counter: 1 }) }
          }
        }
    
        // const blogTagsArray = blogtags;
    
        blogtags.forEach(tag => {
          createPage({
            path: "/blog/tag/" + tag.name,
            component: blogTagListTemplate,
            ...tag,
            context: {
              ...tag.name.context,
              slug: tag.name,
            },
          });
        });

    fbposts.forEach(article => {
      createPage({
        path: "/festung-breslau/blog" + article.fields.slug,
        component: `${fbBlogpostTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: { id: article.id },
      })
    })

    fbarticles.forEach(article => {
      createPage({
        path: "festung-breslau/article" + article.fields.slug,
        component: `${fbArticleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
        context: { id: article.id },
      })
    })

    // FB BLOGPOSTS TAGS
    const fbpoststags = []
    for (let i = 0; i < fbposts.length; i++) {
      const arrOfTags = fbposts[i].frontmatter.tags.split(",")
      for (let j = 0; j < arrOfTags.length; j++) {
        if (!fbpoststags.includes(arrOfTags[j].trim())) {
          fbpoststags.push(arrOfTags[j].trim())
        }
      }
    }

    // FB ARTICLES TAGS
    const fbarticlestags = []
    for (let i = 0; i < fbarticles.length; i++) {
      // console.log(fbarticles[i].frontmatter.title, fbarticles[i].frontmatter.tags)
      const arrOfTags = fbarticles[i].frontmatter.tags.split(",")
      for (let j = 0; j < arrOfTags.length; j++) {
        if (!fbarticlestags.includes(arrOfTags[j].trim())) {
          fbarticlestags.push(arrOfTags[j].trim())
        }
      }
    }

    // SUM FB TAGS
    const fbsumtags = [...fbpoststags]
    for (let i = 0; i < fbpoststags.length; i++) {
      for (let j = 0; j < fbarticlestags.length; j++) {
        if (!fbsumtags.includes(fbarticlestags[j].trim())) {
          fbsumtags.push(fbarticlestags[j].trim())
        }
      }
    }

    fbsumtags.forEach(tag => {
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
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
