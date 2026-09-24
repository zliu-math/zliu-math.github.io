---
layout: page
title: 
description: >
  
img: .png
importance: 1
category: Research
published: false
---


## Project Overview



- 
-
-
---

## Motivation and Core Question


**Central question (design view):**
> *What noise structure is “right” for a given representation and objective under natural first-principles constraints?*

We target **reliability** improvements—e.g. **NLL** and **ECE**—without sacrificing accuracy, especially under distribution shift (ImageNet-C).

---

## Problem Formulation



---

## Design Desiderata (Constraints)


---

## M

### E

---

## What We Wanted to Achieve (Targets)

1. **A principled, reproducible noise-design blueprint**: derive $(\mathcal{F},K,\mathcal{T})$ from desiderata, rather than “choosing a noise type.”
2. **A canonical correlation answer**: identify when the “right” kernel is *not tunable* but *forced*—here $K=G_U=L_U^{-1}$.
3. **A stable late-stage regularizer** that improves **reliability (NLL/ECE)** without harming accuracy, especially where hard masking degrades.

---

## Final Results (What We Got)

### Clean ImageNet (late-stage injection)



---

## Selected References (with titles)

**Project paper**
- Z. Liu. *Gaussian Chaos Noise: Variational Noise Design for Reliable Deep Learning*. Preprint, Jan 30, 2026.

**N**
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
