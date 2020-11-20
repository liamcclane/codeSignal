/**
 * Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
 */
function validTime(time) {
    if (time.match('^[0-9]{2}:[0-9]{2}')){
        return parseInt(time.slice(0,2)) <= 23 && parseInt(time.slice(3,5)) < 60;
    }
    return false;
}
console.log(validTime("03:23"));