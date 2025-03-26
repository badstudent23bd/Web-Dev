def xor(a : bool, b : bool):
    return a ^ b
print(xor(*list(map(int, input().split()))))