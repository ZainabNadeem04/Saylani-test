
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './config/Firebase';
import { Link } from 'react-router-dom';  // Import Link here

const Showapp = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [title, setTitle] = useState('');
  const [patientId, setPatientId] = useState('');
  const [note, setNote] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    if (title && patientId && note) {
      try {
        const appointmentData = {
          title,
          patientId,
          note,
          date: date.toLocaleDateString(),
        };

        const Book = collection(db, 'Doctor');
        await addDoc(Book, appointmentData);

        setAppointments((prev) => [
          ...prev,
          { id: prev.length + 1, ...appointmentData },
        ]);

        setTitle('');
        setPatientId('');
        setNote('');
        setDate(new Date());
      } catch (error) {
        console.error("Error adding appointment: ", error);
      }
    } else {
      alert('Please fill in all fields');
    }
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
            Add Appointment
          </button>
        </form>

        {appointments.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-green-900">Appointments:</h2>
            <ul className="list-disc pl-5 mt-2">
              {appointments.map((appointment) => (
                <li key={appointment.id}>
                  <strong>Title:</strong> {appointment.title} | <strong>Patient ID:</strong> {appointment.patientId} | <strong>Note:</strong> {appointment.note} | <strong>Date:</strong> {appointment.date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <Link to="/" className="text-blue-600 underline">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Showapp;
