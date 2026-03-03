---
layout: page
title: Approaching Prescribed Gaussian Curvature by Discrete Conformality
description: A convex-variational, discrete-conformal method that approximates the conformal factor solving the prescribed Gaussian curvature equation on closed genus > 1 surfaces, with a sharp first-order convergence guarantee.
img: assets/img/prescribed_curvature.png
importance: 1
category: Research
---

### Project Overview

[cite_start]This project provides a **discrete conformal geometry approach** to approximate solutions of the classical **prescribed Gaussian curvature problem** on **closed, orientable smooth surfaces of genus > 1** (the negatively curved regime)[cite: 953, 957, 1019, 1020].
[cite_start]The method turns the smooth conformal PDE into a **finite-dimensional convex variational problem** on a **geodesic triangulation**[cite: 954, 973, 1006]. [cite_start]The target discrete solution is a **vertex conformal factor** $u \in \mathbb{R}^V$ that can be computed efficiently by **minimizing a globally convex functional**, and it converges to the smooth conformal factor with an explicit **first-order error bound**[cite: 1002, 1026, 1028].

[cite_start]**Status:** Completed (paper-level result)[cite: 948].

---

### Problem Formulation (Smooth Geometry)

[cite_start]Let $(S, g)$ be a connected closed orientable smooth Riemannian surface with genus $> 1$[cite: 1019, 1020].
[cite_start]Given a smooth target curvature function [cite: 957]

$$
\tilde{\kappa} : S \to \mathbb{R}, \qquad \tilde{\kappa}(x) < 0 \ \text{for all } x \in S,
$$

[cite_start]the prescribed Gaussian curvature problem asks for a metric $\tilde{g}$ conformal to $g$ such that the Gaussian curvature of $(S, \tilde{g})$ equals $\tilde{\kappa}$[cite: 958, 959].

Writing the conformal change as

$$
\tilde{g} = e^{2\tilde{u}} g,
$$

[cite_start]the unknown conformal factor $\tilde{u}$ solves the curvature equation[cite: 960]:

$$
\Delta_g \tilde{u} + \kappa = - e^{2\tilde{u}} \tilde{\kappa},
$$

[cite_start]where $\kappa$ is the Gaussian curvature of $(S,g)$ and $\Delta_g$ is the Laplace–Beltrami operator[cite: 961, 962].

[cite_start]In the regime where the genus is $> 1$ and $\tilde{\kappa} < 0$, the smooth problem has a **unique smooth solution** $\tilde{u}$ (classical results of Berger / Kazdan–Warner)[cite: 967, 1207, 1218].

---

### Discrete Model: Geodesic Triangulation + Vertex Scaling

#### 1) Geodesic triangulation

[cite_start]Let $T$ be a **geodesic triangulation** of $(S,g)$, with vertex/edge/face sets[cite: 1006]:

* $V = V(T)$
* $E = E(T)$
* $F = F(T)$

[cite_start]Let the (geodesic) edge lengths measured in $(S,g)$ be[cite: 1021, 1022]:

$$
l \in \mathbb{R}^{E}_{>0}, \qquad l_{ij} = \text{dist}_g(i,j).
$$

[cite_start]We regard $(T, l)$ as a polyhedral approximation of $(S,g)$[cite: 1008, 1010].

#### 2) Discrete conformal factor (vertex scaling)

[cite_start]A discrete conformal factor is a vector[cite: 981]:

$$
u \in \mathbb{R}^{V}.
$$

[cite_start]It rescales edge lengths by the standard **vertex scaling rule**[cite: 983]:

$$
(u * l)_{ij} = e^{\frac{1}{2}(u_i + u_j)} l_{ij}, \qquad ij \in E.
$$

This follows the discrete conformality notion developed by Luo and by Bobenko–Pinkall–Springborn[cite: 965, 1210, 1223].

#### 3) “Mixed” negative curvature background per face

To encode the target curvature field $\tilde{\kappa}$, we assign to each triangle $\sigma \in F$ a constant negative curvature[cite: 1022, 1023]:

$$
\mathcal{K}(\sigma) < 0,
$$

chosen by sampling $\tilde{\kappa}$ on that face, e.g.[cite: 1022, 1023]:

$$
\mathcal{K}(\sigma) = \tilde{\kappa}(x_\sigma) \quad \text{for some } x_\sigma \in \sigma.
$$

Each face is then realized as a **geodesic triangle in constant curvature $\mathcal{K}(\sigma)$** with side lengths given by the scaled edges $(u * l)$[cite: 987, 988].

---

### Discrete Curvature and the Target Discrete Equation

