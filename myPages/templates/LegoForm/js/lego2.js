$(document).ready(function() {
  
    $(".leg").click(function() {
        $(this).switchClass("dark", "clicked", 300);
    });


    $(".vol").on("click", next);
    $("#mobileVolg").on("click", nextMob);

    $(".leg").on("click", check);

});

function check() {
    var x = $(".dark");
    if (x.length < 15) {
        $(".leg").css("pointer-events", "none");
        $(".vol").css("filter", "brightness(110%)");
        $("#mobileVolg").css("filter", "brightness(110%)");
        $("#mobileVolg").css("pointer-events", "auto");
        $(".vol").css("pointer-events", "auto");
        $(".vol").css("cursor", "pointer");
 
    }
}

function nextMob() {
    var n = $(".clicked");0
    $("#mform").css("display", "block");
    $(".dark").parent().fadeOut(0);
    $(this).fadeOut(0);
    $(".sel").fadeOut(0);
    $(".time").css("display", "block");
    $(".gratis").css("display", "block");
    $(n[0]).parent().insertBefore(".line > .time");
    $(n[1]).parent().insertBefore(".line > .time");
}


function next() {
    var n = $(".clicked");
    $("#form").css("display", "block");
    $(this).fadeOut(0);
    $(".sel").fadeOut(0);
    $(".time").css("display", "block");
    $(".gratis").css("display", "block");
    $(".dark").parent().fadeOut(0);
    $(n[0]).parent().insertBefore("#form");
    $(n[1]).parent().insertAfter("#form");
}

/* function next() {
    var mob = $(".mobileVolg").css("visibility")
    var n = $(".clicked");
    $("#form").css("display", "block");
    $(".dark").fadeOut(0);
    $(this).fadeOut(0);
    $(".select").fadeOut(0);
    $(".time").css("display", "block");
    $(".gratis").css("display", "block");
    if (mob == 'visible') {
        $(n[0]).insertBefore(".line > .time");
        $(n[1]).insertBefore(".line > .time");
    } else {
        $(n[0]).insertBefore("#form");
        $(n[1]).insertAfter("#form");
    }

}

function next() {
    var mob = $(".mobileVolg").css("visibility")
    var n = $(".clicked");
    $("#form").css("display", "block");
    $(".dark").fadeOut(0);
    $(this).fadeOut(0);
    $(".select").fadeOut(0);
    $(".time").css("display", "block");
    $(".gratis").css("display", "block");
    if (window.matchMedia("(min-width: 320px)").matches && window.matchMedia("(max-width: 767px)").matches) {
        $(n[0]).insertBefore(".line > .time");
        $(n[1]).insertBefore(".line > .time");
    } else {
        $(n[0]).insertBefore("#form");
        $(n[1]).insertAfter("#form");
    }

}*/

