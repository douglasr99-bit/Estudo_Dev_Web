var main = function() {
    "use strict"

    var todos = [
        "Finish writing book",
        "Take Gracie to the park",
        "Answer recruiter emails on LinkedIn",
        "Prep for Monday's class",
        "Make up some new ToDos",
        "Get Groceries"
    ]

    $(".tab span").toArray().forEach(function (element) {
        $(element).on("click", function () {

            var $element = $(element), $content;
                

            $(".tab span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();

            if($element.parent().is(":nth-child(1)")) {
                console.log("FIRST TAB CLICKED!");
                $content = $("<ul>");
                for(let todo = todos.length -1; todo >= 0; todo--){
                    $content.append($("<li>").text(todos[todo]));
                }
                $("main .content").append($content);
            }else if ($element.parent().is(":nth-child(2)")) {
                console.log("SECOND TAB CLICKED!");
                $content = $("<ul>");
                todos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            }else if ($element.parent().is(":nth-child(3)")) {
                console.log("THIRD TAB CLICKED!");
            }

            return false;
    });
 });
//  $(".tab a:first-child span").trigger("click");
}

$(document).ready(main);