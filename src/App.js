import "./App.css";
import TeamProfile from "./TeamProfile";
import DropdownMenu from "./DropdownMenu";
import edit from "./assets/edit.png";
import clock from "./assets/clock.png";
import warmbluebg from "./assets/warm-blue-bg.png";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [allProfiles, setAllProfiles] = React.useState([]);
  const [timeGotten, setTimeGotten] = React.useState([]);
  const getLocalTime = (offset) => {
    const d = new Date();
    return new Date(
      Date.UTC(
        d.getUTCFullYear(),
        d.getUTCMonth(),
        d.getUTCDate(),
        d.getUTCHours(),
        d.getUTCMinutes() + parseFloat(offset) * 60
      )
    );
  };
  const [{ activeTimezone, offset }, setTimezone] = useState({
    activeTimezone: undefined,
    offset: undefined,
  });
  const selectTimezone = (timezone) => {
    if (timezone.rsmKey === activeTimezone) return;
    setTimezone({
      activeTimezone: timezone.rsmKey,
      offset: timezone.properties.name,
    });
  };

  fetch("http://worldtimeapi.org/api/timezone/Europe/London")
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log(result);
      console.log(result.datetime);
      console.log(result.datetime.slice(11, 16));
    })
    .catch((error) => {
      console.error("post-error: ", error);
    });

  return (
    <div className="App">
      <div className="controls">
        <button className="calculate">
          <img src={clock} className="clock-png" alt="clock-icon" />
          Calculate Time Difference
        </button>{" "}
        <DropdownMenu className="edit-button" />
      </div>
      {timeGotten[0]}
      <TeamProfile
        teammateName="Ranon Larpcharern"
        teammateIcon="https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png"
        location="Bangkok"
        temp="77 F"
        time="7:09"
        amPm="am"
        date="Saturday, 13 February 2021 (GMT+7)"
      />
      <TeamProfile
        teammateName="Julia Wang"
        teammateIcon="https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1064_-_Wink-256.png"
        location="Maryland"
      />
      <TeamProfile
        teammateName="Isabel Li"
        teammateIcon="https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1074_-_Sick-256.png"
        location="Auckland"
      />
      <TeamProfile
        teammateName="Zaid Mamsa"
        teammateIcon="https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1075_-_Cool-256.png"
        location="Berkeley"
      />
      {/* <input
        type="button"
        value="get time"
        onClick={(event) => {
          fetch("http://worldtimeapi.org/api/timezone/Europe/London")
            .then((result) => {
              return result.json();
            })
            .then((result) => {
              console.log(result);
              console.log(result.datetime);
              console.log(result.datetime.slice(11, 16));
            })
            .catch((error) => {
              console.error("post-error: ", error);
            });
        }}
      />
      */}
    </div>
  );
}

export default App;
