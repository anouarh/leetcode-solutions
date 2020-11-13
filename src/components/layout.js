import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "../css/layout.css"
import Bio from "../components/bio"
import PropTypes from "prop-types"

const Layout = ({ data, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
            allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
                totalCount
              }
            }
          }
        `}
        render={data => (
          <footer>
            <div className="footer-column">
              <h4>About me</h4>
              <p>
                <Bio />
              </p>
            </div>
            <div className="footer-column">
              {" "}
              <h4>Categories</h4>{" "}
              {data.allMarkdownRemark.group.map(tag => (
                <p key={tag.fieldValue}>{tag.fieldValue}</p>
              ))}
            </div>
            <div className="footer-column">
              <h4>Pages</h4>
            </div>
            © {new Date().getFullYear()}
          </footer>
        )}
      ></StaticQuery>
    </div>
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default Layout
