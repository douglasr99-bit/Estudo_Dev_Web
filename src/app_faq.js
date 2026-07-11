var main = function() {
    "use strict";
    
    var $content = $(".contact-faq").hide();
    var $moreContent = $(".sitemap-faq").hide();
    var $maintext = $(".faq-container").hide();
    var $maintext2 = $(".faq-item").hide();


    $maintext.slideDown(2000, function() {
        
        $(".main").append($maintext2);
        
        $maintext2.slideDown(1000);

        $("footer").append($content);
    
        $content.slideDown(2000);
    
        $("footer").append($moreContent);
    
        $moreContent.slideDown(2000);
    
        $(".main").append($maintext);
    });



};

$(document).ready(main);