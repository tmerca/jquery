$(document).ready(function () {
  $("#createPostIts").on("click", function () {
    createPostIt();
  });

  updateCounter();
});


function createPostIt() {

  var modal = document.getElementById("myModal");
  var coinFlip;

  $(".createdPostIts").append(
    "<div class='postIt'><button class='postItButtons min'>-</button><button class='postItButtons max'>□</button><button class='postItButtons close'>X</button></div>"
  );

  // DELETE THE POST IT ON CLICK YES
  $(".close").on("click", function () {
    $(this).parent().addClass("selected");
    modal.style.display = "block";
    $("#no").on("click", function () {
      modal.style.display = "none";
      $(".selected").removeClass("selected");
    });
    $("#yes").on("click", function () {
      modal.style.display = "none";
      $(".selected").hide();
    });
  });

  $(".postIt").draggable();
  $(".postIt").css("height", "80px").css("width", "130px");
  $(".postIt").css("border", "2px black solid");
  coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip == 1) {
    $(".postIt").last().addClass("blue");
  } else {
    $(".postIt").last().addClass("red");
  }
}

var counterBlue;
var postItCounterBlue = $("#counterBlue").data("bluePostIts") || 0;

var counterRed;
var postItCounterRed = $("#counterRed").data("redPostIts") || 0;

function updateCounter() {
  $("#blueContainer").droppable({
    accept: ".blue",
    drop: () => {
      counterBlue = $(this);
      postItCounterBlue += 1;
      console.log(postItCounterBlue);
    },
  });
  $("#redContainer").droppable({
    accept: ".red",
    drop: () => {
      counterRed = $(this);
      postItCounterRed += 1;
      console.log(postItCounterRed);
    },
  });
}
