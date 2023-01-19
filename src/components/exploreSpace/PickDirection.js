import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clickToTravel, directionOptions, selectDestination } from '../../objects/encounterObjects'
import NextBar from "../navBar/NextBar";

const PickDirection = () => {
    const navigate = useNavigate()
    const directionArray = Object.entries(directionOptions)
    const [direction, setDirection] = useState('')
    const [directionValue, setDirectionValue] = useState('')

    const click = (key) => {
        setDirection(key)
        setDirectionValue(directionOptions[key])
    }

    return (
        <div className="pickDirection-container">
            <h2>Where will you go next?</h2>
            <div className="pickDirection-buttons">
                {directionArray.map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => { click(key) }}
                        >{key}</button>
                    )
                })}
            </div>
            <p className="directionValue">{directionValue}</p>
            <NextBar
                active={direction.length > 0}dd
                next={
                    {
                        link: direction,
                        title:
                            direction.length > 0
                                ?
                                clickToTravel
                                :
                                selectDestination
                        ,
                    }
                }
            />
        </div>
    )
}

export default PickDirection