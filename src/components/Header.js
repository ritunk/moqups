import React, { useContext, useState } from "react";
import "./Header.css";

const Header = () => {
  
    
  return (
    <div>
      <nav className="navigation">
        <div className="p">Projects</div>
        <div className="pr">Profile</div>
        <div className="ac">Activity</div>
      </nav>
      <div className="sevenpr">
        {" "}
        <div className="seven">
          <h1>7</h1>
        </div>{" "}
        <h1>Projects shared with you</h1>
      </div>

      <nav className="nav2">
        <div className="A">All(4)</div>
        <div className="M">Matched(3)</div>
        <div className="sub">Submitted(6)</div>
        <div className="sub">Closed(1)</div>
        <div className="sub">Rejected(17)</div>
      </nav>
    </div>
  );
};

export default Header;
