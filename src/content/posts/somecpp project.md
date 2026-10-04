---
title: 几个C语言程序
published: 2025-12-24 16:31:37
tags: [编程, cpp]
description: 几个经典C++程序
---

## 冒泡排序

```c
# include <stdio.h>
int main()
{
    int a[10];
    int i,j,t;
    printf("10 numbers ");
    for(i = 0;i < 10;i++){
        scanf("%d",&a[i]);
    }
    printf("\n");
    for(j = 0;j < 9;j++){
        for(i = 0;i < 9-j;i++){
            if(a[i]>a[i+1]){
                t = a[i];
                a[i] = a[i+1];
                a[i+1] = t;
            }
        }
    }
    printf("the sorted numbers: ");
    for(i = 0;i < 10;i++){
        printf("%d",a[i]);
    }
    printf("\n");
}

```

## 选择排序

```c
#include<stdio.h>

void sort(int array[], int n)
{
	int i, j, k, t;
	for (i = 0; i < n - 1; i++) {
		k = i;
		for (j = i + 1; j < n; j++) {
			if (array[j] < array[k]) {
				k = j;
			}
		}
		t = array[k];
		array[k] = array[i];
		array[i] = t;
	}
}
int main()
{
	int a[10], i;
	printf("enter array:\n");
	for (i = 0; i < 10; i++) {
		scanf("%d", &a[i]);
	}
	sort(a, 10);
	printf("the sorted array:\n");
	for (i = 0; i < 10; i++) {
		printf("%d ", a[i]);
	}
	printf("\n");
}
```

## 字符倒序

```c
#include <stdio.h>
#include <string.h>

void inverse(char s[])
{
	int l = strlen(s);
	for (int i = 0; i < l / 2; i++) {
		char t = s[i];
		s[i] = s[l - i - 1];
		s[l - 1 - i] = t;
	}
}

int main()
{
	char s1[100];
	printf("please input string:");
	gets(s1);
	inverse(s1);
	printf("inverse srting:%s", s1);
	printf("\n");
}
```

## 指针排两大小

```c
#include<stdio.h>

void swap(int *p1, int *p2)
{
	int t;
	t = *p1;
	*p1 = *p2;
	*p2 = t;
}
int main()
{
	int a, b;
	int *pointer_1,*pointer_2;
	printf("a and b:");
	scanf("%d %d", &a, &b);
	pointer_1 = &a;
	pointer_2 = &b;
	if (a < b) {
		swap(pointer_1, pointer_2);
	}
	printf("max=%d,min=%d", a, b);
	printf("\n");
}
```

## 指针排三个数大小

```c
#include <stdio.h>

void swap(int *p1, int *p2)
{
    int t;
    t = *p1;
    *p1 = *p2;
    *p2 = t;
}

int main()
{
    int a, b, c;
    int *s1, *s2, *s3;
    printf("输入3个数:");
    scanf("%d %d %d", &a, &b, &c);
    s1 = &a;
    s2 = &b;
    s3 = &c;
    if (*s1 > *s2)
    {
        swap(s1, s2);
    }
    if (*s1 > *s3)
    {
        swap(s1, s3);
    }
    if (*s2 > *s3)
    {
        swap(s2, s3);
    }
    printf("小到大为: %d %d %d", a, b, c);
    printf("\n");
}
```

## 四则计算

```c
#include <stdio.h>

int main()
{
    int a, b;
    double c;
    char op;
    printf("整数a和b和运算符：");
    scanf("%d %d", &a, &b);
    printf("输入运算符：");
    scanf(" %c", &op);

    switch (op)
    {
    case '+':
        printf("a+b=%d\n", (a + b));
        break;
    case '-':
        printf("a-b=%d\n", (a - b));
        break;
    case '*':
        printf("a*b=%d\n", (a * b));
        break;
    case '/':
        if (b == 0)
        {
            printf("除数不能为零！\n");
        }
        else
        {
            printf("a/b=%.2f\n",(double)a / (double)b);
        }
        break;
    default:
        printf("输入的运算符无效！\n");
        break;
    }
}
```

## 判断闰年

```c
#include <stdio.h>
int main()
{
    int year;
    printf("请输入年份：");
    scanf("%d", &year);
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        printf("%d 是闰年\n", year);
    else
        printf("%d 不是闰年\n", year);
    return 0;
}
```

## 判断第几天
```c
#include<stdio.h>
int main()
{
	int y, m, d, d2;
	printf("输入年月日:");
	scanf("%d %d %d", &y, &m, &d);
	if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
		d2 = 1;
	} else
		d2 = 0;
	switch (m) {
		case 12:  d = d + 30;
		case 11:  d = d + 31;
		case 10:  d = d + 30;
		case 9:   d = d + 31;
		case 8:   d = d + 31;
		case 7:   d = d + 30;
		case 6:   d = d + 31;
		case 5:   d = d + 30;
		case 4:   d = d + 31;
		case 3:   d = d + 28 + d2;
		case 2:   d = d + 31;
		case 1:   d = d;
	}
	printf("It is the %dth day.\n", d);
	return 0;
}
```


