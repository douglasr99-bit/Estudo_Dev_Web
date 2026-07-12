var main = function() {
    "use strict"

    $(".tab a:nth-child(1)").on("click", function () {
        $(".tab span").removeClass("active");
        $(".tab a:nth-child(1) span").addClass("active");
        $("main .content").empty();
        return false;
    });

    $(".tab a:nth-child(2)").on("click", function () {
        $(".tab span").removeClass("active");
        $(".tab a:nth-child(2) span").addClass("active");
        $("main .content").empty();
        return false;
    });

    $(".tab a:nth-child(3)").on("click", function () {
        $(".tab span").removeClass("active");
        $(".tab a:nth-child(3) span").addClass("active");
        $("main .content").empty();
        return false;
    });
    
};

$(document).ready(main);