import React from "react";
import edit from "./assets/edit.png";
import Popup from "reactjs-popup";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export default function DropdownMenu(props) {
  return (
    <Menu
      menuButton={<MenuButton>Choose A Location</MenuButton>}
      overflow="auto"
      position="auto"
      align="center"
    >
      {[
        "Anadyr/UTC+12",
        "Melbourne/UTC+11",
        "Brisbane/UTC+10",
        "Tokyo/UTC+9",
        "Beijing/UTC+8",
        "Jakarta/UTC+7",
        "Duhaka/UTC+6",
        "Tashkent/UTC+5",
        "Dubai/UTC+4",
        "Moscow/UTC+3",
        "Cairo/UTC+2",
        "Brussels/UTC+1",
        "London/UTC+0",
        "Praia/UTC-1",
        "King Edward Point/UTC-2",
        "Buenos Aires/UTC-3",
        "Caracas/UTC-4",
        "New York/UTC-5",
        "Mexico City/UTC-6",
        "Calgary/UTC-7",
        "Los Angeles/UTC-8",
        "Anchorage/UTC-9",
        "Honolulu/UTC-10",
        "Alofi/UTC-11",
        "Baker Island/UTC-12",
      ].map((zones) => (
        <MenuItem
          value={zones}
          // value={props.setLocation}
          onClick={(e) =>
            props.saveLocation(e.value.substring(0, e.value.indexOf("/")))
          }
        >
          {zones}
        </MenuItem>
      ))}
    </Menu>
  );
}
