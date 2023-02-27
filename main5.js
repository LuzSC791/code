let a = parseFloat(prompt(`Ingresa un numero: `));
let b = parseFloat(prompt(`Ingresa un numero: `));

// const multiplica = (tam,num) =>{
//     let aux = 0, aux2 = 0;
//     const arr = Array(Math.floor(tam)).fill(num);
//     console.log(tam);
//     console.log(num);
//     arr.forEach(number => aux = aux+number);
    
//     aux2 = tam - Math.floor(tam);
//     const arr2 = Array(10).fill(aux2);
//     aux2=0;
//     arr2.forEach(number => aux2 = aux2+number);
    
//     aux2 = Math.round(aux2);
//     const arr3 = Array(aux2).fill(num);
//     aux2=0;
//     arr3.forEach(number => aux2 = aux2+number);
//     aux2 = (aux2/10) + aux;
//     return console.log(aux); 
// }
// multiplica(a,b)

// let a = parseInt(prompt(`Ingresa un numero: `));
// let b = parseInt(prompt(`Ingresa un numero: `));

// const multi = (a,b) =>{
//     return console.log(" ".repeat(a).repeat(b).length);
// }
// multi(a,b)

const multi = (a,b) =>{
    return console.log(a/(1/b))
}
multi(a,b)