import { useState, useEffect, useRef } from "react";
import { useIdLogin } from "../../../hooks/useIdLogin";


const OrganizerInput = (props) => {
  const {eventData, formState, value} = props
  const [localEventData, setLocalEventData] = useState(eventData)
  const userId = useIdLogin()
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState([{
      id: Date.now(),
      value: "",
      isDropdownOpen: false,
      selectedUser: null,
      isInputValued: false,
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
            dropdownRefs.current[index] &&
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
    
      // Menambahkan event listener untuk klik di luar
      document.addEventListener('mousedown', handleClickOutside);
    
      // Membersihkan event listener saat komponen unmount
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
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
        input.id === id ? { ...input, value: user.name, isDropdownOpen: false, selectedUser: user,} : input
      ));
    };
  
    // Handle perubahan input
    const handleChange = (id, event) => {
      setInputs(inputs.map(input => 
        input.id === id ? { ...input, value: event.target.value } : input
      ));
    };
  
  
    return (
      <div className=" container mx-auto col-span-6 lg:col-span-2 overflow-y-auto pb-10 mt-6 sm:mt-0">
        <h2 className="text-gray-700 text-sm font-medium">Event Organizer</h2>
  
        {inputs.map((input, index) => (
          <div key={input.id} className="mb-4 relative flex gap-2">
            <div className="w-full">
                <input
                type="text"
                value={formState === 'update' ? value : ''} //sebelumnya {input.value}
                onChange={(event) => handleChange(input.id, event)}
                onFocus={() => handleFocus(input.id)}
                placeholder="Event made by"
                ref={(el) => inputRefs.current[index] = el}
                className="w-full text-sm text-gray-700 shadow-sm outline-none border p-2 mt-1 border-gray-300 rounded-md"
                />
                {/* Dropdown untuk user */}
                {input.isDropdownOpen && (
                <div
                    ref={(el) => dropdownRefs.current[index] = el}
                    className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10  "
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
          </div>
        ))}

      </div>
    );
}

export default OrganizerInput 