a = list(map(int, input().split()))
print(*[a[i] for i in range(0, len(a), 2)])