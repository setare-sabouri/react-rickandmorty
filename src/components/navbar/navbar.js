import portalImg from "../../Assets/portal.png";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink to="/" className="navbar-brand">
        <img src={portalImg} width="50" height="50" alt=""></img>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink to="/Home" className="nav-link">
          Characters
        </NavLink>
        <NavLink to="/episodes" className="nav-link">
          Episode
        </NavLink>
        <NavLink to="/Location" className="nav-link">
          Locations
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
