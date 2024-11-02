
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './config/Firebase';
import { collection, getDocs, onSnapshot, doc, addDoc, deleteDoc } from 'firebase/firestore';

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
      const unsubscribe = onSnapshot(collection(db, 'DoctorID', selectedDoctor.id, 'appointments'), (snapshot) => {
        const appointmentsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAppointments(appointmentsData);
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
        alert('Appointment added successfully!');
      } catch (error) {
        console.error("Error adding appointment: ", error);
      }
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await deleteDoc(doc(db, 'DoctorID', selectedDoctor.id, 'appointments', appointmentId));
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== appointmentId)
      );
      alert('Appointment deleted successfully!');
    } catch (error) {
      console.error("Error deleting appointment: ", error);
    }
  };

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await deleteDoc(doc(db, 'DoctorID', doctorId));
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.id !== doctorId));
      if (selectedDoctor && selectedDoctor.id === doctorId) {
        setSelectedDoctor(null);
        setAppointments([]);
      }
      alert('Doctor deleted successfully!');
    } catch (error) {
      console.error("Error deleting doctor: ", error);
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
        <ul className="mt-2">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="flex justify-between items-center">
              <span>{doctor.name} - {doctor.specialization}</span>
              <button
                onClick={() => handleDeleteDoctor(doctor.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedDoctor && (
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
          <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
          <p><strong>Contact Info:</strong> {selectedDoctor.contactInfo}</p>
          <p><strong>Schedule:</strong> {selectedDoctor.schedule}</p>
          <p><strong>Available:</strong> {selectedDoctor.available ? 'Yes' : 'No'}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2 text-green-900">Appointments:</h4>
            <ul className="list-disc pl-5">
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <strong>Title:</strong> {appointment.title}, 
                  <strong> Patient ID:</strong> {appointment.patientId}, 
                  <strong> Note:</strong> {appointment.note}, 
                  <strong> Date:</strong> {appointment.date}
                  <button
                    onClick={() => handleDeleteAppointment(appointment.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <button 
        onClick={() => navo('/showapp')} 
        className="mt-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300"
      >
        Appointments
      </button>
    </div>
  );
};

export default Setapp;


  
            
       
        
