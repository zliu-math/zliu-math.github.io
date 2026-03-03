---
layout: page
title: Approaching Prescribed Gaussian Curvature by Discrete Conformality
description: A convex-variational, discrete-conformal method that approximates the conformal factor solving the prescribed Gaussian curvature equation on closed genus > 1 surfaces, with a sharp first-order convergence guarantee.
img: assets/img/PresGauCur.png
importance: 3
category: Research
---

### Project Overview

This project gives a **discrete conformal geometry approach** to approximate solutions of the classical **prescribed Gaussian curvature problem** on **closed, orientable smooth surfaces of genus > 1** (the negatively curved regime).
The method turns the smooth conformal PDE into a **finite-dimensional convex variational problem** on a **geodesic triangulation**. The target discrete solution is a **vertex conformal factor** $u \in \mathbb{R}^V$ that can be computed efficiently by **minimizing a globally convex functional**, and it converges to the smooth conformal factor with an explicit **first-order error bound**.

**Status:** Completed (paper-level result).

---

### Problem Formulation (Smooth Geometry)

Let $(S, g)$ be a connected closed orientable smooth Riemannian surface with genus $> 1$.
Given a smooth target curvature function

$$
\tilde{\kappa} : S \to \mathbb{R}, \qquad \tilde{\kappa}(x) < 0 \ \text{for all } x \in S,
$$

the prescribed Gaussian curvature problem asks for a metric $\tilde{g}$ conformal to $g$ such that the Gaussian curvature of $(S, \tilde{g})$ equals $\tilde{\kappa}$.

Writing the conformal change as

$$
\tilde{g} = e^{2\tilde{u}}\, g,
$$

the unknown conformal factor $\tilde{u}$ solves the curvature equation

$$
\Delta_g \tilde{u} + \kappa = - e^{2\tilde{u}} \tilde{\kappa},
$$

where $\kappa$ is the Gaussian curvature of $(S,g)$ and $\Delta_g$ is the Laplace–Beltrami operator.

In the regime $\text{genus}(S) > 1$ and $\tilde{\kappa} < 0$, the smooth problem has a **unique smooth solution** $\tilde{u}$ (classical results of Berger / Kazdan–Warner).

---

### Discrete Model: Geodesic Triangulation + Vertex Scaling

#### 1) Geodesic triangulation

Let $T$ be a **geodesic triangulation** of $(S,g)$, with vertex/edge/face sets:

- $V = V(T)$
- $E = E(T)$
- $F = F(T)$

Let the (geodesic) edge lengths measured in $(S,g)$ be

$$
l \in \mathbb{R}^{E}_{>0}, \qquad l_{ij} = \text{dist}_g(i,j).
$$

We regard $(T, l)$ as a polyhedral approximation of $(S,g)$.

#### 2) Discrete conformal factor (vertex scaling)

A discrete conformal factor is a vector

$$
u \in \mathbb{R}^{V}.
$$

It rescales edge lengths by the standard **vertex scaling rule**:

$$
(u * l)_{ij} = e^{\frac{1}{2}(u_i + u_j)}\, l_{ij}, \qquad ij \in E.
$$

This is the discrete conformality notion developed (in different curvature backgrounds) by Luo and by Bobenko–Pinkall–Springborn.

#### 3) “Mixed” negative curvature background per face

To encode the target curvature field $\tilde{\kappa}$, assign to each triangle $\sigma \in F$ a constant negative curvature

$$
K(\sigma) < 0,
$$

chosen by sampling $\tilde{\kappa}$ on that face, e.g.

$$
K(\sigma) = \tilde{\kappa}(x_\sigma) \quad \text{for some } x_\sigma \in \sigma.
$$

Each face is then realized as a **geodesic triangle in constant curvature $K(\sigma)$** with side lengths given by the scaled edges $(u * l)$.

---

### Discrete Curvature and the Target Discrete Equation

For each triangle $\triangle ijk$ with face curvature $K(\triangle ijk)$, compute its inner angles $\theta^i_{jk}(u)$ at vertex $i$ (these depend on $K(\triangle ijk)$ and the scaled edge lengths).

Define the **generalized discrete curvature** at each vertex $i \in V$ by angle defect:

$$
K_i(u) = 2\pi - \sum_{\triangle ijk \in F \ \text{incident to } i} \theta^i_{jk}(u).
$$

The discrete prescribed curvature problem in this project is:

> Find $u \in \mathbb{R}^V$ such that
>
> $$
> K(u) = 0 \quad \text{(i.e., } K_i(u)=0 \text{ for all } i \in V).
> $$

Interpretation: the face-wise constants $K(\sigma)$ encode the desired curvature field, and the condition $K(u)=0$ enforces global compatibility of the glued metric so that the resulting polyhedral surface approximates the smooth solution metric $e^{2\tilde{u}} g$.

---

### What We Want (Deliverables)

1. **Discrete well-posedness:** show $K(u)=0$ has a **unique** solution under standard mesh regularity and refinement.
2. **Efficient computation:** show the solution can be obtained by **minimizing a globally convex functional** (no spurious local minima).
3. **Convergence with rate:** prove $u$ converges to the smooth solution $\tilde{u}$ restricted to vertices, with an explicit **first-order** error bound.

---

### Method: Convex Variational Principle + Discrete Elliptic Control

#### A) Convex energy whose gradient is curvature

A key structural fact is that the 1-form

$$
\sum_{i \in V} K_i(u)\, du_i
$$

is closed on the domain where the discrete triangles are well-defined, so one can define a potential

$$
F(u) = \int \sum_{i \in V} K_i(u)\, du_i,
$$

which is **locally strictly convex**.

