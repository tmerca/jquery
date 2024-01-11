$(document).ready(function () {
  createGame();
});

function createGame() {
  var arr1 = [];
  var arr2 = [];
  var content = [];
  var couple = false;
  var numOfCouples = (Math.floor(Math.random() * 4) + 2) * 2;

  if (numOfCouples % 2 != 0) {
    numOfCouples += 1;
  }

  for(let i = 1; i < numOfCouples; i++){
    arr1[i - 1] = i;
    arr2[i - 1] = i;
  }
  content = [...arr1,...arr2];
  
  // Unsorting the content of the table
  // function shuffleArray(content) {
  //   content.sort(() => Math.random() - 0.5);
  // }
  // shuffleArray(content);
  console.log(content);

  $("body").append("<ul class='table'></ul>");

  // Creating two boxes with the same number and adding some css

  for(let i = 0; i < content.length; i++){
    $('.table').append("<li><div class='box'><p>"+ content[i] +"</p></div></li>");
  }
   
  $("li").css("display", "inline-block");
  $(".box").css("width", "100px").css("height", "100px");
  $(".box").css("background-color", "lightgrey").css("margin", "10px 10px");
  $(".box").css("border", "2px black solid");
  $(".box").css("border-radius", "4px");
  $(".box").css("display", "flex");
  $(".box").css("justify-content", "center").css("align-items", "center");
  
  $("p").hide();
  
  let numClicks = 0;
  // Taking the value of the box we click
  if(numClicks < 2){
    $(".box").on("click", function() {
      
      $(this).find("p").show();
      numClicks+=1;
    });
  }else {
    $("p").hide();
  }
  

}
