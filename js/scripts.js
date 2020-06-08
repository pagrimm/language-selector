//BUSINESS LOGIC
//function to get inputs from the name and favorite color field
function getNameInputs(){
  let name = [
    $("input#name").val(),
    $("input#question1").val()
  ];
  return name;
};

//function to get inputs from the scored fields
function getScoreInputs() {
  let scores = [
    parseInt($("input[name='question2']:checked").val()),
    parseInt($("select#question3").val()),
    parseInt($("select#question4").val()),
    parseInt($("input[name='question5']:checked").val())
  ];
  return scores;
};

//function to add up scores and determine the winner
function evalWinner(scores) {
  let highScore;
  let winnerObjs;
  let winner;
  let totals = [
    {"name":"javascript","score":0},
    {"name":"python","score":0},
    {"name":"c","score":0},
  ];
  //loop through scores array, add up total scores
  for (i = 0; i < scores.length; i++) {
    if (scores[i] === 1) {
      totals[0].score++;
    }
    else if (scores[i] === 2) {
      totals[1].score++;
    } 
    else if (scores[i] === 3) {
      totals[2].score++;
    }
  };
  //finds the highest score value in the array of objects
  highScore = Math.max(...totals.map(total => total.score));
  //filter the array of objects to find any objects with score values that equal the high score
  winnerObjs = totals.filter(total => total.score == highScore);
  //convert the name values of winning object/objects to an array
  winner = winnerObjs.map(({ name }) => name); 
  return winner;
};

//function to break ties, returns a single entry in 
function tieBreaker (winner) {
  let newWinner = winner;
  if (parseInt($("input[name='tiebreaker-question']:checked").val()) === 1) {
    newWinner.splice(1,1)
    return newWinner;
  }
  else {
    newWinner.splice(0,1)
    return newWinner;
  }
};

//function to reveal the winning section
function revealWinner(winner) {
  if (winner.length === 1) {
    $("section#" + winner[0]).show();
    $("section#" + winner[0]).addClass("active");
    document.querySelector("section.active").scrollIntoView({behavior: 'smooth'});
  }
  else {
    lockQuiz();
    $("section.tiebreaker").show();
    document.querySelector("section.tiebreaker").scrollIntoView({behavior: 'smooth'});
  }
};

//function to add name to the results title, add favorite color to name
function addName(name) {
  $(".result-title").prepend("<span class=\"name-target\"></span>");
  $(".name-target").text(name[0]);
  $(".name-target").css("color", name[1]);
};

//function to prevent user input in the quiz section
function lockQuiz() {
  $("form#quiz-form input").prop('disabled', true);
  $("form#quiz-form select").prop('disabled', true);
  $("form#quiz-form button").prop('disabled', true);
  $("section.quiz").addClass("grayout");
};

//function to clear all inputs, reset radio buttons to default positions
function resetInputs() {
  $("select").val("");
  $("input[type=text]").val("");
  $("input[type=radio]").prop("checked", false);
  $("input.default-radio").prop("checked", true);
  $("input[type=color]").val("#62c462");
};

//function to reset results to hidden, enable disabled input fields
function resetResults(){
  $("section.results").hide();
  $("section.results").removeClass("active");
  $("section.tiebreaker").hide();
  $(".name-target").remove();
  $("form#quiz-form input").prop('disabled', false);
  $("form#quiz-form select").prop('disabled', false);
  $("form#quiz-form button").prop('disabled', false);
  $("section.quiz").removeClass("grayout");
};

//USER INTERFACE LOGIC
$(document).ready(function() {
  let name;
  let scores;
  let winner;
  $("form#quiz-form").submit(function(event) {
    event.preventDefault();
    name = getNameInputs();
    scores = getScoreInputs();
    winner = evalWinner(scores);
    resetResults();
    addName(name);
    revealWinner(winner);
  });
  $("#reset").click(function(){
    resetInputs();
    resetResults();
  });
  $("form#tiebreaker-form").submit(function(event) {
    event.preventDefault();
    resetResults();
    addName(name);
    winner = tieBreaker(winner);
    revealWinner(winner);
  });
});