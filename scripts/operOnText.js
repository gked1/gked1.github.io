document.getElementById("btn").addEventListener("click", getLongWord, false);

function getLongWord() {
  var str1 = document.getElementById("sentence").value.replace(/[^0-9a-z]/gi, ' ').trim();
   
  if (typeof str1 !== 'undefined' && str1.length > 0) {
	  
  var  d = str1.split(' '),
       senArr = d.filter(function(item, pos) { return d.indexOf(item) == pos; } ),
       senArrDig = [],
       senArrDig2 = [],
       max = 0,
       maxIdx = 0,
       join = '',
       msg;
  //clarify length of every word in sentence
  for (var i=0; i<senArr.length; i++) {
    var leng = senArr[i].length;
    senArrDig.push(leng);
  }
  //finding word that has max length
  for (var i=0; i<senArrDig.length; i++) {
    if (senArrDig[i] > max)
      max = senArrDig[i]; 
  }
  //handling case when word with max length occurs more than 1 time
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
	  
  } else {
    msg = '<h2>Enter any text in text field</h2>';
    document.getElementById('info').innerHTML = msg;
  };
  
}
