var rowsNumber = 6;
var columnsNumber = 7;
var boardElement = document.getElementById('board');

for (var i = 0; i < rowsNumber; i++) {
    for (var j = 0; j < columnsNumber; j++) {
    var caseElement = document.createElement("div");
    caseElement.className = "case";
    caseElement.id = "case"+i+"-"+j;
    boardElement.appendChild(caseElement);
    }
}

for (var i = 0; i < columnsNumber; i++){
var dropButtonElement = document.createElement("button");
dropButtonElement.id = "dropbutton"+i+"-"+j;
boardElement.appendChild(dropButtonElement);
}

var grid = [["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""]];
