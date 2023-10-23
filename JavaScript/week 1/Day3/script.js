// let array = ['negro','guy']
// console.log(array)

// console.table(array)


// let cards = ['Hearts','Clubs', 'Spades','Diamonds']

// let currentCard = ''
// while (currentCard !== 'Spades'){
//     currentCard =  cards[Math.floor(Math.random()*4)]
//     console.log(currentCard)
    
// }

// console.log('GAME OVER!!!')


// for (let i = 1; i <= 5; i++){
//     if (i === 6){
//         break
//     }
//     console.log(i)
// }



let favouriteShows = ['One Piece','Naruto','Magi','The Promised Neverland','Black Clover']
console.log(favouriteShows)
favouriteShows.push('HxH','Made In Abyss')

console.log(favouriteShows)

for (let i = 0; i <= favouriteShows.length; i++){
    console.log(favouriteShows[i])
}


for (let i = 0; i <= 9; i++){ 
    console.log(Math.round(Math.random()*100))
}

console.log('')

for (let i = 20; i >= 0; i--){
    console.log(i)
}

console.log('')

let numbers = []

for (let i = 1; i <= 5; i++){
    numbers.push(Math.round(Math.random()*50))
    // console.log(Math.round(Math.random()*50))    
}

for (let i = 0; i <= numbers.length; i++){
    if (numbers[i] % 5 === 0){
        console.log(numbers[i] + ' is divisible by 5')
    } else {
        console.log(numbers[i] + ' is NOT divisible by 5')
    }
}