import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const JobListing = ({ data }) => {
  const joblist = data.allContentfulJobListing.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all joblist!"}</h1>
      <div className="joblist">
        {joblist.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/jobs/${post.slug}`}>{post.title}</Link>
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
          tags

          childContentfulJobListingJobDescriptionRichTextNode {
            json
          }

          companyDetails
          salaryInGhanaCedis
          closingDateForApplication
        }
      }
    }
  }
`
