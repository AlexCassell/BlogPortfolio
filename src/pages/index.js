import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Announcement from '../components/Announcement'
import Menu from '../components/Menu'
import LeftSideBar from '../components/LeftSideBar'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: get(this, 'props.data.allMarkdownRemark.edges') }
  }

  componentWillMount = e => {
    this.handleShowBlogOnly()
  }

  handleShowBlogOnly = () => {
    this.setState = { posts: get(this, 'props.data.allMarkdownRemark.edges') }
    for (let i = 0; i < this.state.posts.length; i++) {
      if (this.state.posts[i].node.frontmatter.postType === 'index') {
        console.log(this.state.posts[i])
        this.setState = { posts: this.state.posts.splice(i, 1) }
      } else {
        console.log(this.state.posts[i])
      }
    }
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // posts = get(this, 'props.data.allMarkdownRemark.edges')
    console.log(this.state.posts)
    return (
      <div>
        <Helmet title={siteTitle} />
        <Menu />
        <Announcement />
        <LeftSideBar />
        {this.state.posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            postType
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
