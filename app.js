// default score = 0
let userScore = 0;
let compScore = 0;
// number of matches
let matchCounter = 1;
// score elements
const u_score_span = document.getElementById("user_score");
const c_score_span = document.getElementById("comp_score");
// choice elements
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
// current match elements
const img_c = document.getElementById("img_c");
const img_u = document.getElementById("img_u");
// message elements
const match_div = document.querySelector(".match > p");
const message_winner_div = document.querySelector(".message_winner > p");


//##################### Functions #############################
// function computer choice
function compChoice(){
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random()*3)];
  return choice;
}

// function match between user and computer
function curr_match(x){
  console.log(matchCounter)
  const compC = compChoice();
  const userC = x;    
  if(matchCounter >= 5){
    rock_div.disabled = true;
    paper_div.disabled = true;
    scissors_div.disabled = true;
    final_message();
  }
  else {
    // display users and computers choice
    img_c.src=`img/${compC}.png`
    img_u.src=`img/${userC}.png`
    // conditions for winning
    if(userC === "rock" && compC === "scissors" ||
    userC === "paper" && compC === "rock" ||
    userC === "scissors" && compC === "paper"){
      userScore ++;
      u_score_span.innerHTML = userScore;
      message_winner_div.innerHTML = "One point for you";
    }else if (userC === compC) {
      message_winner_div.innerHTML = "draw";
    }else{
      compScore ++;
      c_score_span.innerHTML = compScore;
      message_winner_div.innerHTML = "One point for the machine";
    }
  } 
}

function final_message(){
  if(userScore > compScore){
    message_winner_div.innerHTML = "User wins!";
  }else if(compScore > userScore){
    message_winner_div.innerHTML = "Computer wins!";
  }else{
    message_winner_div.innerHTML = "Draw! Nobody wins!";
  }
}

function game(){
  // Eventlisteners click on choice-divs
  rock_div.addEventListener("click", ()=>{
    curr_match("rock");
    matchCounter ++;
  })
  paper_div.addEventListener("click", ()=>{
    curr_match("paper");
    matchCounter ++;
  })
  scissors_div.addEventListener("click", ()=>{
    curr_match("scissors");
    matchCounter ++;
})


}
game()
