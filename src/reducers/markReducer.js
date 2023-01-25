
const defaultMarkState = {
    selected: false,
    stayHere: `/mark`,
    goTo: `/explore`,


    // Display flags
    log: false,
    adjust: false,
    home: false,
    anonymous: false,
    enticing: false,
    hazardous: false,
    locus: false,
    structure: false,
}

const markReducer = (state, action) => {
    switch (action.type) {


        default:
            return {
                state
            }
    }
}

export { markReducer, defaultMarkState }