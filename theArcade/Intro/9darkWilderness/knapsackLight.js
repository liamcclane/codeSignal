/**Knapsack Light
 * You found two items in a treasure chest! The first item weighs weight1 and 
 * is worth value1, and the second item weighs weight2 and is worth value2. 
 * What is the total maximum value of the items you can take with you, assuming 
 * that your max weight capacity is maxW and you can't come back for the items later?
 * 
 * Note that there are only two items and you can't bring more than one item 
 * of each type, i.e. you can't take two first items or two second items.
 * @param {number} value1 
 * @param {number} weight1 
 * @param {number} value2 
 * @param {number} weight2 
 * @param {number} maxW 
 * @returns {number}
 */
function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if (weight2 > maxW && weight1 > maxW) { return 0 }

    if (maxW >= (weight1 + weight2)) { return value1 + value2 }

    if (weight2 > maxW && weight1 <= maxW) { return value1 }

    if (weight1 > maxW && weight2 <= maxW) { return value2 }

    if (value2 > value1 && weight2 <= maxW) { return value2 }

    if (value1 > value2 && weight1 <= maxW) { return value1 }

    if (value1 === value1) { return weight2 < weight1 ? value2 : value1 }

    return 0
}



/**Examples
 * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
 * knapsackLight(value1, weight1, value2, weight2, maxW) = 10.
 *
 * You can only carry the first item.
 *
 * For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
 * knapsackLight(value1, weight1, value2, weight2, maxW) = 16.
 *
 * You're strong enough to take both of the items with you.
 *
 * For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
 * knapsackLight(value1, weight1, value2, weight2, maxW) = 7.
 *
 * You can't take both items, but you can take any of them.
 */