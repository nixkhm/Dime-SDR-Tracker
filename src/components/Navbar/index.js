import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/imgs/dime.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faComments,
  faHome,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img className="log" src={Logo} alt="dime-logo" to="/"></img>
    </Link>
    <h1>Technology & Support SDR Tracker</h1>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#b5c428" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="tickets-link"
        to="/tickets"
      >
        <FontAwesomeIcon icon={faTicket} color="#b5c428" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faComments} color="#b5c428" />
      </NavLink>
    </nav>
  </div>
);

export default Navbar;
