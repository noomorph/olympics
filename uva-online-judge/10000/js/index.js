var readline = require('readline'),
    solver = require('./solver'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }),
    caseIndex = 0,
    n, i1, paths;

function reset() {
    n = 0;
    i1 = 0;
    paths = [];
}

reset();

rl.on('line', function (line) {
    line = line.trim();
    var pair = line.match(/(\d+) (\d+)/),
        from, to;

    if (pair) {
        if (line !== "0 0") {
            from = parseInt(pair[1], 10);
            to   = parseInt(pair[2], 10);

            if (from !== to) {
                paths.push([from, to]);
            }

            return;
        }

        pair = solver(n, i1, paths);

        rl.write("Case " + (++caseIndex) + ": ");
        rl.write("The longest path from " + i1 + " ");
        rl.write("has length " + pair[0] + ", ");
        rl.write("finishing at " + pair[1] + ".\n");

        return reset();
    }

    if (n === 0) {
        n = parseInt(line, 10);
        return n || process.exit(0);
    }

    if (i1 === 0) {
        i1 = parseInt(line, 10); 
        return;
    }
}).on('close', function () {
    process.exit(0);
});
