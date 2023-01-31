import React from "react";
import Header from "./headerElements/Header";
import Body from "./bodyElements/Body";

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