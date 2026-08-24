// 多语言文本配置
const LANGUAGES = {
    zh: {
        title: "资产查找器",
        description: "本地项目资源批量检索与核对",
        themeToLight: "切换到浅色主题",
        themeToDark: "切换到深色主题",
        filter: "资源格式筛选",
        all: "全选",
        none: "全不选",
        searchLogic: "匹配规则",
        exact: "全字匹配",
        prefix: "前缀匹配",
        suffix: "后缀匹配",
        fuzzy: "关键词匹配",
        case: "区分大小写",
        ignoreSpace: "忽略空格",
        import: `<i class="fa-solid fa-folder-open"></i> 点击选择文件夹导入`,
        chooseFolder: "选择项目目录",
        chooseIndexingShort: (percent, done, total) => `索引中 ${Math.round(percent)}% · ${done}/${total}`,
        chooseCancelled: done => `已取消 · 已处理 ${done} 个文件`,
        chooseReadyShort: total => `已索引 ${total} 个文件`,
        importHint: "选择项目目录建立本地索引；不会读取文件内容。可用于资源盘点、清单核对和交付检查，大目录可随时取消。",
        importProgressLabel: "文件索引进度",
        searchProgressLabel: "搜索进度",
        importing: (done, total) => `正在建立索引 · ${done}/${total} 个文件`,
        importReady: "索引已就绪",
        importCancelled: "索引已取消，保留上一次可用索引",
        importError: "索引失败，请重试。",
        importMeta: (done, total, bytes, totalBytes, rate) => `${done}/${total} 个文件 · ${bytes}/${totalBytes} · ${rate}`,
        importEta: (eta, rate) => `预计剩余 ${eta} · ${rate}`,
        importElapsed: elapsed => `用时 ${elapsed}`,
        cancel: "取消",
        inputHint: "可直接粘贴排期、上传状态或其他核对清单。每行填写：文件名 + 相对路径。",
        inputPlaceholder: "将清单粘贴到这里\n文件名    相对/子路径\nHero_Knight    Assets/Characters",
        input: "待核对清单 · 文件名 + 相对路径",
        output: "核对结果",
        run: "开始核对",
        export: "导出结果",
        indexing: percent => `<i class="fa-solid fa-spinner fa-spin"></i> 索引进度: ${percent}%`,
        ready: total => `<i class="fa-solid fa-check-circle"></i> 索引完成: <span class="count-tag">${total}</span> 个文件`,
        searching: (percent, done, total) => `<i class="fa-solid fa-magnifying-glass"></i> 核对中... ${Math.round(percent)}% · ${done}/${total}`,
        found: count => `已匹配 <span class=\"count-tag\">${count}</span> 条记录`,
        searchCancelled: "搜索已取消，已保留原结果。",
        searchError: "搜索失败，请重试。",

        selectCat: "全选",
        pleaseSelect: "请至少选择一种格式！",
        pleaseSelectLogic: "请至少选择一种文件名匹配方式！",
        pleaseSelectRequiredLogic: "请至少选择一种必选的文件名匹配方式！",
        requiredGroup: "文件名匹配",
        optionalGroup: "辅助选项",
        addGroup: "添加组",
        clearGroups: "清空组",
        groupNamePlaceholder: "自定义文件类型",
        groupExtsPlaceholder: "自定义文件扩展名（无需加.）",
        editExtTooltip: "编辑扩展",
        removeExtTooltip: "删除扩展",
        addExtTooltip: "添加扩展",
        switchToOther: "切换到英文",
        helpTitle: "资源检索与核对指南",
        helpLoadLocal: "从本地加载帮助文件",
        helpLocalFallback: file => `无法加载本地帮助文档 ${file}。某些浏览器在 file:// 协议下禁止 fetch。你可以使用 VS Code 的 Live Server 插件，或在安装了 Node.js 的情况下运行 \'npx http-server\'，也可以点击下面的按钮从本地选择并加载帮助文件。`,
    },
    en: {
        helpTitle: "Resource search & review guide",
        githubRepo: "Open GitHub repository",
        helpLoadLocal: "Load local help file",
        helpLocalFallback: file => `Unable to load local help file ${file}. Some browsers block fetch when using file://. You can use the VS Code Live Server extension, or run 'npx http-server' if Node.js is available, or click the button below to select and load the local help file.`,
        title: "Asset Finder Web",
        description: "Bulk search and review local project resources",
        themeToLight: "Switch to light theme",
        themeToDark: "Switch to dark theme",
        filter: "Resource format filters",
        all: "All",
        none: "None",
        searchLogic: "Match rules",
        exact: "Exact Match",
        prefix: "Prefix Match",
        suffix: "Suffix Match",
        fuzzy: "Keyword Match",
        case: "Case Sensitive",
        ignoreSpace: "Ignore Spaces",
        import: `<i class="fa-solid fa-folder-open"></i> Click to select folder`,
        chooseFolder: "Choose project folder",
        chooseIndexingShort: (percent, done, total) => `Indexing ${Math.round(percent)}% · ${done}/${total}`,
        chooseCancelled: done => `Cancelled · ${done} files processed`,
        chooseReadyShort: total => `Indexed ${total} files`,
        importHint: "Choose a project folder to build a local index. File contents are never read. Use it for inventory checks, list reviews, and delivery verification; large imports can be cancelled.",
        importProgressLabel: "File indexing progress",
        searchProgressLabel: "Search progress",
        importing: (done, total) => `Building index · ${done}/${total} files`,
        importReady: "Index ready",
        importCancelled: "Index cancelled; the previous index is still available",
        importError: "Index failed. Please try again.",
        importMeta: (done, total, bytes, totalBytes, rate) => `${done}/${total} files · ${bytes}/${totalBytes} · ${rate}`,
        importEta: (eta, rate) => `ETA ${eta} · ${rate}`,
        importElapsed: elapsed => `Completed in ${elapsed}`,
        cancel: "Cancel",
        inputHint: "Paste a schedule, upload-status list, or any review checklist. One line: file name + relative path.",
        inputPlaceholder: "Paste your checklist here\nFileName    Relative/Path\nHero_Knight    Assets/Characters",
        input: "Review list · file name + relative path",
        output: "Review results",
        run: "Run check",
        export: "Export results",
        indexing: percent => `<i class="fa-solid fa-spinner fa-spin"></i> Indexing: ${percent}%`,
        ready: total => `<i class="fa-solid fa-check-circle"></i> ✅ Index Ready: <span class="count-tag">${total}</span> files`,
        searching: (percent, done, total) => `<i class="fa-solid fa-magnifying-glass"></i> Checking... ${Math.round(percent)}% · ${done}/${total}`,
        found: count => `Matched <span class=\"count-tag\">${count}</span> records`,
        searchCancelled: "Search cancelled; the previous result is preserved.",
        searchError: "Search failed. Please try again.",

        selectCat: "Select All",
        pleaseSelect: "Please select at least one format!",
        pleaseSelectLogic: "Please select at least one filename matching mode!",
        pleaseSelectRequiredLogic: "Please select at least one required filename matching mode!",
        requiredGroup: "Filename match",
        optionalGroup: "Options",
        addGroup: "Add Group",
        clearGroups: "Clear Groups",
        groupNamePlaceholder: "Custom file type",
        groupExtsPlaceholder: "Custom file extensions (no leading .)",
        editExtTooltip: "Edit extension",
        removeExtTooltip: "Remove extension",
        addExtTooltip: "Add extension",
        switchToOther: "Switch to Chinese",
        helpTitle: "Resource search & review guide",
    }};

