var main = function () {
    "use strict;"

    $("*").css("color","red");

    var soma = ["hello", "world"];

    var string = ["hello"];

    var cont = 0;

    var verf = 3;

    for(var i = 0; i < soma.length; i++){
        if(string[0] === soma[i]){
            cont += 1;
        }else{
            continue;
        }
    }

    if(cont === verf){
        console.log("true");
    }else{
        console.log("false");
    }




};

$(document).ready(main);