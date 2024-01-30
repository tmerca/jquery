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
    "<div class='postIt'><div class='buttonsPostIt'><button class='postItButtons min'>-</button><button class='postItButtons max'>□</button><button class='postItButtons close'>X</button></div></div>"
  );

  // DELETE THE POST IT ON CLICK YES
  $(".close").on("click", function () {
    $(this).parent().parent().addClass("selected");
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


  // MINIMISE THE POST IT ON CLICK " - " 
  $(".min").on("click", function() {
    $(this).parent().parent().animate({
      width : "-=50",
      height: "-=50"
    }, 1000, function() {
      $(this).css("height", "50px").css("width", "100px");
    });
  });

  // MAXIMISE THE POST IT ON CLICK " □ "
  $(".max").on("click", function() {
      $(this).parent().parent().animate({
      width : "+=50",
      height: "+=50"
    }, 1000, function() {
      $(this).css("height", "100px").css("width", "150px");
    });
  });

  // CREATING THE POST-IT
  $(".postIt").draggable();
  $(".postIt").css("height", "100px").css("width", "150px");
  $(".postIt").css("border", "2px black solid");
  coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip == 1) {
    $(".postIt").last().addClass("blue");
  } else {
    $(".postIt").last().addClass("red");
  }
}

// UPDATING THE COUNTER OF THE CONTAINERS
var bluePostItCounter = document.getElementById("bluePostItCounter");
var blueCounter = 0;
var redPostItCounter = document.getElementById("redPostItCounter");
var redCounter = 0;

function updateCounter() {
  $("#blueContainer").droppable({
    accept: ".blue",
    drop: () => {
      blueCounter+= 1;
      bluePostItCounter.innerText = blueCounter;
    }, out: () => {
      blueCounter = blueCounter - 1;
      bluePostItCounter.innerText = blueCounter;
    }
  });
  $("#redContainer").droppable({
    accept: ".red",
    drop: () => {
      redCounter += 1;
      redPostItCounter.innerText = redCounter;
    }, out: () => {
      redCounter -= 1;
      redPostItCounter.innerText = redCounter;
    }
  });

}
