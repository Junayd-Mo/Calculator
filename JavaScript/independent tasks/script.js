const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for (let h = 0; h <= letters.length ; h++){

    if (letters[h] !== 'h') { 

    console.log(letters[h])
    }

    else if (letters[h] === 'h'){
        console.log(letters[h])
        for (let e = 0; e <= letters.length ; e++){
            if (letters[e] !== 'e'){
                console.log('h'+ letters[e])
                
            }
            else if (letters[e] === 'e'){
                console.log('h' + letters[e])
                for (let l = 0; l <= letters.length ; l++){
                    if (letters[l] !== 'l'){
                        console.log('he' + letters[l])
                    }

                    else if(letters[l] === 'l'){
                        console.log('he'+ letters[l])
                        break
                        
                    }
                    
                    

                    
                }
            break

            }
        }
        break
    }
    

}

