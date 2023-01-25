import { newEncounter } from "../objects/encounterObjects"

const newDestination = (digit) => {
    const destinationArray = Object.keys(newEncounter)
    return destinationArray[digit]
}

export default newDestination