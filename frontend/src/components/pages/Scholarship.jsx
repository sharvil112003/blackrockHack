import React, { useState } from 'react'
import scholarshipData from '../../data/scholarshipData'
import './scholarship.css'

const scholarship = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [incomeFilter, setIncomeFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('All States');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleIncomeFilter = (event) => {
        setIncomeFilter(event.target.value);
    };

    const handleStateFilter = (event) => {
        setStateFilter(event.target.value);
    };

    const filteredscholarships = scholarshipData.filter(scholarship => {
        return (
            scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (incomeFilter === '' || scholarship.income_threshold <= parseInt(incomeFilter)) &&
            (stateFilter === 'All States' || scholarship.states.includes(stateFilter))
        );
    });

    return (
        <div className="container">
            <h1>Scholarships for Students</h1>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <select value={incomeFilter} onChange={handleIncomeFilter}>
                    <option value="">Select Income</option>
                    <option value="150000">Less than 150,000</option>
                    <option value="200000">Less than 200,000</option>
                    <option value="250000">Less than 250,000</option>
                </select>
                <select value={stateFilter} onChange={handleStateFilter}>
                    <option value="All States">All States</option>
                    {Array.from(new Set(scholarshipData.flatMap(s => s.states)))
                        .map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                </select>
            </div>
            <div>
                {filteredscholarships.length > 0 ? (
                    filteredscholarships.map(scholarship => (
                        <div key={scholarship.id} className="scholarship-card">
                            <h2>{scholarship.name}</h2>
                            <p>{scholarship.description}</p>
                            <p><strong>Eligibility:</strong> {scholarship.eligibility_criteria}</p>
                            <p><strong>Benefits:</strong> {scholarship.benefits}</p>
                            <p><strong>Income Threshold:</strong> {scholarship.income_threshold}</p>
                            <p><strong>States:</strong> {scholarship.states.join(', ')}</p>
                            <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                                <button>Apply Now</button>
                            </a>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No scholarships match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default scholarship;