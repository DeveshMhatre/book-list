import React from 'react';

import { ReactComponent as Add } from '../images/add.svg';

const AddNew = props => {
  // Hide when input overlay is active
  if (!props.isOverlay) {
    return (
      <>
        <button
          className="add-new__btn add-btn"
          onClick={props.handleOverlay}>
          <Add className="add-new__btn--img" />
        </button>
      </>
    );
  }

  else {
    return(
      <>
      </>
    );
  }
}

export default AddNew;
