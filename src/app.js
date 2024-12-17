


let pronoun = ["the", "our","your"];
let adj = ["great", "big","excelent"];
let noun = ["jogger", "racoon","randow"];
let extencion = [".com", ".net",".es"];

function Pronoun() {
  let randomNumberp = Math.floor(Math.random() * 3);
  if (randomNumberp == 0) {
    return pronoun[0];
  } else if(randomNumberp == 1) {
    return pronoun[1];
  } else if(randomNumberp == 2) {
    return pronoun[2];
  }
}
Pronoun();

function Adj() {
    let randomNumberp = Math.floor(Math.random() * 3);
    if (randomNumberp == 0) {
      return adj[0];
    } else if(randomNumberp == 1) {
      return adj[1];
    } else if(randomNumberp == 2) {
      return adj[2];
    }
  }
Adj();

function Noun() {
    let randomNumberp = Math.floor(Math.random() * 3);
    if (randomNumberp == 0) {
      return noun[0];
    } else if(randomNumberp == 1) {
      return noun[1];
    } else if(randomNumberp == 2) {
      return noun[2];
    }
  }
Noun();

function Extencion() {
    let randomNumberp = Math.floor(Math.random() * 3);
    if (randomNumberp == 0) {
      return extencion[0];
    } else if(randomNumberp == 1) {
      return extencion[1];
    } else if(randomNumberp == 2) {
      return extencion[2];
    }
  }
Noun();

  //write your code here
// console.log("Hello Rigo from the console!");
console.log(Pronoun(pronoun)+Adj(adj)+Noun(noun)+Extencion(extencion));
