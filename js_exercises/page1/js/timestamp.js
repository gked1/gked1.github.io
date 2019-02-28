function addZero(i) {
  if (i < 10) {
  	i = "0" + i;
  }
  return i;
}

(function timeStamp() {
  var d = new Date(),
      timezoneOffsetMin = new Date().getTimezoneOffset(),
      offsetHrs = parseInt(Math.abs(timezoneOffsetMin/60)),
      offsetMin = Math.abs(timezoneOffsetMin%60),
      timezoneStd,
      yea = d.getFullYear(),
      mon = addZero(d.getMonth()),
      day = addZero(d.getDate()),
      hou = addZero(d.getHours()),
      min = addZero(d.getMinutes()),
      sec = addZero(d.getSeconds()),
      currDt = document.getElementById("timestamp");
  	
  if (offsetHrs < 10)
    offsetHrs = '0' + offsetHrs;
  
  if (offsetMin < 10)
    offsetMin = '0' + offsetMin;
  
  if (timezoneOffsetMin < 0) 
    timezoneStd = '+' + offsetHrs + ':' + offsetMin;
  else if (timezoneOffsetMin > 0)
    tzStd = '-' + offsetHrs + ':' + offsetMin;
  else if (timezoneOffsetMin == 0)
    timezoneStd = 'Z';
  
  currDt.textContent = yea + "." + mon + "." + day + " " + hou + ":" + min + ":" + sec + "  Time zone: " + timezoneStd;
  
}())
