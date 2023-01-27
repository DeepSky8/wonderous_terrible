import React from "react";
import { Link } from "react-router-dom";

const NextBar = ({ goTo, linkText, active = false, styling='' }) => {


    return (
        <div className={active ? "nextBar-container-blue" : "nextBar-container"}>
            <Link className={`${styling}`} to={goTo}>{linkText}</Link>
        </div>

    )
}

export default NextBar