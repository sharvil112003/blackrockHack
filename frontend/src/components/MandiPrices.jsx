import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MandiPrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const apiKey = '579b464db66ec23bdd0000017d72d78d4fcc4b856c37415a08163429'; 
      const url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';
      const params = {
        'api-key': apiKey,
        'format': 'json',
        'offset': 0,
        'limit': 100, // Adjust the limit as needed
      };

      try {
        const response = await axios.get(url, { params });
        console.log('API response:', response.data.records); // Log the response data
        console.log(response.data)
        setPrices(response.data.records);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err); // Log the error
        setError(err);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Mandi Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Commodity</th>
            <th>Market</th>
            <th>State</th>
            <th>Min Price</th>
            <th>Max Price</th>
            <th>Modal Price</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price, index) => (
            <tr key={index}>
              <td>{price.commodity}</td>
              <td>{price.market}</td>
              <td>{price.state}</td>
              <td>{price.min_price}</td>
              <td>{price.max_price}</td>
              <td>{price.modal_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MandiPrices;
