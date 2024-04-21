import React from "react";
import Avatar from "@mui/material/Avatar";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to={'/'} style={{textDecoration : "none"}}><h1>Auth</h1></Link>

          <div className="avtar">
            <Avatar style={{ backgroundColor: "darkblue" }}>S</Avatar>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
