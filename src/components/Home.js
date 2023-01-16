import React from "react";
// import { Outlet } from "react-router-dom";
import Header from "./headerElements/Header";
import Body from "./bodyElements/Body";
// import NewContinue from "./headerElements/NewContinue";

const Home = () => {
    return (
        <div className="page-container">
            <div id="backgroundImage">
                <Header />
                <Body />
            </div>

        </div>
    )
}

export default Home