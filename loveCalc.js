/* This quick Love Calculator program, meant to be run in the Chrome browser, 
prompts the user to enter two names. A number between 1-100 is generated using Maths.random, 
and then rounded down to the nearest whole number using the floor function. It then prompts
the user with the random number. */

prompt("Your name: ");
prompt("Their name: ");

loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

prompt("Your love compatability is " + loveScore + " percent.");