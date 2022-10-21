function snapCrackle(maxValue){

    let string = []

    for(let i=1; i<= maxValue; i++){
        string.push(i)
    }

    for(let i=0; i< maxValue; i++){

        if(string[i]%2 !== 0 && string[i]%5 === 0){
            string[i] = "SnapCracle"
        }
        else if(string[i]%2 !== 0){
            string[i] = "Snap"
        }
        else if(string[i]%5 === 0){
            string[i] = "Crackle"
        }
    }
   

    return string.join(", ")
}
console.log(snapCrackle(12))


