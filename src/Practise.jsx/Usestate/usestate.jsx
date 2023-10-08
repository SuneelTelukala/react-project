import React, { useState } from 'react';

export function Example() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You clicked {count} time(s).</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}