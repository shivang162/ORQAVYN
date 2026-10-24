/* ===== Image paths ===== */
export const IMG = {
  ring: '/brand/ring.png',
  slash: '/brand/slash.png',
  word: '/brand/wordmark.png',
} as const;

/* ===== All page copy ===== */
const content = {
  siteTitle: 'ORQAVYN — Get more customers. Save hours every day. Grow faster.',
  metaDescription:
    'ORQAVYN finds what\'s slowing your business down and fixes it with the right mix of website, automation, and software — so growth stops depending on your time.',

  /* Hero */
  hero: {
    chip: 'Currently taking 2 new projects',
    h1: ['Get more customers.', 'Save hours every day.', 'Grow faster.'],
    lead:
      "ORQAVYN finds what's slowing your business down and fixes it with the right mix of website, automation, and software, so growth stops depending on your time.",
    cta1: 'GET YOUR FREE GROWTH PLAN',
    cta2: 'SEE HOW IT WORKS',
    trust: 'Free 20-minute call • Fixed pricing • You own everything • Reply within 24 hours',
  },

  /* 01 – Bottleneck */
  bottleneck: {
    label: '01 / THE BOTTLENECK',
    heading: "Growing a business shouldn't mean working around the clock.",
    rows: [
      {
        n: '01',
        h: 'Enquiries get answered too late and customers go elsewhere',
        p: "Leads reach out in the evening or on weekends. By the time you reply the next day, they've booked with a competitor.",
      },
      {
        n: '02',
        h: "Your website looks fine but doesn't bring in leads",
        p: 'You invested in a design, but visitors browse for 20 seconds and leave without giving you their name, phone, or requirement.',
      },
      {
        n: '03',
        h: 'Follow-ups, bookings and reports are all done by hand',
        p: 'Copying numbers between spreadsheets, writing manual WhatsApp updates, and sending calendar reminders drain 2-3 hours of your workday.',
      },
      {
        n: '04',
        h: "You're the bottleneck: nothing moves unless you do",
        p: 'Your company cannot take on more clients because every single deal, approval, and email requires your direct manual intervention.',
      },
      {
        n: '05',
        h: "You need software or an app but don't have a tech team",
        p: "Agencies charge enterprise retainers, freelancers vanish halfway through, and off-the-shelf software doesn't fit your workflow.",
      },
    ],
  },

  /* 02 – Solutions Scene */
  solutions: {
    label: '02 / SOLUTIONS BUILT FOR OUTCOMES',
    heading: 'Every system we deploy solves one specific business problem.',
    sub: "We don't sell technology for its own sake. We implement tools engineered to produce verifiable returns for your time and balance sheet.",
    items: [
      {
        n: '01',
        small: 'High-Impact Web Engineering',
        h: 'Turn visitors into customers',
        p: 'We design and engineer fast, persuasive websites structured around clear calls-to-action. Visitors immediately grasp your value and reach out before leaving.',
      },
      {
        n: '02',
        small: 'Instant Conversational AI',
        h: 'Reply to every enquiry instantly, 24/7',
        p: 'WhatsApp and web-based AI assistants that answer questions, verify budgets, qualify leads, and collect contact details within 10 seconds, day or night.',
      },
      {
        n: '03',
        small: 'End-to-End Workflow Automation',
        h: 'Get hours back every week',
        p: 'We connect your inbox, calendar, CRM, and accounting. Follow-ups send automatically, appointments sync directly, and receipts generate without manual intervention.',
      },
      {
        n: '04',
        small: 'Tailored Internal Portals',
        h: 'Run smoothly as you scale',
        p: 'Bespoke dashboards and client portals replacing messy spreadsheets. Your team handles double the workload with zero confusion or lost information.',
      },
      {
        n: '05',
        small: 'Native-Grade Mobile Apps',
        h: 'Reach customers wherever they are',
        p: 'Fast, intuitive mobile applications that put your service directly into your clients\' pockets. Easy bookings, push alerts, and direct repeat sales.',
      },
    ],
  },

  /* 03 – Tailored */
  tailored: {
    label: '03 / TAILORED IMPACT',
    heading: 'Built for businesses ready to remove their operating ceiling.',
    cards: [
      {
        cat: 'CATEGORY 01',
        h: 'Small & Medium Businesses',
        problem: 'Missed customer enquiries during peak hours, repetitive manual booking calls, and an outdated website that fails to convert incoming traffic.',
        outcome: 'A business engine that automatically captures, replies to, and books new leads 24/7 without needing you or your staff to stay online.',
      },
      {
        cat: 'CATEGORY 02',
        h: 'Startups',
        problem: 'Stuck waiting months to hire an expensive engineering team while your market window slips away and early customer traction stalls.',
        outcome: 'A fully built, high-speed product deployed to real paying users in 3 to 4 weeks, engineered on clean scalable architecture you own.',
      },
      {
        cat: 'CATEGORY 03',
        h: 'Entrepreneurs & Solo Founders',
        problem: 'You are simultaneously the sales team, support representative, and operations manager, leaving zero hours to focus on actual strategy.',
        outcome: 'Daily manual tasks fully delegated to automated pipelines, presenting a premium enterprise appearance that commands higher prices.',
      },
    ],
    sub: 'We have delivered growth systems for clinics, coaching academies, logistics hubs, retail stores, real estate firms, and e-commerce brands.',
    subLink: "Don't see your business? Talk to us →",
  },

  /* 04 – Proof */
  proof: {
    label: '04 / MEASURED OUTCOMES',
    heading: 'Proof of what happens when bottlenecks disappear.',
    cases: [
      {
        label: 'CASE 01 • HEALTHCARE CLINIC',
        stat: { digits: [7, 0], suffix: '%' },
        cap: 'less manual work',
        bottleneck: 'Front desk was overwhelmed with repetitive appointment calls, losing after-hours leads to other clinics.',
        changed: 'Deployed automated WhatsApp triage booking engine. Verified patient calendar and collected pre-visit diagnostics in real time.',
        metrics: [
          { digits: [0], suffix: ' mins', label: 'Staff time per booking' },
          { digits: [1, 0, 0], suffix: '%', label: 'After-hours capture' },
        ],
        visual: 'chat' as const,
      },
      {
        label: 'CASE 02 • B2B CONSULTANCY',
        stat: { digits: [2], suffix: '.', afterDot: [8], afterSuffix: 'x' },
        cap: 'more qualified leads',
        bottleneck: 'Corporate clients browsed the legacy static site, but vague forms resulted in time-wasting unqualified discovery calls.',
        changed: 'Replaced ambiguous agency copy with clear outcome-based positioning, backed by a qualification questionnaire filter.',
        metrics: [
          { digits: [2], suffix: '.', afterDot: [8], afterSuffix: 'x', label: 'Inbound proposals' },
          { text: 'Zero', label: 'Time spent chasing' },
        ],
        visual: 'bars' as const,
        bars: [0.2, 0.35, 0.3, 0.55, 0.8, 1],
      },
      {
        label: 'CASE 03 • MULTI-OUTLET RETAILER',
        stat: { digits: [1, 5], suffix: ' hrs' },
        cap: 'saved every week',
        bottleneck: 'Manager manually reconciled inventory between 4 physical stores and two eCommerce sites every single midnight.',
        changed: 'Engineered real-time centralized synchronization daemon linking POS, warehouse stock counts, and Shopify automatically.',
        metrics: [
          { digits: [1, 5], suffix: ' hrs', label: 'Reclaimed per week' },
          { digits: [9, 9], suffix: '.', afterDot: [8], afterSuffix: '%', label: 'Inventory precision' },
        ],
        visual: 'bars' as const,
        bars: [0.2, 0.35, 0.3, 0.55, 0.8, 1],
      },
    ],
  },

  /* AI Conversation */
  aiConversation: {
    title: 'WhatsApp Autonomous Agent',
    subtitle: 'LIVE TRANSCRIPT • 23:42',
    messages: [
      { role: 'user' as const, text: '"Hello, I need an ultrasound slot for tomorrow evening after 7 PM."' },
      { role: 'ai' as const, text: '"Slot available at 19:30 with Dr. Verma. Please reply YES to reserve with patient contact details."' },
      { role: 'user' as const, text: '"YES. Rohit Sharma, +91 98234 XXXXX"' },
      { role: 'ai' as const, text: '"Confirmed • Slot locked • E-calendar pass sent to your WhatsApp. No staff intervention needed."' },
    ],
  },

  /* 05 – Partnership */
  partnership: {
    label: '05 / THE PARTNERSHIP',
    headingWords: ['Engineering', 'without', 'agency', 'friction.'],
    sub: 'No endless account managers, no surprise bills, no tech jargon. Just accountable delivery directly tied to business numbers.',
    rows: [
      {
        n: '01',
        h: 'You talk to the builder, not a sales rep',
        p: 'Every discussion is with the engineer directly implementing your solution. No miscommunication or false promises.',
      },
      {
        n: '02',
        h: 'Fixed price, agreed before we start',
        p: 'You receive a single, transparent fixed fee for the complete deliverables. No hourly bloat, no unexpected overages.',
      },
      {
        n: '03',
        h: 'You own the code, designs and accounts',
        p: 'Zero vendor lock-in. 100% of the repository, domain credentials, and automation workflows belong strictly to your company.',
      },
      {
        n: '04',
        h: 'Clear milestones, no surprises',
        p: 'Weekly progress demos you can click and test. You always know exactly what is built and what comes next.',
      },
      {
        n: '05',
        h: '30 days free support after launch',
        p: 'We stand by everything we release. If anything needs adjustment or fine-tuning once real customers interact with it, we handle it immediately at zero cost.',
      },
    ],
    quote:
      '\u201CWe partner exclusively with businesses where our work directly moves the revenue needle. No fluff, no bloated retainers \u2014 just disciplined engineering that buys back your time and gives your business unfair operating leverage.\u201D',
    cite: 'Aryan Q. Vyn \u2022 Principal Architect & Founder \u2022 ORQAVYN Strategic Technologies',
  },

  /* 06 – Process */
  process: {
    label: '06 / PROCESS',
    heading: 'From first audit to live results in four clear stages.',
    steps: [
      {
        n: '01',
        small: 'DAY 1',
        h: 'Free growth call',
        p: 'A quick 20-minute discussion to map where you are currently losing leads, wasting manual hours, or getting stuck.',
      },
      {
        n: '02',
        small: 'DAY 3',
        h: 'Clear plan & fixed quote',
        p: 'You receive an exact architectural breakdown, concrete delivery milestones, and a single fixed investment figure. Zero ambiguity.',
      },
      {
        n: '03',
        small: 'WEEKS 1\u20133',
        h: 'We build, you review',
        p: 'Rapid engineering sprints with weekly clickable staging access. You see the solution come together step-by-step.',
      },
      {
        n: '04',
        small: 'WEEK 4 & BEYOND',
        h: 'Launch and measure',
        p: 'We deploy to production, train your team, ensure leads flow smoothly, and provide 30 days of included monitoring and maintenance.',
      },
    ],
  },

  /* 07 – Testimonials */
  testimonials: {
    label: '07 / TESTIMONIALS',
    heading: 'What business owners say after working with ORQAVYN.',
    slides: [
      {
        quote: '\u201COur enquiries doubled in two months.\u201D',
        p: 'Before ORQAVYN, people visited our website and nothing happened. Now, patients book diagnostic slots on WhatsApp at midnight without our front desk having to lift a finger.',
        cite: 'DR. RAJIV MEHTA / FOUNDER, APEX DIAGNOSTICS \u2022 NEW DELHI',
      },
      {
        quote: '\u201CWe went from losing weekend leads to booking while we sleep.\u201D',
        p: "In legal services, if you don't answer right away, clients call another firm. The instant intake agent ORQAVYN installed has literally paid for itself twenty times over.",
        cite: 'ANANYA SEN / PRINCIPAL, SEN & CO. LEGAL \u2022 BENGALURU',
      },
      {
        quote: '\u201CSaved us at least 2 full-time admin hires.\u201D',
        p: "Member renewals, payment reminders, and class signups were taking over our managers' lives. ORQAVYN automated the entire pipeline seamlessly into our existing tools.",
        cite: 'VIKRAM VERMA / DIRECTOR, PEAK FITNESS GROUP \u2022 DEHRADUN',
      },
    ],
  },

  /* 08 – FAQ */
  faq: {
    label: '08 / COMMON QUESTIONS',
    heading: 'Straight answers about how we partner.',
    sub: 'Everything is transparent. If you have a specific requirement not listed here, you can speak directly with our engineering lead on WhatsApp.',
    items: [
      {
        q: 'How long does a typical project take?',
        a: 'Most scoped deliverables launch in 2 to 4 weeks. Because we operate without agency bureaucracy or junior handoffs, we construct and ship rapidly against verified milestones.',
      },
      {
        q: 'What is your pricing model?',
        a: 'We work on 100% fixed-scope quotes calculated specifically for the agreed deliverables. You know the exact cost before work begins. No recurring surprise fees or bloated time sheets.',
      },
      {
        q: 'Who owns the code and intellectual property?',
        a: 'You own 100% of everything we build. All GitHub repositories, cloud infrastructure, WhatsApp API credentials, and Figma assets are transferred directly to your organization.',
      },
      {
        q: 'What happens after the project launches?',
        a: 'We include 30 days of comprehensive hypercare support after launch to monitor production telemetry, adjust prompt logic, and train your team. Extended advisory agreements are available upon request.',
      },
      {
        q: 'Do I need technical knowledge to manage this?',
        a: 'None whatsoever. We engineer solutions with clean, intuitive administrative interfaces. We also provide clear video walk-throughs and single-page documentation manuals.',
      },
    ],
  },

  /* CTA */
  cta: {
    heading: "Let's find out how much faster your business can grow.",
    sub: "Book a complimentary 20-minute growth diagnostic. We'll identify your exact operational bottlenecks and send you a clear, actionable roadmap.",
    cta1: 'GET YOUR FREE GROWTH PLAN',
    cta2: 'CHAT ON WHATSAPP',
    trust: 'No aggressive sales pitching \u2022 Strict confidentiality \u2022 Concrete takeaways you keep',
  },

  /* Form */
  form: {
    formLabel: 'DIRECT APPLICATION',
    heading: 'Take the first step toward operational leverage.',
    sub: 'Fill in the details regarding your current operation. We personally review each submission and construct a targeted initial audit before we ever jump on a call.',
    fields: {
      name: 'Full Name *',
      email: 'Work Email *',
      phone: 'Phone / WhatsApp Number *',
      business: 'Your Business / Role *',
      category: 'Select business category',
      bottleneck: 'What is the biggest operational bottleneck right now?',
    },
    categories: [
      'Small / Medium Business Owner',
      'Startup Founder / Co-Founder',
      'Independent Solo Operator / Agency',
      'Other Commercial Enterprise',
    ],
    submit: 'SEND DIAGNOSTIC REQUEST',
    submitNote: 'Guaranteed response within 24 hours',
    confirmation:
      'Diagnostic request logged. Our principal engineer will review your operational scope and reach out within 24 hours.',
  },

  /* Contact info */
  contact: {
    desk: { label: 'OFFICIAL DESK', value: 'hello@orqavyn.com' },
    whatsapp: { label: 'INSTANT WHATSAPP LEAD', value: '+91 98765 43210' },
    hub: { label: 'ENGINEERING HUB', value: 'Dehradun \u2022 Remote Worldwide' },
  },

  /* Footer */
  footer: {
    copy: '\u00A9 2026 ORQAVYN',
    address: 'hello@orqavyn.com \u00B7 Dehradun \u2022 Remote Worldwide',
  },

  /* Intro tagline */
  intro: {
    tagline: 'Operational leverage, engineered.',
    hudLoading: 'Loading',
    hudYear: 'ORQAVYN \u2014 2026',
    skip: 'Skip',
  },

  /* Dock nav */
  dock: {
    links: [
      { href: '#how', label: 'HOW WE HELP' },
      { href: '#who', label: 'WHO WE HELP' },
      { href: '#process', label: 'PROCESS' },
      { href: '#faq', label: 'FAQ' },
    ],
  },

  /* Top bar */
  topBar: {
    cta: 'GET A FREE GROWTH PLAN',
  },

  /* Footer wordmark letter slices – the exact clip-path polygons from the reference */
  footerSlices: [
    'polygon(-1.0% 0,15.9% 0,15.9% 100%,-1.0% 100%)',
    'polygon(15.7% 0,31.0% 0,31.0% 100%,15.7% 100%)',
    'polygon(30.8% 0,50.2% 0,46.1% 100%,30.8% 100%)',
    'polygon(50.0% 0,55.6% 0,63.0% 100%,45.9% 100%)',
    'polygon(55.4% 0,71.8% 0,72.2% 100%,62.8% 100%)',
    'polygon(71.6% 0,87.2% 0,87.2% 100%,72.0% 100%)',
    'polygon(87.0% 0,101.2% 0,101.2% 100%,87.0% 100%)',
  ],
} as const;

export default content;
