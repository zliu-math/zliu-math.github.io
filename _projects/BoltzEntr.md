---
layout: page
title: Symmetry, Reduction, and Entropy in Deep Networks
description: A geometric–statistical physics foundation for deep learning, from linear solvable limits to nonlinear depth-scaling laws.
img: assets/img/SymEntrScalNew.png
importance: 4
category: Research
---

## Project Overview

This project develops a **geometric and statistical–mechanical foundation for deep learning** built on the structural chain:

Symmetry $\rightarrow$ Moment Map $\rightarrow$ Reduction $\rightarrow$ Entropy $\rightarrow$ Free Energy $\rightarrow$ Scaling Laws.

The starting point is a fully solvable linear limit — **Deep Linear Networks (DLNs)** — where symmetry is explicit and entropy can be computed from orbit volumes.

From this solvable template, we construct a nonlinear extension for realistic deep networks (e.g. equivariant models and residual networks), aiming to derive gauge-invariant macroscopic observables, microstate entropy formulas, and infinite-depth scaling laws.

---

# Layer I — DLN as a Solvable Structural Baseline

For a depth-$L$ linear network:

$$
X = W_L \cdots W_1
$$

the parameter space carries a natural gauge symmetry:

$$
(W_L,\dots,W_1) \mapsto (W_L Q_{L-1}, Q_{L-1}^{-1} W_{L-1} Q_{L-2}, \dots, Q_1^{-1} W_1)
$$

leaving $X$ invariant. This structure induces:

* **A moment map** (balanced condition)
* **A reduced manifold** (balanced slice)
* **Microstates**:
    $$\mathcal{O}_X = \{ \theta : \Phi(\theta) = X \}$$
* **Entropy**:
    $$S(X) = \log \text{vol}(\mathcal{O}_X)$$
* **Free energy**:
    $$F_\beta(X) = E(X) - \beta^{-1} S(X)$$

---

# Layer II — Nonlinear Extension: Core Open Problems

The central research effort is to extend the symmetry–entropy mechanism to nonlinear deep networks.

### OP2 — Macroscopic Observables Beyond Linear $X$

In nonlinear networks, $X$ alone is insufficient. We study Jacobian SPD observables:

$$g_x = (Df(x))^\top Df(x)$$

### OP3 — Nonlinear Microstates and Entropy

Define microstates as:

$$\mathcal{O}_y = \{ \theta : \Phi(\theta) = y \}$$

Questions: Is $\mathcal{O}_y$ an orbit or a symplectic reduced space? Can entropy be computed via Duistermaat–Heckman density structures?

### OP7 — Weyl-Chamber Diffusion of Jacobian Spectra

For deep residual chains $Df(x) = J_L \cdots J_1$, as $L \to \infty$:
* Do log-singular values converge to diffusion in a Weyl chamber?
* What are drift and diffusion coefficients?

---

# Layer III — Deliverables for Deep Learning

### 1. Training Diagnostics
Measurable geometric quantities:
* **Jacobian SPD** as geometric temperature
* **Moment-map imbalance** as gauge instability
* **Spectral gap statistics** as entropy indicators

### 2. Unified Conceptual Framework
Dropout, normalization, and implicit bias, all interpreted through:
**Symmetry + Reduction + Entropy + Free Energy + Scale.**

---

## Selected References

* **Menon & Yu.** *Entropy and Symmetry in Deep Linear Networks.* arXiv (2023).
* **Poole et al.** *Exponential Expressivity in Deep Neural Networks.* NeurIPS (2016).
* **Amari.** *Information Geometry and Its Applications.* Springer (2016).
* **Bronstein et al.** *Geometric Deep Learning.* arXiv:2104.13478 (2021).
