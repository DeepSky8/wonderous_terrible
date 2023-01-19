import React from "react";
import { useLocation } from "react-router-dom";
import { speciesHeader, speciesQuestions } from "../../objects/speciesObjects";
import NavBar from "../navBar/NavBar";
import NextBar from "../navBar/NextBar";
import SpeciesDisplay from "./SpeciesDisplay";

const NewSpecies = () => {
    let location = useLocation()
    let step = location.pathname.split("/")[2]
    const info = speciesQuestions[`species${step}`]
    const navArray = Object.keys(speciesHeader)
    const indexNow = navArray.indexOf(step)
    const next = (
        indexNow + 1 >= navArray.length
            ?
            {
                title: 'Next: Explore Space',
                link: '/explore/Homeworld/discover'
            }
            :
            {
                title: 'Next: ' + navArray[indexNow + 1],
                link: navArray[indexNow + 1]
            }

    )




    return (

        <div>
            <div className="nav-bar">
                <NavBar
                    navArray={navArray}
                />
            </div>
            <SpeciesDisplay
                info={info}
            />

            <NextBar
                next={next}
            />


        </div>
    )
}

export default NewSpecies