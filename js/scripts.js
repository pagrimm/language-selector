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