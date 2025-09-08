const fs = require('fs');
const path = require('path');

// Read the generated stats
const statsSvg = fs.readFileSync('./stats.svg', 'utf8');
const langsSvg = fs.readFileSync('./top-langs.svg', 'utf8');

// Generate README section
const statsSection = `
<p align="center">
  <a href="https://github.com/anuraghazra/github-readme-stats">
    <img src="./top-langs.svg" alt="Top Languages">
  </a>
</p>

<p align="center">
  <a href="https://github.com/anuraghazra/github-readme-stats">
    <img src="./stats.svg" alt="GitHub Stats">
  </a>
</p>
`;

// Update README.md
const readmePath = '../README.md';
const readmeContent = fs.readFileSync(readmePath, 'utf8');

// Replace the stats section
const updatedContent = readmeContent.replace(
  /<p align="center">\s*<a href="https:\/\/github\.com\/anuraghazra\/github-readme-stats">\s*<img src="https:\/\/github-stats-git-main-m3dkatas-projects\.vercel\.app\/api\/top-langs\/\?username=m3dkata&layout=compact&theme=synthwave.*?<\/a>\s*<\/p>\s*<p align="center">\s*<a href="https:\/\/github\.com\/anuraghazra\/github-readme-stats">\s*<img src="https:\/\/github-stats-git-main-m3dkatas-projects\.vercel\.app\/api\/\?username=m3dkata&show_icons=true&theme=synthwave.*?<\/a>\s*<\/p>/s,
  statsSection
);

fs.writeFileSync(readmePath, updatedContent);
console.log('README.md updated successfully!');
