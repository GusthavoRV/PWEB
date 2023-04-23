function validarMaiorNumero(num1,num2,num3){
   const array = [num1, num2, num3]

   return(console.log(Math.max(...array)))
};

function ordenarOrdemCrescente(num4,num5,num6){
    const array = [num4, num5, num6]

    array.sort(function(a, b) {
        return a - b;})
    
    return console.log(array)
}

module.exports = {
    validarMaiorNumero,
    ordenarOrdemCrescente
}