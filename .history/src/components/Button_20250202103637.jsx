import React from 'react';
import cn from 'classnames';

function Button({ clickCallback, children, className }) {
  return (
    <>
      <button onClick={clickCallback} className={cn('btn', className)}>
        {children}
      </button>
    </>
  );
}

export { Button };
