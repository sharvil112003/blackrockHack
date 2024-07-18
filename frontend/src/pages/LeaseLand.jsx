import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/componentCSS/LeaseLand.css'; // Assuming you have a CSS file for styling

const LeaseLand = () => {
    const [landDetails, setLandDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLocation, setFilterLocation] = useState('');
    const [filterSize, setFilterSize] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/landDetails');
                setLandDetails(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Filter and search logic
    const filteredLandDetails = landDetails.filter(land => {
        const matchesSearchTerm = land.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = filterLocation ? land.landLocation.toLowerCase() === filterLocation.toLowerCase() : true;
        const matchesSize = filterSize ? parseInt(land.landArea) === parseInt(filterSize) : true;
        return matchesSearchTerm && matchesLocation && matchesSize;
    });

    return (
        <div className="lease-land">
            <h1>Lease Land</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
                    <option value="">Filter by location</option>
                    {/* Add options dynamically based on available locations */}
                    {Array.from(new Set(landDetails.map(land => land.landLocation))).map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <select value={filterSize} onChange={(e) => setFilterSize(e.target.value)}>
                    <option value="">Filter by size (hectares)</option>
                    {/* Add options dynamically based on available land sizes */}
                    {Array.from(new Set(landDetails.map(land => land.landArea))).map(size => (
                        <option key={size} value={size}>{size} hectares</option>
                    ))}
                </select>
            </div>
            <table className="land-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Land Location</th>
                        <th>Land Area (hectares)</th>
                        <th>Land Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLandDetails.map((land, index) => (
                        <tr key={index}>
                            <td>{land.name}</td>
                            <td>{land.mobileNum}</td>
                            <td>{land.landLocation}</td>
                            <td>{land.landArea}</td>
                            <td>{land.landDesc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaseLand;
