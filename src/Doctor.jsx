import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './config/Firebase';
import { collection, addDoc } from 'firebase/firestore';

const Doctor = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [schedule, setSchedule] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const doctorData = {
        name,
        specialization,
        contactInfo,
        schedule,
        startTime,
        endTime,
        available: isAvailable,
      };

      // Add data to Firestore
      const doctorsCollection = collection(db, 'DoctorID');
      await addDoc(doctorsCollection, doctorData);

      // Clear form after submission
      setName('');
      setSpecialization('');
      setContactInfo('');
      setSchedule('');
      setStartTime('');
      setEndTime('');
      setIsAvailable(true);
      
      alert('Doctor information saved successfully!');
      navigate('/'); // Navigate after successful submission
    } catch (error) {
      console.error("Error saving doctor information: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 p-4 pt-20">
      <h2 className="text-2xl font-bold mb-6 text-white">Doctor Login Form</h2>
      <form onSubmit={handleSubmit} className="bg-green-200 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Doctor's Name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Specialization</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            placeholder="Specialization"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contact Info</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Contact Information"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Schedule</label>
          <input
            type="text"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            placeholder="Schedule (e.g., Mon-Fri)"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Available</label>
          <select
            value={isAvailable}
            onChange={(e) => setIsAvailable(e.target.value === 'true')}
            className="w-full p-2 border rounded"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Doctor;
