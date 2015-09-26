$(function(){
    $.ajax({
        url:"/getData"
    }).done(function(response) {
        //console to see if anything works
        console.log(response);

    });

});