import React from "react";
import { NavLink } from "react-router";
import { AiFillGithub } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import "./Navber.css";

const Navber = () => {
  const MenuItems = (
    <>
      <li>
        <NavLink to="/" end className="nav-link">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps" className="nav-link">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation" className="nav-link">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar md:px-20 py-4 bg-[#FFFFFF]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {MenuItems}
          </ul>
        </div>
        <div className="flex gap-1 items-center">
            <div><img src={Logo} alt="Logo" className="w-10 h-fit" /></div>
            <div className="font-bold text-xl ml-2 font-inter">HERO.IO</div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{MenuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          <a href="https://github.com/omarfaruk16/" target="_blank"><button className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-5 px-4 flex items-center rounded-lg">
            <AiFillGithub className="mr-2 text-2xl" />
            <p className="font-semibold text-md font-inter">Contribute</p>
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
