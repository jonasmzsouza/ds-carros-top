import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container">
        <Link to={'/'} className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarrostop-navbar"
          aria-controls="dscarrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscarrostop-navbar">
          <ul className="navbar-nav ms-md-auto main-menu">
            <li>
              <NavLink to={'/'} activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={'/cars'} activeClassName="active">
                CATÁLOGO
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
