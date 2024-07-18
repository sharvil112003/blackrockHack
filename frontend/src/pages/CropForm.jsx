import React, { useState } from "react";
import axios from "axios";
import "../components/componentCSS/CropForm.css";
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
      <h2>Crop Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="N">N:</label>
        <input
          type="text"
          name="N"
          placeholder="N"
          id="N"
          onChange={handleChange}
          value={formData.N}
        />
        <label htmlFor="P">P:</label>
        <input
          type="text"
          name="P"
          placeholder="P"
          id="P"
          onChange={handleChange}
          value={formData.P}
        />
        <label htmlFor="K">K:</label>
        <input
          type="text"
          name="K"
          placeholder="K"
          id="K"
          onChange={handleChange}
          value={formData.K}
        />
        <label htmlFor="temperature">Temperature:</label>
        <input
          type="text"
          name="temperature"
          placeholder="Temperature"
          id="temperature"
          onChange={handleChange}
          value={formData.temperature}
        />
        <label htmlFor="humidity">Humidity:</label>
        <input
          type="text"
          name="humidity"
          placeholder="Humidity"
          id="humidity"
          onChange={handleChange}
          value={formData.humidity}
        />
        <label htmlFor="ph">pH:</label>
        <input
          type="text"
          name="ph"
          placeholder="pH"
          id="ph"
          onChange={handleChange}
          value={formData.ph}
        />
        <label htmlFor="rainfall">Rainfall:</label>
        <input
          type="text"
          name="rainfall"
          placeholder="Rainfall"
          id="rainfall"
          onChange={handleChange}
          value={formData.rainfall}
        />
        <button className="mb-4" type="submit">
          Predict Crop
        </button>
      </form>
      {predictedCrop && <p>Predicted Crop: {predictedCrop}</p>}
    </div>
  );
}

export default CropForm;