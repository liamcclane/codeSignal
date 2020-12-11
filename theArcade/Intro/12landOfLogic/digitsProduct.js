/**digitsProduct
 * Given an integer product, find the smallest positive (i.e. greater than 0) 
 * integer the product of whose digits is equal to product. If there is no such integer, return -1 instead
 * @param products
 * @return number
 */
function digitsProduct(product) {

    let copyProd = product;
    function primeFactors(n) {
        var factors = [],
            divisor = 2;

        while (n >= 2) {
            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            }
            else {
                divisor++;
            }
        }
        return factors;
    }
    let primes = primeFactors(product);
    console.log(primes);

}


/**Examples
 * Input: 12
 * Output: 26
 * 
 * Input: 19
 * Output:-1
 * 
 * Input: 450
 * Output:2559
 * 
 * Input: 0
 * Output:10
 * 
 * Input: 13
 * Output:-1
 * 
 * Input: 1
 * Output:1
 * 
 * Input: 243
 * Output:399
 * 
 * Input: 576
 * Output:889
 * 
 * Input: 360
 * Output:589
 */


/**
 * 
 * @param {*} product 
 */
function wrong(product) {
    // ALMOST....
    // this algo only works for numbers less than 100
    // and is missing large logical gaps of understanding the algo,
    let firstMultiplier = 2, secondMultiplier;

    while (firstMultiplier < product) {
        if (((product / firstMultiplier) % 1) != 0) {
            firstMultiplier++;
            continue;
        }
        secondMultiplier = (product / firstMultiplier);
        console.log(firstMultiplier, "first :", secondMultiplier, "second:", firstMultiplier * secondMultiplier, "prod");
        if (secondMultiplier > product) {
            firstMultiplier++;
        } else if (secondMultiplier < firstMultiplier) {
            return -1;
        } else {

            let prod = 1;
            let strPot = firstMultiplier + "" + secondMultiplier;
            for (let i = 0; i < strPot.length; i++) {
                prod *= parseInt(strPot.charAt(i));
            }
            console.log(strPot, " => ", prod);
            if (prod === product) {
                return parseInt(strPot);
            }
            firstMultiplier++;
        }
    }
    return -1;
}