## 选择填空
```C
1. (单选题)以下说法中不正确的是( )。

    A. 一个C源程序可由一个或多个函数组成
    B. C语言程序总是从第一个定义的函数开始执行
    C. C程序的基本组成单位是函数
    D. 一个C源程序必须包含一个main函数

正确答案:B :C语言程序总是从第一个定义的函数开始执行;

2. (单选题)下列对 “算法” 的描述，最准确的是()

    A. 算法必须有输入，且输入的个数不少于 1 个
    B. 算法的每一步操作都必须是明确、无歧义的
    C. 算法的执行时间可以是无限的，只要逻辑正确即可
    D. 算法的输出可以有多个，也可以没有输出

正确答案:B :算法的每一步操作都必须是明确、无歧义的;

3. (单选题)C 语言结构化程序设计对应的流程图中，不包含以下哪种基本结构?()

    A. 顺序结构
    B. 跳转结构
    C. 选择(分支)结构
    D. 循环结构

 正确答案:B :跳转结构;

4. (单选题)下列字符串是标识符的是( )

    A. _HJ
    B. 9_student
    C. long
    D. LINE 1

 正确答案:A :_HJ;
 
5. (单选题)若有定义: `int a=7;float x=2.5;y=4.7`;
则表达式`x+a%3*(int)(x+y)%2/4` 的值是( )

    A. 2.500000
    B. 2.750000
    C. 3.500000
    D. 0.000000

正确答案:A :2.500000;

6. (单选题)下列运算符中优先级最低的是( )。

    A. <
    B. +
    C. &&
    D. !=

正确答案:C :&&;

7. (单选题)在C语言循环结构中，break 和 continue 语句的正确描述是:( )

    A. break 用于跳过当前循环剩余代码并进入下一次循环，continue 用于立即终止整个循环。
    B. 两者都可以在循环和 switch 语句中使用。
    C. continue 只能在循环中使用，而 break 可以在循环和 switch 语句中使用。
    D. 在嵌套循环中，break 和 continue 都默认作用于所有层循环。

正确答案:C :continue 只能在循环中使用，而 break 可以在循环和 switch 语句中使用。;

8. (单选题)程序段如下:则以下说法中正确的是:
int k=5;
do{
k--;
}while(k<=0);

    A. 循环执行5次
    B. 循环是无限循环
    C. 循环体语句一次也不执行
    D. 循环体语句执行一次

 正确答案:D :循环体语句执行一次;

9. (单选题)以下能正确定义数组并正确赋初值的语句是 ( )

    A. int n=5,b[n][n];
    B. int a[1][2]={{1},{3}};
    C. int c[2][]={{1,2},{3,4}};
    D. int a[3][2]={{1,2},{3,4}};

正确答案:D :int a[3][2]={{1,2},{3,4}};;

10. (单选题)以下对C语言函数的有关描述中，正确的是( )。

    A. 调用函数时，只能把实参的值传送给形参，形参的值不能传送给实参
    B. 函数既可以嵌套定义又可以递归调用
    C. 函数必须有返回值，否则不能使用函数
    D. 程序中有调用关系的所有函数必须放在同一个源程序文件中

正确答案:A :调用函数时，只能把实参的值传送给形参，形参的值不能传送给实参;

11. (单选题)当调用函数时，实参是一个数组名，则向函数传送的是_____。

    A. 数组的长度
    B. 数组的首地址
    C. 数组每一个元素的地址
    D. 数组每个元素中的值

正确答案:B :数组的首地址;

12. (单选题)有如下程序段 `int *p,a=10,b=1;p=&a;a=*p+b`;
执行该程序段后，a的值为( )

    A. 12
    B. 11
    C. 10
    D. 编译出错

 正确答案:B :11;

13. (单选题)以下关于C语言程序结构的说法，正确的是()。

    A. 一个C源程序可以没有main函数
    B. C程序的执行入口是第一个定义的函数
    C. 函数是C程序的基本组成单位
    D. 单个C源程序文件中只能定义一个函数

正确答案:C :函数是C程序的基本组成单位;

14. (单选题)下列关于算法特性的描述，错误的是()。

    A. 算法的每一步操作必须有确切的含义，无歧义
    B. 算法必须在有限步骤内结束(有穷性)
    C. 算法可以没有输入，但必须有输出
    D. 算法的执行步骤可以是模糊的，只要最终结果正确

正确答案:D :算法的执行步骤可以是模糊的，只要最终结果正确;

15. (单选题)下列标识符中，符合C语言命名规则的是()。

    A. 3num
    B. _price
    C. float
    D. name-1

正确答案:B :_price;

16. (单选题)若有定义:int a=9; float x=3.5, y=5.5;，则表达式 x + a%5 * (int)(x+y) % 3 / 2 的值是()。

    A. 3.500000
    B. 4.500000
    C. 5.500000
    D. 6.500000

正确答案:A :3.500000;

17. (单选题)下列运算符中优先级最高的是()。

    A. =
    B. *
    C. ||
    D. >

正确答案:B :*;

18. (单选题)关于C语言中break和continue语句，描述正确的是()。

    A. break可用于循环和switch语句，continue仅用于循环
    B. continue用于终止整个循环，break用于跳过本次循环剩余语句
    C. 嵌套循环中，break会终止所有层循环
    D. switch语句中可以使用continue语句

正确答案:A :break可用于循环和switch语句，continue仅用于循环;

19. (单选题)执行以下程序段后，k的值是()。
int k=3;​
do{​
k -= 2;​
}while(k>0);

    A. 1
    B. -1
    C. 3
    D. 0

正确答案:B :-1;

20. (单选题)已知ch是字符型变量，下面不正确的赋值语句是( )。

    A. ch=‘a+b’;
    B. ch=‘\0’;
    C. ch=‘7’+‘9’;
    D. ch=5+9;

 正确答案:A :ch=‘a+b’;;

21. (单选题)以下关于C语言函数的描述，正确的是()。

    A. 函数可以嵌套定义
    B. 实参和形参的类型必须完全一致
    C. 调用函数时，实参的值会传递给形参(值传递)，形参修改不影响实参
    D. 所有函数都必须有返回值

正确答案:C :调用函数时，实参的值会传递给形参(值传递)，形参修改不影响实参;

22. (单选题)若定义int a[10],*p=&a[0]; 则p+5 表示的是( )。

    A. 数组元素a[5]的值
    B. 数组元素a[5]的地址
    C. 数组元素a[6]的值
    D. 数组元素a[6]的地址

 正确答案:B :数组元素a[5]的地址;

23. (单选题)执行以下程序段后，b的值是()。
int *p, a=5, b=8;
p=&b;
b=*p + a;

    A. 13
    B. 8
    C. 5
    D. 编译错误

正确答案:A :13;

二. 填空题（共10题，31分）
24. (填空题)

执行下面程序段后,C的值为____        

int a=20;

char c='b';

int C;

C=((a=5)||(c>'Z'));


正确答案： 1


25. (填空题)

2. 程序运行后，则输出结果为____。

#include<stdio.h>

void main()

{ int p[7]={11,13,14,15,16,17,18},i=0,k=0;

while(i<7&&p[i]%2){k=k+p[i];i++;} printf("k=%dn",k);}


正确答案： k=24

26. (填空题)

以下程序运行后，输出结果是 ____  。

fun(int x, int y,int z){

z=x*x+y*y;}

main0

{ int a=31;

fun(5,2,a);

printf("%d",a);}


正确答案： 31

27. (填空题)

以下程序运行后，输出结果是 ____  

#include <stdio.h>

int main() {

    int arr[5] = {5, 10, 15, 20, 25};

    int *p = arr;

    int *q = &arr[3];

    int result = q - p + *p + *q;

    printf("%d\n", result);

    return 0;



正确答案：  28

28. (填空题)

执行以下C语言程序段后，变量res的值为______。

int num = 15;

char ch = 'F';

int res;

res = (num % 4 == 3) || ((ch - 'A') < 5);


正确答案： 1

29. (填空题)

程序运行后，输出结果为____。

#include <stdio.h>

int main() {

    int arr[6]={22,24,25,27,28,30},i=0,sum=0;

    while(i<6 && arr[i]%2==0){

        sum += arr[i];

        i++;

    }

    printf("sum=%d\n",sum);

    return 0;

}

正确答案： sum=46

AI讲解
30. (填空题)

以下程序运行后，输出结果是____。

int fun(int m, int n) {

        return m + n;

}

int main() {

        int a = 10;

        a = fun(7, 8);

        printf("%d", a);

        Return 0;

}


正确答案：  15

31. (填空题)

以下程序运行后，输出结果是____。

void fun(int m, int n, int *k)

{

    *k = m + n;

}

int main() {

    int a = 10;

    fun(5, 8, &a);

    printf("%d", a);

return 0;

}

正确答案： 13

32. (填空题)

一球从100米高度自由落下，每次落地后反跳回原来高度的一半，再落下，求它在第十次落地时，共经过多少米以及第十次反弹多高?请完善以下程序。

int main()

{float Sn=100.0,hn=Sn/2;

int n;

for (n=2;n<=①;n++)

②；

hn=③ ;}

printf("第10次落地时共经过%f米\n",Sn);

printf("第10次反弹%f米\n",hn);

}

正确答案：  (1) 10
            (2) Sn=Sn+2*hn
            (3) hn/2

33. (填空题)

1. 编写程序计算 1+3+5+…+99 的累加和（即 1 到 100 之间所有奇数的和），请完善以下程序。

int main() {

    int sum = 0;  

    int i;

    for(① ; i<=99; ② ) {

        ③ ;     }

    printf("1到99所有奇数的和为：%d\n", sum);

    return 0;

}

正确答案：  (1) i=1
          (2) i+=2
          (3) sum=sum+i

```

