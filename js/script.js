$(function(){

    /* header */
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        console.log(st);
        if(st>=100){
            $("header").addClass("fix");
        }else{
            $("header").removeClass("fix");
        }
    });


});