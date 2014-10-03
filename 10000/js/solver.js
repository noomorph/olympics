module.exports = function calculateLongestPath(n, i1, paths) {
    var places = new Array(n + 1),
        queue = [i1],
        max = 0,
        i, path, len, from, to, place, fin;

    function Place() {
        this.length = 0;
        this.next = [];
    }

    for (i = 0; i <= n; i++) {
        places[i] = new Place();
    }

    for (i = 0; i < paths.length; i++) {
        path = paths[i];
        from = path[0];
        to   = path[1];

        places[from].next.push(to);
    }

    while (queue.length > 0) {
        place = places[queue.shift()];
        len = place.length + 1;

        for (i = 0; i < place.next.length; i++) {
            to = place.next[i];

            if (places[to].length < len) {
                places[to].length = len;

                if (max < len) {
                    max = len;
                    fin = to;
                }
            }

            if (places[to].length <= len) {
                queue.push(to);
            }
        }
    }

    return [max, fin];
};
