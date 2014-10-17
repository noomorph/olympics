#include "stdio.h"

int get_weight(int n, int w[n], int k) {
    int pile1 = 0;
    int pile2 = 0;

    for (int i = 0; i < n; i++) {
        if ((k & (1 << i)) > 0) {
            pile1 += w[i];
        } else {
            pile2 += w[i];
        }
    }

    return (pile1 > pile2) ? (pile1 - pile2) : (pile2 - pile1);
}

int solve(int n, int w[n]) {
    int kmax = (1 << n) - 1;
    int kopt = (kmax >> 1) + 1;
    int min  = 999999999;
    int weight = 0;

    for (int k = 1; k <= kopt; k++) {
        weight = get_weight(n, w, k);

        if (weight < min) {
            min = weight;
        }

        if (min < 1) {
            break;
        }
    }

    return min;
}

int main()
{
    int n, w;
    scanf("%d", &n);

    int stones[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &w);
        stones[i] = w;
    }

    printf("%d\n", solve(n, stones));
    return 0;
}
