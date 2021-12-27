function getvalue(value1){

    var output = document.getElementById("outvalue")

    output.value += value1;

}

function calculate(){

    var output2 = document.getElementById("outvalue")

    var solved = output2.value

    output2.value = eval(solved);

}

function one(){

    var del = document.getElementById("outvalue");

    del.value = "";

}

function try1(){

    var del = document.getElementById("outvalue");

    del.value -= 10;

}