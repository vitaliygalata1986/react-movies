import React from 'react';

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
