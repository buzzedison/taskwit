import React from "react"
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact"
import DIGITAL from "../images/digital.png"
import SCRUM from "../images/scrum.jpg"
import BUSINESS from "../images/business.jpg"
const Courses = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Take our courses, boost your career
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Digital Marketing, Project Management, Business development, Information
        Technology, Sales & Marketing, Computer Basics, Microsoft
        Certifications, Google certifications. and many more...
      </p>

      <MDBRow className="text-center" style={{ maxWidth: "950" }}>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={DIGITAL} alt="" className="img-fluid" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Digital Marketing</h4>
            <p className="grey-text">
              Organized by Loudspeaker. Social media intensive training
              Practical demonstration, work with real brands. Learn how to make
              money with digital tools. Job interviews for successful candidates
            </p>
            <MDBBtn color="dark" size="sm">
              <MDBIcon far icon="clone" className="left" /> LEARN MORE
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={SCRUM} alt="" className="img-fluid" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Project Management</h4>
            <p className="grey-text">
              Agile & Scrum for product developmemnt, project initiation to
              implementation. Learn by doing.
            </p>
            <MDBBtn color="dark" size="sm">
              <MDBIcon far icon="clone" className="left" /> LEARN MORE
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img src={BUSINESS} alt="" className="img-fluid" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Business development</h4>
            <p className="grey-text">
              Learn business management, strategy, financial management, human resoruce management,
              business analysis, and many more
            </p>
            <MDBBtn color="dark" size="sm">
              <MDBIcon far icon="clone" className="left" />LEARN MORE
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  )
}

export default Courses
