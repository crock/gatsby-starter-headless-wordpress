import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const User = ({ pageContext }) => {
    const { name, bio, avatar } = pageContext

    return (
        <Layout>
            <SEO title={name} />
            <img src={avatar} alt="user" />
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{ __html: bio }}></div>
        </Layout>
    )
}

export default User