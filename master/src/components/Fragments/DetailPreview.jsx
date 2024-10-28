
// import InputForm from "../Elements/Input"

// const DetailPreview = () => {
//     return (
//         <div className="flow-root justify-center px-6 py-6 sm:px-12 lg:col-span-4 lg:px-8 lg:py-6 xl:col-span-6 border">
//         <InputForm
//             htmlFor='username'
//             label='Select Users' 
//             type='text'  
//             id='username'
//             name='username'
//             labelStyle='block text-slate-700 text-sm font-bold mb-2'
//             inputStyle='text-sm rounded border w-full text-slate-700 placeholder: opacity-50 p-2 mb-2'
//             placeholder='Search users...'/>
//     </div>
//     )
// }

// export default DetailPreview

// src/UserSearch.js
import React, { useState } from 'react';

const users = [
  { id: 1, name: 'Sigit' },
  { id: 2, name: 'Ilham' },
  { id: 3, name: 'Fathur' },
  { id: 4, name: 'Ripqi' },
  { id: 5, name: 'Alif' },
  { id: 6, name: 'Reza' },
  // Tambahkan lebih banyak pengguna sesuai kebutuhan
];

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setQuery('');
  };

  console.log(users)

  return (
    <div className="flow-root justify-center px-6 py-6 sm:px-12 lg:col-span-4 lg:px-8 lg:py-6 xl:col-span-6 border">
      <div className="mb-4">
        {selectedUsers.map(user => (
          <span key={user.id} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2">
            {user.name}
          </span>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          placeholder="Search users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <ul className="absolute left-0 right-0 bg-white border rounded mt-1 max-h-40 overflow-y-auto">
            {filteredUsers.map(user => (
              <li
                key={user.id}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
