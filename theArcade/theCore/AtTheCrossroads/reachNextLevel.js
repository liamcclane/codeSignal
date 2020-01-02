/****Reach Next Level*******
 * You are playing an RPG game. Currently your experience points (XP) 
 * total is equal to experience. To reach the next level your XP should 
 * be at least at threshold. If you kill the monster in front of you, 
 * you will gain more experience points in the amount of the reward.
 * 
 * Given values experience, threshold and reward, check if you reach 
 * the next level after killing the monster.
 * 
 * Example:
    * 
    * For experience = 10, threshold = 15, and reward = 5, the output should be
    * reachNextLevel(experience, threshold, reward) = true;
    * For experience = 10, threshold = 15, and reward = 4, the output should be
    * reachNextLevel(experience, threshold, reward) = false.
 
 * Guaranteed constraints:
 * 2 ≤ reward ≤ 65.
 * 
 * [output] boolean
 * 
 * true if you reach the next level, false otherwise.
 * */ 
 
 // check if after killing the moster(reward) can you level up
function reachNextLevel(experience, threshold, reward) {
    if(experience+reward >=threshold){
        return true
    }
    return false
}
console.log(reachNextLevel(10,15,5)) // returns true

/*voted most optimal */
function reachNextLevelOpt(experience, threshold, reward){
    return experience+reward >=threshold;
}
console.log(reachNextLevelOpt(10,15,4)) // returns false