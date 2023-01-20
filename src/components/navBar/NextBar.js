import React from "react";
import { Link } from "react-router-dom";

const NextBar = ({ next }) => {

    return (
        <div className={next.active ? "nextBar-container-blue" : "nextBar-container"}>
            <Link to={next.rootURL + next.target}>{next.title}</Link>
        </div>

    )
}

export default NextBar