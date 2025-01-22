import React from 'react';

function Button({ clickCallback, children }) {
  return (
    <>
      {movies.length ? (
        <button
          className='btn'
          onClick={() => clickCallback()}
        >
          {children}
        </button>
      ) : null}
    </>
  );
}

export { Button };
