import "./topbar.scss";
import avt from "../../asset/images/avt.jpg";
import { Link, NavLink } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className=" top-left-icon fa-brands fa-facebook-square"></i>
        <i className="top-left-icon fa-brands fa-twitter-square"></i>
        <i className="top-left-icon fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li>
            <NavLink className="top-list-item" to="/" href="" exact={true}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="top-list-item"
              to="/about"
              activeClassName="active"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="top-list-item"
              to="/contact"
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="top-list-item"
              to="/write"
              activeClassName="active"
            >
              WRITE
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <img src={avt} alt="my avatar" />
        <i className=" top-right-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
