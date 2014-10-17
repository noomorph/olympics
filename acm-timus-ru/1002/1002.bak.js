var toPhoneNumber = (function () {
    var map = {a:'2',b:'2',c:'2',d:'3',e:'3',f:'3',g:'4',h:'4',i:'1',j:'1',k:'5',l:'5',m:'6',n:'6',o:'0',q:'0',p:'7',r:'7',s:'7',t:'8',u:'8',v:'8',w:'9',x:'9',y:'9',z:'0'};

    return function (word) {
        return word.replace(/(.)/g, function (c) {
            return map[c] || '';
        });
    };
}());

function getAllIndexesOf(val, str) {
    var indexes = [],
        i = -1;

    while ((i = str.indexOf(val, i + 1)) != -1){
        indexes.push(i);
    }

    return indexes;
}

function readProblem() {
    var number = readline().trim(),
        words = [],
        n, i;

    if (number === "-1") {
        return;
    }

    n = +readline();
    for (i = 0; i < n; i++) {
        words.push(readline().trim());
    }

    return {
        number: number,
        words: words
    };
}

function solve(problem) {
    if (!problem) {
        return;
    }

    problem.subs = problem.words.map(toPhoneNumber);
    var ways = [];

    problem.subs.forEach(function (subString) {
        var indexes = getAllIndexesOf(subString, problem.number);

    });

    print("Solving " + problem.number);
}

var p;

do {
    p = readProblem();
    solve(p);
} while (p);
