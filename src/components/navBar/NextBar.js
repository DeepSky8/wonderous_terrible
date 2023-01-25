import React from "react";
import { Link } from "react-router-dom";

const NextBar = ({ goTo, linkText, active = false }) => {


    return (
        <div className={active ? "nextBar-container-blue" : "nextBar-container"}>
            <Link to={goTo}>{linkText}</Link>
        </div>

    )
}

export default NextBar