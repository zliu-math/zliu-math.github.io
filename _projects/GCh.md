---
layout: page
title: Gaussian Chaos Noise (GCh)
description: >
  A first-principles variational framework for noise injection where noise structure is derived from task-driven desiderata. This yields Gaussian Chaos Noise (GCh), a scale-tolerant multiplicative gate with canonical Green-kernel correlation.
importance: 1
category: Research
---

> **Status:** Completed (paper-level deliverable). Project paper PDF.

## Project Overview

This project develops a **first-principles variational framework for noise injection** that treats *noise as a design object* rather than a heuristic choice. Instead of selecting an exogenous perturbation (e.g., i.i.d. dropout or hard masking), we start from **minimal learning desiderata** and derive the noise mechanism as the **maximum-entropy (minimum extra-information) solution** under those constraints.

A key outcome is **Gaussian Chaos Noise (GCh)**: a **mean-preserving, positive, spatially correlated multiplicative gate** defined by a **Wick-normalized exponential** of a Laplacian/Green-correlated Gaussian field.

At a high level:

- We identify a *noise mechanism* by a triple **(distribution family, correlation kernel, injection operator)** and derive this triple from desiderata.
- Once “locality + smoothness budget + gauge fixing” are encoded operator-theoretically, the “right” correlation kernel is **forced** to be the **Dirichlet Green kernel** (inverse Laplacian).
- The resulting GCh mechanism is **especially effective in late semantic stages**, where hard discontinuous masking can be brittle.

---

## Motivation and Core Question

Noise is ubiquitous in modern pipelines, but its structure is often chosen by convention (i.i.d., hard masks), which can **ignore the geometry/coherence of intermediate representations** and become brittle late in the network.

**Central question (design view):**
> *What noise structure is “right” for a given representation and objective under natural first-principles constraints?*

We target **reliability** improvements—e.g. **NLL** and **ECE**—without sacrificing accuracy, especially under distribution shift (ImageNet-C).

---

## Problem Formulation

### Noise as a design triple

We model a spatial noise mechanism as a triple
$$
\mathcal{N} = (\mathcal{F}, K, \mathcal{T}),
$$
where:

1. **Distribution family** $\mathcal{F}$: what random field is sampled.
2. **Kernel** $K$: how it correlates over space (the “correlation geometry”).
3. **Injection operator** $\mathcal{T}$: where/how it acts on representations.

In the primary instantiation, we inject a **spatial gate** shared across channels, multiplicatively applied to a feature map $h \in \mathbb{R}^{C\times H\times W}$:
$$
(\mathcal{T}_\nu h)(c,x) = h(c,x)\,\nu(x),
$$
with $x$ a spatial site and $\nu(x)>0$ a gate value (shared across channels at the same spatial location).

### Discrete spatial domain and operator

We work on a rectangular grid
$$
V=\{1,\dots,H\}\times\{1,\dots,W\},
$$
with boundary $B$ and interior $U=V\setminus B$, and impose a **Dirichlet gauge fixing** (boundary pinned) so the Dirichlet Laplacian $L_U$ is positive definite.

Define the **Dirichlet energy** of a field $\psi:U\to\mathbb{R}$:
$$
E(\psi) \;:=\; \frac12 \langle \psi, L_U \psi\rangle.
$$

---

## Design Desiderata (Constraints)

We encode “learning-relevant” requirements as constraints on a *log-field* $\psi$, where the positive gate is $\xi=\exp(\psi)$:

- **(D1) Least additional information (MaxEnt):** among all laws satisfying constraints, choose the maximum-entropy solution.
- **(D2) Positivity:** $\xi(x)>0$ for all $x\in U$ (equivalently $\psi\in\mathbb{R}^U$).
- **(D3) Unbiasedness (no scale drift):** $\mathbb{E}[\xi(x)]=1$ for all $x\in U$.
- **(D4) Spatial coherence via a smoothness budget:** constrain expected energy $\mathbb{E}[E(\psi)]=\varepsilon$.
- **(D5) Well-posedness / gauge fixing:** Dirichlet boundary (or equivalent pinning) so $L_U\succ0$.

These constraints define a concrete **variational design problem**:
$$
\max_{p(\psi)} \; h(p)
\quad \text{s.t.}\quad
\mathbb{E}_p\!\left[\frac12\langle \psi, L_U\psi\rangle\right]=\varepsilon,\;\; \mathbb{E}[\xi(x)]=1,
$$
where $h(p)$ is the differential entropy and $\xi=\exp(\psi)$ with the mean-one normalization implemented by a deterministic correction in the exponent.

---

## Main Theoretical Result

### 1) The kernel is *forced* (Green’s function emerges)

Under MaxEnt + Dirichlet-energy budget + gauge fixing, the optimizer is a **Gaussian field with precision proportional to the Laplacian**:
$$
\psi \sim \mathcal{N}\!\big(0,\,(\beta L_U)^{-1}\big),
\qquad
\mathrm{Cov}(\psi)=\beta^{-1}G_U,
\qquad
G_U:=L_U^{-1}.
$$
That is, the correlation geometry is the **Dirichlet Green kernel** $G_U$, and $\beta>0$ is determined by the energy budget.

### 2) The multiplicative gate is Gaussian chaos (Wick exponential)

