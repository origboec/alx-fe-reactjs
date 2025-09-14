import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial count = 0

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Simple Counter App</h2>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
