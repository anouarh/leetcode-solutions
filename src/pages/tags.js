import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/tags.css"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const group = data.allMarkdownRemark.group

  const capitalize = s => {
    if (typeof s !== "string") return ""
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All tags" />
      <div>
        <h1>Tags</h1>
        <div className="container">
          {group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <div className="tag" key={tag.fieldValue}>
                {capitalize(tag.fieldValue)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
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
`
