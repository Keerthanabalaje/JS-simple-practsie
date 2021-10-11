let keerthuAge = 21;
let KeerthuCollege = 'AU';
let isSheverygood = true ;
console.log(keerthuAge);
console.log(KeerthuCollege);
keerthuAge = 20;
console.log(keerthuAge);
console.log(isSheverygood);
//Object
let sow = {
    fullName : 'sowmishivaya',
    age : 21
}
console.log(sow);
// Array
let lachu = ['shree', 24];
lachu[2]= 'Edison';
console.log(lachu);
//Funcions
function namePrint (firstName){
    console.log('Hello'+ ' '+ firstName);
} 
namePrint('Lakshmi shree');
namePrint ('Keerthana');
namePrint('Sowmiya');
function square(value){
    console.log(value*value);
}
square(2);
square(4);
// stirng object
let dad = ' vijaya is employee ';
console.log(dad.includes('jay'));
console.log(dad.startsWith('vijaya'));
console.log(dad.endsWith('ee'));
console.log(dad.indexOf('jay')); 
console.log(dad.replace('is','was'));
console.log(dad.toUpperCase());
console.log(dad.trim());
console.log(dad.split(' '));

for(i=0; i<=5;i++)
{
    console.log(i);
}

for(i=0; i<=5;i++)
{
 if (i % 2 == 0)   
 console.log(i);
}
//FACTORY FUNCTION
function squareCalculation(radius){
    return {
        radius,
        draw (){
            console.log('draw');
        }
    };      
}
const value = (squareCalculation(1));
console.log(value);
//CONSTRUCTOR FUNCTION
function Cubecalculation(radius) {
    this.radius= radius;
    this.cube = function() {
        console.log(radius * radius * radius);
    }
}
const cubeValue = new Cubecalculation(2);
console.log(cubeValue);