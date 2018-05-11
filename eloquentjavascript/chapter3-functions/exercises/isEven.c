#include <stdio.h>

int isEven(int n) {
    return !(n & 1);
}

int isOdd(int n) {
    return (n & 1);
}

int main(int argc, char const *argv[])
{
    int i = 4, j = 3;

    puts(isEven(i) ? "4 is even" : "4 is odd");
    puts(isEven(j) ? "3 is even" : "3 is odd");

    puts(isOdd(i) ? "4 is odd" : "4 is even");
    puts(isOdd(j) ? "3 is odd" : "3 is even");

    return 0;
}