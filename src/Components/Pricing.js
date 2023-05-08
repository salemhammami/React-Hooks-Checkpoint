import {MDBContainer,MDBBtnGroup,MDBBtn,MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBTypography,
    MDBIcon,
    MDBCardTitle,
  } from "mdb-react-ui-kit";
  import Button from 'react-bootstrap/Button';
  import { Link } from "react-router-dom"


const Pricing=()=>{
    return(
        <div className="container">
         <MDBContainer className="py-5 ">
      <div className="text-center">
        <h4 classaName="mb-4">
          <strong>Pricing</strong>
        </h4>

        <MDBBtnGroup className="mb-4" aria-label="Basic example">
          <MDBBtn href="#" color="dark" active>
            Monthly billing
          </MDBBtn>
          <MDBBtn color="light">
            Annual billign <small>(2 months FREE)</small>
          </MDBBtn>
        </MDBBtnGroup>
      </div>

      <MDBRow>
        <MDBCol md="3">
          <MDBCard>
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Hobby</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $12
                <small className="text-muted" style={{ fontSize: "18px" }}>
                  /mo
                </small>
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Hobby
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Freelancer</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $20
                <small className="text-muted" style={{ fontSize: "18px" }}>
                  /mo
                </small>
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Freelancer
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Startup</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $40
                <small className="text-muted" style={{ fontSize: "18px" }}>
                  /mo
                </small>
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Startup
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3">
          <MDBCard border="dark">
            <MDBCardBody className="mx-2">
              <MDBCardTitle className="my-2">Enterprise</MDBCardTitle>
              <p className="text-muted">
                All the essentials for starting a business
              </p>
              <p className="h2 fw-bold">
                $55
                <small className="text-muted" style={{ fontSize: "18px" }}>
                  /mo
                </small>
              </p>
              <MDBBtn
                href="#"
                color="dark"
                className="d-block mb-2 mt-3 text-capitalize"
              >
                Buy Enterprise
              </MDBBtn>
            </MDBCardBody>

            <MDBCardFooter>
              <p
                className="text-uppercase fw-bold"
                style={{ fontSize: "12px" }}
              >
                What's included
              </p>

              <MDBTypography listUnStyled className="mb-0 px-4">
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
                <li className="mb-3">
                  <MDBIcon fas icon="check" className="text-success me-3" />
                  <small>Lorem Ipsum</small>
                </li>
              </MDBTypography>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Button variant="dark" className='btnBack-2' > <Link style={{ textDecoration: 'none', color:'white' }} to={`/`}> Back </Link>    </Button>

        </div>
    )
}

export default Pricing