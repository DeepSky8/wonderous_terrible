
const directionOptions = {
    homeworld: {
        title: 'Homeworld',
        description: "You've chosen to return to your Homeworld",
        rootURL: '/explore/encounter/',
    },
    discover: {
        title: 'Discover',
        description: "You've selected a promising target to visit for the first time",
        rootURL: '/explore/discover/',
    },
    revisit: {
        title: 'Revisit',
        description: "You've chosen to return to a previously-visited location",
        rootURL: '/explore/revisit',
    }
}

const selectDestination = "Select a destination"
const clickToTravel = "Click here to energize!"
const nextStep = 'Next: '
const discoverHomeworld = 'Discover your Homeworld'


const locationOptions = {
    discover: 'Discover',
    encounter: 'Encounter',
    revisit: 'Revisit',
}

const newEncounter = {
    habitable: `Habitable Body`,
    uninhabitable: `Uninhabitable Body`,
    inhabited: `Station Or Craft, Inhabited`,
    uninhabited: `Station Or Craft, Uninhabited`,
    naturalLocation: `Belt, Field, Or Nebula`,
    anomaly: `Anomaly`,
}

const discoverAction = {
    header: `You have discovered `,
    descriptor: {
        homeworld: `your homeworld`,
        habitable: `a habitable location`,
        uninhabitable: `an uninhabitable location`,
        inhabited: `an inhabited location (station or craft)`,
        uninhabited: `an uninhabited location (station or craft)`,
        naturalLocation: `a Belt, Field, or Nebula`,
        anomaly: `an Anomaly`,
    },
    start: `Starting with the player to the `,
    direction: {
        Homeworld: `right`,
        habitable: `left`,
        uninhabitable: `right`,
        inhabited: `left`,
        uninhabited: `right`,
        naturalLocation: `left`,
        anomaly: `left`,
    },
    end: ` of the GM, go around in a circle and each define one of its traits.`,


    finalStep: `Then name this location`,
    encounter: {
        rootURL: '/explore/encounter/',
        title: 'Click to encounter this location'
    },
}

const encounterAction = {
    header: `You are encountering `,
    descriptor: {
        homeworld: `your homeworld`,
        habitable: `a habitable location`,
        uninhabitable: `an uninhabitable location`,
        inhabited: `an inhabited location (station or craft)`,
        uninhabited: `an uninhabited location (station or craft)`,
        naturalLocation: `a Belt, Field, or Nebula`,
        anomaly: `an Anomaly`,
    },
    promptGM1: ``,
    promptPlayers: `Players, choose one of the following prompts:`,
    promptGM2: `GM, answer and provide a situation.`,
    homeworld: [
        "What threatens this place?",
        "What resources does it need?",
        "What question troubles it?",
    ],
    habitable: [
        "Wwhat flourishes here?",
        "What zone is best for colonization?",
        "Who else has staked a claim?"
    ],
    uninhabitable: [
        "What rendered this place unsuitable to life?",
        "What used to live here?",
        "What resources can we exploit?",
    ],
    inhabited: [
        "What do the want?",
        "Where are they from?",
        "Where are they going?",
    ],
    uninhabited: [
        "Why did they leave?",
        "What is left to find?",
        "Where were they going?",
    ],
    naturalLocation: [
        "What happened here?",
        "What lives here?",
        "What can be found here?",
    ],
    anomaly: [
        "What physics principle is being warped?",
        "What biological principle is being warped?",
        "What esoteric principle is being warped?",
    ],

    finalStep: ``,
    mark: {
        rootURL: '/mark/',
        title: 'Next: Leave A Mark'
    },
}

const returnAction = {
    homeworld: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who is assuming control?",
            "What cultural shift has occurred?",
            "What new disaster looms?"
        ]
    },
    habitable: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What new lifeform has been discovered?",
            "What craves control of this place?",
            "What culture is burgeoning?"
        ]
    },
    uninhabitable: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What has shifted in the body's composition?",
            "What is trying to prevent the body from changing?",
            "What is trying to change the body?"
        ]
    },
    inhabited: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What is needed?",
            "Who else is involved?",
            "What history has been uncovered?"
        ]
    },
    uninhabited: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who has moved in?",
            "What has drawn near?",
            "What object or site was discovered nearby?"
        ]
    },
    naturalLocation: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "How can we improve things?",
            "What is there left to exploit?",
            "Who else has been here?"
        ]
    },
    anomaly: {
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