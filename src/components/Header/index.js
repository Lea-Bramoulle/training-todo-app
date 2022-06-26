/* eslint-disable global-require */
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeMode } from 'src/store/action';

import './header.scss';

function Header() {
  const dispatch = useDispatch();
  const lightMode = useSelector((state) => state.themeMode);

  return (
    <header className="header-container">
      <nav className="navbar-container">
        <h1 className="navbar-container--logo">TODO</h1>
        <div className="navbar-container--img" onClick={() => dispatch(changeThemeMode())}>
          {
            lightMode === 'light'
            ? <img src={require('../../../images/icon-moon.svg')} alt="background ToDo App" />
            : <img src={require('../../../images/icon-sun.svg')} alt="background ToDo App" />
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
