n = input()
answ = int(input())
real_answ = 0
if len(n) > 3:
    real_answ = 1
    while len(n) > 2:
        if n[0] != n[-1]:
            real_answ = -1
            break
        n = n[1:-1]
else:
    real_answ = -1

if answ == real_answ:
    print('YES')
else:
    print('NO')