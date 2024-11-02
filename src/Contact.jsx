// src/ContactUs.js
import React from 'react';

const Contact = () => {
  return (
    <>
    <div className=" bg-green-900 pb-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white pt-9">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input type="text" id="name" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input type="email" id="email" className="border rounded w-full py-2 px-3 text-gray-700" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" className="border rounded w-full py-2 px-3 text-gray-700" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Doctor's Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Doctor's Contact Details</h3>
          <div className="mb-4">
            <p className="font-bold">Dr. John Doe</p>
            <p>Specialty: Cardiology</p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Dr. Jane Smith</p>
            <p>Specialty: Pediatrics</p>
            <p>Email: janesmith@example.com</p>
            <p>Phone: (555) 765-4321</p>
          </div>
          <div>
            <p className="font-bold">Dr. Emily Davis</p>
            <p>Specialty: General Practice</p>
            <p>Email: emilydavis@example.com</p>
            <p>Phone: (555) 987-6543</p>
          </div>
        </div>
      </div>
    </div>
     <footer className="bg-gray-800 text-white py-8 mt-10">
     <div className="container mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Links Section */}
         <div>
           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
           <ul className="space-y-2">
             <li><a href="#home" className="hover:underline">Home</a></li>
             <li><a href="#services" className="hover:underline">Services</a></li>
             <li><a href="#about" className="hover:underline">About Us</a></li>
             <li><a href="#contact" className="hover:underline">Contact Us</a></li>
           </ul>
         </div>

         {/* Contact Information Section */}
         <div>
           <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
           <p>123 Health St, Wellness City, HW 12345</p>
           <p>Email: support@example.com</p>
           <p>Phone: (555) 555-5555</p>
         </div>

         {/* Social Media Section */}
         <div>
           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
           <div className="flex space-x-4">
             <a href="#" className="hover:text-blue-500">
               <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
             </a>
             <a href="#" className="hover:text-blue-400">
               <i className="fab fa-twitter"></i> {/* Twitter icon */}
             </a>
             <a href="#" className="hover:text-pink-600">
               <i className="fab fa-instagram"></i> {/* Instagram icon */}
             </a>
             <a href="#" className="hover:text-red-600">
               <i className="fab fa-youtube"></i> {/* YouTube icon */}
             </a>
           </div>
         </div>
       </div>

       <div className="mt-8 border-t border-gray-700 pt-4 text-center">
         <p className="text-sm">&copy; {new Date().getFullYear()} Health Website. All Rights Reserved.</p>
       </div>
     </div>
   </footer>
   </>
  );
};

export default Contact;
