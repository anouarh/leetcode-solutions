import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import "../css/layout.css"

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
      <footer>
        <div className="footer-column">
          Anouar Hilali © {new Date().getFullYear()}
        </div>
        <div className="footer-column">
          <Link to="/">Blog</Link>
          <Link to="/tags">Tags</Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
