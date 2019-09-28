import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ pageContext }) => {
    const { name, content } = pageContext

    return (
        <Layout>
            <SEO title={name} />
            <h1>{name}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export default Page