// Content lives here, not welded into markup. Every figure below is sourced
// from PRODUCT.md "Evidence on Hand". Nothing is invented; nothing about
// Proto Division's internals goes beyond prose, per the disclosure ruling.

export const hero = {
  // Manual line break — the wordmark is a graphic object, never auto-wrapped.
  nameLines: ['İ. Çağkan', 'Çağlayanel'],
  role: 'Founding Unity Engineer at Proto Division',
  place: 'Ankara, Turkey',
  proof: {
    before: 'I build the core systems behind ',
    link: { label: 'Barfender', href: 'https://store.steampowered.com/app/4159680/Barfender/' },
    after: ', which passed 4,000 wishlists in its first month.'
  }
};

// Number and cause share a line, always. This is not a stat row.
export const highScore = [
  { figure: '4,000+', unit: 'wishlists', cause: 'first month', source: 'Barfender', now: true },
  { figure: '−80%', unit: '', cause: 'Unity build time', source: 'Panteon' },
  { figure: '+30%', unit: '', cause: 'revenue & retention', source: 'analytics SDK' },
  { figure: '2nd', unit: '/ 600', cause: 'MagaraJam#3', source: 'AT0S' }
];

export const work = [
  {
    company: 'Proto Division',
    role: 'Founding Unity Engineer',
    dates: 'Aug 2025 – present',
    current: true,
    scope: 'Technical owner of the core systems: networking, simulation, tooling, architecture.',
    bullets: [
      'AmberNet — a cross-platform C# networking stack: reliable UDP with fragmentation, TCP fallback, zero-allocation I/O.',
      '3 layers — data, logic, presentation — held apart by custom Roslyn analyzers.',
      'A quest framework of 36+ objective types, wired to physics and AI agents.'
    ]
  },
  {
    company: 'Panteon Games',
    role: 'Software Engineer',
    dates: 'Feb 2022 – Aug 2025',
    scope: 'Built the release and analytics tooling that 8–10 live titles ran on.',
    bullets: [
      'A CI/CD and SCM pipeline tool with a React front end: parallel multi-repo testing, automated merges across 5 services.',
      'Rebuilt the Unity build pipeline — 80% faster.',
      'Runtime analytics, a monetization SDK and remote config — +30% revenue and retention.'
    ]
  },
  {
    company: 'Earlier',
    role: '',
    dates: '2019 – 2021',
    scope: '',
    bullets: [
      'Epic Frame — motion capture, shaders, a Blender-to-Unity pipeline in Python. DefTR — drone prototyping and pathfinding. Freelance — a pre-school education app, 10,000+ downloads, used by private schools.'
    ]
  }
];

// Full-width pressable panels, not thumbnails in a grid. The proof, so the
// loudest interactive thing on the page.
export const doors = [
  {
    title: 'Audio Sandbox',
    href: '/audio-sandbox/',
    state: 'LIVE',
    blurb:
      'A browser DAW in Svelte 5. The audio engine is a separate package with no DOM imports, tested with Vitest and Playwright.'
  },
  {
    title: 'Algorithm Visualizer',
    href: '/algorithm-visualizer/',
    state: 'LIVE',
    blurb:
      'Eight modules on one spine: pure step generators, a transport that plays them, a renderer that draws state. Pathfinding, wave function collapse, flow fields, boids — all steppable, scrubbable and tested headlessly.'
  }
];

export const built = [
  {
    title: 'Kinesiophobia VR',
    year: '2023',
    note: 'Solo national VR project. +30% recovery speed in early trials.',
    href: null
  },
  {
    title: 'Lung X-ray classification',
    year: '2022',
    note: 'Above 95% accuracy.',
    href: 'https://github.com/Crosline/lung-xray-classification'
  },
  {
    title: 'AT0S',
    img: '/images/at0s.png',
    year: '2021',
    note: '2nd of 600 — MagaraJam#3, built in 72 hours.',
    href: 'https://crosline.itch.io/at0s'
  },
  {
    title: 'VAGABOND',
    img: '/images/vagabond.png',
    year: '2022',
    note: '4th of 500 — MagaraJam#4.',
    href: 'https://biaxthepanda.itch.io/vagabond'
  },
  {
    title: 'The Last Session',
    img: '/images/the-last-session.png',
    year: '2022',
    note: '6th — MagaraJam#5. AI opponents, human Game Master.',
    href: 'https://crosline.itch.io/the-last-session'
  },
  {
    title: 'Beat Menace',
    year: '2023',
    note: 'Rhythm hack and slash.',
    href: 'https://www.youtube.com/watch?v=0PnuUpA74LY'
  },
  {
    title: 'UniLibrary',
    year: '2022',
    note: 'Unity utility library.',
    href: 'https://github.com/Crosline/Library'
  }
];

// The résumé's real list. No bars, no percentages, no logo wall.
export const skills = [
  { group: 'Languages', items: 'C#, TypeScript, Python, Go, C++, C, Dart, Java, SQL, Bash' },
  { group: 'Client', items: 'Unity, Svelte, React, Flutter, Three.js, WebGL, HLSL, Shader Graph' },
  { group: 'Server', items: 'ASP.NET Core, Entity Framework, Node.js, PostgreSQL, MongoDB, SQLite' },
  { group: 'Delivery', items: 'Docker, Jenkins, GitLab CI, GCP, AWS, Firebase, Git, Perforce' }
];

export const spoken = 'English (professional) · Turkish (native) · German (B1) · Japanese (beginner)';

export const education =
  'BSc Computer Science Engineering, Hacettepe University, 2023.';

export const links = {
  github: 'https://github.com/crosline',
  linkedin: 'https://www.linkedin.com/in/crosline',
  itch: 'https://crosline.itch.io',
  email: 'mailto:cagkancaglayanel@gmail.com',
  resume: '/documents/i_cagkan_caglayanel-resume.pdf'
};
