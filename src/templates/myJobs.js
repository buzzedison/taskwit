import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JobPost = ({ data }) => {
  const { title, companyDetails, tags, jobInfo } = data.contentfulJobListing

  return (
    <Layout>
      <SEO title={title} />
      <div className="blogpost">
        <center>
          {" "}
          <h1 style={{ padding: "20px", textAlign: "center" }}>{title}</h1>
        </center>

        <div
          className="container"
          id="content"
          style={{ textAlign: "center", fontSize: "30px" }}
        >
          <b>{companyDetails}</b>
        </div>

        <div
          className="container"
          id="content"
          style={{ padding: "50px", fontSize: "18px" }}
        >
          {jobInfo.jobInfo}
        </div>
        <div className="tags">
          {tags.map(tag => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link to="/insight" className="container" id="content">
          Back to Insight/Blog
        </Link>
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
      companyDetails
      tags
      jobInfo {
        jobInfo
      }
    }
  }
`
