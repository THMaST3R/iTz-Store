function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showabout2(){
    $("#about2_container").css("display","inherit");
    $("#about2_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about2_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout2(){
    $("#about2_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about2_container").removeClass("animated slideOutLeft");
        $("#about2_container").css("display","none");
    },800);
}
function showabout3(){
    $("#about3_container").css("display","inherit");
    $("#about3_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about3_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout3(){
    $("#about3_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about3_container").removeClass("animated slideOutLeft");
        $("#about3_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#about2").removeClass("animated fadeIn");

    },1000);
},1500);
