import React from "react";
import { Outlet } from "react-router-dom";
import NewContinue from "../newContinue/NewContinue";

const Body = () => {
    return (
        <div className="body-container">
            <NewContinue />
            <Outlet />
        </div>
    )
}

export default Body