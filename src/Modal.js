import React, { useState } from "react";
import edit from "./assets/edit.png";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import DropdownMenu from "./DropdownMenu";

function exampleReducer(state, action) {
  switch (action.type) {
    case "close":
      return { open: false };
    case "open":
      return { open: true, size: action.size };
    default:
      throw new Error("Unsupported action...");
  }
}

const ModalExample = (prop) => {
  const [location, setLocation] = useState("");
  const [nameInput, setNameInput] = React.useState("");
  const [urlInput, setUrlInput] = React.useState("");

  function addTeammate() {
    if (prop.numProfiles === 8) {
      return;
    } else {
      const curr = [...prop.currProfiles];
      curr[prop.numProfiles + 1] = {
        name: nameInput,
        iconURL: urlInput,
        timezone: location,
        location: location,
      };
      prop.setNumProfiles(prop.numProfiles + 1);
      prop.setProfiles(curr);
    }
  }

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });

  const { open, size } = state;
  return (
    <Modal
      size={size}
      open={open}
      onClose={() => dispatch({ type: "close" })}
      trigger={
        <input
          type="image"
          src={edit}
          className="edit-button"
          alt="edit"
          onClick={() => dispatch({ type: "open", size: "tiny" })}
        />
      }
    >
      <Modal.Header>Add Teammates</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p>
            Name
            <br />
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Enter name..."
            />
          </p>

          <p>
            Image URL (optional)
            <br />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Paste URL..."
            ></input>
          </p>

          <p>
            <p>{location}</p>
            <DropdownMenu saveLocation={setLocation} />
          </p>

          <Button onClick={() => addTeammate()}>Add</Button>
        </Modal.Description>
      </Modal.Content>

      <Modal.Header>Remove Teammates</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p>
            Name
            <br />
            <input type="text"></input>
          </p>

          <p>
            Image URL (optional)
            <br />
            <input type="text"></input>
          </p>

          <p>
            <DropdownMenu saveLocation={setLocation} />
          </p>
          <p>{prop.location}</p>

          <Button>Add</Button>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          negative
          onClick={() => dispatch({ type: "close" })}
        >
          Don't Add
        </Button>
        <Button
          content="Add Friend"
          labelPosition="right"
          icon="checkmark"
          positive
          onClick={() => dispatch({ type: "close" })}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ModalExample;
