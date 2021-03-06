import React, { Component } from "react"
import NetlifyForm from "react-netlify-form"
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdbreact"
import "./head.css"

class Head extends Component {
  render() {
    return (
      <div id="contactformpage">
        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="indigo-strong"
          >
            <MDBContainer style={{ paddingBottom: "170px" }}>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold"style={{ paddingTop: "40px" }}>Jobs, Courses</h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Get a dream job, improve your career by taking our courses,
                    get our paid internship opportunities, volunteer to work
                    with organizations anywhere in Africa.
                  </h6>
                  <MDBBtn color="dark">FIND OUT MORE</MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <NetlifyForm
                    name="Taskwit Internship Form"
                    onSubmit={this.handleSubmit}
                  >
                    {({ loading, error, success }) => (
                      <div>
                        {loading && <div>Loading...</div>}
                        {error && (
                          <div>
                            Your information was not sent. Please try again
                            later.
                          </div>
                        )}
                        {success && (
                          <div>
                            <h4 style={{ color: "white" }}>
                              Thank you for applying for our Internship Program.
                              We will be in touch!
                            </h4>
                          </div>
                        )}
                        {!loading && !success && (
                          <MDBCard
                            className="dark-grey-text"
                            style={{ paddingBottom: "50px" }}
                          >
                            <MDBCardBody className="z-depth-2">
                              <h4 className="dark-grey-text text-center">
                                <strong>APPLY FOR PAID INTERNSHIP:</strong>
                              </h4>
                              <hr />
                              <MDBInput
                                label="Your name"
                                icon="user"
                                name="name"
                                onChange={this.handleChange}
                                required
                              />
                              <MDBInput
                                label="Your email"
                                icon="envelope"
                                name="email"
                                onChange={this.handleChange}
                                required
                              />
                              <MDBInput
                                label="Your phone number"
                                icon="phone"
                                name="phone"
                                onChange={this.handleChange}
                                required
                              />
                              <MDBInput
                                label="Why do you want to be part of this"
                                icon="pencil-alt"
                                type="textarea"
                                rows="2"
                                name="message"
                                onChange={this.handleChange}
                                required
                              />
                              <div className="text-center mt-3 black-text">
                                <MDBBtn color="dark" type="submit">
                                  Send
                                </MDBBtn>
                                <hr />
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        )}
                      </div>
                    )}
                  </NetlifyForm>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer style={{ paddingTop: "80px" }}>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <h2 className="black-text text-center strong">
                <strong>
                  Let us help you find the right people for your organization.
                </strong>
              </h2>{" "}
              <p style={{ paddingLeft: "60px", paddingRight: "60px" }}>
                <strong>Work with the best.</strong> We put people to test
                through our innovative training and recruitment process before
                we recommend them to you.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Head
