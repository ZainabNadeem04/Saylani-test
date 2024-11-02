
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/Firebase";
import { Link } from "react-router-dom";

const Patient = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    contact: "",
    medHistory: "",
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "PatientID"), patientData);
      alert("Patient data added successfully!");
      setPatientData({ name: "", contact: "", medHistory: "" });
    } catch (error) {
      console.error("Error adding patient data: ", error);
    }
  };

  return (
    <>
      <div className="bg-green-900 pt-40 h-full">
        <div className="max-w-lg mx-auto p-4 bg-green-200">
          <h2 className="text-2xl font-semibold text-center mb-6 text-green-900">Add Patient</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={patientData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="contact">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={patientData.contact}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="medHistory">
                Medical History
              </label>
              <textarea
                id="medHistory"
                name="medHistory"
                value={patientData.medHistory}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Add Patient
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/" className="text-black text-2xl  underline">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
