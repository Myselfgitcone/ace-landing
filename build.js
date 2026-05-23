const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const d = new Date();
const date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const out = html.replace('__BUILD_DATE__', date);
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', out);
console.log('Built with date:', date);
