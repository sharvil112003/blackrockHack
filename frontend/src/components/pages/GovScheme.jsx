import React, { useState, useEffect } from "react";
import schemeData from '../../data/schemeData'; // Assuming schemeData.jsx is in the correct path
import "./GovScheme.css"; // Import your CSS file for styling

const GovScheme = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByState, setSortByState] = useState("");
  const [uniqueStates, setUniqueStates] = useState([]);

  useEffect(() => {
    // Extract unique states from schemeData
    const states = schemeData.reduce((acc, curr) => {
      if (!acc.includes(curr.state)) {
        acc.push(curr.state);
      }
      return acc;
    }, []);
    setUniqueStates(states);
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle state dropdown change
  const handleStateChange = (e) => {
    setSortByState(e.target.value);
  };

  // Filtered and sorted schemes based on search and state selection
  const filteredSchemes = schemeData.filter((scheme) =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase())
    && (sortByState === "" || scheme.state === sortByState) // Apply state filter here
  ).sort((a, b) => {
    if (sortByState === "All") return 0;
    if (a.state < b.state) return -1;
    if (a.state > b.state) return 1;
    return 0;
  });

  return (
    <div className="gov-scheme-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by scheme name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select onChange={handleStateChange} value={sortByState}>
          <option value="">Sort by state</option>
          {uniqueStates.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>
      <div className="scheme-list">
        {filteredSchemes.map((scheme) => (
          <div className="scheme-card" key={scheme.id}>
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
            <p><strong>Benefits:</strong> {scheme.benefits}</p>
            <p><strong>State:</strong> {scheme.state}</p>
            <a href={scheme.applicationlink} target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovScheme;
