def isPrime(n):
    # Write your code here
    for x in range(2, n+1):
        if n % x == 0:
            return x
        else:
            return 1


print(isPrime(2))
