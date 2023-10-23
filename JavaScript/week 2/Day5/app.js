// Select the elements from the DOM that we need

let password = document.getElementById('password')
let generateBtn = document.getElementById('generateBtn')
let copyBtn = document.getElementById('copyBtn')


//  Function to generate a random 12 character password

function generatePassword(){
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Set a value for length of the passowrd

    let passwordLength = 12

    // Declare an empty string that will store our password

    let passwordString = ''
    
    //loop through characters string 12 times, selecting a random character each time

    for (let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordString += characters.substring(randomNumber, randomNumber +1)
    }
    password.value = passwordString


}
generateBtn.addEventListener("click", generatePassword);


function copyPassword(){
    navigator.clipboard.writeText(password.value)
    alert('Password copied to clipboard!')

}

document.getElementById("copyBtn").addEventListener("click", copyPassword);


function clearInput() {
    password.value = ''

} 

document.getElementById("clearBtn").addEventListener("click", clearInput);
