console.log("Funcion Asincrona");
const datos = [{
    id: 1,
    name: "Juan",
    years: 19
},{
    id: 2,
    name: "Laura",
    years: 29
},{
    id: 3,
    name: "Carolina",
    years: 19
},{
    id: 4,
    name: "Alvaro",
    years: 23
}];

setTimeout(() => console.log("Código asíncrono."), 0);
console.log("Código síncrono.");

// const getDatos = () =>{
//     setTimeout(() =>{
//         return datos;
//     }, 1500);
// }
// console.log(getDatos())

console.log("PROMESAS");
const getDatos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve (datos);
        }, 1500);
    });
}

const getPerson = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(person);
        }, 4000);
    });
}

async function fetchingPerson(){
    const personFetched = await getPerson();
    console.log(personFetched)
}

fetchingDatos()

console.log("Callback then")
// getDatos().then(datos => (console.log(datos)))


console.log("Asyc await");
async function fetchingDatos (){
    const datosFetched = await getDatos();
    console.log(datosFetched)
}
// fetchingDatos()

const number = [2,5,7,1];
let re = [...number].reverse().pop()
console.log(re);

console.log("***Sort - Ordenar (afecta al array)***")
const person = [{
    id: 1,
    name: "Luz",
    year: 22
},
{
    id:2,
    name:"Jennie",
    year:20,
},
{
    id: 3,
    name: "Pedro",
    year: 45 
},
{
    id: 4,
    name: "Juan",
    year:7
}, 
{
    id:5,
    name: "Luis",
    year:56
},
{
    id:6,
    name: "Lisa",
    year: 23
}]

console.log("Funtions  - sort")
const person2 = [...person]
person2.sort(function(first, second){
    // first.id < second.id ? 1 : -1
    if(first.id < second.id)
        return 1
    else
        return -1
});
console.log(`Original`, person);
console.log(person2);
console.log("Arrow function")

const person3 = [...person]
person3.sort((a, b) => {
    // first.year < second.year ? 1 : -1
    if(a.id < b.id)
        return 1;
    else
        return -1;
});
console.log(person3)
const person4 = [...person]
person4.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(person4)

console.log("***Filter*** ")
const result = person.filter(element => element.year >21)
const result2 = person.filter(element => element.id == 2)
const result3 = person.filter(element => element.name.length > 4)
console.log(result);
console.log(result2);
console.log(result3);
console.log(person);

console.log("***Find - Trae objeto(solo uno)***")
console.log("Find con funtion")
const result4 = person.find(function(persons){
    if(persons.name === 'Luz')
    return 1
});
console.log(result4)

console.log("Find con arrow function")
const result5 = person.find(persons => persons.year<10)
console.log(result5)
const result6 = person.find(persons => {
    if(persons.id === 6)
        return 1
});
console.log(result6)

console.log("***Some (devuelve true si se cumple una)***")
console.log("Cada vez que se cumple")
person.some(function (obj){
    return console.log(obj.id > 2 );
});
console.log("Some con function")
const res = person.some(function (obj){
    return obj.id > 10 
});
console.log(res);
console.log("Some con arrow function")
const res2 = person.some((obj => obj.year > 21))
console.log(res2);
console.log(person)

const object = [...person, {id: 10, name:"Julian", year: 40},{id: 34, name:"Rose", year:16},{id:23, name: "Carlos", year:23},{id:16, name:"Jisoo", year: 19},{id:15, name:"Checo", year:31}]
console.log(`Original Add:`, object) 
const object1 = [...object]
object1.sort((a,b) => a.year > b.year ? 1 : -1)
console.log(object1)
const object2 = [...object1]
console.log("***Reverse - Guarda en el array original***")
console.log(object2.reverse())
console.log(object2)

const resultObj = object.filter(element => element.year === 23)
console.log(resultObj)
const fillObj = Array(3).fill(object);
// console.log(fillObj)
const mapObj = fillObj.map((e) =>{
    return e
});
console.log(mapObj)


// fillObj.filter(element => element.year === 23)
// console.log(re)


console.log("Desatructuracion")

const retornoDesc = (id, name, year) =>{
    // const {id, name, year} = person
    console.log(id, name, year)
}

retornoDesc(person);


// console.log("Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2, B2, …, An, Bn. Los vectores tendrán la misma longitud.");

// let A = prompt(`Arreglo A`);
// let B = prompt(`Arreglo B`);
// let conut = 0
// const arrA = A.split(',');



// const arrayAux = [...]

// const arrayAux = arrA.map((e,index) =>{
//     let count=0;
//     if(count==0)
//         return e;
//     // console.log()
// })

// const arrAux2 = arrB.map((e,index) =>{
//     if(index %2!=0)
//         return [...arrAux,e];
//     // console.log()
// })
// console.log(arrAux)
// console.log(arrAux2)
// console.log(arrA);
// console.log(arrB);