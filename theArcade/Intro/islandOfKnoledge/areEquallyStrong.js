/**
 * Call two arms equally strong if the heaviest weights they each are able to lift are equal.
 * 
 * Call two people equally strong if their strongest arms 
 * are equally strong (the strongest arm can be both the right and the left), 
 * and so are their weakest arms.
 * 
 * Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
 * @param {number} yourLeft 
 * @param {number} yourRight 
 * @param {number} friendsLeft 
 * @param {number} friendsRight 
 */
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let strongestMe = Math.max(yourLeft, yourRight);
    let weakestMe = Math.min(yourLeft, yourRight);
    let strongestFriend = Math.max(friendsLeft, friendsRight);
    let weakestFriend = Math.min(friendsLeft, friendsRight);
    if(strongestMe === strongestFriend && weakestMe === weakestFriend) return true
    return false;
}
