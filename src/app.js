var main = function() {
    "use strict";
    
    var $content = $(".contact").hide();
    var $moreContent = $(".sitemap").hide();
    var $maintext = $(".main-text").hide();
    var $maintext2 = $(".main-text2").hide();


    $("body").append($content);

    $content.slideDown(2000);

    $("body").append($moreContent);

    $moreContent.slideDown(2000);

    $(".main-text").append($maintext);

    $maintext.slideDown(2000, function() {
        $(".main-text2").append($maintext2);

        $maintext2.fadeIn(1000);
    });



};

$(document).ready(main);