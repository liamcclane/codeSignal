/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
 * each statue having an non-negative integer size. Since he likes to make things perfect, 
 * he wants to arrange them from smallest to largest so that each statue will be bigger 
 * than the previous one exactly by 1. 
 * 
 * He may need some additional statues to be able to accomplish that. 
 * Help him figure out the minimum number of additional statues needed.
 * @param {Array[Number]} statues 
 * @returns {number}
 */
function solution(statues) {
    const maxNum = Math.max(...statues);
    const minNum = Math.min(...statues);
    const len = statues.length;
    return (maxNum - minNum) - len + 1;
}
