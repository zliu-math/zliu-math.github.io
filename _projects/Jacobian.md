---
layout: page
title: Nonlinear Jacobian Chain Geometry
description: A project on the Riemannian geometry induced by Jacobian chains in deep nonlinear networks—linking depth, curvature, stability, and trainability.
img: assets/img/jacobian.png
importance: 1
category: Research
---

### Project Overview

This project studies **deep nonlinear neural networks through the geometry of their Jacobian chains**.  
Given a network as a composition of layers, the end-to-end differential is a **product of Jacobians** (a "Jacobian chain"). This chain induces natural **Riemannian metrics**—on input space, feature space, and (via Fisher-type constructions) parameter space—which provide a principled language to describe **stability, trainability, expressivity, and generalization** in deep models.

At a high level, we treat depth not only as "more layers," but as a **geometric mechanism**: repeated composition shapes a metric field whose **spectral profile and curvature** encode how signals, gradients, and local volumes evolve through the network.

---

### Core Questions

We focus on a few concrete, geometry-first questions:

1. **Metric induced by the Jacobian chain.** For a network map $f:\mathcal{X}\to\mathcal{Y}$, the pullback metric 

   $$g_x = (Df(x))^\top Df(x)$$

   defines a Riemannian geometry on $\mathcal{X}$ (and analogously on feature manifolds across depth).  
   **How does $g_x$ evolve with depth and training?** What invariants are stable?

2. **Dynamical isometry and beyond.** Classical trainability heuristics aim for "well-conditioned" Jacobians at initialization.  
   **Can we formulate trainability as a geometric condition** (e.g., bounded distortion, controlled curvature, or near-isometric transport across depth), and track when/why it fails?

3. **Curvature as a descriptor of representation.** If the metric field becomes highly anisotropic, curved, or singular in regions of data support, the network can exhibit brittle behavior.  
   **Which curvature-like quantities correlate with robustness / generalization?** Can they be turned into measurable diagnostics or regularizers?

4. **Nonlinearity and compositional geometry.** In nonlinear networks (e.g., residual blocks), $Df(x)$ is data-dependent and spatially varying.  
   **How does nonlinearity generate curvature**, even if each layer is "locally simple"?

---

### Mathematical Objects We Use

**Jacobian chain (end-to-end differential).** For a depth-$L$ composition $f = f_L \circ \cdots \circ f_1$:

$$Df(x) = J_L(h_{L-1}) \cdots J_1(x), \quad J_\ell(\cdot) = D f_\ell(\cdot)$$

**Pullback metric / distortion.**

$$g_x = (Df(x))^\top Df(x), \quad \text{distortion}(x) \sim \kappa(Df(x)) \text{ or } \sigma_{\max}/\sigma_{\min}$$

**Geometric statistics (local, data-dependent).**
* Singular value spectrum of $Df(x)$ along data.
* Log-volume change $\log\det(Df(x)^\top Df(x))$.
* Curvature proxies (e.g., variation of the metric field along geodesics / data trajectories).
* Fisher-type metrics on parameters: $G(\theta) \approx \mathbb{E}[\nabla_\theta \log p_\theta \nabla_\theta \log p_\theta^\top]$.

---

### Current Stage Results

**Stage A — Formalization (done / ongoing).**
* A clean definition of the **Jacobian-chain–induced geometry** on inputs and intermediate feature spaces.
* A dictionary connecting "signal propagation" $\leftrightarrow$ metric distortion and "exploding/vanishing gradients" $\leftrightarrow$ degeneracy of $g_x$.

**Stage B — Theory-guided diagnostics (ongoing).**
* Practical metrics computed on real networks/data: spectra of $Df(x)$ across depth and training time.
* Stability signatures under perturbations (input noise / weight noise / data augmentation).

**Stage C — Geometry-driven principles (planned).**
* Geometric conditions stronger than dynamical isometry (e.g., **bounded curvature growth**).
* Potential regularizers or architectural constraints motivated by metric/curvature control.

---

### Selected References

* **Poole et al.** *Exponential expressivity in deep neural networks through transient chaos*. NeurIPS (2016).
* **Schoenholz et al.** *Deep Information Propagation*. ICLR (2017).
* **Amari.** *Information Geometry and Its Applications*. Springer (2016).
* **Bronstein et al.** *Geometric Deep Learning*. (2021).
