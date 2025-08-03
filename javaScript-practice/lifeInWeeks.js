/*It will take your current age as the input and console.logs a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.
For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.*/

function lifeInWeeks(age) {
    var yearsLeft= 90 - age;
    var monthsLeft = yearsLeft*12;
    var weeksLeft = yearsLeft*52;
    var daysLeft = yearsLeft*365;
    console.log("You have "+daysLeft+" days, "+weeksLeft+" weeks, and "+monthsLeft+" months left.");
}

lifeInWeeks(30);
