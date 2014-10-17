var i, k, j, n;

n = 50;

console.log(n);
console.log(1);

for (k = 0; k < (n * 10); k++) {
    i = Math.floor(Math.random() * n);
    j = Math.floor(Math.random() * (n - i)) + i;
    if (i > 0 && i < j) {
        console.log(i, j);
    }
}

console.log(0, 0);
console.log(0);
