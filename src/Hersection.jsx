
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HerSection = () => {
 
const navigate = useNavigate();
  return (
    <div className="bg-green-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Section - Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Health, Our Priority</h1>
          <p className="text-gray-300 mb-6">
            Your health is our priority. With state-of-the-art facilities and a caring staff, we strive to offer reliable,
            accessible, and efficient healthcare services for the whole family.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button onClick={()=>{navigate('/login')}} className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
            <button onClick={()=>{navigate('/setapp')}} className="bg-transparent border border-gray-500 hover:border-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Book appointments
            </button>
           
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center rounded">
          <img
            src="https://imgcdn.stablediffusionweb.com/2024/9/28/1484495b-541a-4f52-8412-1b5930c0a797.jpg" // Replace with your sofa image
            alt="docpic"
            className="w-full md:w-auto max-w-xs md:max-w-md"
          />
        </div>
      </div>

      {/* Top Navigation */}
 
    </div>
  );
};

export default HerSection;
// import React, { useState } from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Contact from "./Contact";
// import About from "./About"; 
// import Card from "./Cards";
//  // Assuming you have a Home component

// const HeroSection = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <>
//       <div className="bg-green-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-8">
//         <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
//           {/* Left Section - Text */}
//           <div className="text-center md:text-left md:w-1/2">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Health, Our Priority</h1>
//             <p className="text-gray-300 mb-6">
//               Your health is our priority. With state-of-the-art facilities and a caring staff, we strive to offer reliable,
//               accessible, and efficient healthcare services for the whole family.
//             </p>
//             <div className="flex justify-center md:justify-start gap-4">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300">
//                 Get Started
//               </button>
//               <button className="bg-transparent border border-gray-500 hover:border-yellow-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
//                 Book appointments
//               </button>
//             </div>
//           </div>

//           {/* Right Section - Image */}
//           <div className="md:w-1/2 flex justify-center">
//             <img
//               src="https://imgcdn.stablediffusionweb.com/2024/9/28/1484495b-541a-4f52-8412-1b5930c0a797.jpg" // Replace with your image
//               alt="docpic"
//               className="w-full md:w-auto max-w-xs md:max-w-md"
//             />
//           </div>
//         </div>

//         {/* Top Navigation */}
//         <div className="absolute top-0 w-full flex justify-between items-center p-6 text-sm font-semibold text-white">
//           <div className="text-lg font-bold">Medicare</div>

//           <div className="md:hidden">
//             <button onClick={toggleNav} className="text-yellow-500 focus:outline-none">
//               {isNavOpen ? '✖️' : '☰'} {/* Hamburger icon */}
//             </button>
//           </div>

//           <nav className={`absolute top-16 right-0 justify-end bg-green-900 w-full md:flex md:gap-6 md:static md:bg-transparent ${isNavOpen ? 'block' : 'hidden'} transition duration-300`}>
//             <Link to='/' className="block md:inline hover:text-yellow-500 p-4">Home</Link>
//             <Link to='/about' className="block md:inline hover:text-yellow-500 p-4">About Us</Link>
//             <Link to='/cards' className="block md:inline hover:text-yellow-500 p-4">Services</Link>
//             <Link to='/appointments' className="block md:inline hover:text-yellow-500 p-4">Appointments</Link>
//             <Link to='/contact' className="block md:inline hover:text-yellow-500 p-4">Contact Us</Link>
//           </nav>
//         </div>
//       </div>

//       {/* Routes for different pages */}
    
//       </>
//   );
// };

// export default HeroSection;

