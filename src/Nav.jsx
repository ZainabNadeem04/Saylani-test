
// import React, { useState }  from 'react';
// import { useNavigate } from 'react-router-dom';

// import { Link, useNavigate } from "react-router-dom";
// import Sign from './Sign';
// ;
// function Nav() {
//     const [isNavOpen, setIsNavOpen] = useState(false);

// const toggleNav = () => {
//   setIsNavOpen(!isNavOpen);
// };
// const navigate= useNavigate()
//   return (
//     <>
//        <div className="absolute top-0 w-full flex justify-between items-center p-6 text-sm font-semibold text-white">
//         <div className="text-lg font-bold">Medicare</div>
        
//         <div className="md:hidden">
//           <button onClick={toggleNav} className="text-yellow-500 focus:outline-none">
//             {isNavOpen ? '✖️' : '☰'} {/* Hamburger icon */}
//           </button>
//         </div>
//         {/* <BrowserRouter> */}
//         <nav className={`absolute top-16 right-0  justify-end bg-green-900 w-full md:flex md:gap-6 md:static md:bg-transparent ${isNavOpen ? 'block' : 'hidden'} transition duration-300`}>
//         <Link to="/">Home</Link>
//   <Link to="/about">About Us</Link>
//   <Link to="/cards">Services</Link>
//   <Link to="/contact">Contact Us</Link>
//   <button onClick={()=>{navigate(/Sign)}}>Sign in</button>
//   {/* Link to Clone component */}
//         </nav>
        
     
     
//       </div>
      
//     </>
//   )
// }
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sign from './Sign';
function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="absolute top-0 w-full flex justify-between items-center p-6 text-sm font-semibold text-white">
      <div className="text-lg font-bold">Medicare</div>

      <div className="md:hidden">
        <button 
          onClick={toggleNav} 
          className="text-yellow-500 focus:outline-none" 
          aria-expanded={isNavOpen}
        >
          {isNavOpen ? '✖️' : '☰'} {/* Hamburger icon */}
        </button>
      </div>

      <nav 
        className={`absolute top-16 right-0 justify-end bg-green-900 w-full md:flex md:gap-6 md:static md:bg-transparent ${isNavOpen ? 'block' : 'hidden'} transition duration-300`}
      >
        <Link to="/" className="block p-2 md:inline-block">Home</Link>
        <Link to="/about" className="block p-2 md:inline-block">About Us</Link>
        <Link to="/cards" className="block p-2 md:inline-block">Services</Link>
        <Link to="/contact" className="block p-2 md:inline-block">Contact Us</Link>
              <Link to="/ap" className="block p-2 md:inline-block">Profile</Link>
        <Link to='/sign'  
          className="block p-2 text-yellow-500 hover:bg-yellow-600 rounded md:inline-block"
        >
          Sign In
        </Link>
      </nav>
    </div>
  );
}

export default Nav;

// export default Nav
