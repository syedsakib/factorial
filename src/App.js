import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const Factorial = (n) => {
    var ans = 1;
    for (var i = 2; i <= n; i++) ans = ans * i;
    return ans;
  };

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (number < 0) {
      alert(' input must be greater than or equal to 0');
      setNumber(0);
      return;
    }

    setResult(Factorial(number));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form>
        <input
          type='number'
          placeholder='Enter a number...'
          value={number}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Calculate Factorial</button>
      </form>
      <h2>Factorial: {result}</h2>
    </div>
  );
}
