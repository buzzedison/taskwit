import React from "react"
import {
  MDBCol,
  MDBFormInline,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBBtn,
} from "mdbreact"
import JOBS from "../images/jobs.jpg"
const Search = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{ padding: "80px" }}>
          <h3 style={{ padding: "10px", fontWeight: "bold" }}>
            {" "}
            Find Jobs, Companies, Courses
          </h3>
          <MDBFormInline className="md-form">
            <MDBIcon icon="search" />
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />{" "}
            <MDBBtn color="unique"> Search </MDBBtn>
          </MDBFormInline>
        </MDBCol>
        <MDBCol md="6">
          <img src={JOBS} style={{ maxWidth: "110%", paddingLeft: "10px" }} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Search
