import react, { useEffect, useState } from "react";



export default function App() {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
      setInterval(() => {
        setTime(new Date().toLocaleString());
      }, 1000);
    });
  
    return (
      <div className="App">
        <div className="divTime">
          <h2>La hora es:</h2>
          <h2>{time}</h2>
        </div>
      </div>
    );
  }