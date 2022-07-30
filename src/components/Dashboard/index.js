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
              SDR #106672 - Conection to Printer Needed
            </MDBCardText>
            <MDBCardText className="ticket">
              SDR #106689 - Need to have Microsoft Access added to machine
            </MDBCardText>
            <MDBCardText className="ticket">
              SDR #106695 - Backup Battery needs to be replaced
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

        <MDBCard className="progress">
          <MDBCardBody>
            <MDBCardTitle className="tiktitle">
              Progress of My Requests
            </MDBCardTitle>
            <MDBCardText className="open">3 Requests Open</MDBCardText>
            <MDBCardText className="hold">2 Request on Hold</MDBCardText>
            <MDBCardText className="completed">
              24 Requests Completed
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/progress" className="button">
              Go to Progress
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
