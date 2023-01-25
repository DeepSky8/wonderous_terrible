

const leaveMarkIntroduction = `The GM should select the Mark that most closely matches what happened at this location.`
const leaveMarkReminder = ` Newly discovered locations frequently receive a simple encounter log entry.`
const preMarkButton = "Select a Mark"

const afterMarkTarget = "/explore"

const afterMarkButton = `Select a new destination`

const leaveMarkHeader = {
    log: `Add An Encounter Log`,
    adjust: `Adjust An Existing Mark`,
    home: `Area Made A Home`,
    anonymous: `Area Made Anonymous`,
    enticing: `Area Made Enticing`,
    hazardous: `Area Made Hazardous`,
    locus: `Political Locus`,
    structure: `Structure Built / Discovered`,
}

const leaveMarkBody = {
    log: `If this is your first time having an encounter at this location, the easiest thing to do is to jot down a short sentence describing the result. Similarly, if you've just re-explored a location and the consequences of your reexploration don't neatly fit into any of the other options, you'll want to pick this as well.`,
    adjust: `Instead of leaving a new mark, adjust an existing mark on a location to better reflect how the location has been changed by the encounter. A colony might go from prosperous to struggling or vice versa, different factions may become entangled in a political brawl, or the delicious hordes of swarmtalope that once roamed the plains of a habitable planet may now be replaced with equally profitable mineable space debris.`,
    home: `A colony has been built, a migrating fleet has claimed this sector, an interstellar hyperfauna uses this place as a breeding ground, or some other event has occurred that has caused this area to be recognized as the place where a faction or being can reliably be found.`,
    anonymous: `Due to either an eradication of distinguishing features or natural resources, or the construction of a planetary cloaking facility, or its removal from known maps, or some other factor, this area is now no longer known nor interesting to most other parties.`,
    enticing: `A resource, scientifically interesting anomaly, political conflict, or some other feature has made this a place of interest to factions and beings that know about it.`,
    hazardous: `As a result of the players' meddling, this location has become a debris field, has come unstuck in time, has been infested by a particular metavirus that is transmitted only through the text of indie RPGs oh no it's too late for you, or has been flooded with radiation or dangerous fauna.`,
    locus: `This area has become or has been revealed to already be politically interesting to one or more factions or beings. It might be someone's holy site, or it might be a trading port, or it might be contested territory, or any other complication you can conceive.`,
    structure: `A space station, satellite, stationary weapon emplacement, transmitter relay, library of all cosmic knowledge, or other useful construction has been built or discovered here, either by the players or by other forces.`,
}

const leaveMarkFooter = {
    log: `Encounter Logs don't tend to represent massive, cataclysmic changes to a location (represented by most of the other options), but you should always document your experiences at a place before you move on.`,
    adjust: `If none of a location's existing marks really changed as a result of your latest visit to this location, consider using Add An Encounter Log instead.`,
    home: `This mark does not need to be applied to your homeworld, but it may be used to signal that some other faction or entity has taken up residence there as well.`,
    anonymous: `If Political Locus is later applied, remove this mark.`,
    enticing: ``,
    hazardous: ``,
    locus: `If Area Made Anonymous is later applied, remove this mark.`,
    structure: `This is mostly intended for adding new structures that came up while the party was dealing with a situation, so you don't need to pick this option if a location started with structures on it.`,
}

export {
    leaveMarkIntroduction,
    leaveMarkReminder,
    preMarkButton,
    afterMarkTarget,
    afterMarkButton,
    leaveMarkHeader,
    leaveMarkBody,
    leaveMarkFooter,
}