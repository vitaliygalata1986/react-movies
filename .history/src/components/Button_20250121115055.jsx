import React from 'react';

function Button({ clickCallback, children, setPageCount, movies = [] }) {
  return (
    <>

        <button
          className="btn"
          onClick={() => clickCallback(setPageCount((prev) => (prev += 1)))}
        >
          {children}
        </button>
      ) : null}
    </>
  );
}

export { Button };
