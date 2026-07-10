var main = function() {
    "use strict";
    
    var $content = $(".contact").hide();
    var $moreContent = $(".sitemap").hide();

    $("body").append($content);

    $content.slideDown(2000);

    $("body").append($moreContent);

    $moreContent.slideDown(2000);
};

$(document).ready(main);