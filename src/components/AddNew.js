import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Add } from '../images/add.svg';

const AddNew = props => {
  // To avoid the findDOMNode warning
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={!props.isOverlay}
      classNames='scale'
      timeout={300}>
      <button
        ref={nodeRef}
        className="add-new__btn add-btn"
        onClick={props.handleOverlay}>
        <Add className="add-new__btn--img" />
      </button>
    </CSSTransition>
  );
}

export default AddNew;
