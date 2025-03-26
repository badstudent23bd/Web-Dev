from math import sqrt, ceil

n = int(input())
i = 2

while i < ceil(sqrt(n)):
    if n % i == 0:
        print(i)
        break
    i+=1