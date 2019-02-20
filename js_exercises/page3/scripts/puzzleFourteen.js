
window.onload = initPage;

function initPage() {
  var table = document.getElementById("puzzleGrid");
  var cells = document.getElementsByTagName("td");
  for (var i=0; i<cells.length; i++) {
    var cell = cells[i];
    cell.onclick = tileClick;
  }
}

function tileClick(){
  if (cellIsEmpty(this)) {
    var el = document.getElementById("msg");
    el.textContent = "Please click on the tile with the number.";
	$("#msg").show().delay(5000).fadeOut();
    return;
  }
  
  var currentRow = this.id.charAt(4); //cell22 c22
  var currentCol = this.id.charAt(5);
  
  //check left side
  if (currentCol > 1) {
    var testCol = Number(currentCol) - 1;
    var testCellId = "cell" + currentRow + testCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
      swapTiles(this, testCell);  
      return;
    }
  }  

  // check upper side
  if (currentRow > 1) {
    var testRow = Number(currentRow) - 1;
    var testCellId = "cell" + testRow + currentCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
      swapTiles(this, testCell);
	  return;
    }
  }
  
 // check right side
  if (currentCol < 4) {
    var testCol = Number(currentCol) + 1;
    var testCellId = "cell" + currentRow + testCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
      swapTiles(this, testCell);
      return;
    }
  }
  
  //check down side
  if (currentRow < 4) {
    var testRow = Number(currentRow) + 1;
    var testCellId = "cell" + testRow + currentCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
      swapTiles(this, testCell);	  
      return;
    }
  }

  // clicked cell blocked
  var el = document.getElementById("msg");
  el.textContent = "Please click on the tile neighboring to empty one.";
  $("#msg").show().delay(5000).fadeOut();
  //$("#msg").show();
  //setTimeout(function() { $("#msg").hide(); }, 5000);
  
}

function cellIsEmpty(cell) {
  var image = cell.firstChild;
  while (image.nodeName == "#text") { image = image.nextSibling; }
  if (image.alt == "empty")
    return true; 
  else 
    return false; 
}

function swapTiles(selectedCell, destinationCell) {
  selectedImage = selectedCell.firstChild;
  while (selectedImage.nodeName == "#text") {
    selectedImage = selectedImage.nextSibling;
  }
  destinationImage = destinationCell.firstChild;
  while (destinationImage.nodeName == "#text") {
    destinationImage = destinationImage.nextSibling;
  }

  selectedCell.appendChild(destinationImage);
  destinationCell.appendChild(selectedImage);  
  
  
  if (puzzleIsComplete()) {
    document.getElementById("puzzleGrid").className = "win";
  }
}

function puzzleIsComplete() {
  var tiles = document.getElementById("puzzleGrid").getElementsByTagName("img");
  var join = "";
  for (var i = 0; i < tiles.length; i++) {
    var num = tiles[i].src.substr(-6,2);
    if (num != "ty")
      join += num;
  }
  if ((join == "0102030405060708091011121314") && ( tiles[tiles.length-1].src.substr(-6,2) == "ty" && tiles[tiles.length-2].src.substr(-6,2) == "ty" )) {
	var el = document.getElementById("endMsg");
    el.textContent = "Finished, you have arranged a set of tiles.";
    return true;
  }
  else
    return false;
}