import React from "react";
import "../../Header/header.scss";
import { HiOutlineChevronDown } from "react-icons/hi";
import { NAVBAR_DATA } from "../../../constants/Constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  console.log("NAVBAR_DATA:", NAVBAR_DATA);

  const handleClickNav = (id) => {
    console.log("id:", id);
  };
  return (
    <ul className="main-menu">
      {NAVBAR_DATA.map((navItem) => {
        return (
          <li
            key={navItem.id}
            className="menu-link"
            onClick={() => handleClickNav(navItem.id)}
          >
            <div className="link-title">
              {navItem.name}
              {navItem.dropdownData ? <HiOutlineChevronDown /> : ""}
            </div>
            {/* {navItem.dropdownData ? (
              <ul className="dropdown-menu">
                {navItem.dropdownData.map((dropdownItem) => {
                  return (
                    <li
                      key={`${navItem.name}--${dropdownItem.id}`}
                      className={
                        dropdownItem.img ? "menu-banner" : "megamenu-li"
                      }
                    ></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )} */}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
