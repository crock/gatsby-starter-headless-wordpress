const path = require('path')
const slash = require('slash')
const _ = require('lodash');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
      {
        allWordpressPost {
          edges {
            node {
              id
              wordpress_id
              title
              slug
              author {
                avatar_urls {
                  wordpress_48
                }
                wordpress_id
                name
                slug
              }
              content
              date
              excerpt
            }
          }
        },
        allWordpressWpUsers {
          edges {
            node {
              avatar_urls {
                wordpress_96
              }
              wordpress_id
              id
              description
              name
              slug
              all_authored_entities {
                ... on wordpress__POST {
                  id
                  slug
                  title
                  wordpress_id
                }
              }
            }
          }
        }
      }
      
      `
    )
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // Create pages for each markdown file.
    const blogTemplate = path.resolve(`./src/templates/blog.js`)
    let posts = result.data.allWordpressPost.edges.map(post => post.node)
    createPage({
        path: `/blog/`,
        component: slash(blogTemplate),
        context: {
            posts: posts
        }
    })

    const postTemplate = path.resolve(`./src/templates/post.js`)
    _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
            // will be the url for the page
            path: `/blog/${edge.node.slug}`,
            // specify the component template of your choice
            component: slash(postTemplate),
            // In the ^template's GraphQL query, 'id' will be available
            // as a GraphQL variable to query for this posts's data.
            context: {
                id: edge.node.wordpress_id,
                title: edge.node.title,
                author: {
                    avatar: edge.node.author.avatar_urls.wordpress_48,
                    name: edge.node.author.name,
                    slug: edge.node.author.slug,
                    id: edge.node.author.wordpress_id,
                },
                content: edge.node.content,
                slug: edge.node.slug,
                excerpt: edge.node.excerpt,
                date: edge.node.date,
            },
        })
    })

    const userTemplate = path.resolve(`./src/templates/user.js`)
    _.each(result.data.allWordpressWpUsers.edges, edge => {
        createPage({
            // will be the url for the page
            path: `/user/${edge.node.slug}`,
            // specify the component template of your choice
            component: slash(userTemplate),
            // In the ^template's GraphQL query, 'id' will be available
            // as a GraphQL variable to query for this posts's data.
            context: {
                id: edge.node.wordpress_id,
                name: edge.node.name,
                avatar: edge.node.avatar_urls.wordpress_96,
                bio: edge.node.description,
                slug: edge.node.slug,
                posts: edge.node.authored_wordpress__POST,
            },
        })
    })
  }