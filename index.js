//Ejercicio 1
const printMessage = (message) => {
    console.log(message);
};
//Ejercicio 2
const crearMultiplication = (number1, number2) => {
    let result = number1 * number2;
    return result;
};
//Ejercicio 3
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const createMultiplication = (number1, number2) => {
    let result = number1 * number2;
    return result;
};

const newArray = array.map((element) => createMultiplication(element, element));

console.log(newArray);

//Ejercicio 4
function getTop10AlcoholicBeers(beers) {
    const sortedBeers = beers.sort((a, b) => b.alcoholContent - a.alcoholContent);

    return sortedBeers.slice(0, 10);
}
function cervezaMayor(cervezas){
    let newoArray =[]
    for(let i = 0; i<10; i++){
        newArray.push(cervezas.toSorted((a,b) => b.abv - a.abv)[i].name) 
    }
    return newArray
}

console.log(cervezaMayor(beers))

// Ejercicio 5

function cervezaAmarga(cervezas){
    let newArray = []
    for(let i = 0; i<10; i++){
        newArray.push(cervezas.toSorted((a,b)=> a.ibu - b.ibu)[i].name)
    }
    return newArray
}

console.log(cervezaAmarga(beers))

// Ejercicio 6

function buscarCervezaNombre(cervezas,nombre){
    let cervezaObj = {}
    for(i of cervezas){
        if(i.name == nombre){
            cervezaObj = i
            return cervezaObj
        }
    }
    return "Beer no found."
}

console.log(buscarCervezaNombre(beers,"AB:12"))

// Ejercicio 7

function buscarCervezaIbu(cervezas,valor){
    let cervezaObj = {}
    for(i of cervezas){
        if(i.ibu == valor){
            cervezaObj = i
            return cervezaObj
        }
    }
    return `No found beer with ibu of${valor}`
}

console.log(buscarCervezaIbu(beers,40))

// Ejercicio 8

function buscarCervezaNombre(cervezas,nombre){
    let cervezaObj
    let x = 0
    for(i of cervezas){
        if(i.name == nombre){
            cervezaObj = x
            return cervezaObj
        }
        x++
    }
    return `${nombre} No exists.`
}

console.log(buscarCervezaNombre(beers,"Buzz"))

// Ejercicio 9

function buscarCervezaAlcohol(cervezas,abv){
    let arrayCervezas = []
    for(i of cervezas){
        if(i.abv <= abv){
            arrayCervezas.push({nombre: i.name, abv:i.abv, ibu:i.ibu})
        }
    }
    return arrayCervezas
}

console.log(buscarCervezaAlcohol(beers,100))

// Ejercicio 10

function cervezasOrdenadas(cervezas,propiedad,tof){
    let newArray =[]
    if(tof){
        for(let i = 0; i<10; i++){
            newArray.push(cervezas.toSorted((a,b) => a[propiedad] - b[propiedad])[i])
        }
    } else{
        for(let i = 0; i<10; i++){
            newArray.push(cervezas.toSorted((a,b) => b[propiedad] - a[propiedad])[i])
        }
    }
    return newArray
}

console.log(cervezasOrdenadas(beers,"ibu",false))
