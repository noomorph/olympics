String.prototype.indicesOf = function (substring) {
    var indexes = [],
        i = -1;

    while ((i = this.indexOf(val, i + 1)) != -1){
        indexes.push(i);
    }

    return indexes;
};

function Problem() {
    this.number = readline();
    this.valid  = this.number !== "-1";

    if (!this.valid) {
        return;
    }

    this.dictionary = new Array(+readline());
    for (var i = 0; i < this.dictionary.length; i++) {
        this.dictionary[i] = readline();
    }

    this.subphrases = this.evaluateSubphrases();
    this.paths = this.buildPaths();
    this.lengths = this.initLengths();
}

function Path(to, ref) {
    this.to = to;
    this.ref = ref;
}

function PathInfo(from, ref, path) {
    this.from = from;

    if (ref !== null) {
        this.path = path.concat([ref]);
    } else {
        this.path = path;
    }
}

Problem.prototype.evaluateSubphrases = function () {
    var n = this.dictionary.length,
        subphrases = new Array(n),
        MAP = {
            a: '2', b: '2', c: '2', d: '3', e: '3', f: '3',
            g: '4', h: '4', i: '1', j: '1', k: '5', l: '5', m: '6',
            n: '6', o: '0', q: '0', p: '7', r: '7', s: '7', t: '8',
            u: '8', v: '8', w: '9', x: '9', y: '9', z: '0'
        };

    function mapper(character) {
        return MAP[character] || '';
    }

    for (var i = 0; i < n; i++) {
        subphrases[i] = this.dictionary[i].replace(/(.)/g, mapper);
    }

    return subphrases;
};

function buildPath(paths, phone, subphrase, reference) {
    var len = subphrase.length,
        index = -1;

    while ((index = phone.indexOf(subphrase, index + 1)) != -1){
        paths[index].push(new Path(index + len, reference));
    }
}

Problem.prototype.buildPaths = function () {
    var L = this.number.length,
        n = this.subphrases.length,
        paths = new Array(L + 1),
        i;

    for (i = 0; i <= L; i++) {
        paths[i] = [];
    }

    for (i = 0; i < n; i++) {
        buildPath(paths, this.number, this.subphrases[i], i);
    }

    return paths;
};

Problem.prototype.initLengths = function () {
    var L = this.number.length,
        lengths = new Array(L + 1);

    for (var i = 0; i <= L; i++) {
        lengths[i] = Number.MAX_VALUE;
    }

    return lengths;
};

Problem.prototype.solve = function () {
    var solution = [],
           stack = [new PathInfo(0, null, [])],
               L = this.number.length,
           step;

    if (this.valid) {
        while (stack.length > 0) {
            step = stack.pop();

            if (this.lengths[step.from] > step.path.length) {
                this.lengths[step.from] = step.path.length;

                if (step.from < L) {
                    var directions = this.paths[step.from];

                    for (var i = 0; i < directions.length; i++) {
                        var path = directions[i];
                        stack.push(new PathInfo(path.to, path.ref, step.path));
                    }
                } else if (step.from === L) {
                    if (solution.length === 0 || solution.length > step.path.length) {
                        solution = step.path;
                    }
                }
            }
        }
    }

    return solution;
};

(function main() {
    var problem, shouldContinue;

    function writeSolution(solution) {
        if (solution.length === 0) {
            print("No solution.");
        } else {
            var sln = solution.map(function (ref) {
                return problem.dictionary[ref];
            }).join(' ');

            print(sln);
        }
    }

    do {
        problem = new Problem();
        solution = problem.solve();

        if (problem.valid) {
            writeSolution(solution);
        }
    } while (problem.valid);
}());