Moreover, Bobenko–Pinkall–Springborn provide an explicit extension to a **globally convex functional** $\tilde{F}$ defined on all of $\mathbb{R}^V$.
Consequently:

- $K(u)=0$ has **at most one** solution.
- The solution can be computed efficiently by minimizing $\tilde{F}(u)$.

#### B) The “Jacobian” structure: diagonal minus weighted graph Laplacian

A central technical tool is an explicit formula for the differential of discrete curvature:

$$
\frac{\partial K}{\partial u}(u) = D(u) - \Delta_{\eta(u)},
$$

where

- $D(u)$ is a **positive diagonal** matrix,
- $\Delta_{\eta(u)}$ is a **weighted graph Laplacian** on $(V,E)$ with edge weights $\eta_{ij}(u)$.

This is the discrete analog of ellipticity (and it is exactly what enables stable Newton-type solvers and max-norm estimates).

#### C) Discrete elliptic estimate on graphs (Wu–Zhu)

The convergence proof relies on a sharp **discrete elliptic estimate** under a uniform **C-isoperimetric condition** on the triangulation graph.
This estimate controls solutions to linear systems of the form

$$
(D(u)-\Delta_{\eta(u)})\, w = \text{(small forcing)},
$$

in the $\| \cdot \|_\infty$ norm, which is crucial for proving a clean $\mathcal{O}(|l|)$ convergence rate.

#### D) A continuation path to reach K(u)=0

The proof constructs a smooth path $u(t)$ on $[0,1]$ starting from the smooth solution restricted to vertices:

- $u(0) = \tilde{u}|_{V}$,

such that

$$
K(u(t)) = (1-t)\, K(\tilde{u}).
$$

Then one shows $|u'(t)| = \mathcal{O}(|l|)$ uniformly, implying

- $K(u(1)) = 0$,
- $u(1) - \tilde{u}|_V = \mathcal{O}(|l|)$,

so $u(1)$ is the desired discrete conformal factor.

---

### Main Theorem (Existence, Uniqueness, and Convergence Rate)

We use the infinity norm convention $|x| = \|x\|_\infty$.

A polyhedral surface $(T,l)$ is called $\epsilon$-acute if every triangle angle satisfies

$$
\theta \le \frac{\pi}{2} - \epsilon.
$$

**Theorem (Main Result).** Let $(S,g)$ be closed orientable smooth with genus $> 1$. Let $\tilde{\kappa}(x) < 0$ be smooth on $S$, and let $\tilde{u}$ solve the smooth curvature equation so that $e^{2\tilde{u}} g$ has curvature $\tilde{\kappa}$.
Let $T$ be a geodesic triangulation with edge lengths $l$, and set for each face $\sigma$ a constant $K(\sigma) = \tilde{\kappa}(x_\sigma)$ for some $x_\sigma \in \sigma$.

Then for any $\epsilon > 0$, there exist constants $\delta > 0$ and $C > 0$ such that if $(T,l)$ is $\epsilon$-acute and $|l| < \delta$, then:

1. (**Existence & uniqueness**) there exists a unique $u \in \mathbb{R}^V$ such that
   $$
   K(K, u * l) = 0,
   $$
2. (**First-order convergence**)
   $$
   \bigl| u - \tilde{u}|_{V} \bigr| \le C\, |l|.
   $$

---

### Practical Computation (Solver-Friendly Summary)

**Inputs**
- A geodesic triangulation $T$ of $(S,g)$ with edge lengths $l$.
- A smooth negative target curvature $\tilde{\kappa}$ sampled per face as $K(\sigma)$.

**Unknown**
- Vertex vector $u \in \mathbb{R}^V$.

**Core loop (conceptual)**
1. Compute scaled lengths $l' = u * l$.
2. For each triangle $\sigma = ijk$, compute angles using the constant-curvature triangle geometry with curvature $K(\sigma)$ and side lengths $l'$.
3. Assemble vertex curvatures $K_i(u) = 2\pi - \sum \text{angles}$.
4. Solve $K(u)=0$ either by:
   - minimizing the globally convex energy $\tilde{F}(u)$, or
   - Newton updates using $\partial K/\partial u = D - \Delta_\eta$ (with damping/line-search if desired).

Because the objective is globally convex, the optimization landscape is well-behaved.

---

### Selected References (Accurate Titles)

1. **Melvyn S. Berger.** *Riemannian structures of prescribed gaussian curvature for compact 2-manifolds.* Journal of Differential Geometry, 5(3–4):325–332, 1971.  
2. **Alexander I. Bobenko, Ulrich Pinkall, Boris A. Springborn.** *Discrete conformal maps and ideal hyperbolic polyhedra.* Geometry & Topology, 19(4):2155–2215, 2015.  
3. **David Gu, Feng Luo, Tianqi Wu.** *Convergence of discrete conformal geometry and computation of uniformization maps.* Asian Journal of Mathematics, 23(1):21–34, 2019.  
4. **Jerry L. Kazdan, Frank W. Warner.** *Curvature functions for compact 2-manifolds.* Annals of Mathematics, 99(1):14–47, 1974.  
5. **Jerry L. Kazdan, Frank W. Warner.** *Scalar curvature and conformal deformation of riemannian structure.* Journal of Differential Geometry, 10(1):113–134, 1975.  
6. **Feng Luo.** *Combinatorial yamabe flow on surfaces.* Communications in Contemporary Mathematics, 6(05):765–780, 2004.  
7. **Tianqi Wu, Xiaoping Zhu.** *The convergence of discrete uniformizations for closed surfaces.* Journal of Differential Geometry, 127(3):1305–1343, 2024.
