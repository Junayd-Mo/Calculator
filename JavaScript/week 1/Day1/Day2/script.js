// let guy = 10

// console.log(10 === guy)

// switch (guy){
//     case 2 :
//         console.log('number is 2')
//         break

//     case 101 :
//         console.log("number is 10")
//         break

//     default:
//         console.log("we dont know the number")
// }

// OR operator is ||
// AND operator is &&
// NOT operator is !==
// comparrison is ==
// comparing the value and data type ===

const age = 'guy'

// if (age >= 18){
//     console.log("No problem, what would you like to drink?")
// } else {
//     console.log("Sorry, you are underage")
// }

switch (true){
    case age >= 18:
        console.log("No problem, what would you like to drink?")
        break

    case age < 18:
        console.log("Sorry, you are underage")
        break

    default:
        console.log("You have not given me you age")

};


const password = "Pas"


if (password.length >= 8){
    console.log(password)

}else {
    console.log('password is too short')
}


const number = 10

if (number%5 === 0){
    if (number % 3 === 0){
    console.log('number is divisible by 5 and 3 ')

}}else {
    console.log("not a multiple of 3 and/or 5")
}


if (number%5 === 0 && number%3 ===0){
    console.log('fizzbuzz')
}else if (number%5 === 0 && number%3 !== 0 ){
    console.log('buzz')
}else if (number%5 !== 0 && number%3 == 0 ){
    console.log('fizz')

}