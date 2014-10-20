#include <stdio.h>
#include <math.h>

double score(double x, double n, double M) {
    return round(10 * (x * n + M) / (n + M)) * 0.1;
}

int main() {
    double x, y, n, M;

    scanf("%lf %lf %lf", &x, &y, &n);
    x = round(x * 10) * 0.1;
    y = round(y * 10) * 0.1;
    y += 0.05;

    if (x < y) {
        x = y;
    }

    M = floor(n * (x-y)/(y-1));

    while (score(x, n, M) > y) {
        M += 1.0;
    }

    printf("%d\n", (int)M);
    return 0;
}
