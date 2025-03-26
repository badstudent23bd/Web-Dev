from math import sqrt

n = int(input())
i = 1
while i < n+1:
    if sqrt(i) == int(sqrt(i)): print(i)
    i+=1