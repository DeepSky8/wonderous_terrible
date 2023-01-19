import React from "react";
import { Link } from "react-router-dom";

const NextBar = ({ next, active = false }) => {

    return (
        <div className={active ? "nextBar-container-blue" : "nextBar-container"}>
            <Link to={next.link}>{next.title}</Link>
        </div>

    )
}

export default NextBar