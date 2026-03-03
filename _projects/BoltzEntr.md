---
layout: page
title: Symmetry, Reduction, and Entropy in Deep Networks
description: A geometric–statistical physics foundation for deep learning, from linear solvable limits to nonlinear depth-scaling laws.
img: assets/img/SymEntrScal.png
importance: 4
category: Research
---

## Project Overview

This project develops a **geometric and statistical–mechanical foundation for deep learning** built on the structural chain

Symmetry → Moment Map → Reduction → Entropy → Free Energy → Scaling Laws.

The starting point is a fully solvable linear limit — **Deep Linear Networks (DLNs)** — where symmetry is explicit and entropy can be computed from orbit volumes.

From this solvable template, we construct a nonlinear extension for realistic deep networks (e.g. equivariant models and residual networks), aiming to derive:

- Gauge-invariant macroscopic observables  
- Microstate entropy formulas  
- Free-energy selection principles  
- Infinite-depth scaling laws  
- Deployable stability mechanisms  

The objective is not to analyze a special architecture, but to build a **first-principles structural theory of depth**.

---

# Layer I — DLN as a Solvable Structural Baseline

For a depth-$L$ linear network

$$
X = W_L \cdots W_1,
$$

the parameter space carries a natural gauge symmetry:

$$
(W_L,\dots,W_1)
\mapsto
(W_L Q_{L-1}, Q_{L-1}^{-1} W_{L-1} Q_{L-2}, \dots, Q_1^{-1} W_1),
$$

leaving $X$ invariant.

This structure induces:

- A moment map (balanced condition)
- A reduced manifold (balanced slice)
- Microstates

$$
\mathcal O_X = \{ \theta : \Phi(\theta) = X \}
$$

- Entropy

$$
S(X) = \log \operatorname{vol}(\mathcal O_X)
$$

- Free energy

$$
F_\beta(X) = E(X) - \beta^{-1} S(X)
$$

### Current Linear-Level Results

- Explicit identification of gauge symmetry.
- Characterization of balanced manifolds.
- Entropy formulas in special slices.
- Two core open problems:
  - General moment-map levels ($G \neq 0$)
  - Infinite-depth renormalization ($L \to \infty$)

This layer serves as a structural template — not as the final theory.

---

# Layer II — Nonlinear Extension: Core Open Problems

The central research effort is to extend the symmetry–entropy mechanism to nonlinear deep networks.

---

## OP1 — Nonlinear Gauge Geometry

For nonlinear architectures (e.g. $O(d)$-equivariant networks or ResNets):

- What is the correct gauge group?
- Does a nonlinear moment map exist?
- Can we define a balanced slice?

Requirement:
The nonlinear theory must strictly reduce to DLN when nonlinearities vanish.

---

## OP2 — Macroscopic Observables Beyond Linear $X$

In nonlinear networks, $X$ alone is insufficient.

We study:

- Jacobian SPD observables

$$
g_x = (Df(x))^\top Df(x)
$$

- Log-singular-value distributions
- Representation covariance flows

Goal:
Identify gauge-invariant observables that capture representation geometry.

---

## OP3 — Nonlinear Microstates and Entropy

Define

$$
\mathcal O_y = \{ \theta : \Phi(\theta) = y \}
$$

Questions:

- Is $\mathcal O_y$ an orbit?
- Or a symplectic reduced space?
- Can entropy be computed via reduction formulas?
- Does Duistermaat–Heckman density structure appear?

---

## OP4 — General Moment-Map Levels ($G \neq 0$)

Beyond balanced slices:

- What is the entropy at general moment levels?
- Does reduced volume become piecewise polynomial?
- Can non-abelian localization apply?

This extends orbit volume computation to full reduction volume computation.

---

## OP5 — Infinite-Depth Renormalization

As $L \to \infty$:

- Does the Jacobian chain converge (after scaling)?
- Does entropy admit a spectral determinant representation?
- What are convergence rates?

