let roots = [],
    line;

while ((line = readline()) != null) {
    let numbers = line.split(' ');

    for (let number of numbers) {
        if (number) {
            roots.push(Math.sqrt(number).toFixed(4));
        }
    }
}

for (let i = roots.length - 1; i >= 0; i--) {
    print(roots[i]);
}
