---
layout: page
title: Positive sectional curvature on all smooth 7-spheres
description: SageMath verification companion — code, exact certificates, reproducible results, and reading guides.
importance: 1
category: Research
published: true
permalink: /projects/PosSecSmoothS7/

# 上传以下文件后，将 downloads_ready 改为 true。
# 如使用其他文件名或目录，只需修改本列表；正文链接会自动更新。
# Upload the files below, then set downloads_ready to true.
downloads_ready: false
verification_files:
  paper: /assets/verification/PosSecSmoothS7/v12/paper-v12.pdf
  source: /assets/verification/PosSecSmoothS7/v12/v12_clean.tex
  package: /assets/verification/PosSecSmoothS7/v12/verification_package_v12.zip
  english: /assets/verification/PosSecSmoothS7/v12/verification_report_en.pdf
  chinese: /assets/verification/PosSecSmoothS7/v12/verification_report_zh.pdf
  certificates: /assets/verification/PosSecSmoothS7/v12/exact_certificates.zip
  results: /assets/verification/PosSecSmoothS7/v12/results.json
  checksum: /assets/verification/PosSecSmoothS7/v12/verification_package_v12.zip.sha256
--- 

**[Yang-Hui He](https://lims.ac.uk/yang-hui-he/)** (Royal Institution, LIMS, University of Oxford) · **[Ziran Liu](https://zliu-math.github.io/)** (SIMIS) · **[Shing-Tung Yau](https://scholar.google.com/citations?user=5_3BcJ0AAAAJ&hl=en)** (Tsinghua University)
Computational companion to the **manuscript**. Reference run: **25 September 2026**, using **SageMath 10.9**.

[Downloads](#downloads) · [What was checked](#what-was-checked) · [Verification scope](#verification-scope) · [Reproduce the results](#reproduce-the-results)

The paper's main assertion is that every smooth homotopy seven-sphere admits a smooth Riemannian metric with strictly positive sectional curvature at every point and on every tangent two-plane. Its construction is intended to cover all **28 oriented diffeomorphism classes**.

This companion makes the computational parts of that argument inspectable: it provides executed calculations, exact certificates, results, and explanations of how those calculations support the paper. It is **not an end-to-end formal machine proof** of the main theorem, it is a **computer-assisted verification (by SageMath) of the proof**.

## Recorded result

**80 PASS groups · 0 FAIL groups · 48 replayable exact certificates**

The reference run also records **7 dependency groups not established by the computation**. These are explicitly marked `UNVERIFIED`, not silently treated as passed. The counts refer to groups of checks, not to numbers of proved theorems, verified smooth types, or a percentage of the proof.

- A separate, non-Sage Python interpreter replayed all **48** supported exact rational certificates successfully.
- All **33** deliberately altered expression certificates were rejected. The connection module includes an additional wrong-sign negative control.
- A full run using the same installed Sage runtime, freshly extracted package files, and a different working directory reproduced all check records and all eight certificate-data files exactly.
- The supplied v12 LaTeX source was preserved **byte for byte**.

## Downloads

{% unless page.downloads_ready %}
> **Files pending upload.** The links below reserve the intended download locations. They become usable after the release files are uploaded to this repository; their presence does not imply that a file is already available.
{% endunless %}

| Material | Purpose | Download |
| :--- | :--- | :--- |
| Manuscript | The human mathematical argument | [Paper PDF]({{ page.verification_files.paper | relative_url }}) · [LaTeX source]({{ page.verification_files.source | relative_url }}) |
| Complete verification package | Code, certificates, audits, environment records, raw logs, and both reading guides | [Verification package ZIP]({{ page.verification_files.package | relative_url }}) |
| English reading guide | A 41-page explanation of the mathematics, evidence, and verification boundaries | [English PDF]({{ page.verification_files.english | relative_url }}) |
| 中文解读报告 | 41 页中文说明：计算检查了什么、如何支持论文，以及如何复现 | [中文 PDF]({{ page.verification_files.chinese | relative_url }}) |
| Exact certificates | Supported rational polynomial certificates and their small independent checker | [Certificates ZIP]({{ page.verification_files.certificates | relative_url }}) |
| Machine-readable results | Every executed check, its status, and its recorded evidence | [Results JSON]({{ page.verification_files.results | relative_url }}) |
| Package checksum | SHA-256 for verifying the downloaded archive's integrity | [SHA-256 file]({{ page.verification_files.checksum | relative_url }}) |

For a first reading, start with the paper and either explanatory report. For reproduction or detailed review, download the complete verification package.

## What was checked

The calculations use generic symbolic variables and exact rational arithmetic where applicable. Separately identified interval checks use directed rounding. Finite floating-point sampling is not used as a proof of all-plane positivity.

| Module | PASS groups | Not machine-proved | Contribution |
| :--- | ---: | ---: | :--- |
| Source binding | 3 | 0 | Binds the run to the exact manuscript and a frozen inventory of labeled displays. |
| Quaternionic and topology algebra | 11 | 0 | Checks quaternion identities, marked-transition algebra, action bounds, and residue bookkeeping. |
| Connection curvature | 26 | 1 | Reconstructs the connection and mixed curvature blocks; checks signs, plane relations, and loss absorption. |
| Northern filling | 12 | 1 | Reconstructs the full ten-dimensional warped-source curvature; checks horizontal graphs, profiles, and boundary identities. |
| Gluing | 11 | 4 | Checks seven-dimensional collar curvature, interpolation, and mixed-plane estimates. |
| Parameter compatibility | 5 | 1 | Checks sufficient smallness conditions and exact remaining reserves. |
| Rigorous scalar intervals | 6 | 0 | Encloses specified scalar functions with outward rounding on complete rational cells. |
| Document consistency | 4 | 0 | Checks labels, references, and the included manuscript copies. |
| Independent replay and mutation controls | 2 | 0 | Replays exported certificates and rejects deliberately corrupted identities. |
| **Total** | **80** | **7** | **Zero failed check groups.** |

The `0` entries in the third column mean that the corresponding module reports no additional `UNVERIFIED` group. They do **not** assert that the whole subject of that module, such as smooth topology, has been machine-proved.

### Load-bearing calculations

- **Connection tensor:** 5,176 exact connection/tensor comparisons, with 45 additional quaternion vector-field sign checks. The derivation starts from frame brackets and the Koszul formula, rather than merely comparing two copies of a printed expression.
- **Northern source:** the actual ten-dimensional curvature operator has 45 coordinate bivectors. All 45 diagonal and 1,980 off-diagonal entries are checked, retaining the mixed losses needed for general horizontal planes.
- **Gluing collar:** 3,966 exact comparisons in the actual seven-dimensional setting, including the radial, tangential Gauss, and mixed Codazzi blocks. The oblique-plane estimate is checked, not just the pure radial and tangential cases.
- **Scalar intervals:** 200-bit outward-rounded intervals cover **224 closed rational cells** partitioning `[1/2, 4]`. The unbounded tails are handled by separately stated analytic inequalities. This is scalar-domain coverage, not subdivision of the entire manifold or its plane bundle.

## How this supports the paper

The proof proceeds through marked disks, southern and northern fillings, boundary matching, and smooth gluing. Each stage has different computational and geometric obligations.

| Stage of the argument | Computational support | Additional mathematical reasoning |
| :--- | :--- | :--- |
| Identify the smooth type | Quaternion and attaching-map algebra | Smooth extensions, disk markings, and the external classification theorem |
| Construct positive fillings | Complete local curvature formulas and parameter estimates | Global connections, smooth profiles, free isometric actions, and submersion descent |
| Match the prescribed boundaries | Cometric, shape-form, and cancellation identities | The common gauge must correspond to the prescribed attaching map in the extending markings |
| Glue and smooth | Collar formulas and mixed-plane absorption | Uniform estimates, smoothing analysis, and the applicable gluing theorem |

These computations reduce the amount of sign-sensitive and coefficient-sensitive calculation that a reader must repeat. They do not replace the geometric implications linking the calculations to the final closed manifold. The package's `docs/CLAIM_MAP.md` maps the checks to all nine named theorem, proposition, and lemma statements in v12.

## Verification scope

Three kinds of evidence are kept separate:

1. **Exact algebra.** The exported rational certificates comprise 33 unexpanded expression identities, 12 sparse-polynomial identities, and 3 nonnegative-coefficient certificates. Their conclusions use the stated variables and domain assumptions.
2. **Rigorous scalar intervals.** Sage's interval engine recomputes outward-rounded transcendental enclosures. The ordinary Python polynomial checker does not re-prove these enclosures.
3. **Mathematical review and external inputs.** Smooth topology, global quotient constructions, uniform analytic estimates, and smoothing are addressed by mathematical arguments and scoped audit notes, not certified by finite algebra alone.

The seven explicitly non-machine-verified dependency groups concern:

- marked-disk identification, action freeness, and O'Neill descent;
- the northern construction's global analytic and topological hypotheses;
- uniform collar estimates and compact plane-bundle arguments;
- tensor convolution and localized smoothing;
- the global hypotheses on the two disk metrics supplied to the gluing step;
- the external quantitative gluing bound;
- finiteness of geometric bounds and the analytic premises of parameter selection.

`UNVERIFIED` means **not established by this computational package**. It does not automatically identify an error or a missing proof in the manuscript, and these seven groups are not an exhaustive enumeration of every analytic fact used. The scoped audits and their assumptions are included in the release.

In particular, the package does not claim that enumerating 28 residues proves curvature existence. Its concrete interval parameter witness is **northern-only**, not a fully specified positive metric on a closed exotic sphere. No Lean formalization or independent external certification is claimed.

## Reproduce the results

After extracting the verification package, open a terminal in its top-level directory.

**Run the complete SageMath verification:**

```sh
sh reproduce.sh
```

If Sage is installed in a separate environment, specify that environment's Python executable:

```sh
SAGE_PYTHON=/path/to/sage/environment/bin/python sh reproduce.sh
```

The new run writes to `local-run/`, leaving the archived reference results untouched. The release records SageMath 10.9, software versions, source and code hashes, and raw module outputs. It includes both a portable environment specification and a platform-specific installation record.

**Replay only the exported rational certificates, without Sage:**

```sh
python3 -I verify_certificates.py certificates
```

This second command requires only the Python standard library. It checks supported encoded rational claims; it does not reconstruct every curvature tensor or recompute transcendental intervals. Consult the package `README.md` for the full workflow and interpretation of failures.

## Source identity and review trail

All recorded results refer to the supplied `v12_clean.tex`, with SHA-256:

```text
ea27de068cd78871211d0a1ac102e76b65c7bd1f033267fb24a2c5f8dc423f9e
```

The frozen inventory contains **80 labeled display blocks and 92 labels**. The number of display blocks happens to equal the number of passing check groups; they count different things. A hash identifies file bytes, not mathematical correctness.

Useful starting points inside the release:

- `VERIFICATION_REPORT.md` — the executed outcome and all seven recorded dependency groups;
- `docs/CLAIM_MAP.md` and `docs/PROOF_SCOPE.md` — statement correspondence and proof scope;
- `checks/*_audit.md` — scoped topology, connection, northern, and gluing reviews;
- `reproduction/reference-run/summary.json` and `reproduction/reference-run/logs/` — structured results and raw execution evidence;
- `reproduction/independent-replay.json` and `reproduction/fresh-extraction.json` — independent replay and extraction-based reproduction records;
- `reports/` — the English and Chinese explanatory guides;
- `SHA256SUMS` — file-integrity checksums.

When citing these materials, identify **v12**, the **2026-09-25 verification release**, and the source hash. A changed manuscript or checking program requires renewed correspondence review and a new recorded run. Reproducible evidence is most useful when its scope, assumptions, and version are explicit.
