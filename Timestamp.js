import React from 'react';

function Timestamp() {
  const anmol = 'Timestamp';
  return (
    <div>
      <p> Hi This is example of {anmol} </p>
      <p> Current time is {new Date().toLocaleTimeString()} </p>
    </div>
  );
}
export default Timestamp;
