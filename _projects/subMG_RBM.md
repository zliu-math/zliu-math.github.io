---
layout: page
title: Rigorous Analysis of Submartingale Problems in Wedge Domains
description: A study on the existence, uniqueness, and path properties of Reflected Brownian Motion (RBM) in non-smooth domains.
img: assets/img/rbm.png
importance: 2
category: Research
---

### 1. Problem Formulation 

This project investigates the **Submartingale Problem** for a d-dimensional diffusion process $Z$ in a constrained geometric domain $\mathcal{S}$ (specifically a wedge in $\mathbb{R}^2$ with opening angle $\xi$). Formally, given a constant drift vector $\mu$ and reflection directions $v_1, v_2$ on the boundaries $\partial \mathcal{S}_1, \partial \mathcal{S}_2$, the process is characterized by the following stochastic dynamics:

$$dZ_t = \mu dt + dB_t + \sum_{i=1}^2 v_i dL^i_t$$

where $B_t$ is a standard Brownian motion and $L^i_t$ are the **local times** associated with the boundaries. The central challenge lies in the non-smooth nature of the vertex, where the reflection directions may create singularities that compromise the existence and uniqueness of the solution.

---

### 2. Methodology 

We utilize the **Varadhan-Williams framework** for submartingale problems, which bypasses the limitations of strong SDE solutions in non-Lipschitz domains. Our analytical approach involves:

* **Conformal Mapping**: Transforming the wedge domain into a half-plane to simplify the boundary operator.
* **Lyapunov Functions**: Constructing specific functions $f \in C_b^2(\mathcal{S})$ that satisfy the oblique derivative condition $\langle \nabla f, v_i \rangle \geq 0$ to test the submartingale property.
* **Skew-Symmetry Analysis**: Analyzing the geometric parameter $\alpha = (\theta_1 + \theta_2)/\xi$, where $\theta_i$ are the angles of reflection measured from the inward normals.

---

### 3. Research Objectives 

The primary goals of this program are:

1.  **Existence-Uniqueness Thresholds**: To determine the critical value of $\alpha$ beyond which the submartingale problem becomes ill-posed.
2.  **Path Property Classification**: To distinguish between regimes where $Z$ is a semimartingale and where it exhibits infinite variation near the vertex.
3.  **Vertex Behavior**: To provide a rigorous probabilistic proof of whether the vertex is an **attainable trap** or a **reflecting point** under specific drift configurations.

---

### 4. Key Results 

Our research established several high-impact results in the field of stochastic analysis:

* **The $\alpha < 2$ Criterion**: We proved that the submartingale problem possesses a unique strong solution if and only if the geometric parameter satisfies $\alpha < 2$.
* **Non-Semimartingale Transition**: We identified that for $1 \leq \alpha < 2$, the process $Z$ is **not a semimartingale**. In this regime, the local time processes $L^i$ do not have finite variation, although $Z$ remains a Dirichlet process.
* **Vertex Absorption Conditions**: We derived explicit conditions on the drift $\mu$ that determine the vertex hitting probability $P(\tau_0 < \infty)$, establishing that the vertex acts as a trap when the drift is sufficiently inward-pointing.



---

### Selected References

* **Lakner, P., Liu, Z., & Reed, J.** (2023). *Reflected Brownian motion with drift in a wedge.* Queueing Systems.
* **Varadhan, S. R. S., & Williams, R. J.** (1985). *Diffusions in regions with boundaries.*
* **Williams, R. J.** (1987). *Reflected Brownian motion with skew reflection.*
