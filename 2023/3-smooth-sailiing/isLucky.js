function solution(n) {
    const backSum = n.toString()
                    .substr(n.toString().length/2)
                    .split("")
                    .map(ele => parseInt(ele))
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
    const frontSum = n.toString()
                    .substr(0,n.toString().length/2)
                    .split("")
                    .map(ele => parseInt(ele))
                    .reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return backSum == frontSum;
}

