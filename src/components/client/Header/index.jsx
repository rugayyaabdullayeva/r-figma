import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../components/client/Header/style.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <div className="nav-left d-flex align-items-center">
            <h1 className='logo'>Shortly</h1>
            <ul className="header-ul d-flex align-items-center">
              <li>
                <NavLink
                  to="features"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="pricing"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="resources"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex gap-3 align-items-center">
            <button className="btn btn-gray">Login</button>
            <button className="btn sign-btn">Sign Up</button>
            <MenuIcon className="menu-icon" onClick={showDrawer} />
            <Drawer placement="right" onClose={onClose} open={open}>
              <div className="drawer-links">
                <NavLink to="features">Features</NavLink>
                <NavLink to="pricing">Pricing</NavLink>
                <NavLink to="resources">Resources</NavLink>
              </div>
              <div className="drawer-contact d-flex align-items-center justify-content-center">
                <button className="btn login">Login</button>
                <button className="btn">Sign Up</button>
              </div>
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
