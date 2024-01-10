$(document).ready(function () {
  createGame();
});

function createGame() {
  var numOfDivs = Math.floor(Math.random() * 10) + 2;
  var content = [];

  $("body").append("<ul class='table'></ul>");

  if (numOfDivs % 2 != 0) {
    numOfDivs += 1;
  }

  // Creating to boxes with the same number and adding some css
  for (i = 1; i <= numOfDivs; i++) {
  }

  $("li").css("display", "inline-block");

  $(".box").css("width", "100px").css("height", "100px");
  $(".box").css("background-color", "lightgrey").css("margin", "10px 10px");
  $(".box").css("border", "2px black solid");
  $(".box").css("border-radius", "4px");
  $(".box").css("display", "flex");
  $(".box").css("justify-content", "center").css("align-items", "center");

  // Sorting the content of the table
  

  // Taking the value of the box we click
}
