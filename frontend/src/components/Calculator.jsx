import React, { useState } from 'react';
import './componentCSS/Calculator.css';

const Calculator = () => {
  const [investment, setInvestment] = useState('');
  const [returnRate, setReturnRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateReturns = () => {
    const result = investment * Math.pow(1 + returnRate / 100, years);
    setResult(result);
  };

  return (
    <div className="calculator-container">
      <h1>Investment Calculator</h1>
      <input
        type="number"
        placeholder="Investment Amount"
        value={investment}
        onChange={(e) => setInvestment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Annual Return Rate (%)"
        value={returnRate}
        onChange={(e) => setReturnRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of Years"
        value={years}
        onChange={(e) => setYears(e.target.value)}
      />
      <button onClick={calculateReturns}>Calculate</button>
      {result && <p>Estimated Returns: {result.toFixed(2)}</p>}
    </div>
  );
};

export default Calculator;
