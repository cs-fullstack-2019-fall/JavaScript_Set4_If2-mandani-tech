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
//
// ##### Extra Credit:
//     If it's negative or over 100 print an error.
//
// ### Exercise 12
// Ask the user to enter their age. Check if they entered a value between 0 and 125. If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”
