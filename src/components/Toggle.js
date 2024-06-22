import React, { useState } from 'react';
import './Toggle.css'; // Make sure to import the CSS file

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={toggle}
      className={`toggle-button ${isToggled ? 'on' : ''}`}
    >
      {isToggled ? 'On' : 'Off'}
    </button>
  );
}

export default Toggle;