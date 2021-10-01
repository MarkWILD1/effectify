$(window).scroll(function(){
    $(".box0").css("opacity", 1 - $(window).scrollTop() / 1500);
    $(".box1").css("opacity", 1.3 - $(window).scrollTop() / 1500);
    $(".box2").css("opacity", 1.5 - $(window).scrollTop() / 1500);
    $(".box3").css("opacity", 1.5 - $(window).scrollTop() / 1500);
    $(".box4").css("opacity", 1.7 - $(window).scrollTop() / 1500);
    $(".box5").css("opacity", 1.9 - $(window).scrollTop() / 1500);
});
