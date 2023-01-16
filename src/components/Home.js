import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./headerElements/Header";
import NewContinue from "./headerElements/NewContinue";

const Home = () => {
    return (
        <div className="content-container">
            <div id="backgroundImage">
                <Header />
                <NewContinue />
                <Outlet />
            </div>

        </div>
    )
}

export default Home