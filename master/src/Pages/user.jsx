import { useLogin } from "../hooks/useLogin"
import { useIatLogin } from "../hooks/useIatLogin"



// const UserPage = ()=> {
//     const username = useLogin()
//     const userIat = useIatLogin()
    
//     return (
//         <div className=" flex flex-col items-center justify-center space-y-6  divide-y  p-8 ">
//             <div  className="bg-slate-200 h-40 w-40 rounded-full text-center flex justify-center items-center text-8xl text-slate-50 shadow-lg">
//             <span>J</span>
//             </div>

//             <div className="flex flex-col justify-center items-center text-slate-600">
//                 <input type="text"/>
//                 <div>{` ${username}`}</div>
//                 <div>{`${userIat}`}</div>

//             </div>
//         </div>
//     )
// }

// export default UserPage


import React, { useState } from 'react';
import axios from 'axios';

const UserPage = () => {
  // Gunakan hooks atau state untuk menyimpan data user
  const username = useLogin(); // Placeholder untuk nama user
  const userIat = useIatLogin(); // Placeholder untuk ID user

  // State untuk input baru
  const [newUsername, setNewUsername] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleUpdate = async () => {
    try {
      // Panggil API dengan Axios
      const response = await axios.patch('http://localhost:7878/v1/users/', {
        id: userIat, // ID user
        username: newUsername, // Username baru dari input
        
      });

      // Tampilkan pesan sukses
      setResponseMessage(response.data.message || 'Update successful!');
    } catch (error) {
        console.log(typeof(newUsername))
      console.error('Error updating user:', error);
      setResponseMessage('Failed to update user.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 divide-y p-8">
      {/* Avatar */}
      <div className="bg-slate-200 h-40 w-40 rounded-full text-center flex justify-center items-center text-8xl text-slate-50 shadow-lg">
        <span>{username ? username.charAt(0).toUpperCase() : 'J'}</span>
      </div>

      {/* User Information */}
      <div className="flex flex-col justify-center items-center text-slate-600">
        <input
          type="text"
          placeholder="Enter new username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={handleUpdate}
          className="mt-4 p-2 bg-blue-500 text-white rounded shadow"
        >
          Update Username
        </button>

        <div className="mt-4 text-green-500">{responseMessage}</div>

        <div>{`Current Username: ${username}`}</div>
        <div>{`User ID: ${userIat}`}</div>
      </div>
    </div>
  );
};

export default UserPage;

