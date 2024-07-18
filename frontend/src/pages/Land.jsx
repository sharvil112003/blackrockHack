import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/componentCSS/Land.css'; // Ensure you have the appropriate CSS file for styling
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.jpg'
import AuthModal from '../components/AuthModal';
import { ToastContainer } from 'react-toastify';

const Land = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <ToastContainer />
            <div>
                <AuthModal isOpen={modalOpen} onClose={closeModal} />
            </div>
            <div className="instruction-container">
                <p className="instruction-text">Please read all the instructions and precautions carefully.</p>
            </div>
            <section className="card-container">

                <div className="card-main">
                    <div className="card-img">
                        <img src={img1} alt="Card" />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Lend/Rent My Land</h3>
                        <p className="card-description">
                            Offer your farmland for lease to other farmers on a contract basis.<br />Help fellow farmers while earning rental income.
                        </p>
                        <ul className="card-list">
                            <li>Provide details about your land including size, location, and any specific terms or conditions.</li>
                            <li>Set the rental price and contract duration.</li>
                            <li>Submit your listing for other farmers to view and contact you.</li>
                        </ul>
                        <button onClick={openModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">I Am Ready to Lend My Land.</button>
                    </div>
                </div>

                <div className="card-main">
                    <div className="card-img">
                        <img src={img2} alt="Card" />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Lease Land for Farming</h3>
                        <p className="card-description">
                            Find available farmland to lease for your agricultural activities. <br />Expand your farming operations with ease.
                        </p>
                        <ul className="card-list">
                            <li>Browse listings to find suitable land for your needs.</li>
                            <li>Contact the landowner to discuss terms and conditions.</li>
                            <li>Finalize the lease agreement and start farming on the leased land.</li>
                        </ul>
                        <button type="button" onClick={()=>{ navigate('/leaseland')}} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Lease Land</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Land;
