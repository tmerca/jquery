$(document).ready(function() {

    $("#createPostIts").on("click", function(){
        createPostIt();
    });

    updateCounter();
    
});

function createPostIt(){
    
    var coinFlip;

    $(".createdPostIts").append("<div class='postIt'></div>")
    $(".postIt").draggable();
    $(".postIt").css("height", "60px").css("width", "100px");
    $(".postIt").css("border", "2px black solid");
    coinFlip = Math.floor(Math.random() * 2);
    console.log(coinFlip);
    if(coinFlip == 1){
        $(".postIt").last().css("background-color", "#F80000");
    }else {
        $(".postIt").last().css("background-color", "blue");
    }
}

function updateCounter(){
    $("#blueContainer").droppable({
        drop: function() {
            
        }
    });
    $("#redContainer").droppable({
        drop: function() {
            
        }
    });
    

}
