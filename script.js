var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var randomNumber = Math.floor(Math.random()*10)+1
var score = document.getElementById("score")
var totalscore = 3;

var cheatNumber = document.getElementById("cheatLine")
console.log(randomNumber)

function check(){
  var enterednumber = guessnumber.value;
  if(randomNumber==enterednumber)
  {
    console.log("right")
    result.textContent = "right"
    // totalscore = totalscore +1;
    // score.textContent = "Score:"+totalscore;
    alert("You won");
  }
  else{
    if(totalscore < 2){
      result.textContent = `Actual Guess is ${randomNumber}`;
      score.textContent = "Sorry You missed,  Dont give up Try Again";

    }else{
    totalscore = totalscore -1;
    score.textContent = "Chance Remaing: "+totalscore;
    result.textContent = "wrong"}
    
  }
}

function cheat() {
    console.log(randomNumber);
    cheatNumber.textContent = `${randomNumber}`
}