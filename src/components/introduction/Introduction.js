import React from "react";

const Introduction = () => {
    return (
        <div className="introduction-container">
            <span>
                <p>Wondrous Terrible is a tabletop roleplaying game about space exploration, and about building a fragile civilization amidst the stars.</p>
                <p>This online guide should only be used as a reference tool</p>
                <a href='https://kumada1.itch.io/wondrous-terrible/purchase'>Buy the full game here</a>

            </span>
            <span className="attribution">
                <p className="noBottomMargin">Designed by Ian Hamilton</p>
                <p className="noMargin">with assistance by Richard Kelly</p>
                <p className='noTopMargin'>Photo by <a href="https://unsplash.com/@von_co?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivana Cajina</a> on <a href="https://unsplash.com/photos/asuyh-_ZX54?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
            </span>


        </div>
    )
}

export default Introduction