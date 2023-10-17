//==================Exercise #1 ==========//
function findWords(dogstring, dognames) {
    let found = false;
  
    for (let i = 0; i < dognames.length; i++) {
      if (dogstring.toLowerCase().includes(dognames[i].toLowerCase())) {
        console.log("Matched " + dognames[i]);
        found = true;
      }
    }
  
    if (!found) {
      console.log("No Matches");
    }
  }
  
  let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
  let dog_names = ["Max","HAS","PuRple","dog"]
  
  findWords(dog_string, dog_names);

//==================Exercise #2 ==========//

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
replaceEvens(arr);
console.log(arr);

//==================Codewars problem #1 ==========//
https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript/65270a1d003d3b272b87b6fc

function neutralise(s1, s2) {
    const result = [];
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
        result.push(s1[i]); 
      } else {
        result.push('0'); 
      }
    }
    return result.join('');
  }
  
const result1 = neutralise("+-+", "+--"); 
const result2 = neutralise("--++--", "++--++"); 
const result3 = neutralise("-+-+-+", "-+-+-+");
const result4 = neutralise("-++-", "-+-+");
  
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//==================Codewars problem #2==========//
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript/652edc42725baa12ce63b64c

function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
        return String.fromCharCode(array[i].charCodeAt(0) + 1);
      }
    }
  }
  console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
  console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
