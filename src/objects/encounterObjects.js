
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
        rootURL: '/explore/',
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
    end: ` of the GM, go around in a circle and each define one of its traits`,


    finalStep: `Then name this location`,
    encounter: {
        rootURL: '/explore/encounter/',
        title: 'Encounter this location'
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
    promptGM2: `GM, answer the prompt and provide a situation`,
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

    finalStep: `When the situation is considered resolved, Leave A Mark`,
    mark: {
        rootURL: '/mark/',
        title: 'Leave A Mark'
    },
}

const revisitOptions = {
    homeworld: `Homeworld`,
    habitable: `A habitable body / location`,
    uninhabitable: `An uninhabitable body / location`,
    inhabited: `An inhabited location (station or craft)`,
    uninhabited: `An uninhabited location (station or craft)`,
    naturalLocation: `A Belt, Field, or Nebula`,
    anomaly: `An Anomaly`,
}

const returnAction = {
    selectorInstruction: `Which type of location are you revisiting?`,
    header: `You are revisiting `,
    descriptor: {
        homeworld: `your homeworld`,
        habitable: `a habitable body / location`,
        uninhabitable: `an uninhabitable body / location`,
        inhabited: `an inhabited location (station or craft)`,
        uninhabited: `an uninhabited location (station or craft)`,
        naturalLocation: `a Belt, Field, or Nebula`,
        anomaly: `an Anomaly`,
    },
    promptGM1: `The GM describes how the location has changed since the last visit`,
    promptPlayers: `Players choose from the following prompts:`,
    promptGM2: `GM, answer the prompt and provide a situation`,
    homeworld: [
        "Who is assuming control?",
        "What cultural shift has occurred?",
        "What new disaster looms?"
    ],
    habitable: [
        "What new lifeform has been discovered?",
        "What craves control of this place?",
        "What culture is burgeoning?"
    ],
    uninhabitable: [
        "What has shifted in the uninhabitable body's composition?",
        "What is trying to prevent the uninhabitable body from changing?",
        "What is trying to change the uninhabitable body?"
    ],
    inhabited: [
        "What is needed?",
        "Who else is involved?",
        "What history has been uncovered?"
    ],
    uninhabited: [
        "Who has moved in?",
        "What has drawn near?",
        "What object or site was discovered nearby?"
    ],
    naturalLocation: [
        "How can we improve things?",
        "What is there left to exploit?",
        "Who else has been here?"
    ],
    anomaly: [
        "How can I mitigate the consequences?",
        "Where is it spreading?",
        "Who else is affected?"
    ],
    finalStep: `Update the location, then Leave A Mark`,
    mark: {
        rootURL: '/mark/',
        title: 'Next: Leave A Mark'
    },
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
    revisitOptions,
    returnAction
}