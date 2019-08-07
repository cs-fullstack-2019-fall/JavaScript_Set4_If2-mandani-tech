//# JavaScript_Classwork4_If2
// ### Create a new file for each exercise
//
// #### Exercise 10
// Ask the user for 3 cards. If the sum equals 21 print BLACKJACK!
// If the sum is greater than 21 print BUST! If the sum is less than 21 print “The total is [TOTAL]”
//

var  cardOne1 = parseInt(prompt("Enter a Card  "));
var  cardOne2 = parseInt(prompt("Enter a Card  "));
var  cardOne3 = parseInt(prompt("Enter a Card  "));

var sum= cardOne1+cardOne2+cardOne3;

if (sum == 21)
{
    alert("BLACKJACK");

}

if (sum > 21 )

{
    alert("BUST!");

}

else if (sum < 21)
{

    alert("The total is :"  + sum);
}

// #### Exercise 11
// Ask the user to enter their grade. Print their letter grade:
//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59

var gradeUser = parseInt(prompt("Please enter your grade here:"));

 if (gradeUser > 100 || gradeUser < 0)
{
    alert("ERROR");
}

else if (gradeUser >= 90 && gradeUser <= 100)


{
    alert("You made A");
}

else if(gradeUser >=80 && gradeUser <=89)

{
    alert("You made B");
}

else if (gradeUser >= 70 && gradeUser <= 79)

{
    alert("You made C");

}

else if (gradeUser >= 60 && gradeUser <= 69)

{
    alert("You made D");

}
else if (gradeUser >= 0 && gradeUser <= 59)

{
    alert("You made F");

}


//
// ##### Extra Credit:
//     If it's negative or over 100 print an error.




//
// ### Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125.
// If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”

var ageUser = parseInt(prompt("Please enter your age here:"));
if (ageUser >= 0 && ageUser <= 125)

{

    alert("REAL AGE");

}

else

    alert("Not A Real Age");