import { useState, useEffect, useRef } from "react";

const DynamicInput = () => {
  const [users, setUsers] = useState([]);
  const [inputs, setInputs] = useState([{
    id: Date.now(),
    value: "",
    isDropdownOpen: false,
    selectedUser: null,
  }]);

  // Menyimpan referensi ke input dan dropdown
  const inputRefs = useRef([]);
  const dropdownRefs = useRef([]);

  // Fetch users from JSONPlaceholder
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  // Menambahkan event listener untuk klik di luar input dan dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      inputRefs.current.forEach((inputRef, index) => {
        if (
          inputRef &&
          !inputRef.contains(event.target) &&
          !dropdownRefs.current[index].contains(event.target)
        ) {
          // Menyembunyikan dropdown jika klik di luar input dan dropdown
          setInputs((prevInputs) =>
            prevInputs.map((input) =>
              input.id === inputs[index].id
                ? { ...input, isDropdownOpen: false }
                : input
            )
          );
        }
      });
    }

    // Menambahkan event listener
    document.addEventListener("click", handleClickOutside);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputs]);

  // Handle input focus untuk menampilkan dropdown
  const handleFocus = (id) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, isDropdownOpen: true } : input
    ));
  };

  // Handle user selection dari dropdown
  const handleSelectUser = (id, user) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, value: user.name, isDropdownOpen: false, selectedUser: user } : input
    ));
  };

  // Handle perubahan input
  const handleChange = (id, event) => {
    setInputs(inputs.map(input => 
      input.id === id ? { ...input, value: event.target.value } : input
    ));
  };

  // Menambahkan input baru
  const handleAddInput = () => {
    setInputs([
      ...inputs,
      { id: Date.now(), value: "", isDropdownOpen: false, selectedUser: null }
    ]);
  };

  // Menghapus input
  const handleDeleteInput = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  return (
    <div className="container mx-auto col-span-2">
      <h2 className="text-2xl mb-6">Add Participant</h2>

      {inputs.map((input, index) => (
        <div key={input.id} className="mb-4 relative flex gap-2">
          <div className="w-full">
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleChange(input.id, event)}
            onFocus={() => handleFocus(input.id)}
            placeholder="Select a user..."
            ref={(el) => inputRefs.current[index] = el}
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Dropdown untuk user */}
          {input.isDropdownOpen && (
            <div
              ref={(el) => dropdownRefs.current[index] = el}
              className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10"
            >
              {users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => (
                <div
                  key={user.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectUser(input.id, user)}
                >
                  {user.name}
                </div>
              ))}
            </div>
          )}


          </div>

          {
            index === 0 && (
              <span
              className="px-4 py-2 bg-transparant text-transparent cursor-default select-none"
            >
              X
            </span>
            )
          }


          {index > 0 && (
            <button
              onClick={() => handleDeleteInput(input.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg "
            >
              X
            </button>
          )}




          {/* Tombol Add/Delete */}
        </div>
      ))}
          <div className="flex justify-between mt-2">
            <button
              onClick={handleAddInput}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
    </div>
  );
  }

export default DynamicInput;
