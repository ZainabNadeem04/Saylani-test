// src/ServiceCards.js
import React from 'react';

const services = [
  {
    id: 1,
    title: 'General Health Checkup',
    description: 'Comprehensive health assessments to monitor your well-being.',
    icon: '🏥', // Hospital emoji
  },
  {
    id: 2,
    title: 'Pediatric Care',
    description: 'Specialized medical care for children and adolescents.',
    icon: '👶', // Baby emoji
  },
  {
    id: 3,
    title: 'Women health',
    description: 'Focused care on reproductive health, pregnancy, and menopause.',
    icon: '♀️', // Female symbol
  },
  {
    id: 4,
    title: 'Mental Health Services',
    description: 'Support and treatment for mental health issues and disorders.',
    icon: '🧠', // Brain emoji
  },
  {
    id: 5,
    title: 'Chronic Disease Management',
    description: 'Ongoing support and treatment for chronic conditions.',
    icon: '❤️', // Heart emoji
  },
  {
    id: 6,
    title: 'Nutrition Counseling',
    description: 'Personalized dietary plans to improve your health.',
    icon: '🥗', // Salad emoji
  },
  {
    id: 7,
    title: 'Physical Therapy',
    description: 'Rehabilitation services to recover from injuries and surgeries.',
    icon: '🧘‍♂️', // Yoga emoji
  },
  {
    id: 8,
    title: 'Vaccination Services',
    description: 'Safe and effective vaccines to protect you and your family.',
    icon: '💉', // Syringe emoji
  },
];

const Card = () => {
  return (
    <div className="   bg-green-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Health Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map(service => (
          <div key={service.id} className=" shadow-lg rounded-lg p-6 bg-green-100  transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

