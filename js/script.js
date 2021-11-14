var rooms = {
    "room0": "<p>I welcome you, oh, my child. Where do you wish to go? <br><br><b>(North,south)</b></p>"
}
$(document).ready(function(){
    $("#text").append(rooms["room0"]);
    $(document).keypress(function(key){
        if(key.which === 13 && $('#usr-input').is(':focus')) {
            var input = $('#usr-input').val();
            alert(input);
        } 
    })
})