import React from "react"
import Link from "gatsby"
import { Index } from "elasticlunr"
import {
  MDBCol,
  MDBFormInline,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBBtn,
} from "mdbreact"
import JOBS from "../images/jobs.jpg"
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
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
                value={this.state.query}
                onChange={this.search}
              />{" "}
              <MDBBtn color="unique"> Search </MDBBtn>
            </MDBFormInline>
           
          </MDBCol>
          <MDBCol md="6">
            <img src={JOBS} style={{ maxWidth: "100%" }} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

export default Search