---
layout: page
title: Reflected Brownian Motion with Drift in a Wedge
description: A study on the existence, uniqueness, and Feller properties of RBM with constant drift in planar wedges, resolving long-standing open problems in the submartingale formulation.
img: assets/img/rbm_wedge.png
importance: 1
category: Research
---

### Project Overview
[cite_start]This project investigates the mathematical foundations of **Reflected Brownian Motion (RBM) with constant drift** constrained within a two-dimensional wedge $S$[cite: 2, 8, 15, 16]. 

[cite_start]While RBM without drift is well-understood, the introduction of a constant drift vector $\mu$ creates significant complexities in parameter regimes where the process is not a semi-martingale[cite: 35, 39, 40]. [cite_start]Our work utilizes the **submartingale problem** approach to provide a rigorous definition and characterization of these processes, which serve as heavy-traffic limits for complex queueing systems like the coupled processor model[cite: 38, 43, 49, 50].


---

### Core Questions
We address several fundamental probabilistic and geometric questions:
1. [cite_start]**Existence and Uniqueness.** Under what conditions does a solution to the submartingale problem with drift $\mu \in \mathbb{R}^2$ exist and remain unique[cite: 9, 93]? [cite_start]We show this holds if and only if the parameter $\alpha = (\theta_1 + \theta_2)/\xi < 2$[cite: 115, 138, 166].
2. [cite_start]**The Semi-martingale Boundary.** For which geometric configurations does the process cease to be a semi-martingale[cite: 35]? [cite_start]We prove that for $1 \le \alpha < 2$, the process $Z$ is **not a semi-martingale**, requiring more general tools like Dirichlet processes for its description[cite: 164, 165].
3. [cite_start]**Vertex Hitting and Absorption.** What is the probability of the process reaching the vertex of the wedge[cite: 11, 190]? [cite_start]We provide necessary and sufficient conditions for the vertex to be a "trap" or to be reached with positive probability depending on the alignment of the drift $\mu$ and reflection vectors $v_i$[cite: 236, 240, 245].
4. [cite_start]**Regularity and Feller Properties.** Does the solution transition continuously with respect to its starting position[cite: 172]? [cite_start]We establish that the solution possesses the **Strong Markov property** and multiple versions of the **Feller property**[cite: 171, 181, 184].

---

### Mathematical Objects We Use
**The Wedge and Reflection.**
The wedge $S$ is defined in polar coordinates by $\{r \ge 0, 0 \le \theta \le \xi\}$. [cite_start]Reflection directions $v_1, v_2$ on the boundaries are defined by angles $\theta_1, \theta_2$ measured from inward normals[cite: 16, 30, 31, 78].

**The Submartingale Formulation.**
[cite_start]A family of measures $\{\mathbb{P}_{\mu}^z, z \in S\}$ solves the problem if for $f \in C_b^2(S)$ satisfying $D_i f \ge 0$ on the boundaries[cite: 93, 97]:
$$\{f(Z(t)) - \int_{0}^{t} \mu \cdot \nabla f(Z(s)) ds - \frac{1}{2} \int_{0}^{t} \Delta f(Z(s)) ds, t \ge 0\}$$
[cite_start]is a submartingale[cite: 96, 97].

**Path Decomposition.**
[cite_start]We establish the decomposition $Z = X + Y$, where $X$ is a Brownian motion with drift and $Y$ is a "pushing" process of finite or infinite variation depending on $\alpha$[cite: 140, 142, 154, 158].

---

### Key Results
**Stage A — Existence & Uniqueness (Complete).**
* [cite_start]Proved that a unique solution exists for all $\alpha < 2$ for any constant drift $\mu$[cite: 138].
* [cite_start]Demonstrated that no solution exists for $\alpha \ge 2$[cite: 166, 579].

**Stage B — Path Properties (Complete).**
* [cite_start]Identified the threshold ($1 \le \alpha < 2$) where the process loses its semi-martingale property[cite: 165].
* [cite_start]Characterized $Z$ as a **Dirichlet process** and $Y$ as a zero-energy process in these regimes[cite: 161, 164].

**Stage C — Absorption at the Vertex (Complete).**
* [cite_start]Resolved the "Absorbed Process Problem," proving a unique solution exists for *all* $\alpha \in \mathbb{R}$ when the process stops at the vertex[cite: 207, 214].
* [cite_start]Showed that unlike the drift-less case, hitting the vertex is not always a 0-1 event when drift is present[cite: 255, 256].

---

### Selected References
* **Lakner, P., Liu, Z., & Reed, J.** *Reflected Brownian motion with drift in a wedge*. [cite_start]Queueing Systems (2023)[cite: 1, 2, 3].
* **Varadhan, S.R.S., & Williams, R.J.** *Brownian motion in a wedge with oblique reflection*. [cite_start]Communications on Pure and Applied Mathematics (1985)[cite: 935].
* **Williams, R.J.** *Reflected brownian motion in a wedge: semimartingale property*. [cite_start]ZfW (1985)[cite: 939].
* **Kang, W., & Ramanan, K.** *On the submartingale problem for reflected diffusions in domains with piecewise smooth boundaries*. [cite_start]Annals of Probability (2017)[cite: 911].
