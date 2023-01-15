
const leaveMarkInstructions = `The GM should pick one of the following and note it down or draw it on the map next to the encounter location.`

const leaveMarkHeader = {
    0: `Add An Encounter Log`,
    1: `Adjust An Existing Mark`,
    2: `Area Made A Home`,
    3: `Area Made Anonymous`,
    4: `Area Made Enticing`,
    5: `Area Made Hazardous`,
    6: `Political Locus`,
    7: `Structure Built/Discovered`,
}

const leaveMarkBody = {
    0: `If this is your first time having an encounter at this location, the easiest thing to do is to jot down a short sentence describing the result. Similarly, if you've just re-explored a location and the consequences of your reexploration don't neatly fit into any of the options below, you'll want to pick this as well.`,
    1: `Instead of leaving a new mark, adjust an existing mark on a location to better reflect how the location has been changed by the encounter. A colony might go from prosperous to struggling or vice versa, different factions may become entangled in a political brawl, or the delicious hordes of swarmtalope that once roamed the plains of a habitable planet may now be replaced with equally profitable mineable space debris.`,
    2: `A colony has been built, a migrating fleet has claimed this sector, an interstellar hyperfauna uses this place as a breeding ground, or some other event has occurred that has caused this area to be recognized as the place where a faction or being can reliably be found.`,
    3: `Due to either an eradication of distinguishing features or natural resources, or the construction of a planetary cloaking facility, or its removal from known maps, or some other factor, this area is now no longer known nor interesting to most other parties.`,
    4: `A resource or scientifically interesting anomaly or political conflict or some other feature has made this a place of interest to factions and beings that know about it.`,
    5: `As a result of the players' meddling, this location has become a debris field, has come unstuck in time, has been infested by a particular metavirus that is transmitted only through the text of indie RPGs oh no it's too late for you, or has been flooded with radiation or dangerous fauna.`,
    6: `This area has become or has been revealed to already be politically interesting to one or more factions or beings. It might be someone's holy site, or it might be a trading port, or it might be contested territory, or any other complication you can conceive.`,
    7: `A space station, satellite, stationary weapon emplacement, transmitter relay, library of all cosmic knowledge, or other useful construction has been built or discovered here, either by the players or by other forces.`,
}

const leaveMarkFooter = {
    0: `Encounter Logs don't tend to represent massive, cataclysmic changes to a location (those are what most of the options below are for), but you should always document your experiences at a place before you move on.`,
    1: `If none of a location's existing marks really changed as a result of your latest visit to this location, consider using Add An Encounter Log instead.`,
    2: `This mark does not need to be applied to your homeworld, but it may be used to signal that some other faction or entity has taken up residence there as well.`,
    3: `If Political Locus is later applied, remove this mark.`,
    4: ``,
    5: ``,
    6: `If Area Made Anonymous is later applied, remove this mark.`,
    7: `This is mostly intended for adding new structures that came up while the party was dealing with a situation, so you don't need to pick this option if a location started with structures on it.`,
}