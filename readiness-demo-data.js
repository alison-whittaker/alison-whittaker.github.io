/* Synthetic mockup data only. No production records or integrations. */
window.READINESS_DEMO = {
  "snapshot": "2027-03-26",
  "goals": [
    {
      "id": "G01",
      "name": "Customer growth",
      "team": "Growth"
    },
    {
      "id": "G02",
      "name": "Product reliability",
      "team": "Platform"
    },
    {
      "id": "G03",
      "name": "Customer experience",
      "team": "Experience"
    },
    {
      "id": "G04",
      "name": "Team effectiveness",
      "team": "Operations"
    }
  ],
  "workstreams": [
    {
      "id": "WS-01",
      "goal": "G01",
      "name": "Guided onboarding",
      "team": "Growth",
      "span": "Q1\u2013Q3 2027",
      "rank": 1,
      "product": "Product lead A",
      "engineering": "Engineering lead A"
    },
    {
      "id": "WS-02",
      "goal": "G01",
      "name": "Self-service discovery",
      "team": "Growth",
      "span": "Q1\u2013Q3 2027",
      "rank": 2,
      "product": "Product lead B",
      "engineering": "Engineering lead B"
    },
    {
      "id": "WS-03",
      "goal": "G02",
      "name": "Resilient foundations",
      "team": "Platform",
      "span": "Q1\u2013Q3 2027",
      "rank": 3,
      "product": "Product lead C",
      "engineering": "Engineering lead C"
    },
    {
      "id": "WS-04",
      "goal": "G02",
      "name": "Release confidence",
      "team": "Platform",
      "span": "Q1\u2013Q3 2027",
      "rank": null,
      "product": "Product lead D",
      "engineering": "Engineering lead D"
    },
    {
      "id": "WS-05",
      "goal": "G03",
      "name": "Support journey",
      "team": "Experience",
      "span": "Q1\u2013Q3 2027",
      "rank": 5,
      "product": "Product lead E",
      "engineering": "Engineering lead E"
    },
    {
      "id": "WS-06",
      "goal": "G03",
      "name": "Accessible experiences",
      "team": "Experience",
      "span": "Q1\u2013Q3 2027",
      "rank": 6,
      "product": "Product lead F",
      "engineering": "Engineering lead F"
    },
    {
      "id": "WS-07",
      "goal": "G04",
      "name": "Planning clarity",
      "team": "Operations",
      "span": "Q1\u2013Q3 2027",
      "rank": null,
      "product": "Product lead G",
      "engineering": "Engineering lead G"
    },
    {
      "id": "WS-08",
      "goal": "G04",
      "name": "Knowledge sharing",
      "team": "Operations",
      "span": "Q1\u2013Q3 2027",
      "rank": 8,
      "product": "Product lead H",
      "engineering": "Engineering lead H"
    }
  ],
  "initiatives": [
    {
      "id": "DEMO-101",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q1 2027",
      "name": "Baseline guided onboarding",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": null,
      "status": "Carried forward",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-102",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q1 2027",
      "name": "Pilot guided onboarding",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-111",
      "status": "Open",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-103",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q1 2027",
      "name": "Review guided onboarding",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": "DEMO-112",
      "status": "Complete",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-201",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q2 2027",
      "name": "Welcome checklist",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": false,
        "Scope": false,
        "Milestone": false
      },
      "dependency": "Accepted",
      "epic": null,
      "status": "In planning",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-202",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q2 2027",
      "name": "Activation experiment",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-211",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-203",
      "goal": "G01",
      "workstream": "WS-01",
      "quarter": "Q2 2027",
      "name": "Onboarding signals",
      "owner": "Initiative owner A",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-212",
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-104",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q1 2027",
      "name": "Baseline self-service discovery",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": "DEMO-113",
      "status": "Complete",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-105",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q1 2027",
      "name": "Pilot self-service discovery",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": null,
      "status": "Complete",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-106",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q1 2027",
      "name": "Review self-service discovery",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-115",
      "status": "Carried forward",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-204",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q2 2027",
      "name": "Discovery filters",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": "DEMO-213",
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-205",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q2 2027",
      "name": "Search relevance",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": null,
      "status": "In planning",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-206",
      "goal": "G01",
      "workstream": "WS-02",
      "quarter": "Q2 2027",
      "name": "Browse analytics",
      "owner": "Initiative owner B",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": false,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-215",
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-107",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q1 2027",
      "name": "Baseline resilient foundations",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-116",
      "status": "Open",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-108",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q1 2027",
      "name": "Pilot resilient foundations",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-117",
      "status": "Complete",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-109",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q1 2027",
      "name": "Review resilient foundations",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": "DEMO-118",
      "status": "Complete",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-207",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q2 2027",
      "name": "Recovery rehearsal",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-216",
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-208",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q2 2027",
      "name": "Capacity guardrails",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": false,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-217",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-209",
      "goal": "G02",
      "workstream": "WS-03",
      "quarter": "Q2 2027",
      "name": "Service health alerts",
      "owner": "Initiative owner C",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": "DEMO-218",
      "status": "In planning",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-110",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q1 2027",
      "name": "Baseline release confidence",
      "owner": "Initiative owner D",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": null,
      "status": "Complete",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-111",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q1 2027",
      "name": "Pilot release confidence",
      "owner": "Initiative owner D",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-120",
      "status": "Carried forward",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-112",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q1 2027",
      "name": "Review release confidence",
      "owner": "Initiative owner D",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-121",
      "status": "Open",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-210",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q2 2027",
      "name": "Release gates",
      "owner": "Unassigned",
      "fields": {
        "Owner": false,
        "Outcome": false,
        "Scope": false,
        "Milestone": false
      },
      "dependency": "Declined",
      "epic": null,
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-211",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q2 2027",
      "name": "Test coverage",
      "owner": "Unassigned",
      "fields": {
        "Owner": false,
        "Outcome": false,
        "Scope": false,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-220",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-212",
      "goal": "G02",
      "workstream": "WS-04",
      "quarter": "Q2 2027",
      "name": "Rollback practice",
      "owner": "Unassigned",
      "fields": {
        "Owner": false,
        "Outcome": false,
        "Scope": false,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-221",
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-113",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q1 2027",
      "name": "Baseline support journey",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-122",
      "status": "Complete",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-114",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q1 2027",
      "name": "Pilot support journey",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-123",
      "status": "Complete",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-115",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q1 2027",
      "name": "Review support journey",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": null,
      "status": "Complete",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-213",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q2 2027",
      "name": "Case routing",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-222",
      "status": "In planning",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-214",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q2 2027",
      "name": "Help center refresh",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": "DEMO-223",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-215",
      "goal": "G03",
      "workstream": "WS-05",
      "quarter": "Q2 2027",
      "name": "Feedback triage",
      "owner": "Initiative owner E",
      "fields": {
        "Owner": true,
        "Outcome": false,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": null,
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-116",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q1 2027",
      "name": "Baseline accessible experiences",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": "DEMO-125",
      "status": "Carried forward",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-117",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q1 2027",
      "name": "Pilot accessible experiences",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-126",
      "status": "Open",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-118",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q1 2027",
      "name": "Review accessible experiences",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-127",
      "status": "Complete",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-216",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q2 2027",
      "name": "Keyboard navigation",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": false,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-225",
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-217",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q2 2027",
      "name": "Readable forms",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-226",
      "status": "In planning",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-218",
      "goal": "G03",
      "workstream": "WS-06",
      "quarter": "Q2 2027",
      "name": "Contrast improvements",
      "owner": "Initiative owner F",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-227",
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-119",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q1 2027",
      "name": "Baseline planning clarity",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-128",
      "status": "Complete",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-120",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q1 2027",
      "name": "Pilot planning clarity",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-129",
      "status": "Complete",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-121",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q1 2027",
      "name": "Review planning clarity",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Draft",
      "epic": null,
      "status": "Carried forward",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-219",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q2 2027",
      "name": "Intake standards",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": false
      },
      "dependency": "Draft",
      "epic": "DEMO-228",
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-220",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q2 2027",
      "name": "Capacity review",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": "DEMO-229",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-221",
      "goal": "G04",
      "workstream": "WS-07",
      "quarter": "Q2 2027",
      "name": "Dependency register",
      "owner": "Initiative owner G",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": false,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": null,
      "status": "In planning",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-122",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q1 2027",
      "name": "Baseline knowledge sharing",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Declined",
      "epic": "DEMO-131",
      "status": "Open",
      "due": "2027-03-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-123",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q1 2027",
      "name": "Pilot knowledge sharing",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-132",
      "status": "Complete",
      "due": "2027-03-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-124",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q1 2027",
      "name": "Review knowledge sharing",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-133",
      "status": "Complete",
      "due": "2027-03-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-222",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q2 2027",
      "name": "Knowledge index",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": false,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-231",
      "status": "Confirmed",
      "due": "2027-06-20",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-223",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q2 2027",
      "name": "Playbook refresh",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Submitted",
      "epic": "DEMO-232",
      "status": "Confirmed",
      "due": "2027-06-21",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    },
    {
      "id": "DEMO-224",
      "goal": "G04",
      "workstream": "WS-08",
      "quarter": "Q2 2027",
      "name": "Learning sessions",
      "owner": "Initiative owner H",
      "fields": {
        "Owner": true,
        "Outcome": true,
        "Scope": true,
        "Milestone": true
      },
      "dependency": "Accepted",
      "epic": "DEMO-233",
      "status": "Confirmed",
      "due": "2027-06-22",
      "source": "Initiative register",
      "asOf": "2027-03-26"
    }
  ],
  "sources": [
    {
      "id": "goals",
      "name": "Goal catalog",
      "asOf": "2027-03-26",
      "provides": "Annual goals and business alignment"
    },
    {
      "id": "workstreams",
      "name": "Workstream register",
      "asOf": "2027-03-26",
      "provides": "Priority ranks, leads and quarter spans"
    },
    {
      "id": "initiatives",
      "name": "Initiative register",
      "asOf": "2027-03-26",
      "provides": "Planning detail and lifecycle status"
    },
    {
      "id": "dependencies",
      "name": "Dependency register",
      "asOf": "2027-03-26",
      "provides": "Requests and receiving-team decisions"
    },
    {
      "id": "delivery",
      "name": "Delivery tracker",
      "asOf": "2027-03-25",
      "provides": "Epic links and delivery traceability"
    }
  ]
};
