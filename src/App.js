import "./App.css";
import TeamProfile from "./TeamProfile";
import DropdownMenu from "./DropdownMenu";
import Modal from "./Modal";
import edit from "./assets/edit.png";
import clock from "./assets/clock.png";
import warmbluebg from "./assets/warm-blue-bg.png";
import React, { Profiler, useState } from "react";
import "semantic-ui-css/semantic.min.css";

function App() {
  const dummyData = [
    {
      id: 1,
      name: "Ranon Larpcharern",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png",
      timezone: "0",
    },
    {
      id: 2,
      name: "Julia Wang",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1064_-_Wink-256.png",
      timezone: "0",
    },
    {
      id: 3,
      name: "Isabel Li",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1074_-_Sick-256.png",
      timezone: "0",
    },
    {
      id: 4,
      name: "Zaid Mamsa",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1075_-_Cool-256.png",
      timezone: "0",
    },
    {
      id: 5,
      name: "null_value",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png",
      timezone: "0",
    },
    {
      id: 6,
      name: "null_value",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png",
      timezone: "0",
    },
    {
      id: 7,
      name: "null_value",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png",
      timezone: "0",
    },
    {
      id: 8,
      name: "null_value",
      iconURL:
        "https://cdn4.iconfinder.com/data/icons/emoticons-filled-two-color/614/1067_-_Calm-512.png",
      timezone: "0",
    },
  ];
  const [allProfiles, setAllProfiles] = React.useState(dummyData);
  const [numProfiles, setNumProfiles] = React.useState(4);
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
  //const {};
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
        <Modal
          currProfiles={allProfiles}
          setProfiles={setAllProfiles}
          numProfiles={numProfiles}
          setNumProfiles={setNumProfiles}
        />
      </div>
      {timeGotten[0]}
      {allProfiles
        .filter((profile) => profile.name !== "null_value")
        .map((profile) => (
          <TeamProfile
            teammateName={profile.name}
            teammateIcon={profile.iconURL}
            timezone={profile.timezone}
            location="Bangkok"
            temp="77 F"
            time="7:09"
            amPm="am"
            date="Saturday, 13 February 2021 (GMT+7)"
          />
        ))}

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
