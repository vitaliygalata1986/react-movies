import React from 'react';
import cn from 'classnames';

function Button({ clickCallback, children, className }) {
  return (
    <>
     <button className={cn('button'], styles['accent'], className)}
        {children}
      </button>
    </>
  );
}

export { Button };
