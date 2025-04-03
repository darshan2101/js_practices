// count digits

// examples 45646 ==> 5, 5424248 ==> 7

function countDigits(input) {
    console.log(Math.floor(Math.log10(input) + 1))
}
// countDigits(957)

// ============================================================================================================================

// reverse number 

function reverseNum(input) {
    const reverseRes =Number(String(input).split('').reverse().join(''))
    console.log(reverseRes);
    return reverseRes
}

// reverseNum(45987)


// ============================================================================================================================

// check palindrome

function isPalindrome(n){
    console.log(n == reverseNum(n) )
}

// isPalindrome(45546)



// ============================================================================================================================

// calculate GCD (greatest common divisor)

// function getGCD(n1,n2){
//     let result =1
//     for(i=Math.min(n1,n2); i>=1 ; i--){
//         if (n1 % i == 0 && n2 % i == 0 && i > result ) result = i;
//     }
//     console.log("GCD ---->" ,result)
//     return i;
// }

// optimal approach : Use of eucleadian approach



function getGCD(n1,n2){
    while(n1 > 0 && n2 > 0){
        if(n1 > n2 ){
            n1 = n1 % n2
        }else{
            n2 = n2 % n1
        }
    }
    return n1 ===0 ? n2 : n1;
}

// console.log(getGCD(15,20))


// ============================================================================================================================

// check Armstrong (each digit's sum of powers equals to number)

function checkArmstrong(n) {
    check = Number(
                String(n).split('').reduce((acc, prev) => {
                    acc += Number(prev) ** 3
                    return acc;
                },0)
            )
    return ( n ===  check);
}

// console.log(checkArmstrong(153))
// console.log(getGCD(15,20))


// ============================================================================================================================

// Print all Divisors of a given Number

// Example 1:
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
// Example 2:
// Input:N =12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.
function findDivisors(n) {
    let divisors = [];
    let sqrtN = Math.sqrt(n);
    for (let i = 1; i <= sqrtN; ++i) {
        console.log("i --------------> ",i)
        if (n % i === 0) {
            console.log("n % i --------------> ",(n%i))
            divisors.push(i);
            if (i !== n / i) {
                console.log("n/i --------------> ",(n/i))
                divisors.push(n / i);
            }
        }
    }
    return divisors;
}



// ============================================================================================================================
 
// Check for Prime
function isPrime(n){
    const divisors = findDivisors(n)
    return divisors.length === 2 ? true : false; 
}
// console.log(isPrime(3))


// ============================================================================================================================
 
