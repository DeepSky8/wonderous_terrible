

const hyperdriveHeader = {
    minor: `Minor Change`,
    moderate: `Moderate Change`,
    major: `Major Change`,
}

const hyperdriveBody = {
    minor: `Save a single life, introduce an asset that can later be used, slightly alter but not reverse the course of events`,
    moderate: `Save a group of lives such as an away team or a city's population, introduce a helpful faction that still has its own agenda and doesn't wish to interfere too much, temporarily halt the current course of events`,
    major: `Save an entire civilization, introduce a helpful faction that is very invested in aiding the players, introduce an important asset earlier in the story via flashback, at least temporarily turn the tides of the current course of events`
}

const hyperdriveDistance = {
    minor: `Set a bowl 8 inches (2 centimeters) from the player.`,
    moderate: `Set a bowl 12 inches (3 centimeters) from the player.`,
    major: `Set a bowl 18 inches (45 centimeters) from the player.`,
}

const hyperdriveRollThrow = {
    rollApp: `Roll in the App`,
    bowlThrow: `Toss a Dice`,
}

const hyperdriveRoll = {
    minor: `Roll the hyper-die. Minor changes succeed on a 1-4`,
    moderate: `Roll the hyper-die. Moderate changes succeed on a 1-3`,
    major: `Roll the hyper-die. Major changes succeed on a 1-2`,
}

const hyperdriveTable = {
    minor: [1, 2, 3, 4],
    moderate: [1, 2, 3],
    major: [1, 2],
}

const hyperdriveProcess = {
    test: `Once the bowl is set up, the player who activated hyperdrives crouches down, takes a single d6, and tries to toss it into the bowl.`,
    lands: `If the d6 lands and stays in the bowl, the `,
    bounces: `If the d6 does not land in the bowl, or if it does not stay in the bowl, things `,
    the: `The `,
    success: `player succeeds at splicing the timelines and things go the way the player described.`,
    things: `Things `,
    failure: `become complicated and the GM introduces the player's change into the story, but they do so in a way that complicates the situation instead of helping to resolve it.`
}

const hyperdriveTitle = `Hyperdrive`
const hyperdriveInstructions = `If the GM and players ever disagree on what should happen next in a situation, or if the players ever disagree with what the GM has just narrated has occurred, the players (not their characters) may undertake a dangerous mission to redact the events that just transpired in the story and replace them with a grafted portion of the Best Possible Timeline.`
const hyperdriveFooter = `Several failures can cause the situation at a particular location to end in tragedy, but they should never do so in a way that prevents the players from ever exploring again. Losing supplies, crew members, failing to prevent something from happening to a vulnerable population, failing to prevent political consequences---these are all reasonable stakes. Destroying your players' crew and their ship and their homeworld and eradicating their species, unless this is something your group actively wants, probably shouldn't be on the table.`



export {
    hyperdriveHeader,
    hyperdriveBody,
    hyperdriveDistance,
    hyperdriveRollThrow,
    hyperdriveRoll,
    hyperdriveTable,
    hyperdriveProcess,
    hyperdriveTitle,
    hyperdriveInstructions,
    hyperdriveFooter
}