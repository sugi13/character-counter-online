let characterField = document.getElementById("character-field");
let wordCount = document.getElementById("word-count-field");
let characterCount = document.getElementById("character-count-field");


function count(){
  for(let letter in characterField.value){
    characterCount.innerHTML = `💡Characters : ${Number(letter) + 1}`;
    wordCount.innerHTML = `💡Words: ${characterField.value.split(' ').length}`;
  }
}



characterField.addEventListener("keyup", count);