// default score = 0
let userScore = 0;
let compScore = 0;
// number of matches
let matchNum = 3;
// score elements
const u_score_span = document.getElementById("user_score");
const c_score_span = document.getElementById("comp_score");
// choice elements
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
// message elements
const match_div = document.querySelector(".match");
const message_final_div = document.querySelector(".message_final");

//##################### Functions #############################
// function computer choice
function compChoice(){
  const choices = ["rock", "paper", "scissors"];
  const choice = choices[Math.floor(Math.random()*3)];
  return choice;
}

// function match between user and computer
function curr_match(x){
  const compC = compChoice();
  const userC = x;
  // conditions for winning
  if(userC === "rock" && compC === "scissors" ||
  userC === "paper" && compC === "rock" ||
  userC === "scissors" && compC === "paper"){
    userScore ++;
    u_score_span.innerHTML = userScore;
    match_div.innerHTML = "One point for user";
  }else if (userC === compC) {
    match_div.innerHTML = "draw";
  }else{
    compScore ++;
    c_score_span.innerHTML = compScore;
    match_div.innerHTML = "One point for computer";
  }
}
  function game(){
    // Eventlisteners click on choice-divs
    rock_div.addEventListener("click", ()=>{
      curr_match("rock");
    })
    paper_div.addEventListener("click", ()=>{
      curr_match("paper");
    })
    scissors_div.addEventListener("click", ()=>{
      curr_match("scissors");
  })
  // rock_div.removeEventListener("click", ()=>{curr_match("rock")});
  // paper_div.removeEventListener("click", ()=>{curr_match("paper")});
  // scissors_div.removeEventListener("click", ()=>{curr_match("scissors")});
}
game()
