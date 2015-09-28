$(function(){
    $.ajax({
        url:"/getData"
    }).done(function(response) {
        //console to see if anything works
        console.log(response);

        for (var i = 0; i < response.length; i++) {
            var active = "";
            if (i == 0) {
                active = " active";
            }
            var slide = "<div class='item" + active + "'><p>" + response[i].name + "</p><p>" + response[i].description + "</p><p>" + response[i].shoutouts + "</p></div>"
            $(".carousel-inner").append(slide);
            $(".carousel-indicators").append("<li data-target='#carousel-example-generic' data-slide-to='" + i + "' class='" + active + "'></li>");
        }

        $('.carousel').carousel();

    });

});