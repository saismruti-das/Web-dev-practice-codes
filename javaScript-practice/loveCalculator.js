prompt("What is your name?");
prompt("What is your crush's name?");
// alert("Your Love Score is "+(Math.floor(Math.random()*100)+1)+"%.");

var loveScore=Math.floor(Math.random()*100)+1;
if (loveScore>=70) {
  alert("Your love percentage is " + loveScore + "%. You guys are basically soulmates.");
}
else if (loveScore >= 30) {
  alert("Your love percentage is " + loveScore + "%");
}
else{
  alert("Your love percentage is " + loveScore + "%. You guys are like oil and water.");
}
