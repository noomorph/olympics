#include <stdio.h>
#include <math.h>

#define E049 0.049999999

double score(double n, double x, double m) {
    return 0.1 * round(10*(n*x+m)/(n+m));
}

int main() {
    double x, y, y1;
    int M, n;

    scanf("%lf %lf %d", &x, &y, &n);

    if (x > y) {
        y1 = y + E049;
        M = (int)(ceil(n * (x - y1) / (y1 - 1.0)));

        while (score(n, x, M) <= y) {
            M--;
        }
        M++;
    } else {
        M = 0;
    }

    printf("%d\n", M);
    return 0;
}
