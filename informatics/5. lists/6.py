a = list(map(int, input().split()))
answ = 0
for i in range(1, len(a)-1):
    if a[i-1] < a[i] > a[i+1]:
        answ+=1
print(answ)