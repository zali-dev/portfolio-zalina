export const profile = {
  name: 'Zalina',
  age: 19,
  location: 'Moscow, Russia',
  specialization: '09.02.07 — Information Systems Security',
  year: '3rd year (2 years left)',
  universityGoal: 'Applied Informatics / Cybersecurity Engineering (2028)',
  
  skills: {
    development: ['Python', 'JavaScript/React', 'HTML5/CSS3', 'Flask'],
    devops: ['Docker', 'GitHub Actions', 'Linux (Ubuntu/CentOS)', 'Bash', 'CI/CD'],
    security: ['Network Security', 'OWASP Top 10', 'Wireshark', 'Nmap', 'Cryptography basics'],
    tools: ['Git', 'VS Code', 'Neovim', 'Postman', 'Figma']
  },

  projects: [
    {
      name: 'config-files',
      description: 'Personal dotfiles & development environment setup scripts',
      stack: ['Bash', 'YAML', 'Linux'],
      url: 'https://github.com/zali-dev/config-files'
    },
    {
      name: 'simple-port-scanner',
      description: 'Educational TCP port scanner with basic evasion techniques',
      stack: ['Python', 'Socket', 'Threading'],
      url: 'https://github.com/zali-dev/simple-port-scanner'
    }
  ],

  contact: {
    email: 'z.devops19@proton.me',
    github: 'github.com/zali-dev',
    telegram: 't.me/zalina_devops'
  },

  easterEggs: {
    matrix: 'Wake up, Neo... The Matrix has you...',
    coffee: '☕ Converting caffeine to code since 2024',
    sudo: 'Permission denied: You are not root. Nice try though ;)',
    hack: 'Hacking the mainframe... Just kidding. But nice curiosity!'
  }
};