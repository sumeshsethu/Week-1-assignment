/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var startTimeInMS = new Date().getTime();

    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += i;
    }

    var endTimeInMS = new Date().getTime();
    var timeTakenInSec = (endTimeInMS - startTimeInMS)/1000;

    return timeTakenInSec;
}