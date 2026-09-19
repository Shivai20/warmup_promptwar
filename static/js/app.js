/**
 * Beta AI — Senior Daily Companion
 * Accessible, Voice-First Frontend Logic
 */

(function () {
  'use strict';

  // --- LOCALIZATION STRINGS ---
  const I18N = {
    en: {
      brandTagline: "Senior Daily Companion",
      clearData: "Clear Data",
      homeTitle: "Welcome. How can I help you today?",
      homeSubtitle: "Choose an option below or tap the microphone at the bottom to speak.",
      card1Title: "Explain something",
      card1Desc: "Paste or read a letter, medical notice, or message. We will explain it in simple, calm words.",
      card1Cta: "Open explanation",
      card2Title: "Guide me",
      card2Desc: "Walk through instructions one step at a time with big buttons, zero rush, and clear help.",
      card2Cta: "Open guide",
      card3Title: "My day",
      card3Desc: "Review your tasks and reminders. Keep track of what to do today with total confidence.",
      card3Cta: "View my tasks",
      summaryHeading: "Your Day at a Glance",
      addTaskBtn: "Add a Reminder",
      pastePrompt: "Paste or type the notice, letter, or message here:",
      sampleBtn: "Try Sample Notice (Orientation)",
      explainBtn: "Explain Simply",
      readAloud: "Read Aloud",
      stop: "Stop",
      replay: "Replay",
      makeSimpler: "Make It Simpler",
      summaryTitle: "Plain-Language Summary",
      missingTitle: "Important Details to Check:",
      cautionsTitle: "Important Caution:",
      factsTitle: "Important Facts Preserved From Notice",
      termsTitle: "Unfamiliar Terms Explained",
      guideMeBtn: "Guide Me Through This",
      addToMyDayBtn: "Add an Action to My Day",
      readStep: "Read Step",
      explainStepBtn: "Explain this step simply",
      addStepTaskBtn: "Add this step to My Day",
      prevStep: "Previous Step",
      nextStep: "Next Step",
      myDayHeading: "My Day",
      myDaySubtitle: "Review, edit, and complete your tasks for today.",
      newTaskBtn: "Add New Task",
      dueToday: "Due Today & Overdue",
      upcoming: "Upcoming",
      undated: "General / Anytime",
      tapToSpeak: "Tap to speak",
      stopRecording: "Stop recording",
      listening: "Listening...",
      processing: "Thinking...",
      speaking: "Speaking...",
      ready: "Ready",
      error: "Error",
      back: "Back",
      home: "Home",
      sampleNoticeText: "Your community centre orientation is on 24 September 2026 at 11:00 AM, Room 2. Bring your registration confirmation. Please arrive 15 minutes early. For questions, contact the centre using the number on your registration confirmation.",
      sampleMedicalBtn: "Try Medical Lab Report",
      medSectionTitle: "Health Indicators & Lab Analysis",
      medDoctorQTitle: "Helpful Questions to Ask Your Doctor",
      medAddReminder: "Schedule Doctor Consultation in My Day",
      sampleMedicalReportText: "METROPOLITAN HEALTH LABS - ROUTINE GERIATRIC HEALTH PANEL\nPatient: Ramesh Verma (Age: 71) | Date: 18 September 2026\n1. Fasting Blood Glucose: 138 mg/dL (Reference Range: 70 - 100 mg/dL) [HIGH]\n2. Blood Pressure (Resting): 132/84 mmHg (Reference Range: < 120/80 mmHg) [BORDERLINE]\n3. Total Cholesterol: 185 mg/dL (Reference Range: < 200 mg/dL) [NORMAL]\n4. Hemoglobin (Hb): 13.8 g/dL (Reference Range: 13.0 - 17.0 g/dL) [NORMAL]\n5. Serum Creatinine: 1.0 mg/dL (Reference Range: 0.7 - 1.3 mg/dL) [NORMAL]\nRecommendation: Review fasting blood glucose with your primary physician. Maintain adequate hydration and continue walking daily."
    },
    hi: {
      brandTagline: "वरिष्ठ नागरिकों का दैनिक साथी",
      clearData: "डेटा साफ़ करें",
      homeTitle: "नमस्ते। आज मैं आपकी क्या मदद कर सकता हूँ?",
      homeSubtitle: "नीचे दिए गए विकल्पों में से चुनें या बोलने के लिए नीचे दिए गए माइक को दबाएं।",
      card1Title: "कुछ समझाइए",
      card1Desc: "कोई पत्र, डॉक्टर की पर्ची या संदेश यहाँ डालें। हम इसे सरल और शांत शब्दों में समझाएंगे।",
      card1Cta: "विवरण खोलें",
      card2Title: "मेरा मार्गदर्शन करें",
      card2Desc: "एक-एक करके आसान चरणों में निर्देश देखें, बिना किसी जल्दबाजी के।",
      card2Cta: "गाइड खोलें",
      card3Title: "आज का दिन (माय डे)",
      card3Desc: "अपने सभी काम और अनुस्मारक देखें। पूरे विश्वास के साथ अपने दिन की योजना बनाएं।",
      card3Cta: "मेरे काम देखें",
      summaryHeading: "आज के कार्यों की झलक",
      addTaskBtn: "नया काम जोड़ें",
      pastePrompt: "यहाँ अपना नोटिस या पत्र लिखें या चिपकाएं:",
      sampleBtn: "नमूना नोटिस आज़माएं (ओरिएंटेशन)",
      explainBtn: "सरल भाषा में समझाइए",
      readAloud: "सुनिए (पढ़ें)",
      stop: "रोकें",
      replay: "फिर से सुनें",
      makeSimpler: "और सरल बनाएं",
      summaryTitle: "सरल सारांश",
      missingTitle: "जाँचने योग्य महत्वपूर्ण बातें:",
      cautionsTitle: "सावधानी:",
      factsTitle: "नोटिस से निकाली गई सही जानकारी",
      termsTitle: "कठिन शब्दों का सरल अर्थ",
      guideMeBtn: "मुझे इसके चरण समझाइए",
      addToMyDayBtn: "इसे माय डे में जोड़ें",
      readStep: "कदम सुनें",
      explainStepBtn: "यह चरण और सरल करें",
      addStepTaskBtn: "इस चरण को माय डे में जोड़ें",
      prevStep: "पिछला कदम",
      nextStep: "अगला कदम",
      myDayHeading: "माय डे (आज का दिन)",
      myDaySubtitle: "आज के अपने सभी कार्यों की समीक्षा करें और पूरा करें।",
      newTaskBtn: "नया काम जोड़ें",
      dueToday: "आज के और बाकी काम",
      upcoming: "आने वाले काम",
      undated: "सामान्य / कभी भी",
      tapToSpeak: "बोलने के लिए दबाएं",
      stopRecording: "रिकॉर्डिंग रोकें",
      listening: "सुन रहे हैं...",
      processing: "सोच रहे हैं...",
      speaking: "बोल रहे हैं...",
      ready: "तैयार",
      error: "त्रुटि",
      back: "पीछे",
      home: "होम",
      sampleNoticeText: "Your community centre orientation is on 24 September 2026 at 11:00 AM, Room 2. Bring your registration confirmation. Please arrive 15 minutes early. For questions, contact the centre using the number on your registration confirmation.",
      sampleMedicalBtn: "मेडिकल लैब रिपोर्ट आज़माएं",
      medSectionTitle: "स्वास्थ्य संकेतक और लैब विश्लेषण",
      medDoctorQTitle: "अपने डॉक्टर से पूछने योग्य सवाल",
      medAddReminder: "डॉक्टर से परामर्श माय डे में जोड़ें",
      sampleMedicalReportText: "METROPOLITAN HEALTH LABS - ROUTINE GERIATRIC HEALTH PANEL\nPatient: Ramesh Verma (Age: 71) | Date: 18 September 2026\n1. Fasting Blood Glucose: 138 mg/dL (Reference Range: 70 - 100 mg/dL) [HIGH]\n2. Blood Pressure (Resting): 132/84 mmHg (Reference Range: < 120/80 mmHg) [BORDERLINE]\n3. Total Cholesterol: 185 mg/dL (Reference Range: < 200 mg/dL) [NORMAL]\n4. Hemoglobin (Hb): 13.8 g/dL (Reference Range: 13.0 - 17.0 g/dL) [NORMAL]\n5. Serum Creatinine: 1.0 mg/dL (Reference Range: 0.7 - 1.3 mg/dL) [NORMAL]\nRecommendation: Review fasting blood glucose with your primary physician. Maintain adequate hydration and continue walking daily."
    }
  };

  // --- STATE MANAGEMENT ---
  const state = {
    language: localStorage.getItem('beta_lang') || 'en',
    fontSize: localStorage.getItem('beta_font_size') || '20',
    currentView: 'home',
    previousView: 'home',
    tasks: JSON.parse(localStorage.getItem('beta_tasks') || '[]'),
    activeGuide: JSON.parse(localStorage.getItem('beta_active_guide') || 'null'),
    lastExplanation: null,
    pendingTaskDraft: null,
    undoHistory: [],
    speechState: 'ready', // ready, listening, processing, review, speaking, error
    speechTimerInterval: null,
    speechSecondsLeft: 30
  };

  // --- DOM ELEMENTS ---
  const el = {
    announcer: document.getElementById('live-announcer'),
    proactiveBanner: document.getElementById('proactive-banner'),
    proactiveTitle: document.getElementById('proactive-title'),
    proactiveDesc: document.getElementById('proactive-desc'),
    proactiveBtn: document.getElementById('proactive-action-btn'),
    undoBar: document.getElementById('undo-bar'),
    undoMessage: document.getElementById('undo-message'),
    btnUndo: document.getElementById('btn-undo'),
    views: {
      home: document.getElementById('view-home'),
      explain: document.getElementById('view-explain'),
      guide: document.getElementById('view-guide'),
      myday: document.getElementById('view-myday')
    },
    // Language buttons
    btnLangEn: document.getElementById('btn-lang-en'),
    btnLangHi: document.getElementById('btn-lang-hi'),
    // Font buttons
    btnSize20: document.getElementById('btn-size-20'),
    btnSize24: document.getElementById('btn-size-24'),
    btnSize28: document.getElementById('btn-size-28'),
    btnClearData: document.getElementById('btn-clear-data'),
    // Home
    cardExplain: document.getElementById('card-explain'),
    cardGuide: document.getElementById('card-guide'),
    cardMyDay: document.getElementById('card-myday'),
    txtSummaryCount: document.getElementById('txt-summary-count'),
    btnHomeQuickAdd: document.getElementById('btn-home-quick-add'),
    // Explain
    noticeInputText: document.getElementById('notice-input-text'),
    btnUseSample: document.getElementById('btn-use-sample-notice'),
    btnUseSampleMedical: document.getElementById('btn-use-sample-medical'),
    btnSubmitExplain: document.getElementById('btn-submit-explain'),
    explainResults: document.getElementById('explain-results'),
    explainSummaryText: document.getElementById('explain-summary-text'),
    explainFactsList: document.getElementById('explain-facts-list'),
    medicalReportSection: document.getElementById('medical-report-section'),
    medicalReportMeta: document.getElementById('medical-report-meta'),
    medicalIndicatorsList: document.getElementById('medical-indicators-list'),
    medicalDoctorQuestions: document.getElementById('medical-doctor-questions'),
    medicalDisclaimerText: document.getElementById('medical-disclaimer-text'),
    btnAddMedicalReminder: document.getElementById('btn-add-medical-reminder'),
    explainClarificationsBox: document.getElementById('explain-clarifications-box'),
    explainClarificationsList: document.getElementById('explain-clarifications-list'),
    explainCautionsBox: document.getElementById('explain-cautions-box'),
    explainCautionsList: document.getElementById('explain-cautions-list'),
    explainTermsSection: document.getElementById('explain-terms-section'),
    explainTermsList: document.getElementById('explain-terms-list'),
    btnStartGuideFromExplain: document.getElementById('btn-start-guide-from-explain'),
    btnAddActionFromExplain: document.getElementById('btn-add-action-from-explain'),
    btnAudioExplainPlay: document.getElementById('btn-audio-explain-play'),
    btnAudioExplainStop: document.getElementById('btn-audio-explain-stop'),
    btnAudioExplainReplay: document.getElementById('btn-audio-explain-replay'),
    btnExplainSimpler: document.getElementById('btn-explain-simpler'),
    // Guide
    guideStepCounter: document.getElementById('guide-step-counter'),
    guideStepInstruction: document.getElementById('guide-step-instruction'),
    guideStepQuote: document.getElementById('guide-step-quote'),
    guideStepReassurance: document.getElementById('guide-step-reassurance'),
    guideReassuranceText: document.getElementById('guide-reassurance-text'),
    btnSimplifyStep: document.getElementById('btn-simplify-step'),
    btnAddStepToTask: document.getElementById('btn-add-step-to-task'),
    btnGuidePrev: document.getElementById('btn-guide-prev'),
    btnGuideNext: document.getElementById('btn-guide-next'),
    btnGuideAudio: document.getElementById('btn-guide-audio'),
    // My Day
    btnMyDayAddTask: document.getElementById('btn-myday-add-task'),
    tasksListToday: document.getElementById('tasks-list-today'),
    tasksListUpcoming: document.getElementById('tasks-list-upcoming'),
    tasksListUndated: document.getElementById('tasks-list-undated'),
    badgeCountToday: document.getElementById('badge-count-today'),
    badgeCountUpcoming: document.getElementById('badge-count-upcoming'),
    badgeCountUndated: document.getElementById('badge-count-undated'),
    // Voice Dock
    btnVoiceTypeFallback: document.getElementById('btn-voice-type-fallback'),
    btnMainVoice: document.getElementById('btn-main-voice'),
    voiceBtnLabel: document.getElementById('voice-btn-label'),
    voiceStatusBadge: document.getElementById('voice-status-badge'),
    voiceTimer: document.getElementById('voice-timer'),
    voiceFeedbackText: document.getElementById('voice-feedback-text'),
    // Confirmation Modal
    modalConfirm: document.getElementById('modal-confirm'),
    confirmPreviewTitle: document.getElementById('confirm-preview-title'),
    confirmPreviewDatetime: document.getElementById('confirm-preview-datetime'),
    confirmPreviewTz: document.getElementById('confirm-preview-tz'),
    btnConfirmCancel: document.getElementById('btn-confirm-cancel'),
    btnConfirmEdit: document.getElementById('btn-confirm-edit'),
    btnConfirmAccept: document.getElementById('btn-confirm-accept'),
    // Task Edit / Add Form Modal
    modalTaskForm: document.getElementById('modal-task-form'),
    taskFormTitleInput: document.getElementById('task-form-input-title'),
    taskFormDateInput: document.getElementById('task-form-input-date'),
    taskFormNotesInput: document.getElementById('task-form-input-notes'),
    btnTaskFormCancel: document.getElementById('btn-task-form-cancel'),
    btnTaskFormSave: document.getElementById('btn-task-form-save'),
    // Voice Review Modal
    modalVoiceReview: document.getElementById('modal-voice-review'),
    voiceReviewTranscript: document.getElementById('voice-review-transcript'),
    btnVoiceReviewRetry: document.getElementById('btn-voice-review-retry'),
    btnVoiceReviewContinue: document.getElementById('btn-voice-review-continue')
  };

  // --- ANNOUNCE FOR SCREEN READERS ---
  function announce(msg) {
    if (el.announcer) {
      el.announcer.textContent = msg;
    }
  }

  // --- PREFERENCE MANAGEMENT ---
  function applyLanguage(lang) {
    state.language = lang;
    localStorage.setItem('beta_lang', lang);
    const dict = I18N[lang] || I18N.en;

    document.documentElement.lang = lang;
    el.btnLangEn.classList.toggle('active', lang === 'en');
    el.btnLangEn.setAttribute('aria-pressed', lang === 'en');
    el.btnLangHi.classList.toggle('active', lang === 'hi');
    el.btnLangHi.setAttribute('aria-pressed', lang === 'hi');

    // Update Text Content
    const map = {
      'txt-brand-tagline': dict.brandTagline,
      'txt-clear-data': dict.clearData,
      'txt-home-title': dict.homeTitle,
      'txt-home-subtitle': dict.homeSubtitle,
      'txt-card1-title': dict.card1Title,
      'txt-card1-desc': dict.card1Desc,
      'txt-card1-cta': dict.card1Cta,
      'txt-card2-title': dict.card2Title,
      'txt-card2-desc': dict.card2Desc,
      'txt-card2-cta': dict.card2Cta,
      'txt-card3-title': dict.card3Title,
      'txt-card3-desc': dict.card3Desc,
      'txt-card3-cta': dict.card3Cta,
      'txt-summary-heading': dict.summaryHeading,
      'txt-add-task-btn': dict.addTaskBtn,
      'txt-paste-prompt': dict.pastePrompt,
      'txt-sample-btn': dict.sampleBtn,
      'txt-sample-medical-btn': dict.sampleMedicalBtn,
      'txt-med-section-title': dict.medSectionTitle,
      'txt-med-doctor-q-title': dict.medDoctorQTitle,
      'txt-med-add-reminder': dict.medAddReminder,
      'txt-explain-btn': dict.explainBtn,
      'txt-audio-read': dict.readAloud,
      'txt-audio-stop': dict.stop,
      'txt-audio-replay': dict.replay,
      'txt-make-simpler': dict.makeSimpler,
      'txt-summary-title': dict.summaryTitle,
      'txt-missing-title': dict.missingTitle,
      'txt-cautions-title': dict.cautionsTitle,
      'txt-facts-title': dict.factsTitle,
      'txt-terms-title': dict.termsTitle,
      'txt-guide-me-btn': dict.guideMeBtn,
      'txt-add-to-myday-btn': dict.addToMyDayBtn,
      'txt-read-step': dict.readStep,
      'txt-explain-step-btn': dict.explainStepBtn,
      'txt-add-step-task-btn': dict.addStepTaskBtn,
      'txt-prev-step': dict.prevStep,
      'txt-next-step': dict.nextStep,
      'txt-myday-heading': dict.myDayHeading,
      'txt-myday-subtitle': dict.myDaySubtitle,
      'txt-new-task-btn': dict.newTaskBtn,
      'txt-due-today': dict.dueToday,
      'txt-upcoming': dict.upcoming,
      'txt-undated': dict.undated,
      'txt-back-1': dict.back,
      'txt-back-2': dict.back,
      'txt-back-3': dict.back,
      'txt-home-nav-1': dict.home,
      'txt-home-nav-2': dict.home,
      'txt-home-nav-3': dict.home
    };

    for (const [id, text] of Object.entries(map)) {
      const node = document.getElementById(id);
      if (node) node.textContent = text;
    }

    if (state.speechState === 'ready') {
      el.voiceBtnLabel.textContent = dict.tapToSpeak;
    }
    updateTasksUI();
    updateProactiveBanner();
    announce(`Language set to ${lang === 'hi' ? 'Hindi' : 'English'}`);
  }

  function applyFontSize(size) {
    state.fontSize = size;
    localStorage.setItem('beta_font_size', size);
    document.body.className = `text-size-${size}`;

    el.btnSize20.classList.toggle('active', size === '20');
    el.btnSize20.setAttribute('aria-pressed', size === '20');
    el.btnSize24.classList.toggle('active', size === '24');
    el.btnSize24.setAttribute('aria-pressed', size === '24');
    el.btnSize28.classList.toggle('active', size === '28');
    el.btnSize28.setAttribute('aria-pressed', size === '28');

    announce(`Text size set to ${size} pixels`);
  }

  // --- NAVIGATION ROUTER ---
  function navigateTo(viewName) {
    if (state.currentView !== viewName) {
      state.previousView = state.currentView;
      state.currentView = viewName;
    }

    // Cancel speech and speech recognition on view change for safety
    stopAudioPlayback();
    if (state.speechState === 'listening') {
      stopVoiceListening();
    }

    Object.keys(el.views).forEach((v) => {
      if (el.views[v]) {
        el.views[v].style.display = v === viewName ? 'block' : 'none';
      }
    });

    if (viewName === 'home') {
      updateHomeSummary();
      updateProactiveBanner();
    } else if (viewName === 'guide') {
      renderActiveGuide();
    } else if (viewName === 'myday') {
      updateTasksUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    announce(`Navigated to ${viewName} screen`);
  }

  // --- PROACTIVE ASSISTANCE BANNER ---
  function updateProactiveBanner() {
    // 1. Check for active unfinished guide
    if (state.activeGuide && state.activeGuide.steps && state.activeGuide.steps.length > 0) {
      const remaining = state.activeGuide.steps.length - (state.activeGuide.currentStepIndex + 1);
      el.proactiveBanner.style.display = 'flex';
      el.proactiveTitle.textContent = state.language === 'hi' ? 'जारी रखें: अधूरा गाइड' : 'Continue: Unfinished Guide';
      el.proactiveDesc.textContent = state.language === 'hi'
        ? `आपके पास "${state.activeGuide.noticeTitle}" के ${remaining > 0 ? remaining + ' बाकी' : 'अंतिम'} चरण हैं।`
        : `You have steps in progress for "${state.activeGuide.noticeTitle}".`;
      el.proactiveBtn.textContent = state.language === 'hi' ? 'गाइड पर जाएं' : 'Resume Guide';
      el.proactiveBtn.onclick = () => navigateTo('guide');
      return;
    }

    // 2. Check for overdue / due today tasks
    const todayTasks = getCategorizedTasks().today;
    const pendingDue = todayTasks.filter((t) => !t.completed);
    if (pendingDue.length > 0) {
      el.proactiveBanner.style.display = 'flex';
      el.proactiveTitle.textContent = state.language === 'hi' ? 'आज का ध्यान रखें' : 'Action Needed Today';
      el.proactiveDesc.textContent = state.language === 'hi'
        ? `आपके पास आज पूरा करने के लिए ${pendingDue.length} काम हैं: "${pendingDue[0].title}"`
        : `You have ${pendingDue.length} task(s) scheduled for today: "${pendingDue[0].title}"`;
      el.proactiveBtn.textContent = state.language === 'hi' ? 'माय डे देखें' : 'View My Day';
      el.proactiveBtn.onclick = () => navigateTo('myday');
      return;
    }

    el.proactiveBanner.style.display = 'none';
  }

  function updateHomeSummary() {
    const counts = getCategorizedTasks();
    const pendingToday = counts.today.filter((t) => !t.completed).length;
    if (state.language === 'hi') {
      el.txtSummaryCount.textContent = `आपके पास आज के लिए ${pendingToday} कार्य निर्धारित हैं।`;
    } else {
      el.txtSummaryCount.textContent = `You have ${pendingToday} task(s) scheduled for today.`;
    }
  }

  // --- TASK MANAGEMENT & PERSISTENCE ---
  function saveTasks() {
    localStorage.setItem('beta_tasks', JSON.stringify(state.tasks));
    updateTasksUI();
    updateHomeSummary();
    updateProactiveBanner();
  }

  function getCategorizedTasks() {
    const today = [];
    const upcoming = [];
    const undated = [];

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    state.tasks.forEach((t) => {
      if (!t.datetime) {
        undated.push(t);
      } else {
        const tDate = t.datetime.split('T')[0];
        if (tDate <= todayStr) {
          today.push(t);
        } else {
          upcoming.push(t);
        }
      }
    });

    return { today, upcoming, undated };
  }

  function renderTaskList(container, tasks) {
    container.innerHTML = '';
    if (tasks.length === 0) {
      container.innerHTML = `<p style="color: var(--text-secondary); font-size: 0.9em; padding: 12px 0;">${
        state.language === 'hi' ? 'कोई कार्य नहीं है।' : 'No tasks in this list.'
      }</p>`;
      return;
    }

    tasks.forEach((task) => {
      const card = document.createElement('div');
      card.className = `task-card ${task.completed ? 'completed' : ''}`;

      const dtFormatted = task.datetime
        ? new Date(task.datetime).toLocaleString(state.language === 'hi' ? 'hi-IN' : 'en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
          })
        : state.language === 'hi' ? 'तारीख तय नहीं' : 'No date set';

      card.innerHTML = `
        <div class="task-main">
          <input type="checkbox" class="task-checkbox" aria-label="Mark task '${task.title}' as done" ${
        task.completed ? 'checked' : ''
      }>
          <div class="task-info">
            <div class="task-title">${escapeHtml(task.title)}</div>
            <div class="task-meta">
              <span>🕒 ${dtFormatted}</span>
              ${task.notes ? `<span>📝 ${escapeHtml(task.notes)}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="task-actions">
          <button class="task-btn edit-task-btn" title="Edit task">✏️ ${state.language === 'hi' ? 'बदलें' : 'Edit'}</button>
          <button class="task-btn delete-task-btn" title="Delete task" style="color: var(--color-danger);">🗑️</button>
        </div>
      `;

      // Checkbox event
      const chk = card.querySelector('.task-checkbox');
      chk.addEventListener('change', () => {
        toggleTaskComplete(task.id);
      });

      // Edit event
      const btnEdit = card.querySelector('.edit-task-btn');
      btnEdit.addEventListener('click', () => {
        openTaskFormModal(task);
      });

      // Delete event
      const btnDel = card.querySelector('.delete-task-btn');
      btnDel.addEventListener('click', () => {
        deleteTask(task.id);
      });

      container.appendChild(card);
    });
  }

  function updateTasksUI() {
    const cats = getCategorizedTasks();
    renderTaskList(el.tasksListToday, cats.today);
    renderTaskList(el.tasksListUpcoming, cats.upcoming);
    renderTaskList(el.tasksListUndated, cats.undated);

    el.badgeCountToday.textContent = cats.today.length;
    el.badgeCountUpcoming.textContent = cats.upcoming.length;
    el.badgeCountUndated.textContent = cats.undated.length;
  }

  function toggleTaskComplete(taskId) {
    const idx = state.tasks.findIndex((t) => t.id === taskId);
    if (idx !== -1) {
      const prev = { ...state.tasks[idx] };
      state.tasks[idx].completed = !state.tasks[idx].completed;
      const updated = { ...state.tasks[idx] };
      saveTasks();

      pushUndo(
        'toggle',
        updated,
        prev,
        updated.completed
          ? `${state.language === 'hi' ? 'कार्य पूरा किया गया' : 'Task completed'}: "${updated.title}"`
          : `${state.language === 'hi' ? 'कार्य फिर से सक्रिय' : 'Task restored'}: "${updated.title}"`
      );
    }
  }

  function deleteTask(taskId) {
    const idx = state.tasks.findIndex((t) => t.id === taskId);
    if (idx !== -1) {
      const removed = state.tasks[idx];
      const confirmMsg = state.language === 'hi'
        ? `क्या आप वाकई "${removed.title}" को हटाना चाहते हैं?`
        : `Are you sure you want to delete "${removed.title}"?`;
      if (confirm(confirmMsg)) {
        state.tasks.splice(idx, 1);
        saveTasks();
        pushUndo(
          'delete',
          null,
          removed,
          `${state.language === 'hi' ? 'हटाया गया कार्य' : 'Deleted task'}: "${removed.title}"`
        );
      }
    }
  }

  // --- UNDO HISTORY MECHANISM (FR-7) ---
  function pushUndo(actionType, currentTask, prevTask, userMessage) {
    state.undoHistory.push({ actionType, currentTask, prevTask });
    el.undoMessage.textContent = userMessage;
    el.undoBar.style.display = 'flex';
    announce(userMessage + ' (Undo is available)');
  }

  function performUndo() {
    if (state.undoHistory.length === 0) return;
    const entry = state.undoHistory.pop();

    if (entry.actionType === 'create') {
      // Revert create -> remove task
      state.tasks = state.tasks.filter((t) => t.id !== entry.currentTask.id);
      saveTasks();
      announce('Undo complete: Task creation reversed.');
    } else if (entry.actionType === 'delete') {
      // Revert delete -> restore prevTask
      state.tasks.push(entry.prevTask);
      saveTasks();
      announce('Undo complete: Deleted task restored.');
    } else if (entry.actionType === 'edit' || entry.actionType === 'toggle') {
      // Revert edit/toggle -> restore prevTask
      const idx = state.tasks.findIndex((t) => t.id === entry.prevTask.id);
      if (idx !== -1) {
        state.tasks[idx] = entry.prevTask;
        saveTasks();
        announce('Undo complete: Task change restored.');
      }
    }

    if (state.undoHistory.length === 0) {
      el.undoBar.style.display = 'none';
    } else {
      el.undoMessage.textContent = state.language === 'hi' ? 'पिछला बदलाव बहाल हुआ' : 'Change undone.';
    }
  }

  // --- CONFIRMATION MODAL (FR-7) ---
  function requestTaskConfirmation(taskDraft, onConfirmed) {
    state.pendingTaskDraft = taskDraft;

    el.confirmPreviewTitle.textContent = taskDraft.title;
    el.confirmPreviewDatetime.textContent = taskDraft.candidate_date_time
      ? new Date(taskDraft.candidate_date_time).toLocaleString(state.language === 'hi' ? 'hi-IN' : 'en-US', {
          dateStyle: 'full',
          timeStyle: 'short'
        })
      : state.language === 'hi' ? 'निर्धारित नहीं (आप कभी भी कर सकते हैं)' : 'Not specified (Anytime)';

    // Show user's local timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    el.confirmPreviewTz.textContent = tz;

    el.modalConfirm.style.display = 'flex';

    // Speak read-back if voice was active
    const spokenReadback = state.language === 'hi'
      ? `कृपया पुष्टि करें: कार्य "${taskDraft.title}". समय: ${taskDraft.candidate_date_time ? 'निर्धारित' : 'निर्धारित नहीं'}`
      : `Please confirm your task: "${taskDraft.title}". Date: ${taskDraft.candidate_date_time || 'Not specified'}`;
    speakText(spokenReadback);

    el.btnConfirmAccept.onclick = () => {
      stopAudioPlayback();
      el.modalConfirm.style.display = 'none';
      if (onConfirmed) onConfirmed(state.pendingTaskDraft);
      state.pendingTaskDraft = null;
    };

    el.btnConfirmCancel.onclick = () => {
      stopAudioPlayback();
      el.modalConfirm.style.display = 'none';
      state.pendingTaskDraft = null;
      announce('Task creation cancelled.');
    };

    el.btnConfirmEdit.onclick = () => {
      stopAudioPlayback();
      el.modalConfirm.style.display = 'none';
      openTaskFormModal({
        id: state.pendingTaskDraft.id || 'task-' + Date.now(),
        title: state.pendingTaskDraft.title,
        datetime: state.pendingTaskDraft.candidate_date_time || '',
        notes: state.pendingTaskDraft.source_excerpt || ''
      });
    };
  }

  function commitNewTask(draft) {
    const newTask = {
      id: draft.id && !draft.id.startsWith('voice-') ? draft.id : 'task-' + Date.now(),
      title: draft.title,
      datetime: draft.candidate_date_time || '',
      notes: draft.source_excerpt || '',
      completed: false,
      sourceNoticeId: draft.sourceNoticeId || null
    };

    // Protect against duplicate clicks / duplicate drafts
    const existingIdx = state.tasks.findIndex((t) => t.id === newTask.id);
    if (existingIdx !== -1) {
      return;
    }

    state.tasks.push(newTask);
    saveTasks();
    pushUndo(
      'create',
      newTask,
      null,
      `${state.language === 'hi' ? 'नया कार्य सहेजा गया' : 'New task saved'}: "${newTask.title}"`
    );

    speakText(
      state.language === 'hi'
        ? `आपका कार्य "${newTask.title}" सहेज लिया गया है।`
        : `Your task "${newTask.title}" has been saved.`
    );
  }

  // --- MANUAL TASK FORM MODAL ---
  function openTaskFormModal(existingTask = null) {
    const isEdit = !!existingTask;
    el.modalTaskForm.style.display = 'flex';
    document.getElementById('task-form-title').textContent = isEdit
      ? (state.language === 'hi' ? 'कार्य संपादित करें' : 'Edit Task')
      : (state.language === 'hi' ? 'नया कार्य जोड़ें' : 'Add New Task');

    el.taskFormTitleInput.value = existingTask ? existingTask.title : '';
    el.taskFormDateInput.value = existingTask && existingTask.datetime ? existingTask.datetime.slice(0, 16) : '';
    el.taskFormNotesInput.value = existingTask && existingTask.notes ? existingTask.notes : '';

    el.btnTaskFormCancel.onclick = () => {
      el.modalTaskForm.style.display = 'none';
    };

    el.btnTaskFormSave.onclick = () => {
      const title = el.taskFormTitleInput.value.trim();
      if (!title) {
        alert(state.language === 'hi' ? 'कृपया कार्य का शीर्षक दर्ज करें।' : 'Please enter a task title.');
        return;
      }

      el.modalTaskForm.style.display = 'none';

      if (isEdit) {
        const idx = state.tasks.findIndex((t) => t.id === existingTask.id);
        if (idx !== -1) {
          const prev = { ...state.tasks[idx] };
          state.tasks[idx] = {
            ...state.tasks[idx],
            title: title,
            datetime: el.taskFormDateInput.value || '',
            notes: el.taskFormNotesInput.value.trim()
          };
          saveTasks();
          pushUndo('edit', state.tasks[idx], prev, `Updated "${title}"`);
        }
      } else {
        requestTaskConfirmation(
          {
            id: 'task-' + Date.now(),
            title: title,
            candidate_date_time: el.taskFormDateInput.value || null,
            source_excerpt: el.taskFormNotesInput.value.trim()
          },
          (confirmedDraft) => {
            commitNewTask(confirmedDraft);
          }
        );
      }
    };
  }

  // --- EXPLAIN WORKFLOW ---
  async function submitNoticeForExplanation() {
    const text = el.noticeInputText.value.trim();
    if (!text) {
      alert(state.language === 'hi' ? 'कृपया नोटिस का पाठ दर्ज करें।' : 'Please enter or paste notice text.');
      return;
    }

    setVoiceStatus('processing', state.language === 'hi' ? 'सोच रहे हैं...' : 'Analyzing notice...');
    el.btnSubmitExplain.disabled = true;
    announce('Analyzing notice. Please wait a moment.');

    try {
      const res = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text, language: state.language })
      });

      if (!res.ok) {
        throw new Error('Server returned ' + res.status);
      }

      const data = await res.json();
      state.lastExplanation = data;
      renderExplanationResults(data);
      setVoiceStatus('ready', state.language === 'hi' ? 'तैयार' : 'Ready');
    } catch (err) {
      console.error('Explanation error:', err);
      setVoiceStatus('error', state.language === 'hi' ? 'विश्लेषण विफल रहा' : 'Analysis failed. Notice is preserved.');
      alert(
        state.language === 'hi'
          ? 'माफ़ कीजिये, व्याख्या प्राप्त नहीं हो सकी। कृपया दोबारा प्रयास करें।'
          : 'Could not generate explanation. Your text was preserved. Please try again.'
      );
    } finally {
      el.btnSubmitExplain.disabled = false;
    }
  }

  function renderExplanationResults(data) {
    el.explainResults.style.display = 'flex';
    el.explainSummaryText.textContent = data.summary;

    // Clarifications / Unknowns
    if (data.clarifications && data.clarifications.length > 0) {
      el.explainClarificationsBox.style.display = 'block';
      el.explainClarificationsList.innerHTML = data.clarifications
        .map((c) => `<li>${escapeHtml(c)}</li>`)
        .join('');
    } else {
      el.explainClarificationsBox.style.display = 'none';
    }

    // Cautions
    if (data.cautions && data.cautions.length > 0) {
      el.explainCautionsBox.style.display = 'block';
      el.explainCautionsList.innerHTML = data.cautions
        .map((c) => `<li>${escapeHtml(c)}</li>`)
        .join('');
    } else {
      el.explainCautionsBox.style.display = 'none';
    }

    // Facts with Trace Excerpts
    el.explainFactsList.innerHTML = '';
    if (data.facts && data.facts.length > 0) {
      data.facts.forEach((fact) => {
        const item = document.createElement('div');
        item.className = 'fact-item';
        item.innerHTML = `
          <div class="fact-label">${escapeHtml(fact.label)}</div>
          <div class="fact-value">${escapeHtml(fact.value)}</div>
          <div class="source-quote" title="Exact quote from your notice">"${escapeHtml(fact.source_excerpt)}"</div>
        `;
        el.explainFactsList.appendChild(item);
      });
    }

    // Unfamiliar Terms
    if (data.unfamiliar_terms && data.unfamiliar_terms.length > 0) {
      el.explainTermsSection.style.display = 'block';
      el.explainTermsList.innerHTML = data.unfamiliar_terms
        .map(
          (t) => `
        <div class="term-card">
          <div class="term-title">📖 ${escapeHtml(t.term)}</div>
          <div class="term-exp">${escapeHtml(t.explanation)}</div>
        </div>
      `
        )
        .join('');
    } else {
      el.explainTermsSection.style.display = 'none';
    }

    // Medical Report Section (Health Indicators & Lab Analysis)
    if (data.medical_report && el.medicalReportSection) {
      const med = data.medical_report;
      el.medicalReportSection.style.display = 'block';

      if (el.medicalReportMeta) {
        el.medicalReportMeta.textContent = [med.patient_name, med.report_date].filter(Boolean).join(' • ') || '';
      }

      // Render Indicators
      if (el.medicalIndicatorsList) {
        el.medicalIndicatorsList.innerHTML = '';
        if (med.indicators && med.indicators.length > 0) {
          med.indicators.forEach((ind) => {
            const card = document.createElement('div');
            card.className = 'medical-indicator-card';
            const statusClass = `status-${(ind.status || 'normal').toLowerCase()}`;
            card.innerHTML = `
              <div class="indicator-header">
                <span class="indicator-name">${escapeHtml(ind.name)}</span>
                <span class="indicator-badge ${statusClass}">${escapeHtml(ind.status)}</span>
              </div>
              <div class="indicator-value-row">
                <span class="indicator-val">${escapeHtml(ind.value)}</span>
                <span class="indicator-ref">${state.language === 'hi' ? 'मानक दायरा:' : 'Normal Range:'} ${escapeHtml(ind.reference_range || '--')}</span>
              </div>
              <div class="indicator-meaning">${escapeHtml(ind.meaning)}</div>
              ${ind.source_excerpt ? `<div class="source-quote" title="Exact quote from report">"${escapeHtml(ind.source_excerpt)}"</div>` : ''}
            `;
            el.medicalIndicatorsList.appendChild(card);
          });
        }
      }

      // Doctor Questions
      if (el.medicalDoctorQuestions) {
        if (med.doctor_questions && med.doctor_questions.length > 0) {
          el.medicalDoctorQuestions.innerHTML = med.doctor_questions
            .map((q) => `<li>${escapeHtml(q)}</li>`)
            .join('');
        }
      }

      // Disclaimer
      if (el.medicalDisclaimerText && med.disclaimer) {
        el.medicalDisclaimerText.textContent = med.disclaimer;
      }

      // 1-Click Reminder for Consultation
      if (el.btnAddMedicalReminder) {
        el.btnAddMedicalReminder.onclick = () => {
          const defaultTitle = state.language === 'hi'
            ? 'डॉक्टर से परामर्श - स्वास्थ्य रिपोर्ट समीक्षा'
            : 'Doctor Consultation - Review Lab Report';
          requestTaskConfirmation(
            {
              id: 'med-task-' + Date.now(),
              title: defaultTitle,
              candidate_date_time: null,
              source_excerpt: med.summary || 'Review health lab results with primary care doctor'
            },
            (confirmed) => {
              commitNewTask(confirmed);
              navigateTo('myday');
            }
          );
        };
      }
    } else if (el.medicalReportSection) {
      el.medicalReportSection.style.display = 'none';
    }


    // Connect Guide workflow
    el.btnStartGuideFromExplain.onclick = () => {
      startGuideFromExplanation(data);
    };

    // Connect Add Action workflow
    el.btnAddActionFromExplain.onclick = () => {
      if (data.suggested_tasks && data.suggested_tasks.length > 0) {
        requestTaskConfirmation(data.suggested_tasks[0], (confirmed) => {
          commitNewTask(confirmed);
          navigateTo('myday');
        });
      } else {
        openTaskFormModal();
      }
    };

    // Read summary aloud
    el.btnAudioExplainPlay.onclick = () => {
      speakText(data.summary, el.btnAudioExplainPlay);
    };
    el.btnAudioExplainStop.onclick = stopAudioPlayback;
    el.btnAudioExplainReplay.onclick = () => {
      speakText(data.summary, el.btnAudioExplainPlay);
    };

    // Make Simpler button
    el.btnExplainSimpler.onclick = async () => {
      setVoiceStatus('processing', 'Simplifying summary...');
      try {
        const res = await fetch('/api/simplify-step', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            step_instruction: data.summary,
            context: 'Overall notice summary',
            language: state.language
          })
        });
        if (res.ok) {
          const sim = await res.json();
          el.explainSummaryText.textContent = sim.simplified_instruction;
          speakText(sim.simplified_instruction);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setVoiceStatus('ready', 'Ready');
      }
    };

    el.explainResults.scrollIntoView({ behavior: 'smooth' });
    announce('Explanation generated successfully.');
  }

  // --- GUIDE ME WORKFLOW ---
  function startGuideFromExplanation(data) {
    if (!data.steps || data.steps.length === 0) {
      alert('No steps found in this notice.');
      return;
    }

    state.activeGuide = {
      noticeTitle: data.facts && data.facts[0] ? data.facts[0].value : 'Notice Guide',
      steps: data.steps,
      currentStepIndex: 0
    };
    localStorage.setItem('beta_active_guide', JSON.stringify(state.activeGuide));
    navigateTo('guide');
  }

  function renderActiveGuide() {
    if (!state.activeGuide || !state.activeGuide.steps || state.activeGuide.steps.length === 0) {
      // Curated default example if none is saved
      state.activeGuide = {
        noticeTitle: 'Community Centre Orientation',
        steps: [
          {
            id: 'step-1',
            instruction: 'Locate your registration confirmation slip and put it in your bag today.',
            source_excerpt: 'Bring your registration confirmation.',
            is_general_suggestion: false
          },
          {
            id: 'step-2',
            instruction: 'Plan your trip to arrive at Room 2 by 10:45 AM on 24 September 2026 (15 minutes early).',
            source_excerpt: 'at 11:00 AM, Room 2. Please arrive 15 minutes early.',
            is_general_suggestion: false
          },
          {
            id: 'step-3',
            instruction: 'If you have questions, call the centre using the number on your confirmation slip.',
            source_excerpt: 'contact the centre using the number on your registration confirmation.',
            is_general_suggestion: true
          }
        ],
        currentStepIndex: 0
      };
      localStorage.setItem('beta_active_guide', JSON.stringify(state.activeGuide));
    }

    const guide = state.activeGuide;
    const step = guide.steps[guide.currentStepIndex];

    el.guideStepCounter.textContent = `${state.language === 'hi' ? 'कदम' : 'Step'} ${
      guide.currentStepIndex + 1
    } ${state.language === 'hi' ? 'का' : 'of'} ${guide.steps.length}`;

    el.guideStepInstruction.textContent = step.instruction;

    if (step.source_excerpt) {
      el.guideStepQuote.style.display = 'inline-block';
      el.guideStepQuote.textContent = `"${step.source_excerpt}"`;
    } else {
      el.guideStepQuote.style.display = 'none';
    }

    el.guideStepReassurance.style.display = 'none';

    // Wizard navigation controls
    el.btnGuidePrev.disabled = guide.currentStepIndex === 0;
    el.btnGuideNext.textContent =
      guide.currentStepIndex === guide.steps.length - 1
        ? (state.language === 'hi' ? 'समाप्त करें ✓' : 'Finish ✓')
        : (state.language === 'hi' ? 'अगला कदम →' : 'Next Step →');

    el.btnGuidePrev.onclick = () => {
      if (guide.currentStepIndex > 0) {
        guide.currentStepIndex--;
        localStorage.setItem('beta_active_guide', JSON.stringify(state.activeGuide));
        renderActiveGuide();
        announce(`Moved to Step ${guide.currentStepIndex + 1}`);
      }
    };

    el.btnGuideNext.onclick = () => {
      if (guide.currentStepIndex < guide.steps.length - 1) {
        guide.currentStepIndex++;
        localStorage.setItem('beta_active_guide', JSON.stringify(state.activeGuide));
        renderActiveGuide();
        announce(`Moved to Step ${guide.currentStepIndex + 1}`);
      } else {
        announce('Guide completed.');
        alert(
          state.language === 'hi'
            ? 'शाबाश! आपने इस गाइड के सभी चरण देख लिए हैं।'
            : 'Great job! You have walked through all steps in this guide.'
        );
        state.activeGuide = null;
        localStorage.removeItem('beta_active_guide');
        navigateTo('home');
      }
    };

    // Step Read Aloud
    el.btnGuideAudio.onclick = () => {
      speakText(step.instruction, el.btnGuideAudio);
    };

    // Explain this step simply
    el.btnSimplifyStep.onclick = async () => {
      setVoiceStatus('processing', 'Simplifying step...');
      try {
        const res = await fetch('/api/simplify-step', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            step_instruction: step.instruction,
            context: guide.noticeTitle,
            language: state.language
          })
        });
        if (res.ok) {
          const sim = await res.json();
          el.guideStepReassurance.style.display = 'block';
          el.guideReassuranceText.textContent = `${sim.simplified_instruction} (${sim.reassurance})`;
          speakText(sim.simplified_instruction);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setVoiceStatus('ready', 'Ready');
      }
    };

    // Add this step to My Day
    el.btnAddStepToTask.onclick = () => {
      requestTaskConfirmation(
        {
          id: 'step-task-' + Date.now(),
          title: step.instruction,
          candidate_date_time: null,
          source_excerpt: step.source_excerpt
        },
        (confirmed) => {
          commitNewTask(confirmed);
        }
      );
    };
  }

  // --- SPEECH ENGINE (WEB SPEECH API) ---
  let recognition = null;
  let currentSessionTranscript = '';
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  function initSpeechRecognition() {
    if (!SpeechRecognition) {
      console.warn('SpeechRecognition not supported in this browser.');
      return null;
    }

    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
      currentSessionTranscript = '';
      setVoiceStatus('listening', state.language === 'hi' ? 'सुन रहे हैं...' : 'Listening...');
      startVoiceTimer();
    };

    rec.onresult = (event) => {
      let accumulated = '';
      for (let i = 0; i < event.results.length; ++i) {
        accumulated += event.results[i][0].transcript + ' ';
      }
      currentSessionTranscript = accumulated.trim();
      el.voiceFeedbackText.textContent = `"${currentSessionTranscript}"`;
    };

    rec.onerror = (event) => {
      console.warn('Speech recognition status:', event.error);
      if (event.error === 'no-speech') {
        return; // Ignore brief silence
      }
      stopVoiceTimer();
      setVoiceStatus('error', `Microphone: ${event.error}. You can type instead.`);
      if (event.error === 'not-allowed' || event.error === 'audio-capture' || event.error === 'service-not-allowed') {
        handleVoiceTranscript('');
      }
    };

    rec.onend = () => {
      stopVoiceTimer();
      if (state.speechState === 'listening') {
        if (currentSessionTranscript && currentSessionTranscript.length > 0) {
          const text = currentSessionTranscript;
          currentSessionTranscript = '';
          handleVoiceTranscript(text);
        } else {
          setVoiceStatus('ready', state.language === 'hi' ? 'तैयार' : 'Ready');
        }
      }
    };

    return rec;
  }

  function toggleVoice() {
    if (state.speechState === 'listening') {
      stopVoiceListening();
    } else if (state.speechState === 'speaking') {
      stopAudioPlayback();
      startVoiceListeningActual();
    } else {
      greetAndStartListening();
    }
  }

  function getBestVoice(lang) {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    const targetTag = lang === 'hi' ? 'hi-IN' : 'en-US';
    const targetPrefix = lang === 'hi' ? 'hi' : 'en';
    return (
      voices.find((v) => v.lang === targetTag) ||
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(targetPrefix)) ||
      voices[0] ||
      null
    );
  }

  function playAudioChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';

      const now = ctx.currentTime;
      // Gentle two-tone pleasant chime
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio chime notice:', e);
    }
  }

  function greetAndStartListening() {
    const greetingText = state.language === 'hi'
      ? 'नमस्ते! मैं सुन रहा हूँ, बताइए क्या मदद करूँ?'
      : 'Hello! I am listening, how can I help you?';

    setVoiceStatus('speaking', greetingText);
    playAudioChime();

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(greetingText);
      utterance.lang = state.language === 'hi' ? 'hi-IN' : 'en-US';
      utterance.rate = 0.95;
      utterance.volume = 1.0;

      const voice = getBestVoice(state.language);
      if (voice) {
        utterance.voice = voice;
      }

      let hasStartedListening = false;
      const proceedToListening = () => {
        if (!hasStartedListening) {
          hasStartedListening = true;
          startVoiceListeningActual();
        }
      };

      utterance.onend = proceedToListening;
      utterance.onerror = (err) => {
        console.warn('Speech synthesis error or cancelled:', err);
        proceedToListening();
      };

      // Chrome speech trigger
      window.speechSynthesis.speak(utterance);
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
    } else {
      startVoiceListeningActual();
    }
  }

  function startVoiceListening() {
    startVoiceListeningActual();
  }

  function startVoiceListeningActual() {
    stopAudioPlayback(); // Never listen while app is speaking

    if (!recognition) {
      recognition = initSpeechRecognition();
    }

    if (!recognition) {
      // Browser does not support speech recognition (Firefox/old Safari) -> open fallback directly
      handleVoiceTranscript('');
      return;
    }

    recognition.lang = state.language === 'hi' ? 'hi-IN' : 'en-US';

    try {
      recognition.start();
    } catch (e) {
      console.warn('Error starting recognition:', e);
      try { recognition.stop(); } catch(err) {}
      setTimeout(() => {
        try { recognition.start(); } catch(err) { handleVoiceTranscript(''); }
      }, 200);
    }
  }

  function stopVoiceListening() {
    if (recognition) {
      try {
        recognition.stop();
      } catch (e) {
        console.warn(e);
      }
    }
    stopVoiceTimer();
    if (currentSessionTranscript && currentSessionTranscript.length > 0) {
      const text = currentSessionTranscript;
      currentSessionTranscript = '';
      handleVoiceTranscript(text);
      return;
    }
    setVoiceStatus('ready', state.language === 'hi' ? 'तैयार' : 'Ready');
  }

  function startVoiceTimer() {
    stopVoiceTimer();
    state.speechSecondsLeft = 30;
    el.voiceTimer.style.display = 'inline-block';
    el.voiceTimer.textContent = '0:30';

    state.speechTimerInterval = setInterval(() => {
      state.speechSecondsLeft--;
      el.voiceTimer.textContent = `0:${state.speechSecondsLeft < 10 ? '0' : ''}${state.speechSecondsLeft}`;
      if (state.speechSecondsLeft <= 0) {
        stopVoiceTimer();
        stopVoiceListening();
      }
    }, 1000);
  }

  function stopVoiceTimer() {
    if (state.speechTimerInterval) {
      clearInterval(state.speechTimerInterval);
      state.speechTimerInterval = null;
    }
    el.voiceTimer.style.display = 'none';
  }

  function setVoiceStatus(statusKey, feedbackText) {
    state.speechState = statusKey;
    el.voiceStatusBadge.className = `status-badge ${statusKey}`;
    el.voiceStatusBadge.textContent =
      statusKey === 'listening'
        ? (state.language === 'hi' ? 'सुन रहे हैं' : 'Listening')
        : statusKey === 'processing'
        ? (state.language === 'hi' ? 'सोच रहे हैं' : 'Processing')
        : statusKey === 'speaking'
        ? (state.language === 'hi' ? 'बोल रहे हैं' : 'Speaking')
        : statusKey === 'error'
        ? (state.language === 'hi' ? 'त्रुटि' : 'Error')
        : (state.language === 'hi' ? 'तैयार' : 'Ready');

    el.voiceFeedbackText.textContent = feedbackText || '';

    if (statusKey === 'listening') {
      el.btnMainVoice.classList.add('is-recording');
      el.voiceBtnLabel.textContent = state.language === 'hi' ? 'रोकें' : 'Stop recording';
      el.btnMainVoice.setAttribute('aria-pressed', 'true');
    } else if (statusKey === 'speaking') {
      el.btnMainVoice.classList.remove('is-recording');
      el.voiceBtnLabel.textContent = state.language === 'hi' ? 'बोल रहे हैं...' : 'Speaking...';
      el.btnMainVoice.setAttribute('aria-pressed', 'true');
    } else {
      el.btnMainVoice.classList.remove('is-recording');
      el.voiceBtnLabel.textContent = state.language === 'hi' ? 'बोलने के लिए दबाएं' : 'Tap to speak';
      el.btnMainVoice.setAttribute('aria-pressed', 'false');
    }
  }

  // --- TRANSCRIPT REVIEW & INTENT EXECUTION ---
  function handleVoiceTranscript(transcript) {
    stopVoiceListening();

    // Show Speech Review Modal to let senior confirm / edit transcript
    el.voiceReviewTranscript.value = transcript;
    el.modalVoiceReview.style.display = 'flex';

    el.btnVoiceReviewRetry.onclick = () => {
      el.modalVoiceReview.style.display = 'none';
      startVoiceListening();
    };

    el.btnVoiceReviewContinue.onclick = () => {
      el.modalVoiceReview.style.display = 'none';
      processConfirmedTranscript(el.voiceReviewTranscript.value.trim());
    };
  }

  async function processConfirmedTranscript(transcript) {
    if (!transcript) return;

    setVoiceStatus('processing', state.language === 'hi' ? 'आदेश समझ रहे हैं...' : 'Interpreting speech...');

    try {
      const nowISO = new Date().toISOString();
      const res = await fetch('/api/voice-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: transcript,
          current_screen: state.currentView,
          language: state.language,
          user_time: nowISO
        })
      });

      if (!res.ok) throw new Error('Voice intent failed');

      const data = await res.json();
      executeVoiceIntent(data, transcript);
    } catch (err) {
      console.error('Error processing voice intent:', err);
      setVoiceStatus('error', 'Could not interpret command.');
    } finally {
      if (state.speechState === 'processing') {
        setVoiceStatus('ready', 'Ready');
      }
    }
  }

  function executeVoiceIntent(data, originalTranscript) {
    speakText(data.spoken_reply);

    switch (data.intent) {
      case 'explain':
        navigateTo('explain');
        break;

      case 'guide_next':
        if (state.currentView === 'guide') {
          el.btnGuideNext.click();
        } else {
          navigateTo('guide');
        }
        break;

      case 'guide_back':
        if (state.currentView === 'guide') {
          el.btnGuidePrev.click();
        }
        break;

      case 'simplify':
        if (state.currentView === 'guide') {
          el.btnSimplifyStep.click();
        } else if (state.currentView === 'explain' && state.lastExplanation) {
          el.btnExplainSimpler.click();
        }
        break;

      case 'repeat':
        if (state.currentView === 'guide') {
          el.btnGuideAudio.click();
        } else if (state.currentView === 'explain' && state.lastExplanation) {
          el.btnAudioExplainPlay.click();
        }
        break;

      case 'show_tasks':
        navigateTo('myday');
        break;

      case 'propose_task':
        if (data.task_draft) {
          requestTaskConfirmation(data.task_draft, (confirmed) => {
            commitNewTask(confirmed);
            navigateTo('myday');
          });
        }
        break;

      default:
        // Unknown: ask one clarification
        if (data.clarification) {
          speakText(data.clarification);
        }
        break;
    }
  }

  // --- SPEECH SYNTHESIS (READ ALOUD) ---
  let currentUtterance = null;

  function speakText(text, buttonElement = null) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    stopAudioPlayback();

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = state.language === 'hi' ? 'hi-IN' : 'en-US';
    currentUtterance.rate = 0.92; // Slightly slower, comfortable pace for seniors

    const voice = getBestVoice(state.language);
    if (voice) {
      currentUtterance.voice = voice;
    }

    if (buttonElement) {
      buttonElement.classList.add('speaking');
    }
    setVoiceStatus('speaking', state.language === 'hi' ? 'बोल रहे हैं...' : 'Speaking...');

    currentUtterance.onend = () => {
      stopAudioPlayback();
      setVoiceStatus('ready', state.language === 'hi' ? 'तैयार' : 'Ready');
    };

    currentUtterance.onerror = (e) => {
      console.error('SpeechSynthesis error:', e);
      stopAudioPlayback();
      setVoiceStatus('ready', 'Ready');
    };

    window.speechSynthesis.speak(currentUtterance);
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }

  function stopAudioPlayback() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    document.querySelectorAll('.audio-btn.speaking').forEach((btn) => {
      btn.classList.remove('speaking');
    });
    currentUtterance = null;
  }

  // --- UTILITY ---
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- EVENT LISTENERS INITIALIZATION ---
  function initEventListeners() {
    // Language buttons
    el.btnLangEn.addEventListener('click', () => applyLanguage('en'));
    el.btnLangHi.addEventListener('click', () => applyLanguage('hi'));

    // Text size buttons
    el.btnSize20.addEventListener('click', () => applyFontSize('20'));
    el.btnSize24.addEventListener('click', () => applyFontSize('24'));
    el.btnSize28.addEventListener('click', () => applyFontSize('28'));

    // Clear Data
    el.btnClearData.addEventListener('click', () => {
      const msg = state.language === 'hi'
        ? 'क्या आप वाकई इस ब्राउज़र में सहेजे गए सभी कार्यों और प्राथमिकताओं को मिटाना चाहते हैं?'
        : 'Are you sure you want to clear all saved tasks and data from this browser?';
      if (confirm(msg)) {
        localStorage.clear();
        state.tasks = [];
        state.activeGuide = null;
        state.lastExplanation = null;
        state.undoHistory = [];
        applyLanguage('en');
        applyFontSize('20');
        saveTasks();
        navigateTo('home');
        announce('All saved browser data cleared.');
      }
    });

    // Undo button
    el.btnUndo.addEventListener('click', performUndo);

    // Brand Home Button
    document.getElementById('brand-home-btn').addEventListener('click', () => navigateTo('home'));

    // Home Card clicks
    el.cardExplain.addEventListener('click', () => navigateTo('explain'));
    el.cardGuide.addEventListener('click', () => navigateTo('guide'));
    el.cardMyDay.addEventListener('click', () => navigateTo('myday'));
    el.btnHomeQuickAdd.addEventListener('click', () => openTaskFormModal());

    // Navigation back/home buttons
    document.getElementById('btn-back-from-explain').addEventListener('click', () => navigateTo(state.previousView));
    document.getElementById('btn-home-from-explain').addEventListener('click', () => navigateTo('home'));
    document.getElementById('btn-back-from-guide').addEventListener('click', () => navigateTo('home'));
    document.getElementById('btn-home-from-guide').addEventListener('click', () => navigateTo('home'));
    document.getElementById('btn-back-from-myday').addEventListener('click', () => navigateTo('home'));
    document.getElementById('btn-home-from-myday').addEventListener('click', () => navigateTo('home'));

    // Explain screen buttons
    el.btnUseSample.addEventListener('click', () => {
      const dict = I18N[state.language] || I18N.en;
      el.noticeInputText.value = dict.sampleNoticeText;
      announce('Sample community centre orientation notice loaded.');
    });

    if (el.btnUseSampleMedical) {
      el.btnUseSampleMedical.addEventListener('click', () => {
        const dict = I18N[state.language] || I18N.en;
        el.noticeInputText.value = dict.sampleMedicalReportText;
        announce('Sample medical lab report loaded.');
        submitNoticeForExplanation();
      });
    }

    el.btnSubmitExplain.addEventListener('click', submitNoticeForExplanation);


    // My Day add task button
    el.btnMyDayAddTask.addEventListener('click', () => openTaskFormModal());

    // Persistent Main Voice Button
    el.btnMainVoice.addEventListener('click', toggleVoice);

    // Nearby Voice Typing Fallback
    if (el.btnVoiceTypeFallback) {
      el.btnVoiceTypeFallback.addEventListener('click', () => {
        handleVoiceTranscript('');
      });
    }

    // Quick Voice Command Chips
    document.querySelectorAll('.voice-chip-btn').forEach((chip) => {
      chip.addEventListener('click', () => {
        if (chip.dataset.text) {
          el.voiceReviewTranscript.value = chip.dataset.text;
          el.voiceReviewTranscript.focus();
        }
      });
    });
  }

  // --- BOOTSTRAP APP ---
  function init() {
    initEventListeners();
    applyLanguage(state.language);
    applyFontSize(state.fontSize);
    navigateTo('home');
  }

  window.addEventListener('DOMContentLoaded', init);
})();
