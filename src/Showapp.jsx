
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from './config/Firebase';
import { Link } from 'react-router-dom';

const Showapp = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState('');
  const [patientId, setPatientId] = useState('');
  const [note, setNote] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState(null);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    if (title && patientId && note) {
      const appointmentData = {
        title,
        patientId,
        note,
        date: date.toLocaleDateString(),
      };

      try {
        if (isEditing) {
          // Update existing appointment
          const appointmentRef = doc(db, 'Doctor', currentAppointmentId);
          await updateDoc(appointmentRef, appointmentData);

          setAppointments((prev) =>
            prev.map((appointment) =>
              appointment.id === currentAppointmentId
                ? { ...appointment, ...appointmentData }
                : appointment
            )
          );
          setIsEditing(false);
          setCurrentAppointmentId(null);
        } else {
          // Add new appointment
          const Book = collection(db, 'Doctor');
          const docRef = await addDoc(Book, appointmentData);

          setAppointments((prev) => [
            ...prev,
            { id: docRef.id, ...appointmentData },
          ]);
        }

        // Reset form fields
        setTitle('');
        setPatientId('');
        setNote('');
        setDate(new Date());
      } catch (error) {
        console.error("Error adding/updating appointment: ", error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleEdit = (appointment) => {
    setIsEditing(true);
    setCurrentAppointmentId(appointment.id);
    setTitle(appointment.title);
    setPatientId(appointment.patientId);
    setNote(appointment.note);
    setDate(new Date(appointment.date));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900 p-4 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-white">Doctor Appointment Scheduler</h1>
      <div className="bg-green-200 rounded-lg shadow-md p-6 max-w-md w-full">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="mb-4"
        />
        <form onSubmit={handleAddAppointment}>
          <div className="mb-4">
            <label className="block text-green-900">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Appointment Title"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-900">Patient ID</label>
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Patient ID"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-900">Note</label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-green-900 bg-green-200 hover:bg-green-400 rounded-md transition duration-300"
          >
            {isEditing ? 'Update Appointment' : 'Add Appointment'}
          </button>
        </form>

        {appointments.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-green-900">Appointments:</h2>
            <ul className="list-disc pl-5 mt-2">
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <strong>Title:</strong> {appointment.title} | <strong>Patient ID:</strong> {appointment.patientId} | <strong>Note:</strong> {appointment.note} | <strong>Date:</strong> {appointment.date}
                  <button
                    onClick={() => handleEdit(appointment)}
                    className="ml-4 text-blue-500 underline hover:text-blue-700"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <Link to="/" className="mt-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-md transition duration-300">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Showapp;
