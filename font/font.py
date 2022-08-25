from os import system

chars = [
    "E13D",
    "E7BE",
    "E821",
    "E74C",
    "E715",
    "E15E",
    "E76B",
    "E76C",
    "E006",
    "E121",
    "E1D3",
    "E167",
    "E168",
    "E167",
    "F427",
    "E2B1",
    "F2B7",
    "E167",
    "EB3C",
    "EB95",
    "ECAA",
    "E943",
    "E943",
    "F22C",
    "E621",
    "EC7A",
    "EE94",
    "F2B7",
    "E12A",
    "E014",
    "E015"
]


str_chars = ""

for char in list(set(chars)):
    str_chars += f"U+{char},"

procesed_chars = str_chars.rstrip(",")

print(len(list(set(chars))))

print(
    f"pyftsubset SegoeIcons.ttf --unicodes={procesed_chars} --output-file=subset.ttf")

system(
    f"pyftsubset SegoeIcons.ttf --unicodes={procesed_chars} --output-file=subset.ttf")

input()
