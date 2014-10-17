function getWeight(n, w, k) {
    var pile1 = 0,
        pile2 = 0,
        i;

    for (i = 0; i < n; i++) {
        if (k & (1 << i)) {
            pile1 += w[i];
        } else {
            pile2 += w[i];
        }
    }

    return Math.abs(pile1 - pile2);
}

function solve(n, w) {
    var kmax = (1 << n) - 1,
        kopt = (kmax >> 1) + 1,
        min = Number.MAX_VALUE,
        k;

    for (k = 1; k <= kopt; k++) {
        min = Math.min(min, getWeight(n, w, k));

        if (min < 1) {
            break;
        }
    }

    return min;
}

var count = +readline();
var stones = readline().split(' ').map(function (s) { return +s; });

print(solve(count, stones) + "\n");
