

const newEncounter = {
    0: `Homeworld`,
    1: `Habitable Body`,
    2: `Uninhabitable Body`,
    3: `Station Or Craft, Inhabited`,
    4: `Station Or Craft, Uninhabited`,
    5: `Belt, Field, Or Nebula`,
    6: `Anomaly`,
    7: `Return to previous location`,
}

const discoverAction = {
    start: `Starting with the player to the `,
    end: ` of the GM, go around in a circle and each define one of its traits.`,
    0: `right`,
    1: `left`,
    2: `right`,
    3: `left`,
    4: `right`,
    5: `left`,
    6: `left`,
    7: 'Return to previous location',
    finalStep: `Name and encounter this location.`
}

const encounterAction = {
    0: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What threatens this place?",
            "What resources does it need?",
            "What question troubles it?",
        ]
    },
    1: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "Wwhat flourishes here?",
            "What zone is best for colonization?",
            "Who else has staked a claim?"
        ]
    },
    2: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM1: `The GM then answers, and provides them with a situation.`,
        options: [
            "What rendered this place unsuitable to life?",
            "What used to live here?",
            "What resources can we exploit?",
        ]
    },
    3: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What do the want?",
            "Where are they from?",
            "Where are they going?",
        ]
    },
    4: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "Why did they leave?",
            "What is left to find?",
            "Where were they going?",
        ]
    },
    5: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What happened here?",
            "What lives here?",
            "What can be found here?",
        ]
    },
    6: {
        promptGM1: ``,
        promptPlayers: `Players choose one of the following prompts:`,
        promptGM2: `The GM then answers, and provides them with a situation.`,
        options: [
            "What physics principle is being warped?",
            "What biological principle is being warped?",
            "What esoteric principle is being warped?",
        ]
    },
    7: 'Return to previous location',
    finalStep: `Name and encounter this location.`
}

const returnAction = {
    0: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who is assuming control?",
            "What cultural shift has occurred?",
            "What new disaster looms?"
        ]
    },
    1: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What new lifeform has been discovered?",
            "What craves control of this place?",
            "What culture is burgeoning?"
        ]
    },
    2: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What has shifted in the body's composition?",
            "What is trying to prevent the body from changing?",
            "What is trying to change the body?"
        ]
    },
    3: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "What is needed?",
            "Who else is involved?",
            "What history has been uncovered?"
        ]
    },
    4: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "Who has moved in?",
            "What has drawn near?",
            "What object or site was discovered nearby?"
        ]
    },
    5: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "How can we improve things?",
            "What is there left to exploit?",
            "Who else has been here?"
        ]
    },
    6: {
        promptGM1: `The GM describes how the location has changed since the last visit.`,
        promptPlayers: `Players choose from the following prompts:`,
        promptGM2: `The GM answers the prompt, and provides a situation.`,
        options: [
            "How can I mitigate the consequences?",
            "Where is it spreading?",
            "Who else is affected?"
        ]
    },
    7: 'Return to previous location',
    finalStep: `Update the location, then Leave A Mark.`
}