This is the multi-scale limit problem.

---

## OP6 — Free Energy Selection Principle

Under noisy training dynamics:

Is the macroscopic evolution approximately

$$
\dot y = - \nabla (E - \beta^{-1} S) ?
$$

If yes:

- Implicit bias becomes computable.
- Flat-minima selection gains geometric explanation.

---

## OP7 — Weyl-Chamber Diffusion of Jacobian Spectra

For deep residual chains:

$$
Df(x) = J_L \cdots J_1
$$

As $L \to \infty$:

- Do log-singular values converge to diffusion in a Weyl chamber?
- What are drift and diffusion coefficients?
- Are there universal scaling laws?

Depth becomes a geometric scale parameter.

---

# Layer III — Deliverables for Deep Learning

If successful, the program produces:

### 1. Geometry-Designed Noise Mechanisms

Noise kernels forced by symmetry and constraints.
Depth-dependent scaling laws.
Improved calibration and robustness.

---

### 2. Computable Implicit Bias

Entropy becomes explicit.
Solution selection becomes predictable.
Entropy-regularized training becomes principled.

---

### 3. Depth Scaling Laws

Expected relations of the form:

- Noise strength ∼ 1/L or 1/√L
- Mixing time ∼ L²
- Log-spectrum variance ∼ L

These guide architectural depth decisions.

---

### 4. Training Diagnostics

Measurable geometric quantities:

- Jacobian SPD as geometric temperature
- Moment-map imbalance as gauge instability
- Spectral gap statistics as entropy indicators

---

### 5. Unified Conceptual Framework

Dropout, normalization, noise injection, implicit bias, depth scaling —

all interpreted through:

Symmetry + Reduction + Entropy + Free Energy + Scale.

---

# Structural Roadmap

Symmetry  
→ Moment Map  
→ Reduction  
→ Microstates  
→ Entropy  
→ Free Energy  
→ Selection Principle  
→ Scaling Laws  
→ Design Principles  

---

## Selected References

- **Menon, Govind & Yu, Wenxuan.**  
  *Entropy and Symmetry in Deep Linear Networks.*  
  arXiv preprint (2023).

- **Poole, Ben; Lahiri, Subhaneil; Raghu, Maithra; Sohl-Dickstein, Jascha; Ganguli, Surya.**  
  *Exponential Expressivity in Deep Neural Networks Through Transient Chaos.*  
  Advances in Neural Information Processing Systems (NeurIPS), 2016.

- **Schoenholz, Samuel S.; Gilmer, Justin; Ganguli, Surya; Sohl-Dickstein, Jascha.**  
  *Deep Information Propagation.*  
  International Conference on Learning Representations (ICLR), 2017.

- **Amari, Shun-ichi.**  
  *Information Geometry and Its Applications.*  
  Springer, 2016.

- **Duistermaat, Johannes J.; Heckman, Gert J.**  
  *On the Variation in the Cohomology of the Symplectic Form of the Reduced Phase Space.*  
  Inventiones Mathematicae, 69 (1982), 259–268.

- **Witten, Edward.**  
  *Supersymmetry and Morse Theory.*  
  Journal of Differential Geometry, 17 (1982), 661–692.

- **Bronstein, Michael M.; Bruna, Joan; Cohen, Taco; Veličković, Petar.**  
  *Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges.*  
  arXiv:2104.13478 (2021).

- **Marsden, Jerrold E.; Weinstein, Alan.**  
  *Reduction of Symplectic Manifolds with Symmetry.*  
  Reports on Mathematical Physics, 5 (1974), 121–130.

- **Bismut, Jean-Michel.**  
  *Large Deviations and the Malliavin Calculus.*  
  Progress in Mathematics, Birkhäuser, 1984.

---

This program aims to build a first-principles geometric theory of depth that is:

- Exactly solvable in the linear limit  
- Extensible to nonlinear networks  
- Predictive in scaling behavior  
- Deployable for stability and reliability  
