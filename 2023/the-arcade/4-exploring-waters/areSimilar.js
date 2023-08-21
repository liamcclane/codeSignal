/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one 
 * pair of elements in one of the arrays.
 * 
 * Given two arrays a and b, check whether they are similar.
 * @param {Array[Number]} a 
 * @param {Array[Number]} b 
 * @returns {boolean}
 */
function areSimilar(a, b) {
    let pair = [], len = a.length, hasValidSwap = false;
    for (let i = 0; i < len; i++) {
        if (a[i] != b[i]) {
            if (hasValidSwap) return false;
            if (pair.length == 0) {
                pair.push({ind: i, aVal: a[i], bVal: b[i]});
            } else {
                let pastData = pair.pop();
                if(b[i] == pastData['aVal'] && a[i] == pastData['bVal']) {
                    hasValidSwap = true;
                } else {
                    return false;
                }
            }
            
        }
    }
    return true;
}