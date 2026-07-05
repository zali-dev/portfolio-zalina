import { profile } from '../data/profile';

const commands = {
  help: () => ({
    output: `
╔══════════════════════════════════╗
║  AVAILABLE COMMANDS              ║
╠══════════════════════════════════╣
║  whoami      About me            ║
║  skills      Technical skills    ║
║  projects    GitHub repositories ║
║  education   Academic path       ║
║  contact     Get in touch        ║
║  clear       Clear terminal      ║
║  matrix      ???                 ║
║  coffee      Emergency fuel      ║
║  sudo        Try if you dare     ║
╚══════════════════════════════════╝
    `,
    color: '#ffb86c'
  }),

  whoami: () => ({
    output: `
╔══════════════════════════════════════╗
║  ${profile.name.padEnd(34)}║
║  ${profile.age} y.o. | ${profile.location.padEnd(23)}║
╠══════════════════════════════════════╣
║  Student @ Moscow College            ║
║  Specialization: ${profile.specialization.split(' — ')[0].padEnd(21)}║
║  ${profile.specialization.split(' — ')[1].padEnd(34)}║
║  ${profile.year.padEnd(34)}║
║                                      ║
║  Goal: ${profile.universityGoal.split('(')[0].padEnd(29)}║
║  (${profile.universityGoal.split('(')[1].padEnd(33)}║
╚══════════════════════════════════════╝

> "Turning chaos into configurations."
    `,
    color: '#bd93f9'
  }),

  skills: () => {
    const formatSkills = (skills) => skills.map(s => `  • ${s}`).join('\n');
    return {
      output: `
>>> SCANNING SKILL TREE...

[DEVELOPMENT]
${formatSkills(profile.skills.development)}

[DEVOPS]
${formatSkills(profile.skills.devops)}

[SECURITY]
${formatSkills(profile.skills.security)}

[TOOLS]
${formatSkills(profile.skills.tools)}
      `,
      color: '#8be9fd'
    };
  },

  projects: () => {
    const projectList = profile.projects.map((p, i) => 
      `[${i + 1}] ${p.name}
   Description: ${p.description}
   Stack: ${p.stack.join(', ')}
   URL: ${p.url}`
    ).join('\n\n');

    return {
      output: `
>>> FETCHING FROM github.com/zali-dev...
>>> Repositories found: ${profile.projects.length}

${projectList}

⚠️ More projects incubating in local branches...
      `,
      color: '#50fa7b'
    };
  },

  education: () => ({
    output: `
┌──────────────────────────────────┐
│  CURRENT: Moscow State College    │
│  Program: ${profile.specialization.split(' — ')[0].padEnd(27)}│
│  Focus: ${profile.specialization.split(' — ')[1].padEnd(27)}│
│  Status: ${profile.year.padEnd(27)}│
│                                  │
│  GOAL: Enroll in University      │
│  Target: ${profile.universityGoal.split(' (')[0].padEnd(27)}│
│  Year of enrollment: 2028        │
│                                  │
│  CURRENTLY BUILDING:             │
│  • DevOps portfolio              │
│  • Security lab environment      │
│  • Open source contributions     │
└──────────────────────────────────┘
    `,
    color: '#f1fa8c'
  }),

  contact: () => ({
    output: `
>>> ESTABLISHING CONNECTION...
>>> ENCRYPTING CHANNEL...

📧 Email:    ${profile.contact.email}
🐙 GitHub:   ${profile.contact.github}
💬 Telegram: ${profile.contact.telegram}
🔗 LinkedIn: ${profile.contact.linkedin}

🔐 PGP Key available on request.
📡 Response time: < 24h (unless sleeping 💤)
    `,
    color: '#ff79c6'
  }),

  matrix: () => ({
    output: profile.easterEggs.matrix,
    color: '#00ff41',
    special: 'matrix' // триггер для Canvas анимации
  }),

  coffee: () => ({
    output: profile.easterEggs.coffee,
    color: '#ffb86c'
  }),

  sudo: () => ({
    output: profile.easterEggs.sudo,
    color: '#ff5555'
  }),

  hack: () => ({
    output: profile.easterEggs.hack,
    color: '#ff79c6'
  })
};

export default commands;