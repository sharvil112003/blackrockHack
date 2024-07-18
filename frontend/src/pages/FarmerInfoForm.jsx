import React, { useState } from 'react';
import axios from 'axios';

const FarmerInfoForm = ({ onSubmit }) => {
  const [farmerInfo, setFarmerInfo] = useState({
    name: '',
    investmentAmount: '',
    riskTolerance: '',
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerInfo({ ...farmerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/predict', {
      investment_amount: farmerInfo.investmentAmount,
      risk_tolerance: farmerInfo.riskTolerance,
    });
    setRecommendation(response.data.recommendation);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={farmerInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Investment Amount:</label>
          <input
            type="number"
            name="investmentAmount"
            value={farmerInfo.investmentAmount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Risk Tolerance:</label>
          <select
            name="riskTolerance"
            value={farmerInfo.riskTolerance}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="conservative">Conservative</option>
            <option value="moderate">Moderate</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </div>
        <button type="submit">Get Recommendations</button>
      </form>
      {recommendation && (
        <div>
          <h2>Recommended Stock/Fund: {recommendation}</h2>
        </div>
      )}
    </div>
  );
};

export default FarmerInfoForm;
