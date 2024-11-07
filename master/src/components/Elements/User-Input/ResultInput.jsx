import React, { useState } from 'react';
import ParticipantInput from './UserInput';

const DynamicInput = () => {
  const [participants, setParticipants] = useState([{ name: '' }]);

  const handleChange = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index].name = value;
    setParticipants(newParticipants);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, { name: '' }]);
  };

  const handleRemoveParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  return (
    <div>
      {participants.map((participant, index) => (
        <ParticipantInput
          key={index}
          index={index}
          handleChange={handleChange}
          handleRemove={handleRemoveParticipant}
        />
      ))}
      <button
        type="button"
        onClick={handleAddParticipant}
        className="bg-blue-500 text-white p-2 mt-2"
      >
        Add Participant
      </button>
    </div>
  );
};

export default DynamicInput;
