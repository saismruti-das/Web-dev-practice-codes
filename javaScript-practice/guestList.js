var guestList=["Sai","Barsha","Lalit","Aryan","Sanjib","Sonali"];
var name=prompt("What is you name?");
if(guestList.includes(name)){
    alert("Welcome.");
}
else{
    alert("Sorry. You're not in the guestList.");
}
