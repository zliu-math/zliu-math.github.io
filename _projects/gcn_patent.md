---
layout: page
title: Gaussian Chaos Noise (GCh) Patent
description: >
  China invention patent application in preparation on a structured noise injection method for reliable deep learning, based on Gaussian Chaos Noise with spatial correlation and mean-preserving multiplicative gating.
img: assets/img/GCh1.618.png
importance: 1
category: Patents
---

## 中文说明

### 项目名称

**拟申请中文发明名称：**  
**一种用于深度学习训练的高斯混沌噪声注入方法、装置、电子设备及存储介质**

### 申请状态

本项目当前拟以**中国发明专利**的形式申请，相关申请材料正在整理与准备中。该专利围绕一种面向深度学习可靠性提升的**结构化噪声注入技术**展开，重点保护其噪声生成机制、空间相关结构、均值保持的正乘性门控形式，以及在神经网络中间表示中的注入方式与工程实现路径。

### 技术概要

本项目提出一种面向深度学习训练的**结构化噪声注入方法**。不同于传统的 i.i.d. dropout、hard masking 或经验性噪声设计，该方法将噪声视为一个可设计对象，从表示层的局部性、空间平滑预算、稳定性与无偏性等原则出发，导出一种具有明确相关几何的噪声机制。

其核心特征包括：

- 噪声为**正值、均值保持**的乘性门控；
- 噪声在空间上具有**相关结构**，而非独立采样；
- 相关结构由 **Dirichlet Green kernel / inverse Laplacian** 所诱导；
- 门控可通过 **Wick-normalized exponential** 的方式构造；
- 可注入于神经网络中间层，尤其适用于 **late semantic stages**；
- 目标是在尽量保持精度的同时，提升模型在 **reliability / calibration / robustness** 方面的表现。

### 为什么值得申请专利

该技术并非简单地“向网络加噪声”，而是提供了一种具有明确数学结构、工程可实现性和任务导向性的噪声设计机制。它有潜力成为深度学习训练中的通用可靠性增强模块，可服务于模型校准、分布偏移鲁棒性、不确定性控制以及高可靠场景下的模型部署。

从方法论上看，这一方向的核心价值并不只是提出一种新的 regularization trick，而是将“噪声”本身提升为一个可由基本原则推导出来的设计对象。换言之，它试图回答的不是“还能加什么噪声”，而是“在给定表示结构和学习目标下，什么样的噪声结构才是合理的”。

### 当前拟保护范围

当前拟申请的保护重点包括但不限于：

- 基于相关高斯 log-field 的噪声生成方法；
- 基于 Green kernel / inverse Laplacian 的空间相关结构；
- 均值保持的正乘性门控构造；
- 噪声在中间特征图或 token grid 上的注入方式；
- 对应的训练流程、装置实现、电子设备与存储介质。

### 备注

本页面用于展示该专利方向的研究内容与申请准备情况。正式法律文本、审查过程及最终权利要求范围，以实际提交的专利申请文件为准。

---

## English Translation

**Note.**  
This project is currently being prepared primarily as a **China invention patent application**, with future international filing strategy under consideration. For clarity and accessibility, this page provides a bilingual presentation: the upper part is the original Chinese version, and the following part is the corresponding English translation. The two parts are intended to convey the same substantive content.

### Project Title

**Proposed Chinese patent title:**  
**Method, Device, Electronic Equipment, and Storage Medium for Gaussian Chaos Noise Injection in Deep Learning Training**

### Status

This project is currently being prepared as a **China invention patent application**. The patent concerns a **structured noise-injection technology** aimed at improving reliability in deep learning, with protection focused on the noise-generation mechanism, spatial correlation structure, mean-preserving positive multiplicative gating, and the corresponding injection strategy and implementation pathway in intermediate neural representations.

### Technical Summary

This project develops a **structured noise-injection method for deep learning training**. Unlike standard i.i.d. dropout, hard masking, or heuristic perturbation schemes, the method treats noise as a design object and derives its structure from principles such as locality, spatial smoothness budget, stability, and unbiasedness of the representation.

Its main technical features include:

- a **positive, mean-preserving** multiplicative gate;
- a **spatially correlated** noise structure rather than independent sampling;
- a correlation geometry induced by the **Dirichlet Green kernel / inverse Laplacian**;
- a gate constructed via a **Wick-normalized exponential**;
- injection into intermediate neural representations, especially effective in **late semantic stages**;
- the aim of improving **reliability, calibration, and robustness** while maintaining competitive predictive accuracy.

### Why It Matters

This is not merely a generic “noise-adding trick,” but a principled and implementable mechanism for structured noise design with a clear mathematical and engineering foundation. It has the potential to serve as a general reliability-enhancement module in deep learning training, with relevance to model calibration, robustness under distribution shift, uncertainty control, and deployment in reliability-critical settings.

At a conceptual level, the significance of this work is not simply the introduction of another regularization trick. Rather, it elevates *noise* itself into a design object derived from first principles. In that sense, the central question is not merely “what new noise can be added,” but “what noise structure is appropriate for a given representation and learning objective.”

### Current Intended Scope

The current intended protection scope includes, but is not limited to:

- a noise-generation method based on a correlated Gaussian log-field;
- a spatial correlation structure induced by the Green kernel / inverse Laplacian;
- a mean-preserving positive multiplicative gate construction;
- injection strategies on intermediate feature maps or token grids;
- the corresponding training pipeline, device implementation, electronic equipment, and storage medium.

### Note

This page is intended to present the research content and filing preparation status of the patent project. The formal legal text, examination process, and final scope of protection will be determined by the actual patent application documents as filed.
