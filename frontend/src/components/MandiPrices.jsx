import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/componentCSS/MandiPrices.css";

// const MandiPrices = () => {
//   const [prices, setPrices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPrices = async () => {
//       const apiKey = "579b464db66ec23bdd0000017d72d78d4fcc4b856c37415a08163429";
//       const url =
//         "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";
//       const params = {
//         "api-key": apiKey,
//         format: "json",
//         offset: 0,
//         limit: 100, // Adjust the limit as needed
//       };

//       try {
//         const response = await axios.get(url, { params });
//         console.log("API response:", response.data); // Log the entire response data

//         if (response.data && response.data.records) {
//           setPrices(response.data.records);
//         } else {
//           console.error("Unexpected response structure:", response.data);
//           setError(new Error("Unexpected response structure"));
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPrices();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data: {error.message}</p>;

//   return (
//     <div>
//       <h1>Mandi Prices</h1>
//       <table className="mandi-prices-table">
//         <thead>
//           <tr>
//             <th>Commodity</th>
//             <th>Market</th>
//             <th>State</th>
//             <th>Min Price</th>
//             <th>Max Price</th>
//             <th>Modal Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {prices.map((price, index) => (
//             <tr key={index}>
//               <td>{price.commodity}</td>
//               <td>{price.market}</td>
//               <td>{price.state}</td>
//               <td>{price.min_price}</td>
//               <td>{price.max_price}</td>
//               <td>{price.modal_price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MandiPrices;

const MandiPrices = () => {
  const [prices, setPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMarket, setFilterMarket] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterPriceRange, setFilterPriceRange] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      const apiKey = "579b464db66ec23bdd0000017d72d78d4fcc4b856c37415a08163429";
      const url =
        "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";
      const params = {
        "api-key": apiKey,
        format: "json",
        offset: 0,
        limit: 100, // Adjust the limit as needed
      };

      try {
        const response = await axios.get(url, { params });
        console.log("API response:", response.data); // Log the entire response data

        if (response.data && response.data.records) {
          setPrices(response.data.records);
          setFilteredPrices(response.data.records); // Initialize filtered prices with all data
        } else {
          console.error("Unexpected response structure:", response.data);
          setError(new Error("Unexpected response structure"));
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  // Get unique markets and states from prices
  const uniqueMarkets = [...new Set(prices.map((price) => price.market))];
  const uniqueStates = [...new Set(prices.map((price) => price.state))];

  // Filter function based on search term, market, state, and price range
  useEffect(() => {
    let filteredData = [...prices];

    // Filter by search term (commodity)
    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        item.commodity.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by market
    if (filterMarket !== "") {
      filteredData = filteredData.filter(
        (item) => item.market.toLowerCase() === filterMarket.toLowerCase()
      );
    }

    // Filter by state
    if (filterState !== "") {
      filteredData = filteredData.filter(
        (item) => item.state.toLowerCase() === filterState.toLowerCase()
      );
    }

    // Filter by price range
    if (filterPriceRange !== "") {
      switch (filterPriceRange) {
        case "1000-5000":
          filteredData = filteredData.filter(
            (item) =>
              parseInt(item.modal_price) >= 1000 &&
              parseInt(item.modal_price) <= 5000
          );
          break;
        case "6000-10000":
          filteredData = filteredData.filter(
            (item) =>
              parseInt(item.modal_price) >= 6000 &&
              parseInt(item.modal_price) <= 10000
          );
          break;
        case "11000-15000":
          filteredData = filteredData.filter(
            (item) =>
              parseInt(item.modal_price) >= 11000 &&
              parseInt(item.modal_price) <= 15000
          );
          break;
        default:
          break;
      }
    }

    console.log("Filtered data:", filteredData); // Log filtered data
    setFilteredPrices(filteredData);
  }, [searchTerm, filterMarket, filterState, filterPriceRange, prices]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMarketChange = (event) => {
    setFilterMarket(event.target.value);
  };

  const handleStateChange = (event) => {
    setFilterState(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setFilterPriceRange(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <h1>Mandi Prices</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by commodity..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="filter-input"
        />
        <select
          value={filterMarket}
          onChange={handleMarketChange}
          className="filter-select"
        >
          <option value="">Select Market</option>
          {uniqueMarkets.map((market, index) => (
            <option key={index} value={market}>
              {market}
            </option>
          ))}
        </select>
        <select
          value={filterState}
          onChange={handleStateChange}
          className="filter-select"
        >
          <option value="">Select State</option>
          {uniqueStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          value={filterPriceRange}
          onChange={handlePriceRangeChange}
          className="filter-select"
        >
          <option value="">Select Price Range</option>
          <option value="1000-5000">1000-5000</option>
          <option value="6000-10000">6000-10000</option>
          <option value="11000-15000">11000-15000</option>
        </select>
      </div>
      <table className="mandi-prices-table">
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
          {filteredPrices.map((price, index) => (
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
