# 25 年期中试题

试卷抬头部分较模糊，仅整理能清楚辨认的题干，并附参考解答。

## 题目

### 1.（50 分）

给定方阵

$$
A=\begin{pmatrix}
4&10&-19&4\\
1&6&-8&3\\
1&4&-6&2\\
0&-1&1&0
\end{pmatrix}.
$$

1. 对空间 $\mathbb R^4$ 关于 $A$ 作准素分解、循环子空间分解；写出其若当标准形和过渡阵；
2. 求特征矩阵 $\lambda I-A$ 的 Smith 标准形；写出 $A$ 的最小多项式、行列式因子、初等因子、不变因子。

### 2.（20 分）

对于方阵

$$
A=\begin{pmatrix}
0&1\\
-1&0
\end{pmatrix},
$$

验证 Hamilton-Cayley 定理；在复数域上求若当标准形和过渡阵，并计算 $e^A$。

### 3.（20 分）

$n$ 阶方阵 $A,B$ 的特征根均为实数，且乘法可交换。证明：

1. $A$ 与 $A^T$ 相似；
2. $A,B$ 至少有一个公共的实特征向量。

### 4.（10 分）

$n$ 阶实矩阵 $A$ 只与自身相似，求证：$A$ 必为纯量阵，即常数乘以单位阵。

## 解答

### 第 1 题

令 $N=A-I$，则

$$
N=
\begin{pmatrix}
3&10&-19&4\\
1&5&-8&3\\
1&4&-7&2\\
0&-1&1&-1
\end{pmatrix},\qquad
N^2=0,\quad \operatorname{rank}N=2.
$$

因此 $A$ 的唯一特征值为 $1$，最大若当块大小为 $2$。又

$$
\dim\ker(A-I)=4-\operatorname{rank}(A-I)=2,
$$

故对应特征值 $1$ 的若当块共有两个，若当标准形为

$$
J=
\begin{pmatrix}
1&1&0&0\\
0&1&0&0\\
0&0&1&1\\
0&0&0&1
\end{pmatrix}.
$$

准素分解为

$$
\mathbb R^4=\ker(A-I)^2.
$$

取

$$
u_1=(A-I)e_1=(3,1,1,0)^T,\qquad
u_2=(A-I)e_2=(10,5,4,-1)^T.
$$

由于 $(A-I)^2=0$，有 $Au_1=u_1,\ Au_2=u_2$，并且 $Ae_1=e_1+u_1,\ Ae_2=e_2+u_2$。因此

$$
\mathbb R^4=\langle u_1,e_1\rangle\oplus \langle u_2,e_2\rangle.
$$

取若当基 $\mathcal B=(u_1,e_1,u_2,e_2)$，过渡矩阵为

$$
P=
\begin{pmatrix}
3&1&10&0\\
1&0&5&1\\
1&0&4&0\\
0&0&-1&0
\end{pmatrix},\qquad
\det P=1,
$$

并有 $P^{-1}AP=J$。反向过渡矩阵为

$$
P^{-1}=
\begin{pmatrix}
0&0&1&4\\
1&0&-3&-2\\
0&0&0&-1\\
0&1&-1&1
\end{pmatrix}.
$$

由于 $J=J_2(1)\oplus J_2(1)$，而

$$
\lambda I-J_2(1)=
\begin{pmatrix}
\lambda-1&-1\\
0&\lambda-1
\end{pmatrix}
$$

的 Smith 标准形为 $\operatorname{diag}(1,(\lambda-1)^2)$，所以

$$
\lambda I-A\sim
\operatorname{diag}\left(1,1,(\lambda-1)^2,(\lambda-1)^2\right).
$$

不变因子为

$$
1,\quad 1,\quad (\lambda-1)^2,\quad (\lambda-1)^2.
$$

行列式因子为

$$
D_1=1,\quad D_2=1,\quad D_3=(\lambda-1)^2,\quad D_4=(\lambda-1)^4.
$$

初等因子为 $(\lambda-1)^2,(\lambda-1)^2$，最小多项式为 $m_A(\lambda)=(\lambda-1)^2$，特征多项式为 $f_A(\lambda)=(\lambda-1)^4$。

### 第 2 题

特征多项式为

$$
f_A(\lambda)=\det(\lambda I-A)=\lambda^2+1.
$$

又 $A^2=-I$，所以 $f_A(A)=A^2+I=0$，验证了 Cayley-Hamilton 定理。

在 $\mathbb C$ 上，特征值为 $i,-i$。可取

$$
\xi_1=\begin{pmatrix}1\\ i\end{pmatrix},\qquad
\xi_2=\begin{pmatrix}1\\ -i\end{pmatrix},
$$

令

$$
P=(\xi_1,\xi_2)=
\begin{pmatrix}
1&1\\
i&-i
\end{pmatrix}.
$$

则

$$
P^{-1}AP=
\begin{pmatrix}
i&0\\
0&-i
\end{pmatrix}.
$$

由 $A^2=-I$ 得

$$
e^A=\cos 1\cdot I+\sin 1\cdot A
=
\begin{pmatrix}
\cos 1&\sin 1\\
-\sin 1&\cos 1
\end{pmatrix}.
$$

### 第 3 题

#### （1）

因为 $A$ 的特征根均为实数，$A$ 在实数域上可化为若当标准形 $J$。设 $P^{-1}AP=J$，则 $A^T\sim J^T$。

对每个若当块 $J_k(\lambda)$，取反序单位矩阵 $R_k$，有

$$
R_k^{-1}J_k(\lambda)^TR_k=J_k(\lambda).
$$

故 $J^T\sim J$，于是 $A^T\sim A$。

#### （2）

取 $A$ 的一个实特征值 $\lambda$，设 $V_\lambda=\ker(A-\lambda I)$。由 $AB=BA$ 可知，若 $x\in V_\lambda$，则

$$
A(Bx)=B(Ax)=\lambda Bx,
$$

所以 $Bx\in V_\lambda$，即 $V_\lambda$ 是 $B$-不变子空间。

因此 $B$ 可限制为 $V_\lambda$ 上的线性变换

$$
B|_{V_\lambda}:V_\lambda\to V_\lambda.
$$

由于 $B$ 的特征根均为实数，且 $V_\lambda$ 是 $B$ 的不变子空间，$B|_{V_\lambda}$ 的特征根也是 $B$ 的特征根中的一部分，因而仍为实数。于是存在非零实向量 $v\in V_\lambda$ 与实数 $\mu$，使 $Bv=\mu v$。又因为 $v\in V_\lambda$，所以

$$
Av=\lambda v,\qquad Bv=\mu v.
$$

故 $A,B$ 至少有一个公共的实特征向量。

### 第 4 题

对任意可逆矩阵 $P$，$P^{-1}AP$ 与 $A$ 相似。由题设，

$$
P^{-1}AP=A,
$$

即 $AP=PA$。所以 $A$ 与任意可逆矩阵都可交换。

取 $D=\operatorname{diag}(1,2,\ldots,n)$。由 $AD=DA$，设 $A=(a_{ij})$，比较第 $(i,j)$ 元得

$$
(j-i)a_{ij}=0.
$$

当 $i\ne j$ 时，$a_{ij}=0$，故 $A$ 为对角矩阵。再取交换第 $i$ 与第 $j$ 个基向量的置换矩阵 $S_{ij}$，由 $AS_{ij}=S_{ij}A$ 得 $a_i=a_j$。因此所有对角元相等，$A=cI$。
