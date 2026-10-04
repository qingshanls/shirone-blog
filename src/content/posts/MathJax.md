---
title: MathJax 全功能示例
published: 2025-03-27 14:53:37
tags: [学习,MATHJAX,Markdown]
description: MathJax 全功能示例
mathjax: true
---

## 1. 基础符号

### 希腊字母
```mathjax
$$\alpha, \beta, \Gamma, \Delta, \theta, \Omega$$
```
$$\alpha, \beta, \Gamma, \Delta, \theta, \Omega$$

```mathjax
$$\epsilon, \varepsilon, \phi, \varphi$$
```
$$\epsilon, \varepsilon, \phi, \varphi$$

### 上下标

```mathjax
$$x_i, x^2, x^{y^z}, x_{i,j}, e^{-\alpha t}$$
```
$$x_i, x^2, x^{y^z}, x_{i,j}, e^{-\alpha t}$$

### 分式
```mathjax
$$\frac{a}{b}$$
```
$$\frac{a}{b}$$

```mathjax
$$\dfrac{1+\frac{a}{b}}{1+\frac{b}{a}}$4
```
$$\dfrac{1+\frac{a}{b}}{1+\frac{b}{a}}$$

### 根号
```mathjax
$$\sqrt{x}, \sqrt[n]{x}$$
```
$$\sqrt{x}, \sqrt[n]{x}$$

### 求和与积分
```mathjax
$$\sum_{i=1}^n a_i$$,  
$$\int_a^b f(x) \, dx$$,  
$$\iint_D dA$$,  
$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$
```
$$\sum_{i=1}^n a_i$$
$$\int_a^b f(x) \, dx$$
$$\iint_D dA$$
$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$

### 极限与导数
```mathjax
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$  
$$f'(x), \frac{df}{dx}, \frac{\partial^2 u}{\partial x^2}$$
```
$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$ 
$$f'(x), \frac{df}{dx}, \frac{\partial^2 u}{\partial x^2}$$

---

## 2. 矩阵与方程组

### 矩阵
```mathjax
$$
\begin{pmatrix}
  a & b \\
  c & d \\
\end{pmatrix}, \quad
\begin{bmatrix}
  0 & \cdots & 1 \\
  \vdots & \ddots & \vdots \\
\end{bmatrix}, \quad
\begin{vmatrix}
  x & y \\
  z & w \\
\end{vmatrix}
$$
```
$$
\begin{pmatrix}
  a & b \\
  c & d \\
\end{pmatrix}, \quad
\begin{bmatrix}
  0 & \cdots & 1 \\
  \vdots & \ddots & \vdots \\
\end{bmatrix}, \quad
\begin{vmatrix}
  x & y \\
  z & w \\
\end{vmatrix}
$$

### 分段函数
```mathjax
$$
f(n) = 
\begin{cases} 
  n/2 & \text{if } n \text{ even} \\
  3n+1 & \text{if } n \text{ odd}
\end{cases}
$$
```
$$
f(n) = 
\begin{cases} 
  n/2 & \text{if } n \text{ even} \\
  3n+1 & \text{if } n \text{ odd}
\end{cases}
$$

---

## 3. 运算符与符号

### 运算符
```
$\sin \theta, \cos \pi, \tan \phi$,  
$\log_2 x, \ln e, e^x$,  
$\nabla \cdot \mathbf{F}, \Delta u$
```
$$\sin \theta, \cos \pi, \tan \phi$$
$$\log_2 x, \ln e, e^x$$
$$\nabla \cdot \mathbf{F}, \Delta u$$

### 集合符号
```
$$\forall x \in \mathbb{R}, \exists y \notin A$$,  
$$A \cup B, A \cap B, A \subseteq B$$
```
$$\forall x \in \mathbb{R}, \exists y \notin A$$
$$A \cup B, A \cap B, A \subseteq B$$

### 关系符号
```
$$a \neq b, x \geq y, \approx, \equiv \mod n$$
```
$$a \neq b, x \geq y, \approx, \equiv \mod n$$

