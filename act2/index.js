$(document).ready(function () {
  createGame();
});

function createGame() {
  var arr1 = [];
  var arr2 = [];
  var content = [];
  var numOfCouples = (Math.floor(Math.random() * 4) + 2) * 2;

  if (numOfCouples % 2 != 0) {
    numOfCouples += 1;
  }

  for (let i = 1; i < numOfCouples; i++) {
    arr1[i - 1] = i;
    arr2[i - 1] = i;
  }
  content = [...arr1, ...arr2];

  // Unsorting the content of the table
  function shuffleArray(content) {
    content.sort(() => Math.random() - 0.5);
  }
  shuffleArray(content);
  console.log(content);

  $("body").append("<ul class='table'></ul>");
  $("body").append("<ul class='message'></ul>");
  $(".message").css("text-align", "center");
  $("body").append("<div class='gameEnded'></div>");

  // Creating two boxes with the same number and adding some css

  for (let i = 0; i < content.length; i++) {
    $(".table").append(
      "<li><div class='box'><p>" + content[i] + "</p></div></li>"
    );
  }

  $("li").css("display", "inline-block");
  $(".box").css("width", "100px").css("height", "100px");
  $(".box").css("background-color", "lightgrey").css("margin", "10px 10px");
  $(".box").css("border", "2px black solid");
  $(".box").css("border-radius", "4px");
  $(".box").css("display", "flex");
  $(".box").css("justify-content", "center").css("align-items", "center");

  $("p").hide();

  let nums = [];
  let num;
  let correctCouples = content.length / 2;
  console.log(correctCouples);
  let counter = 0;

  // Taking the value of the box we click and checking if we got couple
  $(".box").on("click", function () {
    
    //EFFECT OF FLIPPING THE CARD
    
    // CHEKING IF THE TWO NUMBERS ARE THE SAME
    $(this).addClass("selected");
    num = $(this).find("p").show().text();
    if (nums.length < 2) {
      nums.push(num);
      if (nums[0] == nums[1]) {
        setTimeout(() => {
          $(".selected").css("display", "none");
        }, 1000);
        nums = [];
        counter += 1;
        $(".message").append(
          "<li><p class='correct'>Pareja encontrada, parejas restantes: " + (correctCouples - counter) + "</p>"
        );
        if (counter == correctCouples) {
          $(".gameEnded").append(
            "<p>Congratulations! You finished the game!</p>"
          );
          $(".gameEnded").css("text-align", "center").css("font-size", "25px");
        }
      } else if (nums.length > 1 && nums[0] != nums[1]) {
        setTimeout(() => {
          $(".selected").find("p").hide();
          $(".selected").removeClass("selected");
        }, 1000);
        
        $(".message").append(
          "<li><p class='incorrect'>Pareja no encontrada"
        );

        setTimeout(() => {
          $(".incorrect").hide();
        }, 2000);

        nums = [];
      }
    }
  });
}
