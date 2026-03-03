---
layout: page
title: Approaching Prescribed Gaussian Curvature by Discrete Conformality
description: A convex-optimization, discrete-conformal method to approximate solutions of the prescribed Gaussian curvature problem on closed genus>1 surfaces, with provable convergence.
img: assets/img/prescribed_curvature.png
importance: 1
category: Research
---

### Project Overview

This project develops a **discrete conformal geometry approach** for approximating solutions to the **prescribed Gaussian curvature problem** on **closed, orientable 2D Riemannian surfaces of genus > 1** (the “hyperbolic-type” case).  
The core idea is to replace the smooth conformal PDE by a **finite-dimensional convex optimization problem on a geodesic triangulation**, producing a **unique discrete conformal factor** that converges to the smooth solution as the mesh is refined. :contentReference[oaicite:0]{index=0}

**Status:** Completed (paper-level result).  
**Keywords:** prescribed curvature, discrete conformality, vertex scaling, convex energy, convergence, discrete elliptic estimates.

---

### Problem Formulation (Smooth)

Let \((S,g)\) be a connected closed smooth Riemannian surface with genus \(>1\).  
Given a smooth target curvature function \(\tilde{\kappa}:S\to\mathbb{R}\) with

$$
\tilde{\kappa}(x) < 0 \quad \text{for all } x\in S,
$$

the prescribed Gaussian curvature problem asks for a metric \(\tilde{g}\) conformal to \(g\) such that the Gaussian curvature of \((S,\tilde{g})\) equals \(\tilde{\kappa}\).

Write the conformal change as

$$
\tilde{g} = e^{2\tilde{u}}\, g,
$$

then \(\tilde{u}\) solves the classical curvature equation (in the sign convention used in the paper):

$$
\Delta_g \tilde{u} + \kappa \;=\; -\, e^{2\tilde{u}} \tilde{\kappa},
$$

where \(\kappa\) is the Gaussian curvature of \(g\) and \(\Delta_g\) is the Laplace–Beltrami operator.

In the genus \(>1\), \(\tilde{\kappa}<0\) regime, existence and uniqueness of \(\tilde{u}\) are known in the smooth setting (Berger / Kazdan–Warner).

---

### Discrete Setting: Triangulation + Vertex Scaling

We start from a **geodesic triangulation** \(T\) of \((S,g)\), with vertex set \(V\), edge set \(E\), and face set \(F\).  
Let

$$
\ell \in \mathbb{R}^{E}_{>0}, \qquad \ell_{ij} := \text{(geodesic length of edge } ij \text{ in } (S,g)).
$$

#### Discrete conformality (vertex scaling)

A discrete conformal factor is a vector

$$
u \in \mathbb{R}^{V}.
$$

It rescales edge lengths by

$$
\ell'_{ij} \;=\; e^{\frac{1}{2}(u_i+u_j)}\, \ell_{ij}, \qquad ij\in E,
$$

