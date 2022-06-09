with open('wordslist2.txt', 'r') as f:
    data = f.read().split("\n")

output = '{'
for i in range(0, len(data), 2):
    output += f'"{data[i]}": "{data[i+1]}",\n'

output += '}'
print(output)