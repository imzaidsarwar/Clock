import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const time = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(time);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div>
      <h1>{Time}</h1>
      <button onClick={updateTime} className="btn">
        Get Time
      </button>
    </div>
  );
}

export default App;
