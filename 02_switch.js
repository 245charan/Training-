let weatherUserInput = prompt('How is weather today ?\nSunny? \nRainy?\nCloudy?')
let weather = weatherUserInput.toLowerCase()
switch(weather){
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for rain coat.')
}