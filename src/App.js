import "./App.css";
import TeamProfile from "./TeamProfile";
import edit from "./assets/edit.png";
import clock from "./assets/clock.png";
import React from "react";

function App() {
  const [allProfiles, setAllProfiles] = React.useState([]);
  return (
    <div className="App">
      <div className="controls">
        <button className="calculate">
          <img src={clock} className="clock-png" alt="clock-icon" />
          Calculate Time Difference
        </button>{" "}
        <input type="image" src={edit} className="edit-button" alt="edit" />
      </div>

      <TeamProfile />
      <TeamProfile />
      <TeamProfile />
      <TeamProfile />
      <TeamProfile />
      <TeamProfile />
    </div>
  );
}

export default App;
