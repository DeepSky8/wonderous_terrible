import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to="/">
                <h1>Wondrous Terrible</h1>
            </Link>

            <div className="divSpacer">
                <h3>a micro 4x game</h3>
                <h3>of space exploration</h3>
            </div>

        </div>
    )
}

export default Header