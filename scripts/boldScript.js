var contextMenu = document.getElementById('contextMenu');

function hey(){
    $("#contextMenu").toggle();
}

function clicky(){
    alert(clicked);
}

var setbold = document.getElementById('bold');
setbold.onclick = boldFunc;

var setunbold = document.getElementById('unbold');
setunbold.onclick = unboldFunc;

var setred = document.getElementById('red');
setred.onclick = redFunc;
var setgreen = document.getElementById('green');
setgreen.onclick = greenFunc;
var setblue = document.getElementById('blue');
setblue.onclick = blueFunc;
var setblack = document.getElementById('black');
setblack.onclick = blackFunc;

function boldFunc() {
    document.getElementById('modtext').style.fontWeight = "bold";
}

function unboldFunc() {
    document.getElementById('modtext').style.fontWeight = "normal";
}

function redFunc(){
    document.getElementById('modtext').style.color = "red";
}

function greenFunc(){
    document.getElementById('modtext').style.color = "green";
}

function blueFunc(){
    document.getElementById('modtext').style.color = "blue";
}

function blackFunc(){
    document.getElementById('modtext').style.color = "black";
}