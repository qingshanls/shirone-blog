---
title: markdown学习
published: 2024-06-26 09:22:23
tags: [学习,Markdown]
comment: true # 是否展示评论，默认 true
description: 学习记录的markdown语法
---

在学习HTML时顺带学习了下markdown，于是就有了这个。

---

# 一级标题
`#`
## 二级标题
`##`
### 三级标题
`###`
#### 四级标题
`####`
##### 五级标题
`#####`
###### 六级标题
`######`
一级标题
========
`=======`
二级标题
--------
`-------`
这是第一段
第一段

这是第二段前一行空白行



换行结尾添加两空格`  `  
下一行

换行结尾HTML`<br>`<br>
第二行


# 强调语法
## 1.加粗
前后双星号加粗`**` **加粗** <br>
双下划线加粗`__` __加粗__

## 2.斜体
前后单星号`*` *斜体* <br>
单下划线`_`  _斜体_ <br>
`*局部*斜体` *局部*斜体

## 3.斜体+粗体
***前后三星号*** `***`<br>
___前后三下划线___ `___`<br>
**_前后先双后单_** `_**`<br>
__*前后先双后单*__ `*__`

## 删除线
删除内容前后加 `~~`  
~~shanchu~~

# 引用语法

##  单段落引用
引用前加`>`  
>这是一个引用块

## 多段落引用
```
> 第一段
>
>第二段
```
> 第一段
>
>第二段


## 嵌套引用
```
> 第一段
>
>>第二段
```

> 第一段
>
>>第二段


## 带有其它元素的块引用
```
> #### 1
>
> - 2
> - 3
>
>  *斜体* 4 <br>**加粗**.
```

> #### 1
>
> - 2
> - 3
>
>  *斜体* 4 <br>**加粗**.


# 列表语法

## 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 `1` 起始。<br>
```
1. First
2. Second
3. Third 
5. Fourth
```
1. First
2. Second
3. Third 
5. Fourth


## 无序列表
列表项前面添加破折号 `-`、星号 `*` 或加号 `+` 。缩进一个或多个列表项可创建嵌套列表。
````
- First item
* Second item
+ Third item
    + Third item
        >引用
        ~~~
        <html>
          <head>
            <title>Test</title>
          </head>
        ~~~
+ Third item
````
- First item
* Second item
+ Third item
    + Third item
        >引用
        ~~~
        <html>
          <head>
            <title>Test</title>
          </head>
        ~~~
+ Third item

# 代码语法
`nano` `qqq` `QvQ`
### 转义反引号
``ZHI`SHI`DAIMA``
### 代码块
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTML 区块</title>
    </head>

# 分割线
单行内只有3个`* `、` - `、` _ `
***
`***`
---
`---`
___
`___`

# 链接语法
语法代码：`[超链接显示名](超链接地址 "超链接title")` <br>
[B站空间](https://space.bilibili.com/ "haha") <br>
****
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。 <br>
<example@exapmle.com>
<https://bilibili.com> <br>

### 带格式化的链接
强调链接， 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。
强调 **[链接](https://local.com)**.
这是一个 *[链接](https://qqq.com)*
这是一个 [`代码`](#code).
***
[hobbit-hole] [1]<br>
[1]:https://en.wiki.org "lianjie lifestyles"

## 图片链接
格式``![图片alt](图片链接 "图片title")``
![qq](./image/0001.png "renlei")  
[![qq](./image/0002.png "街角魔族")](https://baike.baidu.com/item/%E8%A1%97%E8%A7%92%E9%AD%94%E6%97%8F/23270845)

## 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符` \ `。<br>  
\* Without the backslash, this would be a bullet in an unordered list.

## 表格
```
|   `	|   	|
|---	|---	|
|   1	|  3 	|
|   2	|   	|
```

|   `	|   	|
|---	|---	|
|   1	|  3 	|
|   2	|   	|

## 围栏代码块
在代码块之前和之后的行上使用三个反引号` ``` `或三个波浪号`~~~`.

<!--json 语法高亮-->
```json 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 区块</title>
</head>
```
## 脚注
在方括号` [^1] `内添加插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。

在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本` [^1]: My footnote. `
jiaozhu,[^1]  
[^1]: 123

## 任务列表语法
在任务列表项之前添加破折号`-`和方括号`[ ]`，并在`[ ]`前面加上空格。要选择一个复选框，请在方括号`[x]`之间添加 `x` 。
- [x] first
- [ ] second

## Markdown 内嵌 HTML 标签
### 行级內联标签
HTML 的行级內联标签如` <span> `、`<cite> `、` <del> `不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。  
```
<img src="./image/0001.png" alt="123321" width="250" heigth="250">
 vsc加载不出图片？？
```

<div align=center><img src="./image/0001.png" alt="123321" width="100" height="100"></div>

<font color=#66ccff>blue</font><br>

<font color=#66ccff>
<p color=#66ccff align=center >blue</p>
</font>

### 区块标签
区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

## Emoji
1.直接复制粘贴到文档。  
😅

2.使用emoji简码
:字符:
:smile:  :o: :100: :sweat_smile:

To be continued...
