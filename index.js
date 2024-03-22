let cats = [ "Milo","Otis","Garfield"]

  function destructivelyAppendCat(name) {
    cats.push(name);
}
cats.push("Spikes")

console.log(cats)

function destructivelyPrependCat(name){
  cats.unshift(name)

}
cats.unshift("Paw")

console.log(cats)

function destructivelyRemoveLastCat(){

  cats.pop()
}
cats.pop();

console.log(cats)

function destructivelyRemoveFirstCat(){

  cats.shift()
}
cats.shift();

console.log(cats)


    function appendCat(){
      const newCats = [...cats , "Broom"];
       
      return newCats;
      
    }
    
    function prependCat(){
      const newCat = ["Arnold", ...cats];
       
      return newCat;
      
    }

   

function removeLastCat() {
const listofcats = [];
    return cats.slice(0, -1);
}

function removeFirstCat() {
  const catlist =[];
  return cats.slice(1); 
}

    
