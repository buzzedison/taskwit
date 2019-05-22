import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "mdbreact/dist/css/mdb.css"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Features from "../components/features"
import Head from "../components/head"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Jobs`, `Courses`, `Internships`]} />
    <div>
      <Head />
      <Features />
    </div>
  </Layout>
)

export default IndexPage
