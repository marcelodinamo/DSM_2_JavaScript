function bhaskara(a, b, c){
    let resultados = [] // vetor vasio
    let delta = b**2 - (4 * a * c)
    
    if(delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (-b + Math.sqrt(delta)) / 2 * a
    let x2 = (-b - Math.sqrt(delta)) / 2 * a

    resultados.push(x1, x2) // "push" insere valor no vetor 
    return resultados
}



console.log(bhaskara(1, -10, 24))
