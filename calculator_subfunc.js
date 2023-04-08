
var add = (num1, num2) => {             
    return num1 + num2
}
var multiply = (num1, num2) => {        
    return num1 * num2
}
var subtract = (num1, num2) => {        
    return num1 - num2
}
var divide = (num1, num2) => {          
    return num1 / num2
}


function calculator (num1,num2,operator) {    
    console.log(operator (num1,num2))
}

calculator(2,8,divide)  

