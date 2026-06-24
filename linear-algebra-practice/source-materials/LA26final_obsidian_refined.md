# 2026 年期末真题整理

考后按已回忆出的题干整理。当前只收录倒数第二题与最后一题，题号暂用相对位置标记。

## 题目

### 1.

在线性空间 $V=P_2[x]$ 上定义

$$
(f,g)=60\int_0^1 x f(x)g(x)\,dx.
$$

1. 证明这是 $V$ 上的一个内积；
2. 取 $e_1=1,\ e_2=x,\ e_3=x^2$，求基 $(e_1,e_2,e_3)$ 下的度量矩阵；
3. 求 $(e_1,e_2,e_3)$ 的对偶基。

### 2.

题干待补：求某个双线性型在给定基下的矩阵。

考点：双线性型矩阵的行、列下标分别对应哪个变量。

### 3.

题干待补：求某个矩阵的正交相似标准型，并求其过渡矩阵。

### 回忆题：首坐标条件

设

$$
u=(a,b,c),\qquad v=(d,e,f)
$$

为 $\mathbb R^3$ 中两个单位正交向量。

1. 证明 $a^2+d^2\le 1$；
2. 反过来，若 $a^2+d^2\le 1$，证明可以构造 $\mathbb R^3$ 中两个单位正交向量

   $$
   u=(a,b,c),\qquad v=(d,e,f).
   $$

### 倒数第二题

设 $A$ 为实方阵。

1. 由奇异值分解证明极分解定理：存在对称半正定矩阵 $S$ 和正交矩阵 $U$，使得

   $$
   A=SU.
   $$

2. 判断这样的分解 $A=SU$ 是否唯一，并说明理由。

### 最后一题

设

$$
A=(a_{ij}),\qquad B=(b_{ij})
$$

为 $n$ 阶实对称正定矩阵。证明 Hadamard 积

$$
C=(c_{ij}),\qquad c_{ij}=a_{ij}b_{ij},
$$

也是正定矩阵。

## 参考解答

### 第 1 题

对任意 $f,g,h\in P_2[x]$ 和实数 $a,b$，由积分线性性得

$$
(af+bg,h)=a(f,h)+b(g,h).
$$

又因为 $x f(x)g(x)=x g(x)f(x)$，所以 $(f,g)=(g,f)$。最后

$$
(f,f)=60\int_0^1 x f^2(x)\,dx\ge0.
$$

若 $(f,f)=0$，则 $x f^2(x)$ 在 $[0,1]$ 上连续且非负，积分为 $0$，所以 $x f^2(x)\equiv0$。在 $(0,1]$ 上有 $x>0$，故 $f(x)=0$。由于 $f$ 是多项式，推出 $f\equiv0$。因此这是内积。

因为 $e_i=x^{i-1}$，所以

$$
G_{ij}=(e_i,e_j)=60\int_0^1 x\cdot x^{i-1}x^{j-1}\,dx
=60\int_0^1 x^{i+j-1}\,dx
=\frac{60}{i+j}.
$$

于是度量矩阵为

$$
G=
\begin{pmatrix}
30&20&15\\
20&15&12\\
15&12&10
\end{pmatrix}.
$$

内积意义下的对偶基 $(e^1,e^2,e^3)$ 满足 $(e_i,e^j)=\delta_i^j$。设 $e^j$ 在原基下的坐标作为第 $j$ 列组成矩阵 $A$，则

$$
GA=I,\qquad A=G^{-1}.
$$

计算得

$$
G^{-1}=
\begin{pmatrix}
\frac65&-4&3\\
-4&15&-12\\
3&-12&10
\end{pmatrix}.
$$

所以

$$
\begin{aligned}
e^1&=\frac65-4x+3x^2,\\
e^2&=-4+15x-12x^2,\\
e^3&=3-12x+10x^2.
\end{aligned}
$$

### 第 2 题

设双线性型为 $B(\cdot,\cdot)$，给定基为

$$
\mathcal B=(e_1,e_2,\ldots,e_n).
$$

它在基 $\mathcal B$ 下的矩阵记为 $M=(m_{ij})$。约定是

$$
m_{ij}=B(e_i,e_j).
$$

也就是说，第 $i$ 行对应第一个变量的基向量 $e_i$，第 $j$ 列对应第二个变量的基向量 $e_j$。

若

$$
x=\sum_i x_i e_i,\qquad y=\sum_j y_j e_j,
$$

则

$$
B(x,y)=\sum_{i,j}x_i m_{ij}y_j=[x]_{\mathcal B}^T M [y]_{\mathcal B}.
$$

所以实际计算时，把第一个变量依次代入 $e_1,e_2,\ldots,e_n$ 来轮换行，把第二个变量依次代入 $e_1,e_2,\ldots,e_n$ 来轮换列。

### 第 3 题

这类题通常针对实对称矩阵 $A$。由实谱定理，存在正交矩阵 $P$，使

$$
P^TAP=\operatorname{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n).
$$

求解步骤：

