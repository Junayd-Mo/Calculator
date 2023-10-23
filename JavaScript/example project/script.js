let btnDelete = document.getElementById('delete')
let btnEquals = document.getElementById('equals')
let display = document.getElementById('display')


function Delete(){
    let new_display = display.value.slice(0,-1)
    display.value = new_display
}

btnDelete.addEventListener('click', Delete)

function Equals (){


    for (i=0; i <= display.value.length;i++){
        if (display.value[i] === '+'){
           let number = Number(display.value.slice(0,i)) + Number(display.value.slice(i+1, display.value.length))
           display.value = number
        }else if (display.value[i] === '/'){
            let number = Number(display.value.slice(0,i)) / Number(display.value.slice(i+1, display.value.length))
            display.value = number
        }else if (display.value[i] === '*'){
            let number = Number(display.value.slice(0,i)) * Number(display.value.slice(i+1, display.value.length))
            display.value = number
        }else if (display.value[i] === '-' && display.value[0] !== '-'){
            let number = Number(display.value.slice(0,i)) - Number(display.value.slice(i+1, display.value.length))
            display.value = number
        }
}
}
btnEquals.addEventListener('click', Equals)     

let num = -5 + 4

console.log(typeof(num))