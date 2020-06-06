//function to total score and evaluate winner
function evalWinner(scores) {
  let winner;
  let jsTotal = 0;
  let pythonTotal = 0;
  let cTotal = 0;
  //totaling scores for each language
  for (i = 0; i < scores.length; i++) {
    if (scores[i] === 1) {
      jsTotal++;
    } else if (scores[i] === 2) {
      pythonTotal++;
    } else if (scores[i] === 3) {
      cTotal++;
    }
  }
  //handling win conditions
  if (jsTotal > pythonTotal && jsTotal > cTotal) {
    winner = "javascript"
    return winner;
  }
  else if (pythonTotal > jsTotal && pythonTotal > cTotal) {
    winner = "python"
    return winner;
  }
  else if (cTotal > jsTotal && cTotal > pythonTotal) {
    winner = "c";
    return winner;
  }
  //handling tie conditions
  else if (jsTotal === pythonTotal) {
    winner = ["javascript", "python"];
    return winner;
  }
  else if (pythonTotal === cTotal) {
    winner = ["python", "c"];
    return winner;
  }
  else if (jsTotal === cTotal) {
    winner = ["javascript", "c"];
    return winner;
  }
}

//function to reveal the winning section
function revealWinner(winner) {
  $("section#" + winner).show();
  $("section#" + winner).addClass("active");
}

//function to reveal two sections in case of a tie
function revealTie(winnerArray) {
  $("h3#tie").show();
  $("section#" + winnerArray[0]).show();
  $("section#" + winnerArray[0]).addClass("active");
  $("section#"+ winnerArray[1]).show();
}

//function to add name to the results title, add favorite color to name
function addName(name, color) {
  $(".result-title").prepend("<span class=\"name-target\"></span>");
  $(".name-target").text(name);
  $(".name-target").css("color", color);
}

//function to clear all inputs, reset radio buttons to default positions
function resetInputs() {
  $("select").val("");
  $("input[type=text]").val("");
  $("input[type=radio]").prop("checked", false);
  $("input[type=color]").val("#62c462");
  $("input[name=question2][value=1]").prop("checked", true);
  $("input[name=question5][value=3]").prop("checked", true);
}

//function to reset results to hidden
function resetResults(){
  $("section.results").hide();
  $("section.results").removeClass("active");
  $("h3#tie").hide();
  $(".name-target").remove();
}

//function for user interface, submit/reset button, calls other functions
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    resetResults();
    let scores = [parseInt($("input[name='question2']:checked").val()), parseInt($("select#question3").val()), parseInt($("select#question4").val()), parseInt($("input[name='question5']:checked").val())];
    let winner = evalWinner(scores);
    addName($("input#name").val(), $("input#question1").val());
    if (Array.isArray(winner)) {
      revealTie(winner);
    }
    else {
      revealWinner(winner);
    }
    document.querySelector("section.active").scrollIntoView({behavior: 'smooth'});
    $("#reset").click(function(){
      resetInputs();
      resetResults();
    });
  });
});