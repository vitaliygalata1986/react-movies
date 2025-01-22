import React from 'react';

function Button({ clickCallback, children, setPageCount, movies = [] }) {
  return (
    <>
      <button className='btn'>{children}</button>
    </>
  );
}

export { Button };
