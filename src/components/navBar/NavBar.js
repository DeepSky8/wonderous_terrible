import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ rootURL, navArray }) => {

    return (
        <div className="nav-center-container">

            {navArray.map(
                (key) => {
                    return (
                        <NavLink
                            key={key}
                            to={`${rootURL}${key}`}
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