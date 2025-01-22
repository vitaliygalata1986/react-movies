import React from 'react';

function Button({ clickCallback, children, className }) {
  return (
    <>
      <button className='btn' onClick={clickCallback}>
        {children}
      </button>
    </>
  );
}

export { Button };
