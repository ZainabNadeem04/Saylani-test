// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navi = useNavigate
//         const [selectedRole, setSelectedRole] = useState('');
      
//         const handleSelection = (role) => {
//           setSelectedRole(role);
//           if (role === 'Doctor') {
//             navi('/showapp'); // Navigate to the Doctor's route
//         } else if (role === 'Patient') {
//             navi('/setapp'); // Navigate to the Patient's route
//         }
//           // Additional logic can go here (e.g., navigation)
//         };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-green-900 p-4">
//       <div className="bg-green-200 rounded-lg shadow-md p-6 max-w-md w-full">
//         <h2 className="text-2xl font-bold text-center mb-6">Select Your Role</h2>
//         <div className="flex flex-col gap-4">
//           <button
//             onClick={() => handleSelection('Doctor')}
//             className={`p-4 rounded-lg text-green-900 font-semibold transition duration-300 ${
//               selectedRole === 'Doctor' ? 'bg-blue-600' : 'bg-green-100 hover:bg-green-600'
//             }`}  
//           >
//             Doctor
//           </button>
//           <button
//             onClick={() => handleSelection('Patient')}
//             className={`p-4 rounded-lg text-green-900 font-semibold transition duration-300 ${
//               selectedRole === 'Patient' ? 'bg-blue-600' : 'bg-green-100 hover:bg-green-600'
//             }`}
//           >
//             Patient
//           </button>
//         </div>
//         {selectedRole && (
//           <p className="mt-4 text-center text-gray-700">
//             You have selected: <strong>{selectedRole}</strong>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navi = useNavigate(); // Correctly call useNavigate hook
    const [selectedRole, setSelectedRole] = useState('');

    const handleSelection = (role) => {
        setSelectedRole(role);
        if (role === 'Doctor') {
            navi('/doc');
        } else if (role === 'Patient') {
            navi('/pat');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-900 p-4">
            <div className="bg-green-200 rounded-lg shadow-md p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Select Your Role</h2>
                <div className="flex flex-col gap-4">
                    <button
                        onClick={() => handleSelection('Doctor')}
                        className={`p-4 rounded-lg text-green-900 font-semibold transition duration-300 ${
                            selectedRole === 'Doctor' ? 'bg-blue-600' : 'bg-green-100 hover:bg-green-600'
                        }`}
                    >
                        Doctor
                    </button>
                    <button
                        onClick={() => handleSelection('Patient')}
                        className={`p-4 rounded-lg text-green-900 font-semibold transition duration-300 ${
                            selectedRole === 'Patient' ? 'bg-blue-600' : 'bg-green-100 hover:bg-green-600'
                        }`}
                    >
                        Patient
                    </button>
                </div>
                {selectedRole && (
                    <p className="mt-4 text-center text-gray-700">
                        You have selected: <strong>{selectedRole}</strong>
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login;

