import React from 'react';
import './App.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';

function App() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <div className="header pt-3 peach-gradient">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="white-text mb-3 pt-3 font-weight-bold"> Sign Up </h3>
              </MDBRow>
            </div>

            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your name" group type="text" validate />
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput label="Your password" group type="password" validate />
              <MDBInput label="Age" group type="number" validate />
              <MDBInput label="Gender" group type="text" validate />
              <MDBInput label="Marital Status" group type="text" validate />
              <MDBInput label="Occupation" group type="text" validate />
              <MDBInput label="Nationality" group type="text" validate />
              
              <p className="font-small grey-text d-flex justify-content-center">
                <a href="#!" className="dark-grey-text ml-1 font-weight-bold" > Forgot Password? </a>
              </p>

              <div className="text-center">
                <MDBBtn color="grey" rounded type="button" className="z-depth-1a" > Sign Up </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
