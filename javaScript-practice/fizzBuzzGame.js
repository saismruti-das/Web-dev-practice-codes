var output=[];
var i=1;
function fizzBuzz(){
  if(i%3===0 && i%5===0){
    output.push("fizzBuzz");
  }
  else{
    if(i%3===0){
      output.push("fizz");
    }
    else if(i%5===0){
      output.push("Buzz");
    }
    else{
      output.push(i);
    }
  }
  i++;
  console.log(output);
}

var i=1
while(i<=100){
    fizzBuzz();
}
