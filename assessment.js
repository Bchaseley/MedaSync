const largestProduct = function (s) {
    //initialize largestProduct to check against, and return
    let largestProduct = 0;
    let firstSeq, secondSeq;
    //convert string to array using map function
    const numbers = s.split("").map((n) => parseInt(n));
    //iterate through array
    for (let i = 0; i < numbers.length - 7; i++) {
        //on each iteration, get product of neighboring pairs using array.slice based on current index
        let product = parseInt(numbers.slice(i, i + 4).join("")) * parseInt(numbers.slice(i + 4, i + 8).join(""));
        //checks result against current largest value
        if (product > largestProduct) {
            //if greater, replace values
            largestProduct = product;
            firstSeq = numbers.slice(i, i + 4).join("");
            secondSeq = numbers.slice(i + 4, i + 8).join("");
        }
    }
    //return an object with key-value pairs accordingly
    return {
        firstPair: firstSeq,
        secondPair: secondSeq,
        product: largestProduct
    };
}

const oddEvens = function (s) {
    //variables to keep count of evens and odds
    let odds = 0;
    let evens = 0;
    //iterate through string with loop, simple check for even/odd and increment accordingly
    for (let i = 0; i < s.length; i++) {
        if (s[i] % 2 > 0) {
            odds++;
        } else {
            evens++
        }
    }
    //return a string with each value of evens and odds.
    return "This string has " + odds + " odd numbers, and " + evens + " even numbers."
}


const longestOddSeq = function (s) {
    //convert string to array as before
    const numbers = s.split("").map((n) => parseInt(n));
    //initialize longestSeq as empty string to check length against
    let longestSeq = "";
    //iterate through array, check value at each index for odd value
    for (let i = 0; i < numbers.length; i++) {
        //if odd, initialze a check sequence, and second loop
        if (numbers[i] % 2 != 0) {
            let checkSeq = numbers[i];
            //doing same checks on each iteration for an odd
            for (let j = i + 1; j < numbers.length; j++) {
                //if odd, simple math to concat value to end
                if (numbers[j] % 2 != 0) {
                    checkSeq *= 10;
                    checkSeq += numbers[j];
                    continue;
                }
                //if not an odd value, we can change i = j since we know we dont need to check those values again, and the increment in the loop takes care of the adjacent even that we dont need to check
                i = j;
                break;
            }
            //after checkSeq is complete, it checks length to the current longest, and replaces values if longer
            if (checkSeq.toString().length > longestSeq.toString().length) {
                longestSeq = checkSeq;
            }
        }
    }
    return longestSeq;
}

