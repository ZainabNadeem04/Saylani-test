

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './config/Firebase';
import { collection, getDocs, onSnapshot, doc, addDoc } from 'firebase/firestore';

const Setapp = () => {
  const navo = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    title: '',
    patientId: '',
    note: '',
    date: '',
  });

  // Fetch data from DoctorID collection
  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorsSnapshot = await getDocs(collection(db, 'DoctorID'));
        const doctorsData = doctorsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Fetch appointments for the selected doctor
  useEffect(() => {
    if (selectedDoctor) {
      const unsubscribe = onSnapshot(doc(db, 'DoctorID', selectedDoctor.id), (docSnapshot) => {
        if (docSnapshot.exists()) {
          setAppointments(docSnapshot.data().appointments || []);
        }
      });

      return () => unsubscribe();
    }
  }, [selectedDoctor]);

  const handleDoctorSelect = (doctorId) => {
    const doctor = doctors.find(doc => doc.id === doctorId);
    setSelectedDoctor(doctor);
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    if (newAppointment.title && newAppointment.patientId && newAppointment.date) {
      try {
        const doctorRef = doc(db, 'DoctorID', selectedDoctor.id);
        await addDoc(collection(doctorRef, 'appointments'), newAppointment);
        setNewAppointment({ title: '', patientId: '', note: '', date: '' });
        alert('Appointment added successfully!'); // User feedback
      } catch (error) {
        console.error("Error adding appointment: ", error);
      }
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-green-900 pt-20">
      <h2 className="text-2xl font-bold mb-6 text-white">Doctors and Appointments</h2>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Select a Doctor:</h3>
        <select
          onChange={(e) => handleDoctorSelect(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">--Select Doctor--</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialization}
            </option>
          ))}
        </select>
      </div>

      {selectedDoctor && (
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
          <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
          <p><strong>Contact Info:</strong> {selectedDoctor.contactInfo}</p>
          <p><strong>Schedule:</strong> {selectedDoctor.schedule}</p>
          <p><strong>Available:</strong> {selectedDoctor.available ? 'Yes' : 'No'}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Appointments:</h4>
            <ul className="list-disc pl-5">
              {appointments.map((appointment, index) => (
                <li key={index}>
                  <strong>Title:</strong> {appointment.title}, 
                  <strong> Patient ID:</strong> {appointment.patientId}, 
                  <strong> Note:</strong> {appointment.note}, 
                  <strong> Date:</strong> {appointment.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <form onSubmit={handleAddAppointment} className="w-full max-w-lg bg-green-100 shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Add New Appointment</h3>
        <input
          type="text"
          value={newAppointment.title}
          onChange={(e) => setNewAppointment({ ...newAppointment, title: e.target.value })}
          placeholder="Appointment Title"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          value={newAppointment.patientId}
          onChange={(e) => setNewAppointment({ ...newAppointment, patientId: e.target.value })}
          placeholder="Patient ID"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          value={newAppointment.note}
          onChange={(e) => setNewAppointment({ ...newAppointment, note: e.target.value })}
          placeholder="Note"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="date"
          value={newAppointment.date}
          onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300"
        >
          Add Appointment
        </button>
      </form>

      <button 
        onClick={() => navo('/ap')} 
        className="mt-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300"
      >
        Appointments
      </button>
    </div>
  );
};

export default Setapp;

