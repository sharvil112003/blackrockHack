import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../components/componentCSS/AuthModal.css'; // Assuming you have a CSS file for styling

const AuthModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    const [landLocation, setLandLocation] = useState('');
    const [landArea, setLandArea] = useState('');
    const [landDesc, setLandDesc] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform client-side validation
        if (!name.trim() || !mobileNum.trim() || !landLocation.trim() || !landArea.trim() || !landDesc.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (!/^\d{10}$/.test(mobileNum)) {
            toast.error('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Prepare data for sending to backend
        const formData = {
            name,
            mobileNum,
            landLocation,
            landArea,
            landDesc
        };

        try {
            const response = await fetch('http://localhost:5000/api/landDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json();
            toast.success(responseData.message);
            // Reset form fields after submission if needed
            setName('');
            setMobileNum('');
            setLandLocation('');
            setLandArea('');
            setLandDesc('');
            onClose(); // Close the modal after submission
        } catch (error) {
            toast.error('Error saving form data. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="mobileNum">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobileNum"
                        value={mobileNum}
                        onChange={(e) => setMobileNum(e.target.value)}
                        required
                    />
                    <label htmlFor="landLocation">Land Location:</label>
                    <input
                        type="text"
                        id="landLocation"
                        value={landLocation}
                        onChange={(e) => setLandLocation(e.target.value)}
                        required
                    />
                    <label htmlFor="landArea">Land Area:</label>
                    <input
                        type="number"
                        id="landArea"
                        value={landArea}
                        onChange={(e) => setLandArea(e.target.value)}
                        required
                    />
                    <label htmlFor="landDesc">Land Description:</label>
                    <textarea
                        id="landDesc"
                        value={landDesc}
                        onChange={(e) => setLandDesc(e.target.value)}
                        required
                    />
                    <div className="button-group">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
