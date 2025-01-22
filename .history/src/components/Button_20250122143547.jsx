import React from 'react';
import cn from 'classnames';

function Button({ clickCallback, children, className }) {
  return (
    <>
      <button className={className} onClick={clickCallback}>
        {children}
      </button>
    </>
  );
}

export { Button };
