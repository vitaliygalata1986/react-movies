import React from 'react';
import cn from 'classnames';

function Button({ clickCallback, children, className }) {
  return (
    <>
     className={cn(styles['button'], styles['accent'], className)}
        {children}
      </button>
    </>
  );
}

export { Button };
