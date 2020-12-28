import React from 'react';

import { ReactComponent as ThemeSwitch } from '../images/theme-switch.svg';

const Header = props => {
  return (
    <>

      <header className="header">
        <h1 className="header__title">Reading List</h1>
        <button
          className="header__btn nav-btn">
          <ThemeSwitch className="header__img" />
        </button>
      </header>

    </>
  );
}

export default Header;
