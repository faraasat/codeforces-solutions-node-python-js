def main():
    lines = int(input().strip())
    a = b = c = 0

    for i in range(lines):
        values = input().strip().split(" ")
        a += int(values[0])
        b += int(values[1])
        c += int(values[2])

    if a == 0 and b == 0 and c == 0: print("YES");
    else: print("NO");


if __name__ == "__main__":
    main();
