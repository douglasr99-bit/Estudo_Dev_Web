var main = function(todoObjects) {
    "use strict"

    var todos = todoObjects.map(function (todo) {
        return todo.description
    });

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

                var organizedbytag = organizedbytag(todoObjects);

                organizedbytag.forEach(function (tag){
                    var $tagname = $("<h3>").text(tag.name),
                        $content = $("<ul>");

                    tag.todos.forEach(function (description){
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });
                    $("main .content").append($tagname);
                    $("main .content").append($content);
                });
            }else if ($element.parent().is(":nth-child(4)")){
                var $input = $("<input>"),
                    $button = $("<button>").text("+");

                $button.on("click", function () {
                    todos.push($input.val());
                    $input.val("");
                });
                $content = $("<div>").append($input).append($button);
                $("main .content").append($content)
            }

            return false;
    });
 });

 $(".tab a:first-child span").trigger("click");
}

$(document).ready(function (todoObjects){
    $.getJSON("todos.json", function (){
        main(todoObjects);
    });
});