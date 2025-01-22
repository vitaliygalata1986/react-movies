import React from 'react';
import cn from 'classnames';

function Button({ clickCallback, children, className }) {
  return (
    <>
     <button className={cn('ntm', styles['accent'], className)}
        {children}
      </button>
    </>
  );
}

export { Button };