### 箭头与逻辑
```
$$A \rightarrow B, \leftrightarrow$$,  
$$\Rightarrow, \Leftrightarrow, \neg P \lor Q$$
```
$$A \rightarrow B, \leftrightarrow$$
$$\Rightarrow, \Leftrightarrow, \neg P \lor Q$$

---

## 4. 排版技巧

### 方程对齐
```
$$
\begin{aligned}
  E &= mc^2 \\
  F &= ma \\
  \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \epsilon_0 \frac{\partial E}{\partial t}
\end{aligned}
$$
```
$$
\begin{aligned}
  E &= mc^2 \\
  F &= ma \\
  \nabla \times \mathbf{B} &= \mu_0 \mathbf{J} + \epsilon_0 \frac{\partial E}{\partial t}
\end{aligned}
$$

### 多行公式
```
$$
\begin{split}
  \cos(a + b) = \cos a \cos b - \sin a \sin b \\
  \sin(a + b) = \sin a \cos b + \cos a \sin b
\end{split}
$$
```
$$
\begin{split}
  \cos(a + b) = \cos a \cos b - \sin a \sin b \\
  \sin(a + b) = \sin a \cos b + \cos a \sin b
\end{split}
$$

### 字体与括号
```
$\mathbb{R}, \mathcal{ABC}, \mathfrak{g}, \mathbf{v}$  
$\left( \frac{a}{b} \right), \bigg[ \bigg]$
```
$$\mathbb{R}, \mathcal{ABC}, \mathfrak{g}, \mathbf{v}$$  
$$\left( \frac{a}{b} \right), \bigg[ 1\bigg]$$

---

## 5. 复杂公式示例

### 泰勒展开
```
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n
$$
```
$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n
$$

### 矩阵乘法
```
$$
\mathbf{AB} = 
\begin{pmatrix}
  \mathbf{A}_{11} & \cdots & \mathbf{A}_{1n} \\
  \vdots & \ddots & \vdots \\
  \mathbf{A}_{m1} & \cdots & \mathbf{A}_{mn}
\end{pmatrix}
\begin{pmatrix}
  \mathbf{B}_{11} & \cdots & \mathbf{B}_{1p} \\
  \vdots & \ddots & \vdots \\
  \mathbf{B}_{n1} & \cdots & \mathbf{B}_{np}
\end{pmatrix}
$$
```
$$
\mathbf{AB} = 
\begin{pmatrix}
  \mathbf{A}_{11} & \cdots & \mathbf{A}_{1n} \\
  \vdots & \ddots & \vdots \\
  \mathbf{A}_{m1} & \cdots & \mathbf{A}_{mn}
\end{pmatrix}
\begin{pmatrix}
  \mathbf{B}_{11} & \cdots & \mathbf{B}_{1p} \\
  \vdots & \ddots & \vdots \\
  \mathbf{B}_{n1} & \cdots & \mathbf{B}_{np}
\end{pmatrix}
$$

### 傅里叶变换

```
$$
\mathcal{F}\{f(x)\} = \int_{-\infty}^{\infty} f(x) e^{-i2\pi\xi x} dx
$$
```
$$
\mathcal{F}\{f(x)\} = \int_{-\infty}^{\infty} f(x) e^{-i2\pi\xi x} dx
$$

---

## 注意事项
1. **环境与语法**：
   - 块级公式用 `$$ ... $$` 或 `\[ ... \]`，行内公式用 `\( ... \)`。
   - 矩阵用 `pmatrix`, `bmatrix`, `cases` 等环境。
   - 对齐用 `align`, `aligned`, `split` 等。

2. **特殊符号**：
   - 希腊字母需小写/大写前缀（如 `\alpha`, `\Gamma`）。
   - 特殊符号需用反斜杠（如 `\infty`, `\partial`, `\nabla`）。

3. **排版细节**：
   - 空格不影响公式，但 `\,`、`\quad` 可调整间距。
   - 使用 `\text{}` 在公式中插入文本。

更多细节请参考 [MathJax 官方文档](https://docs.mathjax.org/)。
