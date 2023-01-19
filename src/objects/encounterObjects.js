
const directionOptions = {
    Homeworld: "You've chosen to return to your Homeworld",
    Discover: "You've selected a promising patch of space to visit for the first time",
    Revisit: "You've chosen to return to a previously-visited location"
}

const selectDestination = "Select a destination"
const clickToTravel = "Click here to energize!"

const newEncounter = {
    Habitable: `Habitable Body`,
    Uninhabitable: `Uninhabitable Body`,
    Inhabited: `Station Or Craft, Inhabited`,
    Uninhabited: `Station Or Craft, Uninhabited`,
    NaturalLocation: `Belt, Field, Or Nebula`,
    Anomaly: `Anomaly`,
}

const discoverAction = {
    start: `Starting with the player to the `,
    end: ` of the GM, go around in a circle and each define one of its traits.`,
    Homeworld: `right`,
    Habitable: `left`,
    Uninhabitable: `right`,
    Inhabited: `left`,
    Uninhabited: `right`,
    NaturalLocation: `left`,
    Anomaly: `left`,
    finalStep: `Name and encounter this location.`
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
    finalStep: `Name and encounter this location.`
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
    newEncounter,
    discoverAction,
    encounterAction,
    returnAction
}