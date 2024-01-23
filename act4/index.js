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
    if(coinFlip == 1){
        $(".postIt").last().addClass("blue");
    }else {
        $(".postIt").last().addClass("red");
    }

    $(".postIt").on("click",() => {
        
    });

}

function updateCounter(){

    $("#blueContainer").droppable({
        accept: ".blue", 
        drop: () => {
            
        }
    });
    $("#redContainer").droppable({
        accept: ".red",
        drop: () => {

        }
    });

}
