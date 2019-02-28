
document.getElementById("btn").addEventListener("click", getLongWord, false);

function getLongWord() {
  var b = document.getElementById("sentence").value,
      c = b.replace(/[.!?,;:\[\]#_'"()-]/gi, '').replace(/[–„”]/gi, '').replace(/[\r\n]+/g, ' '),
      d = c.split(" "),
      senArr = d.filter(function(item, pos) { return d.indexOf(item) == pos; } ),
      senArrDig = [],
      senArrDig2 = [],
      max = 0,
      maxIdx = 0,
      join = '',
      msg;

  for (var i=0; i<senArr.length; i++) {
    var leng = senArr[i].length;
    senArrDig.push(leng);
  }
  
  for (var i=0; i<senArrDig.length; i++) {
    if (senArrDig[i] > max)
      max = senArrDig[i]; 
  }
  
  for (var i=0; i<senArrDig.length; i++) {
    if (senArrDig[i] == max)
      senArrDig2.push(i);
  }
  
  for (var i=0; i<senArr.length; i++) {
    for (var j=0; j<senArrDig2.length; j++) {
      if (senArrDig2[j]==i)
        join += senArr[senArrDig2[j]] + ' , '; 
    }
  }
  
  join = join.substring(0, join.length - 3);
  	
  msg = '<h2>The longest words are: </h2><p id="result">' + join + '</p><h2> with number of characters:</h2><p>' + max + '</p>';
  
  document.getElementById('info').innerHTML = msg;
}
