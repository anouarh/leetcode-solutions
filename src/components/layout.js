import React from "react"
import { Link } from "gatsby"

import "../css/layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ data, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <menu>
        <div className="menu-column">
          <Link id="title" to="/">
            {title}
          </Link>
        </div>
        <div className="menu-column">
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/tags">Tags</Link>
        </div>
        <div className="menu-column">
          <Link to="/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="/">
          <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </menu>
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