For any strength $\gamma\in\mathbb{R}$, define the **mean-one multiplicative gate**
$$
\xi_\gamma(x) \;:=\;
\frac{\exp(\gamma\psi(x))}{\mathbb{E}[\exp(\gamma\psi(x))]}
\;=\;
\exp\!\Big(\gamma\psi(x)-\frac{\gamma^2}{2}\mathrm{Var}(\psi(x))\Big).
$$
This is exactly the **(discrete) Gaussian chaos / Wick exponential** induced by the MaxEnt GFF log-field.

A useful induced second-moment identity is:
$$
\mathbb{E}[\xi_\gamma(x)\xi_\gamma(y)] \;=\; \exp\!\big(\gamma^2\,C(x,y)\big),
\quad C=(\beta L_U)^{-1}.
$$
(Interpretable as the effective kernel after exponentiation.)

---

## Method and Implementation

### Efficient sampling via DST/FFT (rectangular Dirichlet grid)

With Dirichlet boundary, the Laplacian eigenbasis is the 2D sine basis, enabling fast spectral sampling. The paper gives explicit eigenpairs $(e_{k,\ell},\lambda_{k,\ell})$ and shows that sampling
$$
\psi \sim \mathcal{N}(0,(\beta L_U)^{-1})
$$
reduces to **spectral synthesis + inverse 2D discrete sine transform (IDST2)**.

### “Algorithm 1” (drop-in noise module)

A minimal operational recipe is:

1. Precompute Laplacian eigenvalues $\lambda_{k,\ell}$.
2. Sample i.i.d. $Z_{k,\ell}\sim\mathcal{N}(0,1)$ and scale by $(\beta\lambda_{k,\ell})^{-1/2}$.
3. Apply IDST2 to obtain $\psi$.
4. Exponentiate and **normalize to mean-one** (either exact Wick correction using a variance map, or sample-wise mean-one).
5. Inject multiplicatively: $\tilde{F}(x)=F(x)\cdot \xi_\gamma(x)$.

---

## What We Wanted to Achieve (Targets)

1. **A principled, reproducible noise-design blueprint**: derive $(\mathcal{F},K,\mathcal{T})$ from desiderata, rather than “choosing a noise type.”
2. **A canonical correlation answer**: identify when the “right” kernel is *not tunable* but *forced*—here $K=G_U=L_U^{-1}$.
3. **A stable late-stage regularizer** that improves **reliability (NLL/ECE)** without harming accuracy, especially where hard masking degrades.

---

## Final Results (What We Got)

### Clean ImageNet (late-stage injection)

At a late-stage injection site (L4), the method improves reliability versus strong spatial masking baselines at matched settings. For example, at the best checkpoint (L4 injection), GCh achieves lower NLL and ECE than DropBlock while keeping Top-1 competitive (Table 3).

The paper also reports a clear **depth-dependent reliability gain**, with late-stage injection producing the best calibration (lowest ECE) among early/mid/late stages (Table 5).

### ImageNet-C (distribution shift)

Under common corruptions, the method substantially improves calibration: compared to the no-noise baseline, **ECE drops from 0.105 to 0.056** (46% relative reduction) at late-stage injection, with improved NLL as well (Table 7).

The ablation also shows that **correlation alone is not sufficient**: correlated *additive* Gaussian noise stays close to baseline in ECE, while the improvement appears when correlation is combined with a **positive, mean-one multiplicative gate** (GCh).

### Stability regime (strength sensitivity)

A practical operating window exists: moderate strengths retain accuracy while improving reliability; overly large $\gamma$ destabilizes performance (failure mode).

### Fine-grained pilot (Oxford-IIIT Pets)

On a fine-grained benchmark, GCh achieves the best (lowest) NLL and ECE at essentially unchanged accuracy relative to strong baselines (Table 11).

---

## Selected References (with titles)

**Project paper**
- Z. Liu. *Gaussian Chaos Noise: Variational Noise Design for Reliable Deep Learning*. Preprint, Jan 30, 2026.

**Noise injection / regularization**
- C. M. Bishop. *Training with Noise is Equivalent to Tikhonov Regularization*. Neural Computation, 1995.
- N. Srivastava et al. *Dropout: A Simple Way to Prevent Neural Networks from Overfitting*. JMLR, 2014.
- G. Huang et al. *Deep Networks with Stochastic Depth*. ECCV, 2016.
- G. Ghiasi, T.-Y. Lin, Q. V. Le. *DropBlock: A Regularization Method for Convolutional Networks*. NeurIPS, 2018.

**Calibration / reliability**
- C. Guo et al. *On Calibration of Modern Neural Networks*. ICML, 2017.

**Robustness benchmarks**
- D. Hendrycks, T. Dietterich. *Benchmarking Neural Network Robustness to Common Corruptions and Perturbations*. ICLR, 2019.

**Bayesian / uncertainty baselines**
- Y. Gal, Z. Ghahramani. *Dropout as a Bayesian Approximation: Representing Model Uncertainty in Deep Learning*. ICML, 2016.
- B. Lakshminarayanan, A. Pritzel, C. Blundell. *Simple and Scalable Predictive Uncertainty Estimation Using Deep Ensembles*. NeurIPS, 2017.

**Data augmentation (as structured noise)**
- H. Zhang et al. *mixup: Beyond Empirical Risk Minimization*. ICLR, 2018.
- S. Yun et al. *CutMix: Regularization Strategy to Train Strong Classifiers with Localizable Features*. ICCV, 2019.
- E. D. Cubuk et al. *AutoAugment: Learning Augmentation Strategies from Data*. CVPR, 2019.
- D. Hendrycks et al. *AugMix: A Simple Data Processing Method to Improve Robustness and Uncertainty*. ICLR, 2020.
