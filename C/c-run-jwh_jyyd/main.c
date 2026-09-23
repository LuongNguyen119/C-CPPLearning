#include <stdio.h>
#include <string.h>
int main(){char line[100]; int n; fgets(line,100,stdin); sscanf(line,"%d",&n); printf("N=%d\n",n); return 0;}