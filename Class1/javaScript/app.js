
function loadData() {
console.log("load data");
}

function myName() {
console.log("Miguel");
}

function sayHello(first, last) {
console.log("Hello " + first + " "+ last);
}

function taxReport(month, year) {
    
    if (month < 1) {
    console.error("Error, Invalid month number");
    return;// get out 
    }
    let result = month +  year;
    return result;

}

function testArray1() {
    for (let i = 0; i < 21; i++) {
    if(i != 13 && i != 17) {
        console.log(i);
        }
    }
}

function testOR(passcode){
    let key1 = "qwert";
    let key2 = "GODMODE";
    let key3 = "Pretty pelease";

    if (passcode === key1 || passcode === key2 || passcode === key3) {
    console.log("allowed");
    return("OK");

    }else{
    console.error("Not allowed");
    return "FAILED";
    }
}

function testAND(){
    if (mch1 === "on" && mch2 === "on" && mch3 === "on") {
    return "OK";
    }
}
function testArray2() {
    let pets = [
        'Aardvark',
        'Albatross',
        'Alligator',
        'Alpaca',
        'Ant',
        'Anteater',
        'Antelope',
        'Ape',
        'Armadillo',
        'Donkey',
        'Baboon',
        'Badger',
        'Barracuda',
        'Bat',
        'Bear',
        'Beaver',
        'Bee',
        'Bison',
        'Boar',
        'Buffalo',
        'Butterfly',
        'Camel',
        'Capybara',
        'Caribou',
        'Cassowary',
        'Cat',
        'Caterpillar',
        'Cattle',
        'Chamois',
        'Cheetah',
        'Chicken',
        'Chimpanzee',
        'Chinchilla',
        'Chough',
        'Clam',
        'Cobra',
        'Cockroach',
        'Cod',
        ];
    
    //add new elements
    pets.push("Django");
    //count
    console.log("There are: " + pets.length);
    //read
    console.log(pets[0]);
    //for loop to travel/ iterate the array
    for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
    }

    //delete 
    let index=0;
    pets.pets.splice(index,1);

}


function init() {
console.log("intro page");

loadData();
myName();

let lastName = "Bastidas";
sayHello("Miguel",lastName);

taxReport("Mayo", 1999);
console.log(total);

let another = taxReport(0, 10);

testArray1();

testArray2();
}

window.onlad=init;