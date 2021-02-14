import React from "react";
import edit from "./assets/edit.png";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export default function DropdownMenu() {
  return (
    <Menu
      menuButton={
        <input type="image" src={edit} className="edit-button" alt="edit" />
      }
    >
      <MenuItem>Add</MenuItem>
      <MenuItem>Delete</MenuItem>
    </Menu>
  );
}
