import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/gatsby-icon.png'

const Header = ({ siteTitle, siteDesc }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-wrap"
      style={{
        margin: `0 auto`,
        maxWidth: 1170,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexFlow: `row wrap`,
        alignItems: `center`,
        justifyContent: `space-between`,
      }}
    >
      <div className="logo"
        style={{
          display: `flex`,
          flexFlow: `row nowrap`,
          alignItems: `center`,
        }}
      >
        <img src={logo} alt="logo" width="100" style={{display: 'inline-block', marginBottom: 0, marginRight: `15px`}} />
        <div className="title-group" style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `flex-start`}}>
          <h1 style={{ margin: 0, display: 'inline-block', fontFamily: `Marta, sans-serif`, fontSize: '1.5rem', fontWeight: `bold` }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <h2 style={{marginBottom: 0, color: `#FCB826`, fontSize: `1.15rem`, fontWeight: `300` }}>
            {siteDesc}
          </h2>
        </div>
      </div>
      
      <nav className="primary-nav">
        <Link to="/" activeClassName="active">Home</Link>
        <Link to="/blog" activeClassName="active">Blog</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
