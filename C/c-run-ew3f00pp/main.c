#include <stdio.h>
#include <string.h>
int main(){ int n=0; char line[100];
  printf("Nhap so luong sinh vien: ");
  if (fgets(line, sizeof(line), stdin) == NULL || sscanf(line, "%d", &n) != 1 || n <= 0) { printf("invalid\n"); return 1; }
  for (int i = 0; i < n; i++) { printf("ten: "); fgets(line, sizeof(line), stdin); printf("diem: "); fgets(line, sizeof(line), stdin); }
  printf("DONE %d\n", n); return 0; }