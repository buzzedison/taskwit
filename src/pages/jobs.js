import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobListing = ({ data }) => {
  const joblist = data.allContentfulJobListing.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1 style={{ padding: "20px", textAlign: "center" }}>
        {"Here's a list of Jobs Available!"}
      </h1>
      <div className="joblist">
        {joblist.map(({ node: blog }) => (
          <div key={blog.id}>
            <Link to={`/myJobs/${blog.slug}`}>{blog.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default JobListing

export const query = graphql`
  query JobListingPageQuery {
    allContentfulJobListing {
      edges {
        node {
          title
          slug
          companyDetails
          jobInfo {
            jobInfo
          }
        }
      }
    }
  }
`
