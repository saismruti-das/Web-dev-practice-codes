//write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.
/*Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!*/

function whosPaying(names) {
    var n=names.length;
    var randomIndex=Math.floor(Math.random()*n);
    var ans=names[randomIndex]+" is going to buy lunch today!";
    return ans;
}
