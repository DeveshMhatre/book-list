import React from 'react';
import { Icon, InlineIcon  } from '@iconify/react';
import themeLightDark from '@iconify/icons-mdi/theme-light-dark';

const Header = props => {

  return (
    <>

      <header className="header">
        <h1 className="header__title">My Reading List</h1>
        <button
          title="Change the theme"
          className="header__btn nav-btn"
          onClick={props.handleClick}>
          <Icon
            icon={themeLightDark}
            className="header__img" />
        </button>
      </header>

    </>
  );
}

export default Header;