often written as \(\ell' = u * \ell\).

---

### “Mixed Background Curvature” per Face

To encode the target curvature \(\tilde{\kappa}\), we assign each triangle \(\sigma\in F\) a **negative constant background curvature**:

$$
K(\sigma) \in \mathbb{R}_{<0},
$$

chosen as a sample of \(\tilde{\kappa}\) on that face (e.g., \(K(\sigma)=\tilde{\kappa}(x_\sigma)\) for some \(x_\sigma\in \sigma\)).

Each face \(\sigma=\triangle ijk\) is then treated as a **geodesic triangle in constant curvature \(K(\sigma)\)** whose edge lengths are \((u*\ell)_{ij}, (u*\ell)_{jk}, (u*\ell)_{ki}\). This produces **angles**
\(\theta^i_{jk}(u)\) at vertex \(i\) (depending on \(K(\sigma)\) and \(u*\ell\)).

---

### Discrete Curvature and the Target Equation

Define the **generalized discrete curvature** at each vertex \(i\in V\) by angle defect:

$$
K_i(u) \;=\; 2\pi \;-\!\!\!\sum_{\triangle ijk\in F \text{ incident to } i}\!\!\! \theta^i_{jk}(u).
$$

The discrete prescription problem is:

> **Find \(u\in\mathbb{R}^V\) such that**
>
> $$
> K(u) = 0 \quad \text{(i.e., } K_i(u)=0 \text{ for all } i\in V).
> $$

Intuitively: the faces already carry the “background” curvatures \(K(\sigma)\approx \tilde{\kappa}\); the condition \(K_i(u)=0\) enforces compatibility at vertices so the glued metric approximates a smooth surface with the prescribed curvature field.

---

### What We Wanted (Main Goals)

1. **Well-posedness (discrete):** show the discrete equation \(K(u)=0\) has **at most one solution** (ideally: unique solution exists under refinement assumptions).
2. **Algorithmic tractability:** provide a **convex energy** whose minimizer yields the solution, enabling reliable computation.
3. **Convergence theorem:** prove the discrete solution \(u\) converges to the smooth conformal factor \(\tilde{u}\) restricted to vertices, with an explicit rate.

---

### Method: Convex Variational Principle + Discrete Elliptic Control

#### (A) Convex energy whose gradient is curvature

A key structural fact from discrete conformal geometry (Luo; Bobenko–Pinkall–Springborn) is that the 1-form

$$
\sum_{i\in V} K_i(u)\, du_i
$$

is closed on the domain where triangles are well-defined. Hence one can define a potential

$$
F(u) \;=\; \int \sum_{i\in V} K_i(u)\, du_i,
$$

which is **locally strictly convex**. Moreover, Bobenko–Pinkall–Springborn provide an extension to a **globally convex functional** \(\tilde{F}\) on all of \(\mathbb{R}^V\).  
Therefore:

- \(K(u)=0\) has **at most one** solution;
- the solution can be computed by **minimizing a convex objective**.

In practice, this supports robust solvers (Newton / damped Newton / gradient methods) without spurious local minima.

#### (B) “Jacobian” of curvature = diagonal – Laplacian

A central computable identity in the analysis is the derivative structure:

$$
\frac{\partial K}{\partial u}(u) \;=\; D(u) \;-\; \Delta_{\eta(u)},
$$

where:
- \(D(u)\) is a diagonal positive matrix;
- \(\Delta_{\eta(u)}\) is a **graph Laplacian** with edge weights \(\eta_{ij}(u)\).

This is the discrete analog of “ellipticity”: the operator controlling changes of curvature is (diagonal + Laplacian)-type.

#### (C) Discrete elliptic estimate on graphs

The proof uses a **discrete calculus on graphs** (gradient/divergence/Laplacian) together with a sharp **elliptic estimate** (from Wu–Zhu) under a uniform **isoperimetric condition** on the triangulation graph.

This estimate is used to bound solutions of linear systems of the form

$$
(D(u)-\Delta_{\eta(u)})\, w = \text{(small forcing)},
$$

in the \(\ell_\infty\) norm—exactly what is needed for a clean convergence rate.

#### (D) Continuation path (ODE) to reach \(K(u)=0\)

A constructive step defines a path \(u(t)\) via an ODE:

$$
u'(t) \;=\; (\Delta_{\eta(u)} - D(u))^{-1} K(\tilde{u}), 
\qquad u(0)=\tilde{u}|_{V}.
$$

Then one verifies

$$
\frac{d}{dt}K(u(t)) = -K(\tilde{u})
\quad \Longrightarrow \quad
K(u(t)) = (1-t)\,K(\tilde{u}),
$$

so at \(t=1\) we obtain \(K(u(1))=0\), i.e. a discrete solution, while the discrete elliptic bound controls \(|u'(t)|\) and hence the final error.

---

### Main Result (What We Proved)

Under standard refinement assumptions on a geodesic triangulation:

- **\(\varepsilon\)-acuteness:** all angles are bounded by \(\frac{\pi}{2}-\varepsilon\);
- **small mesh size:** \(|\ell|\) (max edge length) is sufficiently small;
- **negative target curvature:** \(\tilde{\kappa}<0\), genus \(>1\);

we prove:

1. **Existence & uniqueness:** there exists a **unique** discrete conformal factor \(u\in\mathbb{R}^V\) solving
   $$
   K(u)=0.
   $$

2. **Quantitative convergence:** letting \(\tilde{u}\) be the smooth solution and \(\tilde{u}|_V\) its restriction to vertices,
   $$
   \|u - \tilde{u}|_V\|_\infty \;\le\; C\,|\ell|,
   $$
   i.e. **first-order** (linear) convergence in the max norm as the mesh refines.

**Interpretation:** the method is not only computable (convex) but also *provably consistent* with a clean rate.

---

### What You Can Reuse (Implementation-Friendly Summary)

**Inputs**
- Smooth surface \((S,g)\) with genus \(>1\), geodesic triangulation \(T\), edge lengths \(\ell\).
- Target negative curvature \(\tilde{\kappa}<0\), sampled per face as \(K(\sigma)\).

**Optimization variable**
- Vertex vector \(u\in\mathbb{R}^V\).

**Core computations**
- For each face \(\triangle ijk\), compute angles in the constant-curvature triangle determined by \(K(\triangle ijk)\) and edge lengths \((u*\ell)\).
- Assemble vertex curvatures \(K_i(u) = 2\pi - \sum \theta^i_{jk}(u)\).

**Solver**
- Minimize the globally convex energy \(\tilde{F}(u)\) (or solve \(K(u)=0\) via Newton using \(\partial K/\partial u = D-\Delta_\eta\)).

A minimal “solver skeleton”:

```text
initialize u := 0  (or any vector)
repeat until convergence:
    compute scaled lengths l' := u * l
    compute angles per face using constant curvature K(face)
    assemble vertex curvature vector K(u)
    if ||K(u)|| is small: stop
    assemble Jacobian J(u) = D(u) - Δ_{η(u)}
    solve J(u) * δu = -K(u)
    update u := u + step * δu    (step via damping/line search if desired)
return u
