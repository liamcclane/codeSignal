/***Knapsack Light***
 * 
 * You found two items in a treasure chest! The first item weighs weight1 
 * and is worth value1, and the second item weighs weight2 and is worth value2. 
 * What is the total maximum value of the items you can take with you, 
 * assuming that your max weight capacity is maxW and you can't come back for the items later?
 *
 * Note that there are only two items and you can't bring more than one item 
 * of each type, i.e. you can't take two first items or two second items.
 * 
 * Examples:
 * 
    * Example 1
    * 
    * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, 
    * the output should be
    * knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
    * 
    * You can only carry the first item.
 * 
 * 
    * Example 2
    * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, 
    * the output should be
    * knapsackLight(value1, weight1, value2, weight2, maxW) = 16.
    * 
    * You're strong enough to take both of the items with you.
 * 
 * 
    * Example 3
    * For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, 
    * the output should be
    * knapsackLight(value1, weight1, value2, weight2, maxW) = 7.
    * 
    * You can't take both items, but you can take any of them.
 * 
 * 
 * 
 */

 // pick the most valuable one ALWAYS and return the new "sum" value that you are carring 
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
    // the case where we cam take both items
    if(weight1 + weight2 <= maxW){
        return value1 + value2
    }

    if(weight1 <= maxW && weight2 <= maxW){
        if(value1 > value2){
            return value1
        }
        return value2
    }

    if(weight1 <= maxW && weight2 >maxW){
        return value1
    } else if(weight1 > maxW && weight2 <= maxW){
        return value2
    } else {
        console.log("not strong enought to carry either of these items")
        return 0
    }

}
console.log(knapsackLight(10,5,6,4,8))
console.log(knapsackLight(10,5,6,4,9))
console.log(knapsackLight(5,3,7,4,6))
console.log(knapsackLight(5,3,7,4,2))