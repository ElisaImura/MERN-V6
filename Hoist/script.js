//example
console.log(example);
var example = "I'm the example!";

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//1
console.log(hello);                                   
var hello = 'world';
//var hello;
//console.log(hello); //logs undefined
//hello = 'world';


//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); //magnet
}
var needle;
needle = 'haystack';
test();
*/


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
function pront(){
    brendan = 'only okay';
    console.log(brendan); //funcion no llamada
}
var brendan;
brendan = 'super cool';
console.log(brendan); //'super cool'
*/


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
function eat(){
    var food; 
    food = 'half-chicken'; 
    console.log(food); //'half-chicken'
    food = 'gone';
}
var food;
food = 'chicken';
console.log(food);
eat();
*/


//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
var mean;
mean(); //error
console.log(food);
mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
*/


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre;
function rewind() {
    var genre
    genre = "rock";
    console.log(genre); //rock
    genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //undifened
genre = "disco";
rewind();
console.log(genre); //disco
*/


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); //seattle
    dojo = "burbank";
    console.log(dojo); //burbank
}
dojo = "san jose";
console.log(dojo); //san jose
learn();
console.log(dojo); //san jose
*/


//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


//results
{ name: 'Chicago', students: 65, hiring: true }
Uncaught TypeError: Assignment to constant variable. //Error porque dojo es una constante
*/