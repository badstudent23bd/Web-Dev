from math import sqrt, ceil

n = int(input())

for i in range(2, ceil(sqrt(n))):
    if n % i == 0:
        print(i)
        break