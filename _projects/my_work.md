---
layout: page
title: Nonlinear Jacobian Chain Geometry
description: A project on the Riemannian geometry induced by Jacobian chains in deep nonlinear networks—linking depth, curvature, stability, and trainability.
img: assets/img/12.jpg
importance: 1
category: work
---

### Project Overview

This project studies **deep nonlinear neural networks through the geometry of their Jacobian chains**.  
Given a network as a composition of layers, the end-to-end differential is a **product of Jacobians** (a “Jacobian chain”). This chain induces natural **Riemannian metrics**—on input space, feature space, and (via Fisher-type constructions) parameter space—which provide a principled language to describe **stability, trainability, expressivity, and generalization** in deep models.

At a high level, we treat depth not only as “more layers,” but as a **geometric mechanism**: repeated composition shapes a metric field whose **spectral profile and curvature** encode how signals, gradients, and local volumes evolve through the network.

---

### Core Questions

We focus on a few concrete, geometry-first questions:

1. **Metric induced by the Jacobian chain.**  
   For a network map \(f:\mathcal{X}\to\mathcal{Y}\), the pullback metric
   \[
   g_x \;\;=\;\; (Df(x))^\top Df(x)
   \]
   defines a Riemannian geometry on \(\mathcal{X}\) (and analogously on feature manifolds across depth).  
   **How does \(g_x\) evolve with depth and training?** What invariants are stable?

2. **Dynamical isometry and beyond.**  
   Classical trainability heuristics aim for “well-conditioned” Jacobians at initialization.  
   **Can we formulate trainability as a geometric condition** (e.g., bounded distortion, controlled curvature, or near-isometric transport across depth), and track when/why it fails?

3. **Curvature as a descriptor of representation.**  
   If the metric field becomes highly anisotropic, curved, or singular in regions of data support, the network can exhibit brittle behavior.  
   **Which curvature-like quantities correlate with robustness / generalization?** Can they be turned into measurable diagnostics or regularizers?

4. **Nonlinearity and compositional geometry.**  
   In nonlinear networks (e.g., residual blocks), \(Df(x)\) is data-dependent and spatially varying.  
   **How does nonlinearity generate curvature**, even if each layer is “locally simple”?

---

### Mathematical Objects We Use

**Jacobian chain (end-to-end differential).**  
For a depth-\(L\) composition \(f = f_L \circ \cdots \circ f_1\),
\[
Df(x) = J_L(h_{L-1}) \cdots J_1(x),
\quad J_\ell(\cdot)=D f_\ell(\cdot).
\]

**Pullback metric / distortion.**
\[
g_x = (Df(x))^\top Df(x), \qquad 
\text{distortion}(x)\sim \kappa(Df(x)) \ \text{or} \ \sigma_{\max}/\sigma_{\min}.
\]

**Geometric statistics (local, data-dependent).**
- singular value spectrum of \(Df(x)\) along data,
- log-volume change \(\log\det(Df(x)^\top Df(x))\),
- curvature proxies (e.g., variation of the metric field along geodesics / data trajectories),
- Fisher-type metrics on parameters (when appropriate): \(G(\theta)\approx \mathbb{E}[ \nabla_\theta \log p_\theta \nabla_\theta \log p_\theta^\top]\).

---

### Current Stage Results (What We Have Now)

**Stage A — Formalization (done / ongoing).**
- A clean definition of the **Jacobian-chain–induced geometry** on inputs and intermediate feature spaces.
- A dictionary connecting:
  - “signal propagation / gradient propagation” ↔ metric distortion,
  - “exploding/vanishing gradients” ↔ degeneracy of \(g_x\),
  - “trainability windows” ↔ spectral concentration of Jacobian products.

**Stage B — Theory-guided diagnostics (ongoing).**
- Practical metrics computed on real networks/data:
  - spectra of \(Df(x)\) across depth and training time,
  - volume distortion and anisotropy indices,
  - stability signatures under perturbations (input noise / weight noise / data augmentation).
- Empirical protocols to correlate these with:
  - generalization gap,
  - robustness (adversarial / distribution shift),
  - optimization speed / sharpness proxies.

**Stage C — Geometry-driven principles (planned).**
- Geometric conditions stronger than dynamical isometry (e.g., **bounded curvature growth**, controlled metric transport).
- Potential regularizers or architectural constraints motivated by metric/curvature control.

---

### Roadmap (Next Steps)

1. **A “Riemannian signal propagation” theorem** for nonlinear/residual networks:  
   conditions under which the metric distortion stays controlled across depth (possibly in expectation or with high probability).

2. **Curvature-and-generalization hypothesis** (testable):  
   identify curvature proxies that predict robustness/generalization better than Jacobian conditioning alone.

3. **From diagnostics to interventions:**  
   turn geometry quantities into training objectives (regularizers) or architectural design rules.

---

### Selected References

**Jacobian chains, signal propagation, dynamical isometry**
- Schoenholz, Gilmer, Ganguli, Sohl-Dickstein. *Deep Information Propagation*. ICLR (2017).
- Poole, Lahiri, Raghu, Sohl-Dickstein, Ganguli. *Exponential expressivity in deep neural networks through transient chaos*. NeurIPS (2016).
- Pennington, Schoenholz, Ganguli. *Resurrecting the Sigmoid in Deep Learning through Dynamical Isometry*. NeurIPS (2017).
- Xiao, Bahri, Sohl-Dickstein, Schoenholz, Pennington. *Dynamical Isometry and a Mean Field Theory of RNNs: Gating Enables Signal Propagation in Recurrent Neural Networks*. ICML/NeurIPS-era works (see authors’ related papers).

**Information geometry / natural gradient / Fisher metrics**
- Amari. *Natural Gradient Works Efficiently in Learning*. Neural Computation (1998).
- Amari. *Information Geometry and Its Applications*. Springer (2016).
- Martens. *New insights and perspectives on the natural gradient method*. arXiv (2014).
- Grosse & Martens. *A Kronecker-factored approximate Fisher matrix for convolution layers*. ICML (2016) (K-FAC line).

**Riemannian optimization and matrix-manifold geometry (tooling layer)**
- Absil, Mahony, Sepulchre. *Optimization Algorithms on Matrix Manifolds*. Princeton (2008).
- Bonnabel. *Stochastic gradient descent on Riemannian manifolds*. IEEE TAC (2013).
- Edelman, Arias, Smith. *The geometry of algorithms with orthogonality constraints*. SIAM J. Matrix Anal. Appl. (1998).

**Broader geometric deep learning context**
- Bronstein, Bruna, Cohen, Veličković. *Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges*. (Survey, 2021).
