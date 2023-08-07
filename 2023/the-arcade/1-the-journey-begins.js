/**
 * Write a function that returns the sum of two numbers.
 */
function add($param1, $param2) {
    return $param1 + $param2;
}


/**
 * Given a year, return the century it is in. 
 * The first century spans from the year 1 up to and 
 * including the year 100, the second - 
 * from the year 101 up to and including the year 200, etc.
 */
function centuryFromYear(year) {
    let strYear = year + "";
    if(strYear.length < 4) {
        strYear = "000" + strYear;
    }
    let centry = parseInt(strYear.substring(strYear.length - 4,strYear.length - 2));
    let ten = parseInt(strYear.substring(strYear.length - 2,strYear.length));
    if(ten == 0) {
        return centry;
    }
    return centry + 1;
}


/**
 *
 */
function checkPalendrome(inputString) {
    const len = inputString.length;
    if(len == 1) return true;
    
    for(let i = 0, j = len - 1; i <= j; i++, j--) {
        if(inputString.charAt(i) !== inputString.charAt(j)) {
            return false;
        }
    }
    return true;
}

