function isPrime(num) {
    // Write your code here
    for (let i = 2; i < num; i++) {
        if ((num%i) == 0) {
            return i
        }
    }
    return 1
}

let answer = isPrime(55)

console.log(answer)