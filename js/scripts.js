function reveal(jsResults, pythonResults, cResults) {
  $("section.results").hide();
  if (jsResults > pythonResults && jsResults > cResults) {
    $("section#javascript").show();
  }
  else if (pythonResults > jsResults && pythonResults > cResults) {
    $("section#python").show();
  }
  else if (cResults > jsResults && cResults > cResults) {
    $("section#c").show();
  }
}

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    let jsResults = 0;
    let pythonResults = 0;
    let cResults = 0;
    function score(input) {
      if (input === 1) {
        jsResults +=;
      }
      if (input === 2) {
        pythonResults +=;
      }
      if (input === 3) {
        cResults +=;
      }
    }
    

  });
});