import React from 'react';

function Button({ clickCallback, children, setPageCount, movies = [] }) {
  return (
    <>{movies.length ? <button className='btn'>{children}</button> : null}</>
  );
}

export { Button };
