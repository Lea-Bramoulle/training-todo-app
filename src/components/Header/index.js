/* eslint-disable global-require */
import './header.scss';

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar-container">
        <h1 className="navbar-container--logo">TODO</h1>
        <div className="navbar-container--img">
          <img src={require('../../../images/icon-moon.svg')} alt="background ToDo App" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
