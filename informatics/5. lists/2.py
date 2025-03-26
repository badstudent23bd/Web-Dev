a = list(map(int, input().split()))
print(*[a[i] for i in range(1, len(a), 2)])