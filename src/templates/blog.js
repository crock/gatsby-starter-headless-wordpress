import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ pageContext }) => {
    const { posts } = pageContext

    const formatDate = date => {

        const dateObj = new Date(date)
        return dateObj.toLocaleDateString()
    }

    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>

            {
                posts.map(post => (
                    <article className="card post-card" id={`post-${post.id}`} key={post.id}
                        style={{
                            display: `flex`,
                            flexDirection: `column`,
                            justifyContent: `flex-start`,
                            alignItems: `flex-start`,
                            padding: `25px`,
                            boxShadow: `rgb(236, 236, 236) 3px 3px 10px 0`,
                            borderRadius: `6px`,
                        }}
                    >
                        <h2 style={{margin: 0}}>{post.title}</h2>
                        <span className="post-meta">Posted by <Link to={`/user/${post.author.slug}`}>{post.author.name}</Link> | { formatDate(post.date) }</span>
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                        <Link to={`/blog/${post.slug}`}
                            style={{
                                width: `200px`,
                                height: `40px`,
                                lineHeight: `40px`,
                                borderRadius: `6px`,
                                backgroundColor: `#F46912`,
                                color: `#ffffff`,
                                textTransform: `uppercase`,
                                textDecoration: `none`,
                                textAlign: `center`,
                                marginTop: `25px`,
                            }}
                        >Read More</Link>
                    </article>
                ))
            }
            
        </Layout>
    )
}

export default Blog