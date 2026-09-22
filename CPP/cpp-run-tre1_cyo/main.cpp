#include<stdio.h>
#include<conio.h>
#include<math.h>
#include<string.h>
int n;
float x;
struct Thisinh
{
 char hoten[50];
 int sbd;
 float toan,ly,hoa,tong;
}ts[10];

void Nhap(Thisinh *ts)
{
 printf("\nNhap ho ten TS:");
 getchar();
 fgets(ts->hoten,50,stdin); 
 printf("Nhap SBD:");
 scanf("%d",&ts->sbd);
printf("Nhap Diem toan : ");   scanf("%f",&ts->toan);
printf("Nhap Diem ly : ");   scanf("%f",&ts->ly);
printf("Nhap Diem hoa : ");   scanf("%f",&ts->hoa);
ts->tong=ts->toan+ts->ly+ts->hoa;
}

void Xuat(Thisinh ts)
{
 printf("Ho ten : %s  SBD : %d    ",ts.hoten,ts.sbd);
 printf("\nDiem Toan %.2f  Diem ly : %.2f  Diem hoa : %.2f  Tong : %.2f   ",
 ts.toan,ts.ly,ts.hoa,ts.tong);
}

 int main()
 {
printf("Nhap n= :");
scanf("%d",&n);
for(int i=0;i<n;i++)
{
  printf("Nhap thong tin cua TS thu %d :",i+1); 
  Nhap(&ts[i]);	
}
printf("\nDanh sach cac TS:"); 
for(int i=0;i<n;i++)
{
  printf("\n TS thu %d :",i+1);
  Xuat(ts[i]);
}
printf("\nNhap diem chuan = ");
scanf("%f",&x);

printf("\nDanh sach cac TS passed:");
for(int i=0;i<n;i++)
{
  if(ts[i].tong>=x)
  {
  printf("\n TS thu %d :",i+1);
  Xuat(ts[i]);	
  } 
}
 }