
const directionOptions = {
    Homeworld: {
        description: "You've chosen to return to your Homeworld",
        rootURL: '/explore/encounter/',
        target: 'Homeworld'
    },
    Discover: {
        description: "You've selected a promising target to visit for the first time",
        target: 'discover',
    },
    Revisit: {
        description: "You've chosen to return to a previously-visited location",
        target: 'revisit',
    }
}

const selectDestination = "Select a destination"
const clickToTravel = "Click here to energize!"
const nextStep = 'Next: '
const discoverHomeworld = 'Discover your Homeworld'


const locationOptions = {
    Discover: 'discover',
    Encounter: 'encounter',
    Revisit: 'revisit',
}

const newEncounter = {
    Habitable: `Habitable Body`,
    Uninhabitable: `Uninhabitable Body`,
    Inhabited: `Station Or Craft, Inhabited`,
    Uninhabited: `Station Or Craft, Uninhabited`,
    NaturalLocation: `Belt, Field, Or Nebula`,
    Anomaly: `Anomaly`,
}

const discoverAction = {
    header: `You have discovered `,
    descriptor: {
        Homeworld: `your homeworld`,
        Habitable: `a habitable location`,
        Uninhabitable: `an uninhabitable location`,
        Inhabited: `an inhabited location (station or craft)`,
        Uninhabited: `an uninhabited location (station or craft)`,
        NaturalLocation: `a Belt, Field, or Nebula`,
        Anomaly: `an Anomaly`,
    },
    start: `Starting with the player to the `,
    direction: {
        Homeworld: `right`,
        Habitable: `left`,
        Uninhabitable: `right`,
        Inhabited: `left`,
        Uninhabited: `right`,
        NaturalLocation: `left`,
        Anomaly: `left`,
    },
    end: ` of the GM, go around in a circle and each define one of its traits.`,


    finalStep: `Then name this location`,
    encounter: {
        rootURL: '/explore/encounter/',
        title: 'Click to encounter this location'
    },
}

const encounterAction = {
    Homeworld: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What threatens this place?",
            "What resources does it need?",
            "What question troubles it?",
        ]
    },
    Habitable: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "Wwhat flourishes here?",
            "What zone is best for colonization?",
            "Who else has staked a claim?"
        ]
    },
    Uninhabitable: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM1: `The GM then answers, and provides them with a situation.`,
        options: [
            "What rendered this place unsuitable to life?",
            "What used to live here?",
            "What resources can we exploit?",
        ]
    },
    Inhabited: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What do the want?",
            "Where are they from?",
            "Where are they going?",
        ]
    },
    Uninhabited: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "Why did they leave?",
            "What is left to find?",
            "Where were they going?",
        ]
    },
    NaturalLocation: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What happened here?",
            "What lives here?",
            "What can be found here?",
        ]
    },
    Anomaly: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What physics principle is being warped?",
            "What biological principle is being warped?",
            "What esoteric principle is being warped?",
        ]
    },
    finalStep: ``,
    encounter: {
        target: 'mark',
        title: 'Click to Leave A Mark on this location'
    },
}

const returnAction = {
    Homeworld: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who is assuming control?",
            "What cultural shift has occurred?",
            "What new disaster looms?"
        ]
    },
    Habitable: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What new lifeform has been discovered?",
            "What craves control of this place?",
            "What culture is burgeoning?"
        ]
    },
    Uninhabitable: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What has shifted in the body's composition?",
            "What is trying to prevent the body from changing?",
            "What is trying to change the body?"
        ]
    },
    Inhabited: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What is needed?",
            "Who else is involved?",
            "What history has been uncovered?"
        ]
    },
    Uninhabited: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who has moved in?",
            "What has drawn near?",
            "What object or site was discovered nearby?"
        ]
    },
    NaturalLocation: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "How can we improve things?",
            "What is there left to exploit?",
            "Who else has been here?"
        ]
    },
    Anomaly: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "How can I mitigate the consequences?",
            "Where is it spreading?",
            "Who else is affected?"
        ]
    },
    finalStep: `Update the location, then Leave A Mark.`
}

export {
    directionOptions,
    selectDestination,
    clickToTravel,
    nextStep,
    discoverHomeworld,
    locationOptions,
    newEncounter,
    discoverAction,
    encounterAction,
    returnAction
}