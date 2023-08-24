/**
 * Call two arms equally strong if the heaviest weights they each are able to lift are equal.
 * 
 * Call two people equally strong if their strongest arms are equally strong 
 * (the strongest arm can be both the right and the left), and so are their 
 * weakest arms.
 * 
 * Given your and your friend's arms' lifting capabilities find out if you 
 * two are equally strong.
 * @param {number} yourLeft 
 * @param {number} yourRight 
 * @param {number} friendsLeft 
 * @param {number} friendsRight 
 * @returns {boolean}
 */
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.max(yourLeft,yourRight) == Math.max(friendsLeft,friendsRight) && Math.min(yourLeft,yourRight) == Math.min(friendsLeft,friendsRight);
}
