
import React from 'react';

const About = () => {
  return (
    <div className="bg-green-900 text-white p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="flex-1">
        <img
          src="https://cdn.prod.website-files.com/627967eefc671069b0b94d33/66b5e80ba5fb33f679d106fd_Anesthesia.webp" // Replace with the actual image URL or path
          alt="doc"
          className="w-full rounded-md object-cover h-full"
        />
      </div>
      <div className="flex-1">
        <div className="space-y-4">
          <h2 className="text-xl uppercase text-gray-400">About Us</h2>
          <h1 className="text-4xl font-bold">We Always Provide the Best Care</h1>
          <p className="text-gray-300">
  With a team of highly qualified professionals, 
  we offer expert medical advice and treatment options. 
  Trust us to guide you through every step of your healthcare journey.
</p>

        </div>
        <div className="my-8 space-y-4">
          <h3 className="text-2xl font-semibold">Our Skills</h3>
          <div className="space-y-2">
            <div>
              <p className="text-gray-300">Patient care</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-300">Cleaneness</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-gray-300">Staff</p>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-blue-500 h-2 rounded" style={{ width: '77%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-3xl font-bold">20+</h4>
            <p className="text-gray-400">Year Of Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">1,000+</h4>
            <p className="text-gray-400">Patient Satisfied</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">300+</h4>
            <p className="text-gray-400">Staff</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold">64</h4>
            <p className="text-gray-400"> Award</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;