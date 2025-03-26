def pos_neg(a, b, negative):
    return (a*b < 0) if not negative else (a < 0 and b < 0)

a,b,c = int(input()),int(input()),bool(input())
print(pos_neg(a,b,c))