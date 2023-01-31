import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { discoverHomeworld, nextStep } from "../../objects/encounterObjects";
import { speciesHeader } from "../../objects/speciesObjects";
import NavBar from "../navBar/NavBar";
import NextBar from "../navBar/NextBar";


const NewSpecies = () => {
    let { step } = useParams();
    const navArray = Object.keys(speciesHeader)
    const indexNow = navArray.indexOf(step)

    const next = (
        indexNow + 1 >= navArray.length
            ?
            {
                rootURL: '/explore/discover/',
                target: 'homeworld',
                title: nextStep + discoverHomeworld,
                active: false,
            }
            :
            {
                rootURL: '/newSpecies/',
                target: navArray[indexNow + 1],
                title: nextStep + navArray[indexNow + 1],
                active: false,
            }
    )

    return (

        <div>
            <div className="nav-bar">
                <NavBar
                    rootURL={'/newSpecies/'}
                    navArray={navArray}
                />
            </div>
            <Outlet />

            <NextBar
                goTo={next.rootURL + next.target}
                linkText={next.title}
                active={next.active}

            />


        </div>
    )
}

export default NewSpecies