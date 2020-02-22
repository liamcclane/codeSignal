/**
 * 
 * @param queryType 
 * @param query 
 */
function hashMap(queryType, query) {
    let dict = {};
    let sum = 0.0;
    for(let i = 0;i<queryType.length; i++){
        if(queryType[i]==="insert"){
            dict[query[i][0]] = query[i][1];
        }
        // add query[i] to ALL the values in the map
        if(queryType[i]==="addToValue"){
            for(let key in dict){
                console.log(`line 15 adding ${dict[key].constructor}`)
                dict[key] += query[i];
            }
        }
        // sum all the get calls
        if(queryType[i]==="get"){
            sum += dict[query[i]];
        }
        // add query[i] to ALL the keys in the map
        if(queryType[i]==="addToKey"){
            const dict2 = {};
            const arOfKeys = [];
            const arrOfVals = [];
            for(let key in dict){
                arOfKeys.push(key);
                arrOfVals.push(dict[key]);
            }
            for(let val of arOfKeys){
                val += query[i];
            }
            for(let i = 0; i < arrOfVals.length; i++){
                dict2[arOfKeys[i]] = arrOfVals[i]; 
            }
            dict = dict2;
        }
        console.log(dict)
    }
    return sum;
}

console.log(hashMap(["insert", 
"addToValue", 
"get", 
"insert", 
"addToKey", 
"addToValue", 
"get"],[[1,2], 
[2], 
[1], 
[2,3], 
[1], 
[-1], 
[3]]));

function countTinyPairs(a, b, k) {
    let j = b.length - 1;
    let count = 0;
    for(let i = 0; i<a.length; i++){

        let aStr = a[i].toString();
        let bStr = b[j].toString();

        let tinyStr = aStr + bStr;

        let tinyInt = parseInt(tinyStr);

        if(tinyInt < k) {
            count ++;
        }
        j--;
    }
    return count;
}
console.log(countTinyPairs([1,2,3],[1,2,3],31))



/***
 * You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".
 * 
 * 
 * 
 * 
 * 
 * 
 * You'd like to make your language more unique, so for your merge function, instead of comparing the characters in the usual lexicographical order, you'll compare them based on how many times they occur in their respective strings (fewer occurrences means the character is considered smaller). If the number of occurrences are equal, then the characters should be compared in the usual way. If both number of occurences and characters are equal, you should take the characters from the first string to the result.

Given two strings s1 and s2, return the result of the special merge function you are implementing.




Example

For s1 = "dce" and s2 = "cccbd", the output should be
mergeStrings(s1, s2) = "dcecccbd".
All symbols from s1 goes first, because all of them have only 1 occurrence in s1 and c has 3 occurrences in s2.
 


s1: "vbpvxohmfudekrniglpym"
s2: "wyzjgnituhfhyxkfpnccqjhrvf"
Expected Output:
"wvbpvxohmfudekrniglpymyzjgnituhfhyxkfpnccqjhrvf"




s1: "ougtaleegvrabhugzyx"
s2: "wvieaqgaegbxg"
Expected Output:
"owvieaqugtaleegvrabhugzyxgaegbxg"

s1: "kkihj"
s2: "jbsmfoftph"
Expected Output:
"jbsmfoftphkkihj"

*/
function mergeStrings(s1, s2) {

    let dict1 = {};
    let dict2 = {};

    for(let i=0; i<s1.length; i++){
        if(s1[i] in dict1){
            dict1[s[i]] ++
        } else {
            dict1[s[i]] = 1;
        }
    }
    
    for(let i=0; i<s2.length; i++){
        if(s2[i] in dict2){
            dict2[s[i]] ++
        } else {
            dict2[s[i]] = 1;
        }
    }

    


}
