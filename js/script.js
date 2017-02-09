var rowsNumber = 6;
var columnsNumber = 7;
var boardElement = document.getElementById('board');
for (var i =0; i < rowsNumber; i++) {
    for (var j = 0; j < columnsNumber; j++) {
    var gridElement = document.createElement("div");
    gridElement.className = "grid";
    boardElement.appendChild(gridElement);
    }
}
