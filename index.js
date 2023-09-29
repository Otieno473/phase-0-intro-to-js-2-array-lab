const cats=["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
  }
  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }
  
  function prependCat(name){
    const name_2=[name, ...cats];
    return name_2
  }
  
  function removeLastCat(){
    const newCats= cats.slice(0,cats.length-1);
    return newCats;
  }
  
  function removeFirsCat(){
    const catss= cats.slice(1)
    return catss;
  }