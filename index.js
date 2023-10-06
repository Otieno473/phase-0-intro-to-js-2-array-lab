// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name){
    cats;
    console.log(cats.push(name))
 }
destructivelyAppendCat.push("Ralph");
function destructivelyPrependCat(name){
    cats;
    console.log(cats.unshift(name))
 }
 destructivelyPrependCat.unshift("Bob");
 function destructivelyPrependCat(name){
    cats;
    console.log(cats.unshift(name))
 }
 destructivelyPrependCat.unshift("Bob");
 function destructivelyRemoveLastCat(name){
    cats;
    console.log(cats.pop(name))
 }
 destructivelyRemoveLastCat.pop();
 function destructivelyRemoveFirstCat(name){
    cats;
    console.log(cats.shift(name))
 }
 destructivelyRemoveFirstCat.shift();
 function appendCat(name){
    const newCat = [...cats,name];
    return newCat;
 }
 function prependCat(name){
    const newCat = [name, ...cats];
    return newCat;
 }
 function removeLastCat(){
    const newCat= cats.slice(0,2);
    return newCat;
 }
 function removeFirstCat(){
    const newCat= cats.slice(1);
    return newCat;
 }