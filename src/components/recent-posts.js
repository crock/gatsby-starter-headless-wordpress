import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

const RecentPosts = () => (
        <StaticQuery
          query={graphql`
            query RecentPostsQuery {
                allWordpressPost(filter: {status: {eq: "publish"}}, limit: 5) {
                    edges {
                        node {
                            id
                            title
                            excerpt
                            date
                            author {
                                avatar_urls {
                                    wordpress_48
                                }
                                name
                                slug
                                wordpress_id
                            }
                            slug
                            title
                            wordpress_id
                            modified
                            content
                        }
                    }
                }
            }
          `}
          render={data => {
            return (
                <div className="recent-posts widget" style={{
                    width: `100%`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `flex-start`,
                    alignItems: `flex-start`,
                }}>
                    <h5 style={{fontSize: `1.35rem`, fontWeight: `bold`}}>Recent Posts</h5>
                    {
                        data.allWordpressPost.edges.map(post => (
                            <div className="rp-card" key={post.node.id} style={{
                                width: `100%`,
                                maxWidth: `300px`,
                                height: `100px`,
                                boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
                                borderRadius: `6px`,
                                display: `flex`,
                                flexDirection: `row`,
                                justifyContent: `flex-start`,
                                alignItems: `center`,
                                padding: `10px`,
                                marginBottom: `15px`,

                            }}>
                                <img className="author-profile-photo" src={post.node.author.avatar_urls.wordpress_48} alt="author avatar" style={{marginBottom: 0, marginRight: `15px`, borderRadius: `50%`, border: `3px solid #F46912`}} />
                                <div className="text-group" style={{
                                    display: `flex`,
                                    flexDirection: `column`,
                                    justifyContent: `flex-start`,
                                    alignItems: `flex-start`,
                                    fontSize: `0.75rem`,
                                }}>
                                    <Link to={`/blog/${post.node.slug}`} className="post-title" style={{
                                        textDecoration: `none`,
                                        color: `#F46912`,
                                        fontWeight: `bold`,

                                    }}>{post.node.title}</Link>
                                    <small className="post-date" style={{
                                        color: `grey`,
                                        textTransform: `uppercase`,
                                    }}>{ new Date(post.node.date).toDateString() }</small>
                                </div>
                            </div>
                          ))
                    }
                </div>
            )
          }}
        />
)

export default RecentPosts