import React from "react";
import "./Sidebar.css";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import AddIcon from "@mui/icons-material/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
        <ExpandMoreSharpIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreSharpIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar__addChannel" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
