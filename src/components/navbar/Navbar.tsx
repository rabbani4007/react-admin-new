import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
          <span>mgr admin</span>
        </Link>
      </div>
      <div className="icons">
        <img src="/search.svg" className="icon" alt="" />
        <img src="/app.svg" className="icon" alt="" />
        <img src="/expand.svg" className="icon" alt="" />
        <div className="notification">
          <img src="/notifications.svg" className="icon" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://rabbani4007.github.io/portfolio/images/home.jpg"
            className="icon"
            alt=""
          />
          <span>Rabbani</span>
        </div>
        <img src="settings.svg" className="icon" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