let currentLang = 'zh';

function setLang(lang) {
    currentLang = lang;
    const t = LANGUAGES[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t.title + (t.description ? ` - ${t.description}` : '');
    document.getElementById('titleText').innerHTML = '<img src="favicon.svg" class="logo-icon" alt="" aria-hidden="true">' + t.title + '<span class="logo-sub">' + (t.description || '') + '</span>';
    const filterEl = document.getElementById('filterTitle'); if (filterEl) filterEl.innerText = t.filter;
    const hintEl = document.getElementById('importHint'); if (hintEl) hintEl.innerText = t.importHint || '';
    const inputHintEl = document.getElementById('inputHint'); if (inputHintEl) inputHintEl.innerText = t.inputHint || '';
    const queryInputEl = document.getElementById('inputText'); if (queryInputEl) queryInputEl.placeholder = t.inputPlaceholder || queryInputEl.placeholder;
    const importProgressBar = document.getElementById('importProgressBar'); if (importProgressBar) importProgressBar.setAttribute('aria-label', t.importProgressLabel || 'File indexing progress');
    const searchProgressBar = document.getElementById('searchProgressWrap'); if (searchProgressBar) searchProgressBar.setAttribute('aria-label', t.searchProgressLabel || 'Search progress');
    const allBtn = document.getElementById('allBtn'); if (allBtn) allBtn.innerText = t.all; // will be toggled between All/None by updateAllBtnState
    const noneBtn = document.getElementById('noneBtn'); if (noneBtn) noneBtn.innerText = t.none;
    document.getElementById('searchLogicTitle').innerText = t.searchLogic;
    document.getElementById('inputTitle').innerText = t.input;
    document.getElementById('outputTitle').innerText = t.output;
    // 规范选择按钮状态处理（移除对已废弃的 loadStatus 元素引用）
    const chooseBtn = document.getElementById('chooseDirBtn');
    if (chooseBtn) {
        const lbl = chooseBtn.querySelector('.choose-label');
        const st = chooseBtn.querySelector('.choose-status');
        // 保存默认提示文本，以便在没有已选择文件夹名时回退；若已存在选择的文件夹名则不覆盖显示
        chooseBtn.dataset.defaultLabel = t.chooseFolder || '选择资产文件夹';
        if (lbl && !chooseBtn.dataset.folderName) lbl.innerText = chooseBtn.dataset.defaultLabel;
        if (st) st.innerText = '';
        chooseBtn.title = chooseBtn.dataset.folderName || chooseBtn.dataset.defaultLabel || '';
        chooseBtn.setAttribute('aria-label', chooseBtn.dataset.folderName || chooseBtn.dataset.defaultLabel || 'Choose folder');
    }
    const openFmtBtn = document.getElementById('openFormatBtn'); if (openFmtBtn) { openFmtBtn.innerText = t.filter || '文件格式筛选'; openFmtBtn.title = t.filter || ''; openFmtBtn.setAttribute('aria-label', t.filter || 'Filter formats'); }

    const runEl = document.getElementById('runBtn'); if (runEl) { runEl.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i><span class="btn-text">${t.run}</span>`; runEl.title = t.run; }
    const dlEl = document.getElementById('dlBtn'); if (dlEl) { dlEl.innerHTML = `<i class="fa-solid fa-download"></i><span class="btn-text">${t.export}</span>`; dlEl.title = t.export; }
    // set custom group UI text and placeholders
    const gName = document.getElementById('customGroupName'); if (gName) gName.placeholder = t.groupNamePlaceholder || 'Group name';
    const gExt = document.getElementById('customGroupExts'); if (gExt) gExt.placeholder = t.groupExtsPlaceholder || '.ext1, .ext2, ... up to 8';
    const addG = document.getElementById('addGroupBtn'); if (addG) addG.innerText = t.addGroup || 'Add Group';
    const cancelImportBtn = document.getElementById('cancelImportBtn'); if (cancelImportBtn) cancelImportBtn.innerText = t.cancel || 'Cancel';
    const cancelSearchBtn = document.getElementById('cancelSearchBtn'); if (cancelSearchBtn) cancelSearchBtn.innerText = t.cancel || 'Cancel';


    const allB = document.getElementById('allBtn'); if (allB) allB.innerText = t.all || 'All';
    // 将文本放入独立的 span.label-text，避免替换节点导致输入框被移除
    document.querySelectorAll('.logic-chk').forEach((el, i) => {
        const label = el.parentElement;
        if (!label) return;
        let span = label.querySelector('.label-text');
        if (!span) { span = document.createElement('span'); span.className = 'label-text'; label.appendChild(span); }
        span.innerText = t[['exact','prefix','suffix','fuzzy'][i]];
    });

    // set group titles (required / optional)
    const reqTitleEl = document.getElementById('requiredGroupTitle');
    if (reqTitleEl) { const s = reqTitleEl.querySelector('strong'); if (s) s.innerText = t.requiredGroup || (lang === 'zh' ? '必选' : 'Required'); }
    const optTitleEl = document.getElementById('optionalGroupTitle');
    if (optTitleEl) { const s2 = optTitleEl.querySelector('strong'); if (s2) s2.innerText = t.optionalGroup || (lang === 'zh' ? '可选' : 'Optional'); }

    const caseLabelEl = document.getElementById('caseLabel');
    if (caseLabelEl) {
        let span = caseLabelEl.querySelector('.label-text');
        if (!span) { span = document.createElement('span'); span.className = 'label-text'; caseLabelEl.appendChild(span); }
        span.innerText = t.case;
        caseLabelEl.prepend(document.getElementById('caseSensitive'));
    }

    // update placeholders for built-in group add inputs if present
    document.querySelectorAll('.add-ext-input').forEach(inp => { if (inp) inp.placeholder = t.groupExtsPlaceholder || inp.placeholder; });
    document.querySelectorAll('.add-ext-btn').forEach(b => { if (b) b.innerText = t.addExtTooltip || b.innerText; });

    // 新增忽略空格文案
    const ignoreLabel = document.getElementById('ignoreLabel');
    if (ignoreLabel) {
        let span = ignoreLabel.querySelector('.label-text');
        if (!span) { span = document.createElement('span'); span.className = 'label-text'; ignoreLabel.appendChild(span); }
        span.innerText = t.ignoreSpace;
        ignoreLabel.prepend(document.getElementById('ignoreSpaces'));
    }

    document.querySelectorAll('.category-header .cat-toggle').forEach(btn => btn.innerText = t.selectCat);
    if (typeof updateAllBtnState === 'function') updateAllBtnState();
    if (typeof updateThemeButtonLabel === 'function') updateThemeButtonLabel();
    if (typeof importViewState !== 'undefined' && importViewState && typeof setImportStatus === 'function') setImportStatus(importViewState);
    if (typeof searchViewState !== 'undefined' && searchViewState && searchViewState.visible && typeof updateSearchProgress === 'function') updateSearchProgress(searchViewState.percent, true, searchViewState.done, searchViewState.total);
    // 更新帮助按钮和弹窗内容
    const helpBtn = document.getElementById('helpBtn'); if (helpBtn) { helpBtn.title = t.helpTitle || 'Help'; helpBtn.setAttribute('aria-label', t.helpTitle || 'Help'); helpBtn.setAttribute('aria-expanded', helpBtn.getAttribute('aria-expanded') === 'true' ? 'true' : 'false'); }
    const langBtn = document.getElementById('langSwitch'); if (langBtn) { const switchLabel = (t && t.switchToOther) ? t.switchToOther : ((lang === 'zh') ? '切换到英文' : 'Switch to Chinese'); langBtn.title = switchLabel; langBtn.setAttribute('aria-label', switchLabel); }
    const githubBtn = document.getElementById('githubBtn'); if (githubBtn) { githubBtn.title = t.githubRepo || 'GitHub'; githubBtn.setAttribute('aria-label', t.githubRepo || 'GitHub repository'); }
    // help content will be rendered when user opens the Help dialog (showHelp)

    // 行号在语言切换或界面变更后需要刷新
    if (typeof updateGutter === 'function') { const it = document.getElementById('inputText'); const ot = document.getElementById('outputText'); if (it) updateGutter(it); if (ot) updateGutter(ot); }
}

function switchLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
}

document.addEventListener('DOMContentLoaded', () => { if (typeof initUI === 'function') initUI(); setLang(currentLang); });
