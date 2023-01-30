

const randomDigit = (max=6, min=0) => {
    const randomNumber = Math.random() * (max - min) + min
    console.log('randomNumber', randomNumber)
    return Math.floor(randomNumber);
}

export default randomDigit