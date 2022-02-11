function triangulo(operador1,operador2,operador3){
    if (operador1 == operador2 && operador2 == operador3){
        return "Triangulo Equilátero"
    }
    else if (operador1 == operador2 || operador2 == operador3 || operador1 || operador3 ){
        return "Triangulo Isósceles" 
    }
    else {
        return "Triangulo Escaleno"
    }
}

console.log(triangulo(5,5,5))
console.log(triangulo(5,6,5))
console.log(triangulo(4,6,5))