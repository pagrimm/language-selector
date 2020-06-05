//function to reveal quiz results based on cumulative point values
function revealResults(jsResults, pythonResults, cResults) {
  $("section.results").hide();
  $("h3#tie").hide();
  if (jsResults > pythonResults && jsResults > cResults) {
    $("section#javascript").show();
  }
  else if (pythonResults > jsResults && pythonResults > cResults) {
    $("section#python").show();
  }
  else if (cResults > jsResults && cResults > cResults) {
    $("section#c").show();
  }
  //handling ties
  else if (jsResults === pythonResults) {
    $("h3#tie").show();
    $("section#javascript").show();
    $("section#python").show();
  }
  else if (pythonResults === cResults) {
    $("h3#tie").show();
    $("section#python").show();
    $("section#c").show();
  }
  else if (jsResults === cResults) {
    $("h3#tie").show();
    $("section#javascript").show();
    $("section#c").show();
  }
}

//function to add player's name to the results titles
function addName(name) {
  $(".name-target").remove();
  $(".result-title").prepend("<span class=\"name-target\"></span>");
  $(".name-target").text(name);
}

//main submission user interface function
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    let jsResults = 0;
    let pythonResults = 0;
    let cResults = 0;
    //scoring function
    function score(input) {
      if (input === 1) {
        jsResults +=
      }
      if (input === 2) {
        pythonResults +=
      }
      if (input === 3) {
        cResults +=
      }
    }
    //scoring each question
    score(parseInt(("input[name='question2']:checked").val()));
    score(parseInt(("select#question3").val()));
    score(parseInt(("select#question4").val()));
    score(parseInt(("input[name='question5']:checked").val()));
    //add name to results
    addName($("input#name".val()));
    //reveal results based on scores
    revealResults(jsResults, pythonResults, cResults);
  });
});
