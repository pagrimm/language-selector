//function to reveal quiz results based on cumulative point values
function revealResults(jsResults, pythonResults, cResults) {
  //reset state of results to initial state
  $("section.results").hide();
  $("section.results").removeClass("active");
  $("h3#tie").hide();
  //handling win conditions
  if (jsResults > pythonResults && jsResults > cResults) {
    $("section#javascript").show();
    $("section#javascript").addClass("active");
  }
  else if (pythonResults > jsResults && pythonResults > cResults) {
    $("section#python").show();
    $("section#python").addClass("active");
  }
  else if (cResults > jsResults && cResults > pythonResults) {
    $("section#c").show();
    $("section#c").addClass("active");
  }
  //handling tie conditions
  else if (jsResults === pythonResults) {
    $("h3#tie").show();
    $("section#javascript").show();
    $("section#javascript").addClass("active");
    $("section#python").show();
  }
  else if (pythonResults === cResults) {
    $("h3#tie").show();
    $("section#python").show();
    $("section#python").addClass("active");
    $("section#c").show();
  }
  else if (jsResults === cResults) {
    $("h3#tie").show();
    $("section#javascript").show();
    $("section#javascript").addClass("active");
    $("section#c").show();
  }
}

//function to add player's name to the results title
//add color style based on their favorite color
function addName(name, color) {
  $(".name-target").remove();
  $(".result-title").prepend("<span class=\"name-target\"></span>");
  $(".name-target").text(name);
  $(".name-target").css("color", color)
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
        jsResults += 1;
      }
      if (input === 2) {
        pythonResults += 1;
      }
      if (input === 3) {
        cResults += 1;
      }
    }
    //scoring each question
    score(parseInt($("input[name='question2']:checked").val()));
    score(parseInt($("select#question3").val()));
    score(parseInt($("select#question4").val()));
    score(parseInt($("input[name='question5']:checked").val()));
    //add name and favorite color to results
    addName($("input#name").val(), $("input#question1").val());
    //reveal results based on scores
    revealResults(jsResults, pythonResults, cResults);
    //scroll to the revealed results
    document.querySelector("section.active").scrollIntoView({behavior: 'smooth'});
  });
});