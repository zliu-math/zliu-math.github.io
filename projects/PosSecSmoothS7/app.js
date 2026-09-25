"use strict";

/* No framework, third-party requests, analytics or remote assets.
   The UI reports the supplied release record; it never manufactures PASSes. */
(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const initialEnglish = {};
  $$('[data-i18n]').forEach(el => { initialEnglish[el.dataset.i18n] = el.innerHTML; });
  $$('[data-i18n-placeholder]').forEach(el => { initialEnglish[el.dataset.i18nPlaceholder] = el.placeholder; });

  const zh = {
    skip: "跳转到正文", brandSub: "开放 · 可复现 · 可核查", navScope: "验证范围", navChecks: "检查记录", navDownload: "下载资料",
    heroEyebrow: "SAGEMATH 计算验证伴随项目", heroLine1: "正曲率的数学。", heroLine2: "可核查的证据。",
    heroLead: "《所有光滑七维球面上的正曲率》的开放计算验证包。逐项查看计算、复核精确证书，并清楚区分：程序检查了什么，完整证明还依赖什么。",
    exploreChecks: "查看全部检查", getPackage: "下载完整验证包", releaseLoading: "正在读取发布记录…", exactNotSampled: "精确代数 + 严格区间界",
    figureTitle: "两侧填充，一个几何接口。", northCap: "北侧填充", southCap: "南侧填充", schematicOnly: "构造示意，非曲率计算图",
    recordEyebrow: "实际运行记录", recordIntro: "可以检查，<br>可以重新运行。", passLabel: "项检查组通过", certificateLabel: "份精确证书", unverifiedLabel: "组尚未机器形式化的依赖", failLabel: "项检查失败",
    scopeEyebrow: "01 / 先明确验证范围", scopeTitle: "计算要精确。<br>边界也要说清楚。", verifiedTitle: "这个验证包检查了什么",
    verifiedBody: "符号曲率恒等式、可分解二重向量的代数、系数估计与边界公式，以及指定标量不等式的有向舍入区间检查。导出的多项式证书可用独立的精确有理数程序复核；区间检查需重新运行 Sage。",
    verifiedNote: "一个 PASS 只属于它写明的检查，不会自动升级为整个主定理的证明。", notVerifiedTitle: "程序通过，不等于证明了什么",
    notVerifiedBody: "主定理尚未获得端到端的机器认证。光滑拓扑、几何解释、一致的解析估计和外部定理，仍需数学论证支撑。这不是 Lean 形式化证明。",
    notVerifiedNote: "未由本次计算证明，不等于错误；它表示该项不在程序的认证范围内。",
    chainTitle: "计算位于证明的什么位置", chainIntro: "这些检查支持更大几何论证中的特定环节。", chainTopology: "光滑类型", chainTopologySub: "粘接映射与分类", chainHuman: "几何论证 + 外部结果", chainSouth: "南侧填充", chainSouthSub: "连接度量的曲率", chainExact: "精确代数 + 解析论证", chainNorth: "北侧填充", chainNorthSub: "扭曲函数与水平平面", chainBoundary: "边界匹配", chainBoundarySub: "度量与第二基本形式", chainGluing: "光滑粘合", chainGluingSub: "全闭合流形上的正曲率", chainAnalytic: "解析论证 + 外部结果",
    modulesEyebrow: "02 / 顺着数学结构阅读", modulesTitle: "验证内容，一张清晰的地图。", modulesAside: "每个模块都有具体命题、可重现的计算，以及明确的适用边界。", modulesLoading: "正在读取模块记录。",
    checksEyebrow: "03 / 逐项查看运行结果", checksTitle: "每一项检查，都有据可查。", checksAside: "搜索原始命题，展开任意一行查看证据。这里统计的是检查组，不是采样平面的数量。", filterAll: "全部", searchLabel: "搜索验证检查", searchPlaceholder: "搜索公式、模块或命题…", tableCaption: "精确检查记录及明确标注的未验证依赖", tableStatus: "状态", tableClaim: "检查与命题", tableModule: "模块", tableEvidence: "证据", checksLoading: "正在读取可复现运行记录…", showMore: "显示更多检查", claimsVerbatim: "为保持数学含义准确，检查编号与具体命题沿用机器可读发布记录中的英文原文。",
    downloadsEyebrow: "04 / 把证据带走", downloadsTitle: "文件开放，来源清楚。", downloadsAside: "同一份发布包，包含代码、论文、精确证书、原始运行记录，以及中英文两份详细解读。", packageTitle: "完整的<br>计算验证包。", packageBody: "检查和复现本次发布所需的文件：原始论文、验证代码、精确证书、运行日志，以及两份解读报告。", packageLink: "下载完整发布包", englishReport: "英文解读：验证如何成立。", englishReportBody: "详细说明计算中的数学、证书、前提条件，以及整个验证包的实际范围。", chineseReport: "中文解读：逐层读懂验证。", chineseReportBody: "检查了什么、如何复现，以及哪些结论仍然需要数学证明。", sourceDownload: "提交的论文原稿", resultsDownload: "机器可读运行结果", certificatesDownload: "精确证书数据",
    reproduceEyebrow: "05 / 自己重新运行", reproduceTitle: "不必只相信<br>一枚绿色徽章。", reproduceBody: "下载并解压验证包，然后亲自重新运行。以下命令从解压后的包目录执行。归档的参考运行，与您新生成的结果相互分开。", runtimeLabel: "归档运行版本", tabExisting: "已安装 Sage", tabEnvironment: "建立新环境", tabCertificates: "只复核证书", commandExisting: "在终端可以调用 SageMath 时：", copy: "复制", commandExistingNote: "程序保存精确符号检查，以及单独标识的严格标量区间检查。",
    provenanceEyebrow: "可以追溯到具体原稿", provenanceTitle: "一份原稿，一次可辨识的发布。", provenanceBody: "源文件指纹把本次计算记录与确切的 LaTeX 原稿关联起来。哈希识别文件字节，它不认证数学定理。", copyHash: "复制指纹", footerSubtitle: "开放的数学，可复现的证据。", footerDisclaimer: "计算验证伴随项目，不是端到端的形式化证明。", backTop: "返回顶部 ↑"
  };

  const dynamic = {
    en: {
      copied: "Copied to clipboard", copyFailed: "Copy was unavailable. Please select and copy the text.", loadingFailed: "The release record could not be loaded. No results have been substituted. Please open this site through a web server, or inspect data/release.json directly.",
      invalidRecord: "The release record has an unexpected format; results are not displayed.", noChecks: "No checks match this search.", noRecords: "No check records have been loaded.", evidence: "RECORDED EVIDENCE", showEvidence: "Show evidence for", hideEvidence: "Hide evidence for", displayed: (n, total) => `Showing ${n} of ${total} matching check groups`,
      moduleChecks: "Inspect module checks", scope: "SCOPE BOUNDARY", moduleFallback: "A recorded verification module. Inspect the individual checks and their stated premises.", moduleFallbackScope: "A module PASS does not independently establish the complete theorem.",
      commandExisting: "With SageMath available in your terminal:", commandExistingNote: "The runner records exact symbolic checks and separately identified rigorous scalar interval checks.",
      commandEnvironment: "Create the documented environment, then reproduce:", commandEnvironmentNote: "Requires Conda and access to conda-forge. Exact installed package versions are archived in the release.",
      commandCertificates: "Replay the exported certificates with standard Python:", commandCertificatesNote: "This checks the exported arithmetic certificates without Sage. It does not rerun the full geometric derivations.",
      imageTitle: "Two-cap construction schematic", imageDescription: "An abstract wireframe of a northern and a southern cap meeting at a common boundary. This is a schematic, not a computed metric or curvature plot.",
      noHash: "Source fingerprint unavailable", downloadMissing: "This download is not present in the release record.", recordMissing: "Release record unavailable", title: "Positive Curvature · Open Verification"
    },
    zh: {
      copied: "已复制到剪贴板", copyFailed: "暂时无法自动复制，请选中文字后手动复制。", loadingFailed: "未能读取发布记录，页面没有使用替代或模拟结果。请通过网页服务器打开，或直接查看 data/release.json。",
      invalidRecord: "发布记录格式不符合预期，暂不显示结果。", noChecks: "没有与当前搜索条件相符的检查。", noRecords: "尚未读取检查记录。", evidence: "实际记录的证据", showEvidence: "显示此项证据：", hideEvidence: "收起此项证据：", displayed: (n, total) => `当前显示 ${n} / ${total} 项符合条件的检查组`,
      moduleChecks: "查看模块检查", scope: "验证范围边界", moduleFallback: "一组实际记录的验证检查。请查看各项具体命题及其前提。", moduleFallbackScope: "模块通过，不会独立证明完整主定理。",
      commandExisting: "在终端可以调用 SageMath 时：", commandExistingNote: "程序保存精确符号检查，以及单独标识的严格标量区间检查。",
      commandEnvironment: "按记录建立环境，然后重新运行：", commandEnvironmentNote: "需要 Conda 和 conda-forge 下载连接。实际安装的软件包版本清单已收录在发布包中。",
      commandCertificates: "仅用标准 Python 复核导出的证书：", commandCertificatesNote: "这一过程不需要 Sage，但只检查导出的算术证书，不会重新执行全部几何推导。",
      imageTitle: "两侧填充的构造示意", imageDescription: "抽象线框表示北侧和南侧填充在共同边界处相接。这是几何构造示意，不是计算出的度量或曲率图。",
      noHash: "源文件指纹暂不可用", downloadMissing: "发布记录未提供此项下载。", recordMissing: "发布记录暂不可用", title: "正曲率 · 开放计算验证"
    }
  };

  const moduleCopy = {
    topology: {
      en: ["Quaternion & topology algebra", "Exact quaternion identities, equivariant-coordinate algebra and finite smooth-type bookkeeping support the manuscript’s geometric carrier.", "[Σₙ] = n mod 28", "The classification theorem and global diffeomorphism interpretation are not consequences of arithmetic alone."],
      zh: ["四元数与拓扑代数", "通过精确四元数恒等式、等变坐标的代数关系，以及有限光滑类型的标签核算，检查几何载体中的可计算部分。", "[Σₙ] = n mod 28", "分类定理与全局微分同胚的解释，不能仅由算术核算推出。"]
    },
    connection: {
      en: ["Connection curvature", "Reconstructs local curvature from Koszul’s formula and principal-frame brackets; checks the full mixed blocks, decomposable-plane contractions and southern signs.", "𝒦(ξ) ≥ κh²/2 + εΛm²/8 + k²/(8ε)", "Frame geometry, compact smooth bounds and the meaning of the quotient remain mathematical premises."],
      zh: ["连接度量的曲率", "从 Koszul 公式及主丛标架的括号独立重建局部曲率，核对完整混合分块、可分解平面收缩，以及南侧曲率的符号。", "𝒦(ξ) ≥ κh²/2 + εΛm²/8 + k²/(8ε)", "标架的几何来源、紧致性下的光滑界与商空间解释，仍是数学前提。"]
    },
    north: {
      en: ["Northern filling", "Differentiates the warped metric, checks curvature and horizontal-graph formulas, and verifies the algebra behind the northern lower bounds.", "Gₙ = ds² + F²h₆ + r²h₃", "Global ODE existence, smooth collapse and uniform control require the accompanying analytic arguments."],
      zh: ["北侧填充", "对扭曲度量进行精确微分，核对曲率与水平图表示，并检查北侧曲率下界中所用的代数关系。", "Gₙ = ds² + F²h₆ + r²h₃", "全局常微分方程、光滑塌缩与一致控制，仍依赖对应的解析论证。"]
    },
    gluing: {
      en: ["Boundary & gluing identities", "Checks collar curvature identities and the boundary-form algebra used in matching. The smoothing theorem remains a separate analytic step.", "γₙ = φ*γₛ;  Bₙ + φ*Bₛ > 0", "An algebraic identity is not a machine proof of smoothing, its uniform estimates, or the external gluing theorem."],
      zh: ["边界与粘合恒等式", "核对领形邻域的曲率恒等式，以及边界匹配所用的第二基本形式代数。光滑化定理仍是单独的解析环节。", "γₙ = φ*γₛ;  Bₙ + φ*Bₛ > 0", "代数恒等式通过，不等于机器证明了光滑化、一致估计或外部粘合定理。"]
    },
    parameter: {
      en: ["Parameter compatibility", "Checks the exact loss budgets and sufficient parameter inequalities after geometric data are fixed. Distinguishes a valid range from a numerical guess.", "0 < ε < min{ε₁, …, εₙ}", "The geometric hypotheses supplying those constants must be established independently."],
      zh: ["参数条件的相容性", "在几何数据固定之后，核对损失分配和充分参数条件；明确区分有论证的参数范围与数值猜测。", "0 < ε < min{ε₁, …, εₙ}", "这些常数背后的几何假设，仍然需要独立证明。"]
    },
    document: {
      en: ["Source & document integrity", "Tracks manuscript labels, references, theorem statements and editorial changes so the recorded checks refer to an identifiable source.", "source → labels → checks → record", "Document consistency is not mathematical correctness; both need distinct checks."],
      zh: ["文稿与来源完整性", "跟踪论文标签、交叉引用、定理陈述及编辑性修改，使运行记录能够对应到确切的源文件。", "源文件 → 标签 → 检查 → 记录", "文稿一致性不等于数学正确性，两者必须分别检查。"]
    },
    source: {
      en: ["Version-bound formula contract", "Links the audited formulas and their source locations to this precise manuscript version. A changed source must be reviewed again.", "SHA-256(source) → audited formula map", "A matching fingerprint identifies the audited bytes; it does not interpret or prove arbitrary LaTeX."],
      zh: ["绑定具体版本的公式核对", "把已审查的公式及源文件位置关联到当前版本；源文件改变后，需要重新确认对应关系。", "SHA-256(原稿) → 已审查公式映射", "指纹一致只表明文件字节相同，并不解释或证明任意 LaTeX 文本。"]
    },
    interval: {
      en: ["Rigorous scalar intervals", "Uses directed rounding to enclose specified scalar functions on complete rational cells, with separately stated analytic tails and a northern-only parameter witness.", "R(x) ∈ [lower(x), upper(x)]", "These are scalar enclosures, not a subdivision proof for all curvature planes or all smooth types. Reproduction requires Sage’s interval engine."],
      zh: ["严格标量区间检查", "使用有向舍入，在完整有理数小区间上包围指定标量函数；尾部解析估计和仅适用于北侧的参数见证单独列明。", "R(x) ∈ [下界(x), 上界(x)]", "这是标量包围，不是对全部曲率平面或全部光滑类型的区间证明；需用 Sage 区间引擎复现。"]
    },
    certificate: {
      en: ["Independent certificate replay", "Re-expands exported arithmetic expressions using exact rational numbers, independently of the Sage symbolic engine, with deliberate-error controls.", "left − right = 0 over ℚ", "A replay establishes the encoded arithmetic claim, not the complete geometric construction."],
      zh: ["独立证书复核", "不依赖 Sage 符号引擎，以精确有理数重新展开导出的算术表达式，并检查故意改错的负面对照。", "左式 − 右式 = 0，系数属于 ℚ", "复核只确立证书中编码的算术命题，不会证明整个几何构造。"]
    }
  };

  let lang = "en";
  try { if (localStorage.getItem("positive-curvature-language") === "zh") lang = "zh"; } catch (_) { /* Language preference storage is optional. */ }
  let release = null;
  let loadFailure = false;
  let activeFilter = "ALL";
  let activeModule = "";
  let activeCommand = "existing";
  let visibleCount = 18;
  let toastTimer;

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const number = value => Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : null;
  const prettyNumber = value => { const n = number(value); return n === null ? "—" : n.toLocaleString(lang === "zh" ? "zh-CN" : "en-US"); };
  const text = key => dynamic[lang][key];
  const translate = key => lang === "zh" && zh[key] !== undefined ? zh[key] : initialEnglish[key] || key;
  const moduleKey = name => {
    const n = String(name || "").toLowerCase();
    if (/source|binding|formula_contract/.test(n)) return "source";
    if (/connection|south/.test(n)) return "connection";
    if (/north/.test(n)) return "north";
    if (/glu|collar|boundary/.test(n)) return "gluing";
    if (/topolog|quaternion/.test(n)) return "topology";
    if (/parameter/.test(n)) return "parameter";
    if (/interval/.test(n)) return "interval";
    if (/document|manuscript/.test(n)) return "document";
    if (/certificate|replay/.test(n)) return "certificate";
    return "";
  };

  function setLanguage(next) {
    lang = next === "zh" ? "zh" : "en";
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = text("title");
    $$('[data-i18n]').forEach(el => { el.innerHTML = translate(el.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = translate(el.dataset.i18nPlaceholder); });
    $('#language-label').textContent = lang === "zh" ? "English" : "中文";
    $('#language-toggle').setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    $('#cap-title').textContent = text("imageTitle");
    $('#cap-description').textContent = text("imageDescription");
    if (loadFailure) {
      $('#load-message').textContent = text("loadingFailed");
      $('#hero-date').textContent = text("recordMissing");
      $('#module-grid').textContent = text("noRecords");
      $('#checks-body').innerHTML = `<tr><td colspan="4" class="empty-state">${escapeHTML(text("noRecords"))}</td></tr>`;
      $('#source-hash').textContent = text("noHash");
    }
    updateMetadata();
    renderModules();
    renderChecks();
    updateCommand();
    try { localStorage.setItem("positive-curvature-language", lang); } catch (_) { /* Not needed for the site to work. */ }
  }

  function updateMetadata() {
    if (!release) return;
    $('#hero-version').textContent = release.version || "v12";
    const date = /^\d{4}-\d{2}-\d{2}$/.test(release.date || "") ? new Date(`${release.date}T12:00:00Z`) : null;
    $('#hero-date').textContent = date ? new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {year:"numeric",month:lang === "zh" ? "long" : "short",day:"numeric",timeZone:"UTC"}).format(date) : String(release.date || "");
    $('#pass-count').textContent = prettyNumber(release.counts.PASS);
    $('#unverified-count').textContent = prettyNumber(release.counts.UNVERIFIED);
    $('#fail-count').textContent = prettyNumber(release.counts.FAIL);
    $('#certificate-count').textContent = prettyNumber(Array.isArray(release.exact_certificates) ? release.exact_certificates.length : release.exact_certificates);
    $('.stat-last').classList.toggle("has-fail", number(release.counts.FAIL) > 0);
    $('#sage-version').textContent = String(release.sage_version || "—");
    $('#source-hash').textContent = release.source_sha256 || text("noHash");
    $('#copy-hash').disabled = !release.source_sha256;
    $('#main-theorem-status').title = String(release.main_theorem_machine_status || "NOT_END_TO_END_MACHINE_CERTIFIED");
    const countStatus = status => release.checks.filter(check => check.status === status).length;
    $('#filter-all-count').textContent = prettyNumber(release.checks.length);
    $('#filter-pass-count').textContent = prettyNumber(countStatus("PASS"));
    $('#filter-unverified-count').textContent = prettyNumber(countStatus("UNVERIFIED"));
    $('#filter-fail-count').textContent = prettyNumber(countStatus("FAIL"));
    const downloads = release.downloads || {};
    ["package", "en_report", "zh_report", "source", "results", "certificates"].forEach(key => {
      const link = $(`#download-${key.replaceAll("_", "-")}`);
      const url = downloads[key];
      const usable = typeof url === "string" && url.length > 0 && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url);
      if (usable) {
        link.href = url;
        link.classList.remove("disabled-link");
        link.removeAttribute("aria-disabled");
        link.title = "";
      } else {
        link.removeAttribute("href");
        link.classList.add("disabled-link");
        link.setAttribute("aria-disabled", "true");
        link.title = text("downloadMissing");
      }
    });
  }

  function renderModules() {
    if (!release) return;
    const modules = Array.isArray(release.modules) ? release.modules : [];
    const root = $('#module-grid');
    root.replaceChildren();
    modules.forEach((module, index) => {
      const key = moduleKey(module.name);
      const copy = moduleCopy[key]?.[lang] || [String(module.name), module.description || text("moduleFallback"), "Exact, reproducible checks", text("moduleFallbackScope")];
      const card = document.createElement("article");
      card.className = "module-card";
      const pass = number(module.pass);
      const unverified = number(module.unverified);
      card.innerHTML = `<div class="module-topline"><span class="module-number">${String(index + 1).padStart(2, "0")}</span><span class="module-statuses"><span class="module-pass">${pass === null ? "—" : pass} PASS</span>${unverified ? `<span class="module-unverified">${unverified} UNVERIFIED</span>` : ""}</span></div><h3>${escapeHTML(copy[0])}</h3><p class="module-description">${escapeHTML(copy[1])}</p><div class="module-formula">${escapeHTML(copy[2])}</div><p class="module-scope"><strong>${escapeHTML(text("scope"))}</strong>${escapeHTML(copy[3])}</p><a class="module-link" href="#checks"><span>${escapeHTML(text("moduleChecks"))}</span><span aria-hidden="true">↗</span></a>`;
      $('.module-link', card).addEventListener("click", () => {
        activeModule = String(module.name || "");
        activeFilter = "ALL";
        visibleCount = 18;
        $('#check-search').value = "";
        setFilterButtons();
        renderChecks();
      });
      root.append(card);
    });
    if (!modules.length) {
      const p = document.createElement("p"); p.className = "empty-state"; p.textContent = text("noRecords"); root.append(p);
    }
  }

  function matchesModule(check) {
    if (!activeModule) return true;
    const name = String(check.module || "");
    return name === activeModule || (moduleKey(name) && moduleKey(name) === moduleKey(activeModule));
  }

  function renderChecks() {
    if (!release) return;
    const query = $('#check-search').value.trim().toLowerCase();
    const matches = release.checks.filter(check => {
      if (activeFilter !== "ALL" && check.status !== activeFilter) return false;
      if (!matchesModule(check)) return false;
      return !query || `${check.id} ${check.module} ${check.claim} ${JSON.stringify(check.evidence)}`.toLowerCase().includes(query);
    });
    const shown = matches.slice(0, visibleCount);
    const body = $('#checks-body');
    body.replaceChildren();
    shown.forEach((check, index) => {
      const row = document.createElement("tr");
      row.className = "check-row";
      const detailId = `check-evidence-${index}`;
      const status = check.status;
      const statusClass = ["PASS", "UNVERIFIED", "FAIL"].includes(status) ? status.toLowerCase() : "unknown";
      const title = moduleCopy[moduleKey(check.module)]?.[lang]?.[0] || check.module || "—";
      row.innerHTML = `<td><span class="status-badge status-${statusClass}">${escapeHTML(status)}</span></td><td><code class="check-id">${escapeHTML(check.id)}</code><p class="check-claim">${escapeHTML(check.claim)}</p></td><td><span class="check-module">${escapeHTML(title)}</span></td><td><button class="evidence-toggle" type="button" aria-expanded="false" aria-controls="${detailId}" aria-label="${escapeHTML(text("showEvidence") + " " + check.id)}">+</button></td>`;
      const detail = document.createElement("tr");
      detail.className = "evidence-row";
      detail.id = detailId;
      detail.hidden = true;
      const td = document.createElement("td"); td.colSpan = 4;
      const heading = document.createElement("div"); heading.className = "evidence-heading"; heading.textContent = text("evidence");
      const pre = document.createElement("pre"); pre.textContent = typeof check.evidence === "string" ? check.evidence : JSON.stringify(check.evidence ?? {}, null, 2);
      td.append(heading, pre); detail.append(td);
      $('.evidence-toggle', row).addEventListener("click", event => {
        const button = event.currentTarget;
        const expand = detail.hidden;
        detail.hidden = !expand;
        button.setAttribute("aria-expanded", String(expand));
        button.setAttribute("aria-label", `${text(expand ? "hideEvidence" : "showEvidence")} ${check.id}`);
        button.textContent = expand ? "−" : "+";
      });
      body.append(row, detail);
    });
    if (!shown.length) {
      const row = document.createElement("tr"); const td = document.createElement("td"); td.colSpan = 4; td.className = "empty-state"; td.textContent = text("noChecks"); row.append(td); body.append(row);
    }
    $('#check-count').textContent = text("displayed")(shown.length, matches.length) + (activeModule ? ` · ${activeModule}` : "");
    $('#show-more').hidden = shown.length >= matches.length;
  }

  function setFilterButtons() {
    $$('.filter').forEach(button => {
      const active = button.dataset.filter === activeFilter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  const commands = {
    existing: "sh reproduce.sh",
    environment: "conda env create -f environment.yml\nconda activate exotic7-verification\nsh reproduce.sh",
    certificates: "python3 verify_certificates.py certificates"
  };
  function updateCommand() {
    $('#reproduction-command').textContent = commands[activeCommand];
    const key = activeCommand[0].toUpperCase() + activeCommand.slice(1);
    $('#command-description').textContent = text(`command${key}`);
    $('#command-footer').textContent = text(`command${key}Note`);
    $$('.code-tabs button').forEach(button => {
      const active = button.dataset.command === activeCommand;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $('#code-content').setAttribute("aria-labelledby", `tab-${activeCommand}`);
  }

  function toast(message) {
    const el = $('#toast'); el.textContent = message; el.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
  }
  async function copy(value) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(value); toast(text("copied"));
    } catch (_) { toast(text("copyFailed")); }
  }

  $('#language-toggle').addEventListener("click", () => setLanguage(lang === "en" ? "zh" : "en"));
  $$('.filter').forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter; activeModule = ""; visibleCount = 18; setFilterButtons(); renderChecks();
  }));
  $('#check-search').addEventListener("input", () => { visibleCount = 18; activeModule = ""; renderChecks(); });
  $('#show-more').addEventListener("click", () => { visibleCount += 24; renderChecks(); });
  $$('.code-tabs button').forEach((button, index, buttons) => {
    button.addEventListener("click", () => { activeCommand = button.dataset.command; updateCommand(); });
    button.addEventListener("keydown", event => {
      let next = null;
      if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft") next = (index + buttons.length - 1) % buttons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = buttons.length - 1;
      if (next !== null) { event.preventDefault(); activeCommand = buttons[next].dataset.command; updateCommand(); buttons[next].focus(); }
    });
  });
  $('#copy-command').addEventListener("click", () => copy(commands[activeCommand]));
  $('#copy-hash').addEventListener("click", () => { if (release?.source_sha256) copy(release.source_sha256); });

  setLanguage(lang);
  fetch("./data/release.json", {cache:"no-cache"})
    .then(response => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); })
    .then(data => {
      if (!data || !data.counts || !Array.isArray(data.checks) || !data.checks.every(check => check && typeof check.id === "string" && typeof check.claim === "string" && typeof check.status === "string")) throw new Error("invalid release record");
      release = data;
      updateMetadata(); renderModules(); renderChecks();
    })
    .catch(() => {
      loadFailure = true;
      $('#load-message').hidden = false;
      $('#load-message').textContent = text("loadingFailed");
      $('#hero-date').textContent = text("recordMissing");
      $('#module-grid').textContent = text("noRecords");
      $('#module-grid').classList.add("empty-state");
      $('#checks-body').innerHTML = `<tr><td colspan="4" class="empty-state">${escapeHTML(text("noRecords"))}</td></tr>`;
      $('#check-count').textContent = "";
      $('#source-hash').textContent = text("noHash");
    });
})();
