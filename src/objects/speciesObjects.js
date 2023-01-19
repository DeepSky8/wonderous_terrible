

const speciesHeader = {
    Biology: 'Describe your species biologically',
    Society: "Describe your species' society",
    Ship: 'Describe your premier ship',
    Crew: "Describe your premier ship's crew"

}

const speciesQuestions = {
    
    speciesBiology: {
        header: 'If the group as a whole agrees that the Civilization they wish to play is human, move on to the next step.',
        step1: `Otherwise, starting to the right of the GM, have each player define one biological trait about your Civilization's species.`,
        step2: 'Fill in any obvious follow-up details as a group (such as a finned species also living underwater).',
        step3: 'Give your species a name.',
        footer: `Broad facts are better than narrow facts (i.e. "they can fly" is better than "feathered appendages"), but if you need more facts to have a good mental picture of your species, feel free to go around the circle twice.`,

    },
    speciesSociety: {
        header: 'Societies can be highly unified or heavily divided in their thinking, but at least some piece of the society should have some interest in exploring space.',
        step1: `Each player describe a culture in their civilization's society. At least one player must provide a culture that wishes to explore space.`,
        step2: `Decide as a group what pushed the society to build a ship for interstellar exploration.`,
        step3: ``,
        footer: ``,
    },

    speciesShip: {
        header: `Simply leaping very high and then flapping your arms doesn't make for efficient space exploration, so the players will be using the civilization's premier ship to explore.`,
        step1: `Each player define a fact about the ship. This might include how it's propelled, what it looks like, or what kind of systems it has on board.`,
        step2: `If anything that is introduced here begs a follow-up question, answer that.`,
        step3: ``,
        footer: ``,
    },

    speciesCrew: {
        header: `Who are these people who are attempting to voyage out into the stars?`,
        step1: `Each player define a crew member.`,
        step2: `If there are any specific relationships between character that come up during this step (friendships, professional rivalries, coinciding philosophies), write them down.`,
        step3: ``,
        footer: `These crew members can be played interchangeably, and which player plays which crew member can rotate from scene to scene if the group wishes, but everyone should have at least one character that they genuinely like on board.`,
    },
}


export { speciesHeader, speciesQuestions }