For each triangle $\triangle ijk$ with face curvature $\mathcal{K}(\triangle ijk)$, compute its inner angles
[cite_start]$\theta^i_{jk}(u)$ at vertex $i$ (these depend on $\mathcal{K}(\triangle ijk)$ and the scaled edge lengths)[cite: 989, 990].

[cite_start]Define the **generalized discrete curvature** at each vertex $i \in V$ by angle defect[cite: 993, 994]:

$$
K_i(u) = 2\pi - \sum_{\triangle ijk \in F \ \text{incident to } i} \theta^i_{jk}(u).
$$

[cite_start]The discrete prescribed curvature problem in this project is[cite: 1012]:

> Find $u \in \mathbb{R}^V$ such that
>
> $$
> K(u) = 0 \quad \text{(i.e., } K_i(u)=0 \text{ for all } i \in V).
> $$

Interpretation: the face-wise constants $\mathcal{K}(\sigma)$ encode the desired curvature field,
[cite_start]and the condition $K(u)=0$ enforces global compatibility of the glued metric so that the resulting polyhedral surface approximates the smooth solution metric $e^{2\tilde{u}} g$[cite: 1003, 1004].

---

### What We Want (Deliverables)

1.  [cite_start]**Discrete well-posedness:** show $K(u)=0$ has a **unique** solution under standard mesh regularity and refinement[cite: 1026].
2.  [cite_start]**Efficient computation:** show the solution can be obtained by **minimizing a globally convex functional** (no spurious local minima)[cite: 1002].
3.  [cite_start]**Convergence with rate:** prove $u$ converges to the smooth solution $\tilde{u}$ restricted to vertices, with an explicit **first-order** error bound[cite: 1028].

---

### Method: Convex Variational Principle + Discrete Elliptic Control

#### A) Convex energy whose gradient is curvature

[cite_start]A key structural fact is that the 1-form is closed on the domain where the discrete triangles are well-defined, so one can define a potential[cite: 999, 1000]:

$$
\mathcal{F}(u) = \int \sum_{i \in V} K_i(u) du_i,
$$

[cite_start]which is **locally strictly convex**[cite: 1001].

[cite_start]Moreover, Bobenko–Pinkall–Springborn provide an explicit extension to a **globally convex functional** $\tilde{\mathcal{F}}$ defined on all of $\mathbb{R}^V$[cite: 1002].
[cite_start]Consequently[cite: 1002]:

* $K(u)=0$ has **at most one** solution.
* The solution can be computed efficiently by minimizing $\tilde{\mathcal{F}}(u)$.

#### B) The “Jacobian” structure: diagonal minus weighted graph Laplacian

[cite_start]A central technical tool is an explicit formula for the differential of discrete curvature[cite: 1089]:

$$
\frac{\partial K}{\partial u}(u) = D(u) - \Delta_{\eta(u)},
$$

[cite_start]where[cite: 1092, 1093]:

* $D(u)$ is a **positive diagonal** matrix.
* $\Delta_{\eta(u)}$ is a **weighted graph Laplacian** on $(V,E)$ with edge weights $\eta_{ij}(u)$.

#### C) Discrete elliptic estimate on graphs (Wu–Zhu)

[cite_start]The convergence proof relies on a sharp **discrete elliptic estimate** under a uniform **C-isoperimetric condition** on the triangulation graph[cite: 1055, 1064, 1070].
[cite_start]This estimate controls solutions to linear systems of the form[cite: 1084]:

$$
(D(u)-\Delta_{\eta(u)}) w = \text{(small forcing)},
$$

in the $\| [cite_start]\cdot \|_\infty$ norm, which is crucial for proving a clean $\mathcal{O}(|l|)$ convergence rate[cite: 1084, 1144, 1145].

#### D) A continuation path to reach K(u)=0

[cite_start]The proof constructs a smooth path $\underline{u}(t)$ on $[0,1]$ starting from the smooth solution restricted to vertices[cite: 1142, 1179]:

* $\underline{u}(0) = \tilde{u}|_{V}$

[cite_start]such that[cite: 1143, 1188]:

$$
K(\underline{u}(t)) = (1-t) K(\tilde{u}).
$$

Then one shows $|\underline{u}'(t)| [cite_start]= \mathcal{O}(|l|)$ uniformly, implying[cite: 1144, 1204]:

* $K(\underline{u}(1)) = 0$
* $|\underline{u}(1) - \tilde{u}|_V = \mathcal{O}(|l|)$

[cite_start]so $\underline{u}(1)$ is the desired discrete conformal factor[cite: 1146, 1147].

---

### Main Theorem (Existence, Uniqueness, and Convergence Rate)

We use the infinity norm convention $|x| [cite_start]= \|x\|_\infty$[cite: 1016, 1017].

