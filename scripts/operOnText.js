document.getElementById("btn").addEventListener("click", getTheLongestWord, false);

function getTheLongestWord() {
  var shapedInputString = document.getElementById("sentence").value.replace(/[^0-9a-z]/gi, ' ').trim();
   
  if (typeof shapedInputString !== 'undefined' && shapedInputString.length > 0) {
	  
    var splitedString  = shapedInputString.split(' '),
        uniqueOnlyString = splitedString.filter(function(item, pos) { 
          return splitedString.indexOf(item) == pos; 
        }),
        arrStringLength = [],
        arrStringLengthMaxValHasMultipleOccur = [],
        intStringMaxLength = 0,
        intStringMaxLengthIndex = 0,
        combinedString = '',
        msgPrintToUser;
    //push length of every word to array
    for (var i=0; i<uniqueOnlyString.length; i++) {
      var leng = uniqueOnlyString[i].length;
      arrStringLength.push(leng);
    }
    //finding word that has max length
    for (var i=0; i<arrStringLength.length; i++) {
      if (arrStringLength[i] > intStringMaxLength)
        intStringMaxLength = arrStringLength[i]; 
    }
    //handling case when they are more then 1 word with max length
    for (var i=0; i<arrStringLength.length; i++) {
      if (arrStringLength[i] == intStringMaxLength)
        arrStringLengthMaxValHasMultipleOccur.push(i);
    }
    
    for (var i=0; i<uniqueOnlyString.length; i++) {
      for (var j=0; j<arrStringLengthMaxValHasMultipleOccur.length; j++) {
        if (arrStringLengthMaxValHasMultipleOccur[j]==i)
          combinedString += uniqueOnlyString[arrStringLengthMaxValHasMultipleOccur[j]] + ' , '; 
      }
    }
    
    combinedString = combinedString.substring(0, combinedString.length - 3);
    msgPrintToUser = '<h2>The longest words are: </h2><p id="result">' + combinedString + '</p><h2> with number of characters:</h2><p>' + intStringMaxLength + '</p>';
    document.getElementById('info').innerHTML = msgPrintToUser;   
	  
  } else {
    msgPrintToUser = '<h2>Enter any text in text field</h2>';
    document.getElementById('info').innerHTML = msgPrintToUser;
  };
  
}
