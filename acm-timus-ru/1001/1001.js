var roots = [],
    line,
    i;

while ((line = readline()) != null) {
    var numbers = line.split(' ');

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            roots.push(Math.sqrt(numbers[i]).toFixed(4));
        }
    }
}

for (i = roots.length - 1; i >= 0; i--) {
    print(roots[i]);
}
