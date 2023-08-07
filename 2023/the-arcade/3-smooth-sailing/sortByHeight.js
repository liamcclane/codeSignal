/**
 * Some people are standing in a row in a park. 
 * There are trees between them which cannot be moved. 
 * Your task is to rearrange the people by their heights in a non-descending order 
 * without moving the trees. 
 * People can be very tall!
 * 
 * -1 will represents the trees
 * @param {Array[Number]} a 
 * @returns {Array[Number]}
 */
function solution(a) {
    let peopleHeights = [], len = a.length;
    for(let i = 0; i < len; i++) {
        if(a[i] != -1) {
            peopleHeights.push(a[i]);
        }
    }
    let sortedPeopleShortestToTallest = peopleHeights.sort((a,b) => b - a);
    for(let i = 0; i < len; i++) {
        if(a[i] != -1) {
            a[i] = sortedPeopleShortestToTallest.pop();
        }
    }
    return a;
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
//                   [-1, 150, 160, 170, -1, -1, 180, 190]
