import React, { Component } from "react"
import Courses from "../components/courses"
import Layout from "../components/layout"
import SEO from "../components/seo"

class MainCourse extends Component {
  render() {
    return (
      <Layout>
           <SEO title="Courses in Business and ICT" />
           
        <Courses />
      </Layout>
    )
  }
}

export default MainCourse
