/*** Tennis Set***
 * 
 * In tennis, the winner of a set is based on how many games each player wins. 
 * The first player to win 6 games is declared the winner unless their opponent 
 * had already won 5 games, in which case the set continues until one of the 
 * players has won 7 games.
 * 
 * Given two integers score1 and score2, your task is to determine if it is 
 * possible for a tennis set to be finished with a final score of score1 : score2.
 * 
 * 
    * Example 1
    * For score1 = 3 and score2 = 6, the output should be
    * tennisSet(score1, score2) = true.
    * 
    * Since player 1 hadn't reached 5 wins, the set ends once 
    * player 2 has won 6 games.
 * 
 * 
    * Example 2
    * For score1 = 8 and score2 = 5, the output should be
    * tennisSet(score1, score2) = false.
    * 
    * Since both players won at least 5 games, the set would've 
    * ended once one of them won the 7th one.
 * 
 * 
    * Exapmle 3
    * For score1 = 6 and score2 = 5, the output should be
    * tennisSet(score1, score2) = false.
    * 
    * This set will continue until one of these players wins 
    * their 7th game, so this can't be the final score
 * 
 */

// really we are just checking if it is a valid ending score
function tennisSet(score1, score2) {

    if (score1 < 5 && score2 < 5) {
        return false
    }


    if ((score1 - score2 <= 3 || score2 - score1 <= 3) &&(score1 - score2 > 0 || score2 - score1 > 0)&& (score1 >= 5 && score2 >= 5)) {
        console.log("RETRY here")
        return true
    }
    
    if(score1 >= 5 || score2 >= 5){
        if(score1 - score2 == 3 || score2 - score1 == 3){
            console.log("return here")
            return true
        }
    }

    return false

}

console.log("2,2 want false")
console.log(tennisSet(2, 2)) // false
console.log()
console.log("3,8 want false")
console.log(tennisSet(3, 8)) // false
console.log()
console.log("4,6 want false")
console.log(tennisSet(4, 6)) // false
console.log()
console.log("5,5 want false")
console.log(tennisSet(5, 5)) // false
console.log()
console.log("5,7 want false")
console.log(tennisSet(5, 7)) // false
console.log()
console.log("7,7 want false")
console.log(tennisSet(7, 7)) // false
console.log()
console.log("8,5 want true")
console.log(tennisSet(8, 5)) // true
console.log()
console.log("20,23 want true")
console.log(tennisSet(20, 23)) // true
console.log()
console.log("23,20 want true")
console.log(tennisSet(23, 20)) // true
