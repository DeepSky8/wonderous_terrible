import React from "react";
// import { Outlet } from "react-router-dom";
import Header from "./headerElements/Header";
import Body from "./bodyElements/Body";
// import NewContinue from "./headerElements/NewContinue";

const Home = () => {
    return (
        <div className="page-container">
            <div className="display-container">
                <div className="center-container">
                    <Header />
                    <Body />
                </div>

            </div>

        </div>
    )
}

export default Home