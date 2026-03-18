---
layout: page
title: (Completed) Submartingale Problem for RBM with Drift in a Wedge
description: We study reflecting Brownian motion with drift constrained to a wedge in the plane. Our first set of results provide necessary and suﬃcient conditions for existence and uniqueness of a solution to the corresponding submartingale problem with drift, and show that its solution possesses the Markov and Feller properties. Next, we study a version of the problem with absorption at the vertex of the wedge. In this case, we provide a condition for existence and uniqueness of a solution to the problem and some results on the probability of the vertex being reached.
img: assets/img/rbm1.618.png
importance: 1
category: Research
---

### 1. Problem Formulation: The Submartingale Approach 

Unlike the standard SDE approach, we define **Reflected Brownian Motion (RBM)** in a wedge domain $\mathcal{S}$ through the **Submartingale Problem**. Given a drift vector $\mu$ and reflection directions $v_1, v_2$ on the boundaries, we seek a family of probability measures $\{\mathbb{P}_z\}_{z \in \mathcal{S}}$ such that for any test function $f \in C_b^2(\mathcal{S})$ satisfying the oblique derivative boundary conditions:

$$\langle \nabla f, v_i \rangle \geq 0 \quad \text{on } \partial \mathcal{S}_i, \quad i=1,2$$

the following process $M_f$ is a **$\mathbb{P}_z$-submartingale**:

$$M_f(t) = f(Z_t) - \int_0^t \mathcal{L}f(Z_s) ds, \quad t \ge 0$$

where $\mathcal{L} = \frac{1}{2}\Delta + \mu \cdot \nabla$ is the infinitesimal generator of the diffusion.



---

### 2. Methodology: Geometric Conformal Invariants 

The core of our methodology relies on analyzing the **geometric skew-symmetry** of the domain. 
* **Conformal Transformation**: We map the wedge $\mathcal{S}$ with opening angle $\xi$ to a half-plane, allowing us to simplify the boundary operator into a single spectral parameter $\alpha$.
* **$\alpha$-Parameterization**: The parameter $\alpha = (\theta_1 + \theta_2)/\xi$ (where $\theta_i$ are reflection angles from inward normals) serves as the fundamental descriptor of the process's behavior at the vertex.
* **Construction of Lyapunov Functions**: We construct specific power-type functions to test the boundaries of the submartingale property and establish hitting time estimates.

---

### 3. Research Objectives 

1.  **Existence-Uniqueness Phase Diagram**: To rigorously determine the thresholds for $\alpha$ under which the submartingale problem is well-posed.
2.  **Pathological Boundary Analysis**: To classify the regularity of the sample paths as they interact with the non-smooth vertex.
3.  **Vertex Attainability**: To prove whether the process can reach the vertex in finite time and whether it is absorbed or reflected.

---

### 4. Key Results & Theorems 

Our work establishes the complete sharp criteria for RBM in wedge domains:

* **Existence and Uniqueness**: We prove that a unique solution to the submartingale problem exists if and only if **$\alpha < 2$**.
* **The Semimartingale Threshold**: We establish that for $1 \le \alpha < 2$, the process $Z$ is **not a semimartingale**. In this regime, the reflection "force" is so singular that the local time processes $L^i$ exert infinite variation near the vertex.
* **Vertex as a Trap**: We provide necessary and sufficient conditions for the vertex to be a **trap** (absorbing point) based on the alignment of the drift $\mu$ and the reflection vectors $v_i$.

---

### Selected References

* **Lakner, P., Liu, Z., & Reed, J.** (2023). *Reflected Brownian motion with drift in a wedge.* Queueing Systems.
* **Varadhan, S. R. S., & Williams, R. J.** (1985). *Diffusions in regions with boundaries*.
* **Williams, R. J.** (1987). *Reflected Brownian motion with skew reflection*.
