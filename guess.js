/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/


while (true) //initiaties loop
{
intMin = parseInt(prompt("Choose the Lowest number for your number range, must be greater than zero:"));
//must be a number, and it must be larger than 0
while (isNaN(intMin) || intMin<0)
{
    intMin = parseInt(prompt("Invalid entry try again.")); //invalid number alert
}

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/


intMax = parseInt(prompt("Choose the Highest number for your guessing range. Your number has to be at least 2 more than 0"));
while (isNaN(intMax) || intMax <= intMin + 1) //makes sure number is higher than the minimum, and is a number
{
    intMax = parseInt(prompt("Invalid entry try again."));
}

/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */



intRandom = parseInt (Math.floor(Math.random() * (intMax-intMin+1)) + intMin);

intCount = 1;

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/



intGuess = parseInt(prompt("Pick a number between" + intMin + " and " + intMax));//alert for minimum and maximum ranges
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("Invalid entry try again."));//alerts if wrong number 
}
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */



while (intGuess != intRandom) //main  while loop, checks if number is high,low, or correct. 
{
    if (intGuess<intRandom)
    {
        alert("Your guess is too low."); //Asks for another number if too low. 
    }
        else
        {
        alert("Your guess is too high."); //Asks for another number if too high. 
        }
intCount ++;
    
    
intGuess = parseInt(prompt("Pick a number between" + intMin + " and " + intMax));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("You have the wrong number.")); //wrong number, try again. 
}

}
//gives the final alert of the number and number of guesses 
alert("Congratulations! You guessed the correct number " + intRandom +"\n" +
		", it only took " + intCount + " attempts!");
}