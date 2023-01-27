

const randomDigit = (max, min) => {
    const randomNumber = Math.random() * (max - min) + min
    console.log('randomNumber', randomNumber)
    return Math.floor(randomNumber);
}

export default randomDigit