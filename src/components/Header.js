import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ThemeSwitch } from '../images/theme-switch.svg';

const Header = props => {
  const nodeRef = React.useRef(null);

  return (
    <>

      <header className="header">
        <h1 className="header__title">Reading List</h1>
        <button
          className="header__btn nav-btn"
          onClick={props.handleClick}>

          <CSSTransition
            nodeRef={nodeRef}
            in={props.theme === 'light' ? true : false}
            classNames="rotate"
            timeout={300}>
            <ThemeSwitch
              ref={nodeRef}
              className="header__img" />
          </CSSTransition>

        </button>
      </header>

    </>
  );
}

export default Header;
