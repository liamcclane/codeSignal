/**
 * Below we will define an n-interesting polygon. 
 * Your task is to find the area of a polygon for a given n.
 * 
 * A 1-interesting polygon is just a square with a side of length 1. 
 * An n-interesting polygon is obtained by taking 
 * the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
 * You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
 * @param {*} n 
 * @returns 
 */
function solution(n) {
    let sum = 0, addMe = 1;

    for(let i = 1; i < n; i++, addMe += 2) {
        sum += addMe * 2;
    }
    sum += addMe;
    return sum;
}
