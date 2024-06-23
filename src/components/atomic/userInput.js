import React, { useState } from 'react';
import './input.css'; // Import the CSS file

function UserInput({ label, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="userInput">
      <label>
        {label}
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default UserInput;