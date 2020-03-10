function simpleArraySum(stdout) {
  var stdin = [1, 2, 3, 4, 10, 11]
  var stdout = 0;
      for ( var i in stdin )  {
          stdout += stdin[i];
          }

  return stdout;
  }
  
var stdout;
document.getElementById("demo").innerHTML = simpleArraySum(stdout);
