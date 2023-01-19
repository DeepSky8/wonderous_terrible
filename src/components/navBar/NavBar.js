import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ navArray }) => {

    return (
        <div className="nav-center-container">

            {navArray.map(
                (key) => {
                    return (
                        <NavLink
                            key={key}
                            to={`${key}`}
                            className={({ isActive }) =>
                            (
                                isActive
                                    ?
                                    "nav-link-selected"
                                    :
                                    "nav-link"
                            )
                            }
                        >{key}</NavLink>
                    )
                }
            )}


        </div>
    )
}

export default NavBar