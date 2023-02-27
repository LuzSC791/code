const API_URL = 'https://jsonplaceholder.typicode.com/users'
const HTMLResponse = document.querySelector("#root");
const ul = document.createElement('ul');

const jsonLi = async () =>{
    try {
        const object = await fetch('https://jsonplaceholder.typicode.com/users')
        const obj = await object.json()
        obj.forEach(user => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(`${user.name} Correo: ${user.email}  Direccion - Calle: ${user.address.street}, en la ciudad ${user.address.city} con habitación ${user.address.suite}`));
            ul.appendChild(li);
        });

        HTMLResponse.appendChild(ul);
    } catch (err) {
        console.log('No conecta api',err)
        
    }
}

jsonLi()

// const jsonLi = async () =>{
//     try {
//         const object = await fetch('https://randomuser.me/api/')
//         const arrObject = await object.json()
//         const arrObject2 = arrObject.results
//         arrObject2.map(element => {
//             console.log(element.name)
//         });
//         const reso=arrObject2.some(a => a.name.title == 'Mr')
//         console.log(reso)
//     } catch (err) {
//         console.log(err)
//     }
// }