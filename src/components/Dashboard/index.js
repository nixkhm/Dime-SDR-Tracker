import "./index.scss";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardFooter,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <MDBCard className="tickets">
          <MDBCardBody>
            <MDBCardTitle className="tiktitle">My Open Requests</MDBCardTitle>
            <MDBCardText className="ticket">
              SDR #106695 - Connection to printer requested in branch
            </MDBCardText>
            <MDBCardText className="ticket">
              SDR #106660 - Please install Microsoft Access onto 5273-PC
            </MDBCardText>
            <MDBCardText className="ticket">
              SDR #106540 - Backup battery needs to be replaced
            </MDBCardText>
            <MDBCardText className="response">
              You have two requests awaiting response
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/tickets" className="button">
              Go to Requests
            </Link>
          </MDBCardFooter>
        </MDBCard>

        <MDBCard className="submit">
          <MDBCardBody>
            <MDBCardTitle className="tiktitle">Submit a Request</MDBCardTitle>
          </MDBCardBody>
          <div className="buttonContainer">
            <MDBCardFooter>
              <Link to="/contact" className="button">
                Create a Request
              </Link>
            </MDBCardFooter>
          </div>
        </MDBCard>
      </div>
    </>
  );
};

export default Dashboard;
