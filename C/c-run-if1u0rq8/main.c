#include <stdio.h>
#include <string.h>

typedef struct {
    char ten[50];
    float diem;
} SinhVien;

int main() {
    int n = 0;
    SinhVien sv[100];
    char line[100];

    printf("Nhap so luong sinh vien: ");
    if (fgets(line, sizeof(line), stdin) == NULL ||
        sscanf(line, "%d", &n) != 1 || n <= 0) {
        printf("So luong sinh vien khong hop le!\n");
        return 1;
    }
    for (int i = 0; i < n; i++) {
        printf("\n--- Sinh vien thu %d ---\n", i + 1);
        printf("Nhap ho ten: ");
        if (fgets(sv[i].ten, sizeof(sv[i].ten), stdin) != NULL) {
            sv[i].ten[strcspn(sv[i].ten, "\r\n")] = '\0';
        }
        printf("Nhap diem: ");
        if (fgets(line, sizeof(line), stdin) != NULL) {
            sscanf(line, "%f", &sv[i].diem);
        }
    }
    printf("\n================ DANH SACH SINH VIEN ================\n");
    for (int i = 0; i < n; i++) {
        printf("%d | %s | %.2f\n", i + 1, sv[i].ten, sv[i].diem);
    }
    return 0;
}