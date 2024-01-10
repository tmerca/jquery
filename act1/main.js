$(document).ready(function(){

        $("button").click(function() { 
            var inputVal = $("#num1").val(); 
            var inputVal2 = $("#num2").val();
            if($.isNumeric(inputVal) && ($.isNumeric(inputVal2))) {
                var result = parseInt(inputVal) + parseInt(inputVal2);
                $("#result").val(result);
            } 

        });

})