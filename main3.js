console.log("Consumo de Api- async")
const geoCode = async(lat, lng) =>{
    try {
        const link = await fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=909469124282096562207x67043`);
        const res = await link.json()
        console.log(res)
    } catch (err) {
        console.log(err);
    }
}

const apiRandom = async () =>{
    try {
        const object = await fetch('https://randomuser.me/api/')
        const arrObject = await object.json()
        const arrObject2 = arrObject.results
        arrObject2.map(element => {
            console.log(element.name)
        });
        const reso=arrObject2.some(a => a.name.title == 'Mr')
        console.log(reso)
    } catch (err) {
        console.log(err)
    }
}
apiRandom()


const docJson = async () =>{
    try {
        const obj = await fetch('table.json')
        const arrObj = await obj.json()
        const arrObj2 = arrObj.results
        arrObj2.map(element => {
            console.log(element.name)
        });
    } catch (err) {
        console.log(err)
    }
}
docJson()
