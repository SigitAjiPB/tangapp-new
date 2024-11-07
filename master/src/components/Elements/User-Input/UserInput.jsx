import React, { useState, useEffect } from 'react';

const ParticipantInput = ({ index, handleChange, handleRemove }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [isFocused]);

  const handleNameClick = (name) => {
    setInputValue(name);
    handleChange(index, name);
    setIsFocused(false);
  };

  return (
    <div className="relative flex items-center space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click event
        placeholder="Type to search..."
        className="border p-2"
      />
      {isFocused && (
        <ul className="absolute bg-white border mt-1 w-full max-h-60 overflow-y-auto">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => handleNameClick(item.name)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={() => handleRemove(index)}
        className="bg-red-500 text-white p-2"
      >
        Remove
      </button>
    </div>
  );
};

export default ParticipantInput;
