n = int(input())
answ = 0
for i in range(1, n+1):
    if n % i == 0:
        answ += 1
print(answ)