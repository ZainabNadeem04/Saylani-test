import React, { useEffect, useState } from 'react';
import { db } from './config/Firebase'; // Adjust the import according to your Firebase config file
import { collection, getDocs } from 'firebase/firestore';
import { Link } from "react-router-dom";

const Appoiment = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsSnapshot = await getDocs(collection(db, 'Doctor'));
        const doctorsData = doctorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-green-900 pt-20">
      <h2 className="text-2xl font-bold mb-6 text-white">Doctors List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Contact:</strong> {doctor.contactInfo}</p>
            <p><strong>Schedule:</strong> {doctor.schedule}</p>
            <p><strong>Available:</strong> {doctor.available ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
            <Link to="/" className="text-white text-2xl underline">
              Go Back
            </Link>
          </div>
    </div>
  );
};

export default Appoiment;

