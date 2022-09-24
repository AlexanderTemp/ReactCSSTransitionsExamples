import { useState } from "react";
import './progress.css'
const Progress = () => {
  let [distance, setDistance] = useState("0");
  let move = () => setDistance("100%");
  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-box">
        <div className="mover" style={{ width: distance }}></div>
      </div>
      <div className="btn-box">
        <button onClick={move}>Load Progress Bar</button>
      </div>
    </div>
  );
};
export default Progress;
