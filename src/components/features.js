import React, { Component } from "react"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdbreact"
import COURSES from "../images/courses.png"
import FIND from "../images/find.jpg"
import CAREER from "../images/about.jpg"
class Features extends Component {
  render() {
    return (
      <MDBContainer fluid>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            padding: "40px",
            textShadow: "white 1px 1px",
          }}
        >
          {" "}
          Take your career to the next level.{" "}
        </h1>
        <center>
          <MDBRow style={{ maxWidth: "950px" }}>
            <MDBCol sm="4">
              <MDBCard wide>
                <MDBCardImage cascade className="img-fluid" src={COURSES} />
                <MDBCardBody cascade>
                  <MDBCardTitle>COURSES</MDBCardTitle>
                  <MDBCardText>
                    Find courses, and tools that will boost your career and take
                    you to the next level.
                  </MDBCardText>
                  <MDBBtn color="dark" href="#">
                    LEARN MORE
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4">
              <MDBCard narrow>
                <MDBCardImage cascade className="img-fluid" src={FIND} />
                <MDBCardBody cascade>
                  <MDBCardTitle>FIND JOBS</MDBCardTitle>
                  <MDBCardText>
                    Find your dream job in Tech, Engineeering, Finance,
                    Management, Sales, Arts and development.
                  </MDBCardText>
                  <MDBBtn href="#" color="dark">
                    BROWSE JOBS
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol sm="4">
              <MDBCard cascade>
                <MDBCardImage cascade className="img-fluid" src={CAREER} />
                <MDBCardBody cascade>
                  <MDBCardTitle>THE CAREER HUB</MDBCardTitle>
                  <MDBCardText>
                    Your one stop career solution center. Explore your career
                    options , build new skills and meet new people in our
                    modern, artistic space setting.
                  </MDBCardText>
                  <MDBBtn href="#" color="dark">
                    LEARN MORE
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </center>
      </MDBContainer>
    )
  }
}

export default Features
