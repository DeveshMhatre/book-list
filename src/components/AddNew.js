import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Add } from '../images/add.svg';

const AddNew = props => {
  // To avoid the findDOMNode warning
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={!(props.isInputOverlay || props.isUpdateOverlay)}
      classNames='scale'
      timeout={300}>
      <button
        ref={nodeRef}
        title="Add a new book"
        className="add-new__btn add-btn"
        onClick={props.handleOverlay}>
        <Add className="add-new__btn--img" />
      </button>
    </CSSTransition>
  );
}

export default AddNew;
