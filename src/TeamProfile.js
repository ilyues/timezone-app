import React from "react";
import "./TeamProfile.css";

function TeamProfile(prop) {
  return (
    <div className="TeamProfile">
      <div className="left-prof-container">
        <div className="teammate-name">{prop.teammateName}</div>
        <img className="teammate-icon" src={prop.teammateIcon} alt="icon" />
      </div>
      <div className="right-prof-container">
        <div className="location-text">
          is in {prop.location} | {prop.temp}
        </div>
        <div className="time">
          <div className="numeric-time">{prop.time}</div>
          <div className="am-pm">{prop.amPm}</div>
          <div className="date">{prop.date}</div>
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
