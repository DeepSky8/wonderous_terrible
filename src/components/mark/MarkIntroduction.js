import React from "react";
import { leaveMarkIntroduction, leaveMarkReminder } from "../../objects/markObjects";

const MarkIntroduction = () => {

    return (
        <div className="markIntroduction-container">
            <span>
                <p>{leaveMarkIntroduction}</p>
                <p className="markReminder">{leaveMarkReminder}</p>
            </span>
        </div>
    )


}

export default MarkIntroduction

// <p>
// <span>{leaveMarkIntroduction}</span>
// <span className="italic">{leaveMarkReminder}</span>
// </p>