[cite_start]A polyhedral surface $(T,l)$ is called $\epsilon$-acute if every triangle angle satisfies[cite: 1016, 1018]:

$$
\theta \le \frac{\pi}{2} - \epsilon.
$$

[cite_start]**Theorem (Main Result).** Let $(S,g)$ be a connected closed orientable smooth Riemannian surface with genus $> 1$[cite: 1019, 1020]. [cite_start]Let $\tilde{\kappa}(x) < 0$ be a smooth function on $S$, and let $\tilde{u}$ solve the smooth curvature equation so that $e^{2\tilde{u}} g$ has curvature $\tilde{\kappa}(x)$[cite: 1020, 1021, 1022].
[cite_start]Let $T$ be a geodesic triangulation with edge lengths $l$, and set for each face $\sigma$ a constant $\mathcal{K}(\sigma) = \tilde{\kappa}(x_\sigma)$ for some $x_\sigma \in \sigma$[cite: 1022, 1023, 1024].

Then for any $\epsilon > 0$, there exist constants $\delta > 0$ and $C > 0$ such that if $(T,l)$ is $\epsilon$-acute and $|l| [cite_start]< \delta$, then[cite: 1024, 1025, 1026]:

1. (**Existence & uniqueness**) [cite_start]There exists a unique $u \in \mathbb{R}^V$ such that[cite: 1026, 1027]:
   $$
   K(\mathcal{K}, u * l) = 0
   $$
2. (**First-order convergence**) [cite_start][cite: 1028]
   $$
   |u - \tilde{u}|_{V} \le C |l|.
   $$

---

### Practical Computation (Solver-Friendly Summary)

**Inputs**
* [cite_start]A geodesic triangulation $T$ of $(S,g)$ with edge lengths $l$[cite: 1006, 1007, 1008].
* [cite_start]A smooth negative target curvature $\tilde{\kappa}$ sampled per face as $\mathcal{K}(\sigma)$[cite: 1022, 1023].

**Unknown**
* [cite_start]Vertex vector $u \in \mathbb{R}^V$[cite: 1012].

**Core loop (conceptual)**
1.  [cite_start]Compute scaled lengths $l' = u * l$[cite: 983, 984].
2.  For each triangle $\sigma = ijk$, compute angles using the constant-curvature triangle geometry with curvature $\mathcal{K}(\sigma)$ and side lengths $l'$[cite: 987, 988].
3.  Assemble vertex curvatures $K_i(u) = 2\pi - \sum \text{angles}$[cite: 993, 994].
4.  Solve $K(u)=0$ either by[cite: 1002, 1012, 1089]:
    * minimizing the globally convex energy $\tilde{\mathcal{F}}(u)$, or
    * Newton updates using $\frac{\partial K}{\partial u} = D - \Delta_\eta$ (with damping/line-search if desired).

[cite_start]Because the objective is globally convex, the optimization landscape is well-behaved[cite: 1001, 1002].

---

### Selected References (Accurate Titles)

1.  [cite_start]**Melvyn S. Berger.** *Riemannian structures of prescribed gaussian curvature for compact 2-manifolds.* Journal of Differential Geometry, 5(3–4):325–332, 1971[cite: 1207].  
2.  [cite_start]**Alexander I. Bobenko, Ulrich Pinkall, Boris A. Springborn.** *Discrete conformal maps and ideal hyperbolic polyhedra.* Geometry & Topology, 19(4):2155–2215, 2015[cite: 1210, 1211].  
3.  [cite_start]**David Gu, Feng Luo, Tianqi Wu.** *Convergence of discrete conformal geometry and computation of uniformization maps.* Asian Journal of Mathematics, 23(1):21–34, 2019[cite: 1214, 1215].  
4.  [cite_start]**Jerry L. Kazdan, Frank W. Warner.** *Curvature functions for compact 2-manifolds.* Annals of Mathematics, 99(1):14–47, 1974[cite: 1217, 1218].  
5.  [cite_start]**Jerry L. Kazdan, Frank W. Warner.** *Scalar curvature and conformal deformation of riemannian structure.* Journal of Differential Geometry, 10(1):113–134, 1975[cite: 1219, 1222].  
6.  [cite_start]**Feng Luo.** *Combinatorial yamabe flow on surfaces.* Communications in Contemporary Mathematics, 6(05):765–780, 2004[cite: 1223, 1224].  
7.  [cite_start]**Tianqi Wu, Xiaoping Zhu.** *The convergence of discrete uniformizations for closed surfaces.* Journal of Differential Geometry, 127(3):1305–1343, 2024[cite: 1225, 1226].
