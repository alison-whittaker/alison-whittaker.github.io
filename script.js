const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const roadmapRoot = document.querySelector('[data-roadmap-prototype]');

if (roadmapRoot) {
  const quarters = ["Q1 FY'27", "Q2 FY'27", "Q3 FY'27", "Q4 FY'27", "Q1 FY'28", "Q2 FY'28"];
  const initiatives = [
    { title: 'Workforce Wallet Alpha', goal: 'Payments', code: 'GBSG-IG08', capability: 'Balance for Payments', quarter: "Q1 FY'27", product: 'Saurav Sharma', engineering: 'Balaji Raja', target: 'Jan 2027', revenue: '$4M', tpv: '$45M', status: 'above' },
    { title: 'Revenue Based Financing for Direct Lending Phase 1', goal: 'Payments', code: 'GBSG-IG08', capability: 'Payments + Capital', quarter: "Q1 FY'27", product: 'Eric Palm', engineering: 'Gowri Sivaraman', target: 'Mar 2027', revenue: '$12M', tpv: '$200M', status: 'above' },
    { title: 'Banking-as-a-Service Platform', goal: 'Payments', code: 'GBSG-IG08', capability: 'Balance for Payments', quarter: "Q2 FY'27", product: 'Saurav Sharma', engineering: 'Balaji Raja', target: 'Jul 2027', revenue: '$8M', tpv: '$80M', status: 'heartburn' },
    { title: 'Bill Pay in-product sales leads', goal: 'Bill Pay', code: 'GBSG-IG09', capability: 'Bill Pay by Default', quarter: "Q1 FY'27", product: 'Gilad Uziely', engineering: 'Ofer Haim', target: 'Sep 2026', revenue: '$2M', tpv: '$20M', status: 'above' },
    { title: 'Credit Card Launch', goal: 'Bill Pay', code: 'GBSG-IG09', capability: 'Bill Pay Ad Valorem Monetization', quarter: "Q1 FY'27", product: 'Gilad Uziely', engineering: 'Roey Steinmetz', target: 'Oct 2026', revenue: '$1M', tpv: '$8M', status: 'below' },
    { title: 'Schedule Payment in Bill Form', goal: 'Bill Pay', code: 'GBSG-IG09', capability: 'Bill Pay by Default', quarter: "Q2 FY'27", product: 'Gilad Uziely', engineering: 'Anat Amar', target: 'Oct 2026', revenue: '$0.5-$1M', tpv: '$12M', status: 'above' },
    { title: 'Decouple bills from spend and receipts', goal: 'Bill Pay', code: 'GBSG-IG09', capability: 'Tech Initiatives', quarter: "Q2 FY'27", product: 'Gilad Uziely', engineering: 'Anat Amar', target: 'Oct 2026', revenue: '$3M', tpv: '$25M', status: 'above' },
    { title: 'Onboarding for multi entity Mid Market Customers', goal: 'Mid-Market ERP', code: 'GBSG-IG04', capability: 'Onboarding for Mid Market Customers', quarter: "Q3 FY'27", product: 'Maya Chen', engineering: 'Luis Ortega', target: 'Nov 2027', revenue: '$6M', tpv: '$60M', status: 'above' },
    { title: 'Onboarding for single entity Mid Market Customers', goal: 'Mid-Market ERP', code: 'GBSG-IG04', capability: 'Onboarding for Mid Market Customers', quarter: "Q3 FY'27", product: 'Maya Chen', engineering: 'Priya Das', target: 'Dec 2027', revenue: '$5M', tpv: '$50M', status: 'above' },
    { title: 'Configurable AR/AP Workflow', goal: 'Mid-Market ERP', code: 'GBSG-IG04', capability: 'Configurable AR/AP Workflow', quarter: "Q4 FY'27", product: 'Jon Bell', engineering: 'Nina Patel', target: 'Feb 2028', revenue: '$9M', tpv: '$100M', status: 'heartburn' },
    { title: 'AI close assistant for finance teams', goal: 'AI & Agentic Layer', code: 'GBSG-IG12', capability: 'The AI & Agentic Layer', quarter: "Q4 FY'27", product: 'Nora Kim', engineering: 'Dev Singh', target: 'Mar 2028', revenue: '$7M', tpv: '$40M', status: 'above' },
    { title: 'Merchant trust score service', goal: 'Perf, Scale & Trust', code: 'GBSG-IG11', capability: 'Perf, Scale & Trust', quarter: "Q1 FY'28", product: 'Alex Morgan', engineering: 'Sam Lee', target: 'May 2028', revenue: '$3M', tpv: '$35M', status: 'below' },
    { title: 'Autonomous anomaly triage', goal: 'AI & Agentic Layer', code: 'GBSG-IG12', capability: 'The AI & Agentic Layer', quarter: "Q2 FY'28", product: 'Nora Kim', engineering: 'Dev Singh', target: 'Aug 2028', revenue: '$11M', tpv: '$70M', status: 'above' }
  ];

  const state = {
    activeTab: 'sixq',
    groupBy: 'goal',
    filter: '',
    selectedQuarter: "Q1 FY'27",
    collapsedGroups: new Set()
  };

  const tabButtons = [...roadmapRoot.querySelectorAll('[data-roadmap-tab]')];
  const viewPanels = [...roadmapRoot.querySelectorAll('[data-roadmap-view]')];
  const groupButtons = [...roadmapRoot.querySelectorAll('[data-roadmap-group]')];
  const filterInput = roadmapRoot.querySelector('[data-roadmap-filter]');
  const quarterSelect = roadmapRoot.querySelector('[data-quarter-select]');
  const quarterControl = roadmapRoot.querySelector('[data-quarter-control]');
  const sixqActions = roadmapRoot.querySelector('[data-sixq-actions]');
  const sixqBoard = roadmapRoot.querySelector('[data-sixq-board]');
  const quarterlyPlan = roadmapRoot.querySelector('[data-quarterly-plan]');
  const quarterlyNote = roadmapRoot.querySelector('[data-quarterly-note]');

  const statusLabels = {
    above: 'Above line',
    below: 'Below line',
    heartburn: 'Heartburn',
    complete: 'Completed'
  };

  const getGroupKey = (item) => state.groupBy === 'goal' ? item.goal : item.capability;

  const getFilteredInitiatives = () => {
    const needle = state.filter.trim().toLowerCase();
    return initiatives.filter((item) => {
      if (!needle) return true;
      return [item.title, item.goal, item.capability, item.product, item.engineering, item.status]
        .join(' ')
        .toLowerCase()
        .includes(needle);
    });
  };

  const groupItems = (items) => items.reduce((groups, item) => {
    const key = getGroupKey(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
    return groups;
  }, new Map());

  const getGroupCode = (items) => items.find((item) => item.code)?.code || 'ROADMAP';

  const createInitiativeBullet = (item) => {
    const li = document.createElement('li');
    li.className = `roadmap-initiative status-${item.status}`;
    li.innerHTML = `<strong>${item.title}</strong><span>${item.capability}</span>`;
    return li;
  };

  const renderSixQuarterRoadmap = () => {
    const groups = groupItems(getFilteredInitiatives());
    sixqBoard.innerHTML = '';

    if (!groups.size) {
      sixqBoard.innerHTML = '<div class="roadmap-empty">No initiatives match this filter.</div>';
      return;
    }

    groups.forEach((items, groupName) => {
      const isCollapsed = state.collapsedGroups.has(groupName);
      const section = document.createElement('section');
      section.className = `roadmap-group${isCollapsed ? ' is-collapsed' : ''}`;

      const headerButton = document.createElement('button');
      headerButton.className = 'roadmap-group-header';
      headerButton.type = 'button';
      headerButton.setAttribute('aria-expanded', String(!isCollapsed));
      headerButton.innerHTML = `
        <span class="roadmap-caret" aria-hidden="true">▾</span>
        <strong>${groupName}</strong>
        <span class="roadmap-code">${getGroupCode(items)}</span>
        <small>${new Set(items.map((item) => item.capability)).size} workstreams · ${items.length} initiatives</small>
      `;
      headerButton.addEventListener('click', () => {
        if (state.collapsedGroups.has(groupName)) {
          state.collapsedGroups.delete(groupName);
        } else {
          state.collapsedGroups.add(groupName);
        }
        renderSixQuarterRoadmap();
      });

      const grid = document.createElement('div');
      grid.className = 'sixq-grid';
      grid.innerHTML = `
        <div class="sixq-workstream-heading">Workstream</div>
        ${quarters.map((quarter) => `<div class="sixq-quarter-heading">${quarter}</div>`).join('')}
      `;

      const workstreams = [...new Set(items.map((item) => item.capability))];
      workstreams.forEach((workstream) => {
        const rowLabel = document.createElement('div');
        rowLabel.className = 'sixq-workstream';
        rowLabel.textContent = workstream;
        grid.append(rowLabel);

        quarters.forEach((quarter) => {
          const cell = document.createElement('div');
          cell.className = 'sixq-cell';
          const quarterItems = items.filter((item) => item.capability === workstream && item.quarter === quarter);
          if (quarterItems.length) {
            const list = document.createElement('ul');
            quarterItems.forEach((item) => list.append(createInitiativeBullet(item)));
            cell.append(list);
          } else {
            cell.innerHTML = '<span class="sixq-empty">No initiatives scheduled</span>';
          }
          grid.append(cell);
        });
      });

      section.append(headerButton, grid);
      sixqBoard.append(section);
    });
  };

  const createQuarterlyCard = (item) => {
    const article = document.createElement('article');
    article.className = `quarterly-card status-${item.status}`;
    article.innerHTML = `
      <p class="quarterly-capability">${item.capability}</p>
      <h4>${item.title}</h4>
      <div class="quarterly-owners">
        <span>Product: ${item.product}</span>
        <span>Engineering: ${item.engineering}</span>
      </div>
      <p class="quarterly-target">Target end: ${item.target}</p>
      <div class="quarterly-metrics">
        <span><small>Revenue</small><strong>${item.revenue}</strong></span>
        <span><small>TPV</small><strong>${item.tpv}</strong></span>
      </div>
      <a href="#" aria-label="Open ${item.title} in Dragonboat">Dragonboat ↗</a>
    `;
    return article;
  };

  const renderQuarterlyPlan = () => {
    const quarterItems = getFilteredInitiatives().filter((item) => item.quarter === state.selectedQuarter);
    const groups = groupItems(quarterItems);
    quarterlyPlan.innerHTML = '';

    const aboveCount = quarterItems.filter((item) => item.status === 'above').length;
    quarterlyNote.textContent = `Showing above-the-line initiatives for ${state.selectedQuarter} using dummy data. ${aboveCount} above-line initiatives in this quarter.`;

    if (!groups.size) {
      quarterlyPlan.innerHTML = '<div class="roadmap-empty">No initiatives match this quarter and filter.</div>';
      return;
    }

    groups.forEach((items, groupName) => {
      const revenue = items.reduce((total, item) => total + Number(item.revenue.replace(/[^0-9.]/g, '').split('.')[0] || 0), 0);
      const section = document.createElement('section');
      section.className = 'quarterly-group';
      section.innerHTML = `
        <header class="quarterly-group-header">
          <div><strong>${groupName}</strong><span>${getGroupCode(items)}</span></div>
          <p>Rev $${revenue}M · ${items.length} ${statusLabels.above.toLowerCase()}</p>
        </header>
      `;

      const grid = document.createElement('div');
      grid.className = 'quarterly-card-grid';
      items.forEach((item) => grid.append(createQuarterlyCard(item)));
      section.append(grid);
      quarterlyPlan.append(section);
    });
  };

  const render = () => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.roadmapTab === state.activeTab;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });

    viewPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.roadmapView === state.activeTab);
    });

    groupButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.roadmapGroup === state.groupBy);
    });

    quarterControl.hidden = state.activeTab !== 'quarterly';
    sixqActions.hidden = state.activeTab !== 'sixq';

    renderSixQuarterRoadmap();
    renderQuarterlyPlan();
  };

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.activeTab = button.dataset.roadmapTab;
      render();
    });
  });

  groupButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.groupBy = button.dataset.roadmapGroup;
      state.collapsedGroups.clear();
      render();
    });
  });

  filterInput.addEventListener('input', (event) => {
    state.filter = event.target.value;
    render();
  });

  quarterSelect.addEventListener('change', (event) => {
    state.selectedQuarter = event.target.value;
    render();
  });

  roadmapRoot.querySelector('[data-expand-all]').addEventListener('click', () => {
    state.collapsedGroups.clear();
    renderSixQuarterRoadmap();
  });

  roadmapRoot.querySelector('[data-collapse-all]').addEventListener('click', () => {
    groupItems(getFilteredInitiatives()).forEach((_, groupName) => state.collapsedGroups.add(groupName));
    renderSixQuarterRoadmap();
  });

  render();
}
