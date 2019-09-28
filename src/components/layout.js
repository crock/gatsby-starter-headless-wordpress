import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Sidebar from "./sidebar"
import RecentPosts from './recent-posts'
import "./layout.css"
import igIcon from '../images/instagram-icon.svg'
import twtrIcon from '../images/twitter-icon.svg'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  font-family: 'Roboto', sans-serif;
`

const PageContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`
const Main = styled.main`
  flex: 1;
  margin-right: 25px;
`

const Footer = styled.footer`
  margin-top: 50px;
`

const Socials = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  padding-bottom: 10px;

  img {
    width: 50px;
    height: 50px;

    &:first-of-type {
      margin-right: 10px;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDesc={data.site.siteMetadata.description} />
      <Container>
        <PageContent className="page-content">
          <Main>{children}</Main>
          <Sidebar>
            <RecentPosts />

          </Sidebar>
        </PageContent>

        <Footer>
          <Socials className="social-icons">
          <a href="https://twitter.com/crocdomains">
              <img src={twtrIcon} alt="twitter icon" />
            </a>
            <a href="https://instagram.com/crocdesigns">
              <img src={igIcon} alt="instagram icon" />
            </a>
          </Socials>
          © {new Date().getFullYear()} Alex Crocker, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