1. 求特征多项式 $\det(\lambda I-A)$；
2. 求各特征值 $\lambda_i$ 的特征子空间 $\ker(A-\lambda_i I)$；
3. 对每个特征子空间取标准正交基。若同一个特征值对应的特征子空间维数大于 $1$，就在该子空间内做 Gram-Schmidt 正交化；
4. 把所有标准正交特征向量按列排成矩阵

   $$
   P=(q_1,q_2,\ldots,q_n).
   $$

则 $P$ 为正交矩阵，并且

$$
P^TAP=\operatorname{diag}(\lambda_1,\lambda_2,\ldots,\lambda_n).
$$

这里的对角阵就是正交相似标准型，$P$ 就是过渡矩阵。若题目使用 $P^{-1}AP$ 的写法，由于 $P$ 正交，有 $P^{-1}=P^T$。

### 回忆题：首坐标条件

因为 $u,v$ 为单位正交向量，所以 $\operatorname{span}(u,v)$ 是一个二维子空间，且 $u,v$ 是该子空间的一组标准正交基。令 $e_1=(1,0,0)$，则 $e_1$ 在 $\operatorname{span}(u,v)$ 上的正交投影为

$$
\operatorname{proj}_{\operatorname{span}(u,v)}e_1
=\langle e_1,u\rangle u+\langle e_1,v\rangle v
=au+dv.
$$

由投影长度不超过原向量长度，

$$
\|au+dv\|^2\le \|e_1\|^2=1.
$$

又 $u,v$ 单位正交，所以 $\|au+dv\|^2=a^2+d^2$。因此

$$
a^2+d^2\le 1.
$$

反过来，若 $a^2<1$，可显式构造

$$
b=\sqrt{1-a^2},\qquad c=0,
$$

$$
e=-\frac{ad}{\sqrt{1-a^2}},\qquad
f=\frac{\sqrt{1-a^2-d^2}}{\sqrt{1-a^2}}.
$$

令 $u=(a,b,c),\ v=(d,e,f)$。则

$$
\|u\|^2=1,\qquad
\langle u,v\rangle=ad+be+cf=0,
$$

并且

$$
\|v\|^2=d^2+\frac{a^2d^2}{1-a^2}+\frac{1-a^2-d^2}{1-a^2}=1.
$$

所以 $u,v$ 是单位正交向量。

若 $a^2=1$，由 $a^2+d^2\le1$ 得 $d=0$，可取

$$
u=(a,0,0),\qquad v=(0,1,0).
$$

同样得到一组单位正交向量。

### 倒数第二题

设 $A$ 的奇异值分解为

$$
A=V\Sigma W^T,
$$

其中 $V,W$ 为正交矩阵，$\Sigma=\operatorname{diag}(\sigma_1,\ldots,\sigma_n)$，且 $\sigma_i\ge0$。

令

$$
S=V\Sigma V^T,\qquad U=VW^T.
$$

则 $S$ 对称半正定，$U$ 正交，并且

$$
SU=(V\Sigma V^T)(VW^T)=V\Sigma W^T=A.
$$

所以 $A=SU$。

唯一性方面，由 $A=SU$ 且 $U$ 正交可得

$$
AA^T=SUU^TS=S^2.
$$

由于 $S$ 对称半正定，故

$$
S=(AA^T)^{1/2},
$$

所以 $S$ 唯一。若 $A$ 可逆，则 $S$ 正定可逆，此时 $U=S^{-1}A$ 唯一。若 $A$ 不可逆，则 $U$ 在 $\ker S$ 上有选择余地，一般不唯一。例如 $A=0$ 时，$S=0$，任意正交矩阵 $U$ 都满足 $A=SU$。

### 最后一题

因为 $A,B$ 为实对称正定矩阵，所以存在两组线性无关向量

$$
x_1,\ldots,x_n,\qquad y_1,\ldots,y_n
$$

使得

$$
a_{ij}=\langle x_i,x_j\rangle,\qquad b_{ij}=\langle y_i,y_j\rangle.
$$

考虑张量积空间中的向量 $z_i=x_i\otimes y_i$。则

$$
\langle z_i,z_j\rangle
=\langle x_i,x_j\rangle\langle y_i,y_j\rangle
=a_{ij}b_{ij}
=c_{ij}.
$$

因此 $C$ 是 $z_1,\ldots,z_n$ 的 Gram 矩阵。

下面证明 $z_1,\ldots,z_n$ 线性无关。取 $x_1,\ldots,x_n$ 的对偶泛函 $\varphi_1,\ldots,\varphi_n$。若

$$
\sum_{i=1}^n \alpha_i(x_i\otimes y_i)=0,
$$

对两边作用 $\varphi_k\otimes I$，得

$$
\alpha_k y_k=0.
$$

由于 $B$ 正定，$y_k\ne0$，所以 $\alpha_k=0$。$k$ 任意，故 $z_1,\ldots,z_n$ 线性无关。

线性无关向量组的 Gram 矩阵正定，因此 $C$ 正定。
