// import React, { useState } from "react";
// import axios from "axios";

// function CropForm() {
//   const [formData, setFormData] = useState({
//     N: "",
//     P: "",
//     K: "",
//     temperature: "",
//     humidity: "",
//     ph: "",
//     rainfall: "",
//   });

//   const [predictedCrop, setPredictedCrop] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/predict",
//         formData
//       );
//       setPredictedCrop(response.data.predicted_crop);
//     } catch (error) {
//       console.error("Error predicting crop:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Crop Recommendation</h2>
//       <form onSubmit={handleSubmit}>
//         <label>N:</label>
//         <input
//           type="text"
//           name="N"
//           onChange={handleChange}
//           value={formData.N}
//         />
//         <br />

//         <label>P:</label>
//         <input
//           type="text"
//           name="P"
//           onChange={handleChange}
//           value={formData.P}
//         />
//         <br />

//         <label>K:</label>
//         <input
//           type="text"
//           name="K"
//           onChange={handleChange}
//           value={formData.K}
//         />
//         <br />

//         <label>Temperature:</label>
//         <input
//           type="text"
//           name="temperature"
//           onChange={handleChange}
//           value={formData.temperature}
//         />
//         <br />

//         <label>Humidity:</label>
//         <input
//           type="text"
//           name="humidity"
//           onChange={handleChange}
//           value={formData.humidity}
//         />
//         <br />

//         <label>pH:</label>
//         <input
//           type="text"
//           name="ph"
//           onChange={handleChange}
//           value={formData.ph}
//         />
//         <br />

//         <label>Rainfall:</label>
//         <input
//           type="text"
//           name="rainfall"
//           onChange={handleChange}
//           value={formData.rainfall}
//         />
//         <br />

//         <button type="submit">Predict Crop</button>
//       </form>
//       {predictedCrop && <p>Predicted Crop: {predictedCrop}</p>}
//     </div>
//   );
// }

// export default CropForm;

import React, { useState } from "react";
import axios from "axios";
import "./CropForm.css"; // Import your custom CSS file for styling

function CropForm() {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [predictedCrop, setPredictedCrop] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      setPredictedCrop(response.data.predicted_crop);
    } catch (error) {
      console.error("Error predicting crop:", error);
    }
  };

  return (
    <div className="crop-form-container">
      <h>Crop Recommendation</h>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Nitogen:</label>
          <input
            type="text"
            name="N"
            onChange={handleChange}
            value={formData.N}
          />
        </div>

        <div className="mb-4">
          <label>Phosphorus:</label>
          <input
            type="text"
            name="P"
            onChange={handleChange}
            value={formData.P}
          />
        </div>

        <div className="mb-4">
          <label>Potassium:</label>
          <input
            type="text"
            name="K"
            onChange={handleChange}
            value={formData.K}
          />
        </div>

        <div className="mb-4">
          <label>Temperature:</label>
          <input
            type="text"
            name="temperature"
            onChange={handleChange}
            value={formData.temperature}
          />
        </div>

        <div className="mb-4">
          <label>Humidity:</label>
          <input
            type="text"
            name="humidity"
            onChange={handleChange}
            value={formData.humidity}
          />
        </div>

        <div className="mb-4">
          <label>pH:</label>
          <input
            type="text"
            name="ph"
            onChange={handleChange}
            value={formData.ph}
          />
        </div>

        <div className="mb-4">
          <label>Rainfall:</label>
          <input
            type="text"
            name="rainfall"
            onChange={handleChange}
            value={formData.rainfall}
          />
        </div>

        <button className="mb-4" type="submit">
          Predict Crop
        </button>
      </form>
      {predictedCrop && <p>Predicted Crop: {predictedCrop}</p>}
    </div>
  );
}

export default CropForm;
