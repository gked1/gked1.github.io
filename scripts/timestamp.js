function addZeroToDateTime(i) {
  if (i < 10)
  	i = "0" + i;
  return i;
}

(function printTimeStamp() {
  var currentDate = new Date(),
      timezoneOffsetMin = new Date().getTimezoneOffset(),
      offsetHrs = parseInt(Math.abs(timezoneOffsetMin/60)),
      offsetMin = Math.abs(timezoneOffsetMin%60),
      timezoneStd,
      yea = currentDate.getFullYear(),
      mon = addZeroToDateTime(currentDate.getMonth()+1),
      day = addZeroToDateTime(currentDate.getDate()),
      hou = addZeroToDateTime(currentDate.getHours()),
      min = addZeroToDateTime(currentDate.getMinutes()),
      sec = addZeroToDateTime(currentDate.getSeconds()),
      currentDatePrintToUser = document.getElementById("timestamp");
  	
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
  
  currentDatePrintToUser.textContent = yea + "." + mon + "." + day + " " + hou + ":" + min + ":" + sec + "  Time zone: " + timezoneStd;
  
}())
