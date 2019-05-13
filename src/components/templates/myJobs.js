import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JobPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulJobListing
  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <p className="body-text">{body.body}</p>
        <Link to="/myJobs">View more posts</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default JobPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulJobListing(slug: { eq: $slug }) {
      title
      slug
      jobDescription {
        internal {
          content
        }
      }

      tags
    }
  }
`
